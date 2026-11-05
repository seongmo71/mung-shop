import React, { useState } from 'react';
import { Product, Review } from '../types/petshop';
import { X, Star, ShoppingBag, Check, ShieldCheck, Heart, Truck, Gift } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  reviews: Review[];
  onOpenReview: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
  reviews,
  onOpenReview,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'info' | 'reviews'>('info');
  const [added, setAdded] = useState(false);

  if (!isOpen || !product) return null;

  const productReviews = reviews.filter((r) => r.productId === product.id);

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 font-sans-kr animate-in fade-in">
      <div className="relative w-full max-w-3xl bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#E2D6C6] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#4A3E38] hover:text-[#B35336] flex items-center justify-center shadow-sm transition-colors cursor-pointer"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Left: Product Image */}
          <div className="md:col-span-5 bg-[#F2ECE3] relative min-h-[300px] md:min-h-full flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-[#E8DFD3]">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full max-h-[360px] object-cover rounded-2xl shadow-md"
            />
            {product.discountRate && (
              <div className="absolute top-4 left-4 bg-[#B35336] text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                {product.discountRate}% OFF
              </div>
            )}
          </div>

          {/* Right: Details & Purchase Module */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              {/* Category & Tags */}
              <div className="flex items-center gap-2 text-xs font-semibold text-[#8A7968] uppercase font-sans-kr">
                <span>{product.categoryLabel}</span>
                {product.weightOrQuantity && (
                  <>
                    <span>·</span>
                    <span>{product.weightOrQuantity}</span>
                  </>
                )}
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-serif-kr font-bold text-[#2C2420] mt-1.5 leading-snug">
                {product.name}
              </h2>

              {/* Rating */}
              <div className="mt-2 flex items-center gap-2 text-xs text-[#7A6C5F]">
                <div className="flex items-center text-amber-500">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="ml-1 font-bold text-[#2C2420] tabular-nums">
                    {product.rating}
                  </span>
                </div>
                <span className="text-[#C2B7A8]">·</span>
                <span className="tabular-nums">리뷰 {product.reviewCount}개</span>
                <span className="text-[#C2B7A8]">·</span>
                <span className="text-[#B35336] font-medium">당일 출고 가능</span>
              </div>

              {/* Pricing */}
              <div className="mt-4 pt-4 border-t border-[#E8DFD3] flex items-baseline gap-2.5">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#B35336] tabular-nums">
                  {product.price.toLocaleString()}원
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-[#A89A8A] line-through tabular-nums">
                    {product.originalPrice.toLocaleString()}원
                  </span>
                )}
                <span className="text-xs bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded ml-1">
                  첫 구매시 5% 추가할인
                </span>
              </div>

              {/* Tabs: Info / Reviews */}
              <div className="mt-6 flex border-b border-[#E8DFD3]">
                <button
                  onClick={() => setActiveTab('info')}
                  className={`pb-2.5 px-4 text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                    activeTab === 'info'
                      ? 'border-b-2 border-[#B35336] text-[#B35336]'
                      : 'text-[#8A7968] hover:text-[#2C2420]'
                  }`}
                >
                  상품 특징
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`pb-2.5 px-4 text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                    activeTab === 'reviews'
                      ? 'border-b-2 border-[#B35336] text-[#B35336]'
                      : 'text-[#8A7968] hover:text-[#2C2420]'
                  }`}
                >
                  구매 후기 ({productReviews.length})
                </button>
              </div>

              {/* Tab 1: Info */}
              {activeTab === 'info' && (
                <div className="mt-4 space-y-3 text-xs sm:text-sm text-[#5C4F47] leading-relaxed">
                  <p>{product.description}</p>
                  {product.features && (
                    <ul className="space-y-1.5 pt-2">
                      {product.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs">
                          <Check className="w-4 h-4 text-[#B35336] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {/* Tab 2: Reviews */}
              {activeTab === 'reviews' && (
                <div className="mt-4 space-y-3 max-h-48 overflow-y-auto pr-1">
                  <div className="flex items-center justify-between pb-2 border-b border-[#F0E9DF]">
                    <span className="text-xs font-bold text-[#2C2420]">
                      생생한 고객 포토 &amp; 텍스트 후기
                    </span>
                    <button
                      onClick={() => {
                        onClose();
                        onOpenReview();
                      }}
                      className="text-xs text-[#B35336] font-bold underline cursor-pointer"
                    >
                      후기 작성 (+500P)
                    </button>
                  </div>
                  {productReviews.length === 0 ? (
                    <p className="text-xs text-[#8A7968] py-4 text-center">
                      아직 등록된 후기가 없습니다. 첫 후기를 작성하고 500P를 적립받으세요!
                    </p>
                  ) : (
                    productReviews.map((rev) => (
                      <div key={rev.id} className="p-3 bg-white rounded-xl border border-[#E8DFD3] space-y-1 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-[#2C2420]">
                            {rev.dogName} ({rev.dogBreed})
                          </span>
                          <div className="flex items-center text-amber-500">
                            {[...Array(rev.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-[#5C4F47] pt-1">{rev.comment}</p>
                        <div className="flex justify-between text-[10px] text-[#A89A8A] pt-1">
                          <span>{rev.author}</span>
                          <span>{rev.date}</span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[#E8DFD3] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#4A3E38]">주문 수량</span>
                <div className="flex items-center border border-[#D5C6B5] rounded-xl bg-white overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1.5 hover:bg-[#F2ECE3] text-[#4A3E38] cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-3 text-xs font-bold tabular-nums">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1.5 hover:bg-[#F2ECE3] text-[#4A3E38] cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleAdd}
                  className={`flex-1 py-3.5 rounded-full font-bold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    added
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#B35336] hover:bg-[#9E4528] active:scale-[0.99] text-white'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>장바구니에 담겼습니다!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>
                        {(product.price * quantity).toLocaleString()}원 장바구니 담기
                      </span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
