import React from 'react';
import { PointHistoryItem } from '../types/petshop';
import { X, Gift, Sparkles, ArrowRight, ShieldCheck, History } from 'lucide-react';

interface PointsModalProps {
  isOpen: boolean;
  onClose: () => void;
  userPoints: number;
  history: PointHistoryItem[];
  onOpenReview: () => void;
}

export const PointsModal: React.FC<PointsModalProps> = ({
  isOpen,
  onClose,
  userPoints,
  history,
  onOpenReview,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 font-sans-kr animate-in fade-in">
      <div className="relative w-full max-w-md bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#E2D6C6] overflow-hidden">
        {/* Header */}
        <div className="bg-[#B35336] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">💰</span>
            <div>
              <h3 className="text-lg font-bold font-serif-kr">내 포인트 적립금</h3>
              <p className="text-xs text-amber-200">
                1P = 1원으로 결제 시 언제든 현금처럼 사용 가능
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
        <div className="p-6 space-y-5">
          {/* Points Balance Card */}
          <div className="bg-gradient-to-br from-[#2C2420] to-[#1A1412] text-white rounded-2xl p-6 shadow-md relative overflow-hidden">
            <div className="absolute top-2 right-2 opacity-10">
              <span className="text-7xl">🐾</span>
            </div>
            <div className="relative z-10 space-y-2">
              <span className="text-xs text-amber-300 font-semibold uppercase tracking-wider">
                AVAILABLE POINTS
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white tabular-nums">
                  {userPoints.toLocaleString()}
                </span>
                <span className="text-lg font-bold text-amber-300">P</span>
              </div>
              <p className="text-xs text-[#A89A8A]">
                사용 기한: 최종 적립일로부터 1년
              </p>
            </div>
          </div>

          {/* Quick Point Rule Highlights */}
          <div className="bg-white rounded-2xl p-4 border border-[#E8DFD3] space-y-2.5 text-xs text-[#5C4F47]">
            <div className="flex items-center gap-2 font-bold text-[#2C2420] pb-1 border-b border-[#F0E9DF]">
              <Sparkles className="w-3.5 h-3.5 text-[#B35336]" />
              <span>포인트 적립 혜택 요약</span>
            </div>
            <div className="flex justify-between">
              <span>사진 상품후기 작성</span>
              <span className="font-bold text-[#B35336]">+500P / 건</span>
            </div>
            <div className="flex justify-between">
              <span>일반 텍스트 후기 작성</span>
              <span className="font-bold text-[#B35336]">+300P / 건</span>
            </div>
            <div className="flex justify-between">
              <span>신규 회원 가입 축하</span>
              <span className="font-bold text-[#B35336]">+3,000P</span>
            </div>
            <div className="flex justify-between">
              <span>구매 금액 기본 적립</span>
              <span className="font-bold text-[#B35336]">결제액의 1%</span>
            </div>
          </div>

          {/* Points History */}
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#4A3E38]">
              <History className="w-3.5 h-3.5 text-[#8A7968]" />
              <span>최근 적립 및 사용 내역</span>
            </div>
            <div className="bg-white rounded-2xl border border-[#E8DFD3] p-3 space-y-2 max-h-48 overflow-y-auto">
              {history.length === 0 ? (
                <p className="text-xs text-center text-[#8A7968] py-3">내역이 없습니다.</p>
              ) : (
                history.map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-1.5 border-b border-[#F7F3EE] last:border-0 text-xs">
                    <div>
                      <p className="font-medium text-[#2C2420]">{item.description}</p>
                      <span className="text-[10px] text-[#A89A8A] tabular-nums">{item.date}</span>
                    </div>
                    <span
                      className={`font-bold tabular-nums ${
                        item.type === 'earn' ? 'text-[#B35336]' : 'text-stone-600'
                      }`}
                    >
                      {item.type === 'earn' ? `+${item.amount.toLocaleString()}P` : `-${item.amount.toLocaleString()}P`}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Action */}
          <button
            onClick={() => {
              onClose();
              onOpenReview();
            }}
            className="w-full py-3.5 bg-[#B35336] hover:bg-[#9E4528] text-white font-bold text-sm rounded-full shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>후기 쓰고 500P 더 받기</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
