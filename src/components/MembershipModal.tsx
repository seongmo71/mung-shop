import React, { useState } from 'react';
import { X, Sparkles, Check, Crown, Gift, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

interface MembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPoints: () => void;
}

export const MembershipModal: React.FC<MembershipModalProps> = ({
  isOpen,
  onClose,
  onOpenPoints,
}) => {
  const [claimed, setClaimed] = useState(false);

  if (!isOpen) return null;

  const handleClaim = () => {
    setClaimed(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 font-sans-kr animate-in fade-in">
      <div className="relative w-full max-w-lg bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#E2D6C6] overflow-hidden">
        {/* Header */}
        <div className="bg-[#B35336] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">👑</span>
            <div>
              <h3 className="text-lg font-bold font-serif-kr">멍득템 회원 등급 &amp; 혜택</h3>
              <p className="text-xs text-amber-200">
                가입 후 첫 결제 시 구매금액 5% 즉시 할인!
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Welcome Coupon Card */}
          <div className="bg-gradient-to-r from-[#FFF8EE] to-[#FCEEE9] border border-[#F3DDD5] rounded-2xl p-5 shadow-xs flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[11px] font-extrabold text-[#B35336] uppercase tracking-wider">
                NEW MEMBER WELCOME
              </span>
              <h4 className="text-xl font-black text-[#2C2420] font-serif-kr">
                첫 결제 5% 즉시 할인 쿠폰
              </h4>
              <p className="text-xs text-[#7A6C5F]">
                장바구니 담긴 모든 품목 금액 자동 할인
              </p>
            </div>
            <button
              onClick={handleClaim}
              disabled={claimed}
              className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm cursor-pointer ${
                claimed
                  ? 'bg-emerald-600 text-white cursor-default'
                  : 'bg-[#B35336] text-white hover:bg-[#9E4528]'
              }`}
            >
              {claimed ? '발급 완료 ✓' : '쿠폰 받기'}
            </button>
          </div>

          {/* Membership Tier Cards */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold text-[#4A3E38] uppercase tracking-wider">
              멍득템 멤버십 등급 체계
            </h5>

            {/* Tier 1: Puppy Club */}
            <div className="bg-white p-4 rounded-2xl border border-[#E8DFD3] space-y-1.5 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#B35336] flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 fill-[#B35336]" />
                  퍼피 클럽 (신규 가입 고객)
                </span>
                <span className="text-[10px] bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded">
                  현재 회원님 등급
                </span>
              </div>
              <p className="text-xs text-[#5C4F47]">
                · 첫 결제 5% 즉시 할인 + 웰컴 3,000P 지급<br />
                · 포토 리뷰 작성 시 건당 500P 무제한 적립
              </p>
            </div>

            {/* Tier 2: Gold Dog */}
            <div className="bg-white p-4 rounded-2xl border border-[#E8DFD3] space-y-1.5 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#2C2420] flex items-center gap-1.5">
                  <Crown className="w-3.5 h-3.5 text-amber-500" />
                  골드 도그 (누적 20만원 이상)
                </span>
                <span className="text-[11px] text-[#8A7968]">상시 3% 할인</span>
              </div>
              <p className="text-xs text-[#5C4F47]">
                · 매월 무료배송 쿠폰 2매 + 반려견 생일 간식 기프트 박스 증정
              </p>
            </div>

            {/* Tier 3: VIP Bark */}
            <div className="bg-white p-4 rounded-2xl border border-[#E8DFD3] space-y-1.5 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#2C2420] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#B35336]" />
                  VIP 멍스타 (누적 50만원 이상)
                </span>
                <span className="text-[11px] text-[#8A7968]">상시 6% 할인</span>
              </div>
              <p className="text-xs text-[#5C4F47]">
                · 평생 무조건 무료배송 + 수제 간식 신제품 사전 체험단 자동 선정
              </p>
            </div>
          </div>

          {/* Action */}
          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenPoints();
              }}
              className="flex-1 py-3 border border-[#D5C6B5] hover:bg-white text-[#4A3E38] text-xs font-semibold rounded-full transition-colors cursor-pointer"
            >
              내 적립금 현황 확인
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-3 bg-[#B35336] text-white hover:bg-[#9E4528] text-xs font-bold rounded-full transition-colors cursor-pointer shadow-md"
            >
              확인 완료
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
