import React, { useState } from 'react';
import { CartItem } from '../types/petshop';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, CheckCircle2, Truck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  userPoints: number;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onUsePoints: (points: number) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  userPoints,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onUsePoints,
}) => {
  const [applyDiscount, setApplyDiscount] = useState(true);
  const [usePointsValue, setUsePointsValue] = useState(0);
  const [isOrdered, setIsOrdered] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const rawSubtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const memberDiscount = applyDiscount ? Math.floor(rawSubtotal * 0.05) : 0;
  const freeShippingThreshold = 50000;
  const isFreeShipping = rawSubtotal >= freeShippingThreshold;
  const shippingFee = rawSubtotal > 0 && !isFreeShipping ? 3000 : 0;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - rawSubtotal);

  const maxPointsApplicable = Math.min(userPoints, Math.max(0, rawSubtotal - memberDiscount));
  const finalTotal = Math.max(0, rawSubtotal - memberDiscount + shippingFee - usePointsValue);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    const orderId = 'MD-' + Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(orderId);
    setIsOrdered(true);
    if (usePointsValue > 0) {
      onUsePoints(usePointsValue);
    }
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleResetOrder = () => {
    setIsOrdered(false);
    onClearCart();
    setUsePointsValue(0);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans-kr">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col justify-between border-l border-[#E2D6C6]">
          {/* Header */}
          <div className="p-6 border-b border-[#E8DFD3] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <span className="text-xl">🛍️</span>
              <h3 className="text-lg font-bold text-[#2C2420] font-sans-kr">
                장바구니 ({cart.reduce((n, i) => n + i.quantity, 0)})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#F2ECE3] text-[#7A6C5F] hover:text-[#2C2420] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Order Completed View */}
          {isOrdered ? (
            <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-4 overflow-y-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-serif-kr font-bold text-[#2C2420]">
                주문이 성공적으로 접수되었습니다!
              </h4>
              <p className="text-xs text-[#8A7968] font-mono font-bold bg-[#F2ECE3] px-3 py-1 rounded-full">
                주문번호: {orderNumber}
              </p>
              <p className="text-xs text-[#7A6C5F] leading-relaxed max-w-xs">
                멍득템 전용 신선 안심 박스로 당일 출고 준비를 시작합니다. 구매 금액의 1%가 배송 완료 후 자동 적립됩니다.
              </p>
              <div className="w-full bg-white rounded-2xl p-4 border border-[#E8DFD3] text-left text-xs space-y-2 mt-4">
                <div className="flex justify-between text-[#8A7968]">
                  <span>최종 결제 금액</span>
                  <span className="font-bold text-[#B35336] text-sm tabular-nums">
                    {finalTotal.toLocaleString()}원
                  </span>
                </div>
                {memberDiscount > 0 && (
                  <div className="flex justify-between text-emerald-600">
                    <span>가입 첫 결제 5% 할인</span>
                    <span>-{memberDiscount.toLocaleString()}원</span>
                  </div>
                )}
                {usePointsValue > 0 && (
                  <div className="flex justify-between text-amber-600">
                    <span>적립금 사용</span>
                    <span>-{usePointsValue.toLocaleString()}P</span>
                  </div>
                )}
                <div className="flex justify-between text-[#8A7968]">
                  <span>배송 방식</span>
                  <span>멍득템 안심 신선 직배송</span>
                </div>
              </div>
              <button
                onClick={handleResetOrder}
                className="w-full py-3.5 bg-[#B35336] text-white font-bold text-sm rounded-full shadow-md hover:bg-[#9E4528] transition-colors cursor-pointer"
              >
                쇼핑 계속하기
              </button>
            </div>
          ) : (
            <>
              {/* Free Shipping Meter */}
              <div className="bg-[#F4ECE1] px-6 py-3 border-b border-[#E8DFD3]">
                <div className="flex items-center justify-between text-xs text-[#5C4F47] mb-1.5 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-[#B35336]" />
                    {isFreeShipping ? '무료배송 혜택 적용 완료!' : `50,000원 이상 무료배송`}
                  </span>
                  {!isFreeShipping && (
                    <span className="font-bold text-[#B35336] tabular-nums">
                      {remainingForFreeShipping.toLocaleString()}원 추가 시 무료
                    </span>
                  )}
                </div>
                <div className="w-full h-1.5 bg-[#E0D5C7] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#B35336] transition-all duration-500 rounded-full"
                    style={{ width: `${Math.min(100, (rawSubtotal / freeShippingThreshold) * 100)}%` }}
                  />
                </div>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-3 text-[#8A7968]">
                    <div className="w-16 h-16 rounded-full bg-[#F2ECE3] flex items-center justify-center text-2xl">
                      🐾
                    </div>
                    <p className="text-sm font-medium">장바구니가 비어 있습니다.</p>
                    <p className="text-xs text-[#A89A8A]">
                      멍득템의 특별한 간식과 용품을 담아보세요!
                    </p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="bg-white rounded-2xl p-4 border border-[#EAE2D7] shadow-xs flex gap-3.5 items-center"
                    >
                      {/* Thumbnail */}
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#F7F3EE] shrink-0 border border-[#EAE2D7]">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Detail */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs sm:text-sm font-semibold text-[#2C2420] line-clamp-1">
                          {item.product.name}
                        </h4>
                        <div className="text-xs text-[#B35336] font-bold mt-0.5 tabular-nums">
                          {item.product.price.toLocaleString()}원
                        </div>

                        {/* Quantity Stepper */}
                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex items-center border border-[#E0D5C7] rounded-lg bg-[#FAF7F2] overflow-hidden">
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                              className="p-1 hover:bg-[#EAE2D7] text-[#4A3E38] transition-colors cursor-pointer"
                              aria-label="수량 감소"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2.5 text-xs font-semibold tabular-nums text-[#2C2420]">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                              className="p-1 hover:bg-[#EAE2D7] text-[#4A3E38] transition-colors cursor-pointer"
                              aria-label="수량 증가"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="text-[#A89A8A] hover:text-rose-500 p-1 transition-colors cursor-pointer"
                            aria-label="상품 삭제"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Bottom Summary & Checkout */}
              {cart.length > 0 && (
                <div className="p-6 bg-white border-t border-[#E8DFD3] space-y-4">
                  {/* Member 5% discount toggle */}
                  <div className="bg-[#FAF7F2] p-3 rounded-xl border border-[#E8DFD3] flex items-center justify-between text-xs">
                    <label className="flex items-center gap-2 cursor-pointer font-medium text-[#4A3E38]">
                      <input
                        type="checkbox"
                        checked={applyDiscount}
                        onChange={(e) => setApplyDiscount(e.target.checked)}
                        className="rounded accent-[#B35336] w-4 h-4 cursor-pointer"
                      />
                      <span>가입 첫 결제 5% 즉시 할인 적용</span>
                    </label>
                    <span className="font-bold text-emerald-600 tabular-nums">
                      -{memberDiscount.toLocaleString()}원
                    </span>
                  </div>

                  {/* Points Redemption Option */}
                  {userPoints > 0 && (
                    <div className="bg-amber-50/70 p-3 rounded-xl border border-amber-200/80 text-xs space-y-2">
                      <div className="flex items-center justify-between text-amber-900 font-medium">
                        <span>보유 적립금 (잔액: {userPoints.toLocaleString()}P)</span>
                        <button
                          type="button"
                          onClick={() => setUsePointsValue(usePointsValue > 0 ? 0 : maxPointsApplicable)}
                          className="text-[11px] underline font-bold cursor-pointer text-[#B35336]"
                        >
                          {usePointsValue > 0 ? '사용 취소' : '전액 사용'}
                        </button>
                      </div>
                      {usePointsValue > 0 && (
                        <div className="flex justify-between text-amber-700 font-bold">
                          <span>적립금 차감</span>
                          <span>-{usePointsValue.toLocaleString()}원</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Pricing Breakdown */}
                  <div className="space-y-1.5 text-xs text-[#7A6C5F] pt-1">
                    <div className="flex justify-between">
                      <span>상품 금액</span>
                      <span className="tabular-nums">{rawSubtotal.toLocaleString()}원</span>
                    </div>
                    {memberDiscount > 0 && (
                      <div className="flex justify-between text-emerald-600">
                        <span>5% 회원 할인</span>
                        <span className="tabular-nums">-{memberDiscount.toLocaleString()}원</span>
                      </div>
                    )}
                    {usePointsValue > 0 && (
                      <div className="flex justify-between text-amber-700">
                        <span>포인트 사용</span>
                        <span className="tabular-nums">-{usePointsValue.toLocaleString()}원</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>배송비</span>
                      <span className="tabular-nums">
                        {shippingFee === 0 ? '무료' : `${shippingFee.toLocaleString()}원`}
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline pt-2 border-t border-[#E8DFD3] text-sm font-bold text-[#2C2420]">
                      <span className="text-base font-serif-kr">총 결제예정금액</span>
                      <span className="text-xl font-bold text-[#B35336] tabular-nums">
                        {finalTotal.toLocaleString()}원
                      </span>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <button
                    onClick={handleCheckout}
                    className="w-full py-4 bg-[#B35336] hover:bg-[#9E4528] active:scale-[0.99] text-white font-bold text-sm rounded-full shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>주문 결제하기 ({finalTotal.toLocaleString()}원)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#8A7968]">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>안심 결제 · 신선 포장 배송 보장</span>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
