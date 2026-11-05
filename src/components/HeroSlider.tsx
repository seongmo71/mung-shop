import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface HeroSliderProps {
  onOpenReview: () => void;
  onOpenPoints: () => void;
  onOpenMembership: () => void;
  onSelectCategory: (catId: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onOpenReview,
  onOpenPoints,
  onOpenMembership,
  onSelectCategory,
}) => {
  return (
    <section id="hero" className="w-full flex flex-col select-none">
      {/* ─────────────────────────────────────────────────────────────
          1. 상단 배너: 가입 첫 결제 5% 할인 혜택 (모델 1)
         ───────────────────────────────────────────────────────────── */}
      <div className="relative w-full bg-[#B35336] text-white overflow-hidden py-12 lg:py-16 border-b border-[#9A3F25]">
        {/* Subtle background glow */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-200 via-transparent to-black" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          {/* Left Text Content */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-amber-200 uppercase font-sans-kr flex items-center justify-center lg:justify-start gap-2">
              <span className="w-6 h-[1px] bg-amber-200/60 inline-block"></span>
              THE FINEST FARM-TO-BOWL PET SHOP
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-kr font-bold leading-[1.3] tracking-tight drop-shadow-sm">
              가입후 첫 결제시<br />
              <span className="text-amber-100">구매금액의 5% 즉시 할인!</span>
            </h1>

            <p className="text-sm sm:text-base text-amber-100/90 font-sans-kr leading-relaxed">
              회원 등급혜택<br />
              지금 바로 확인해 주세요
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={onOpenMembership}
                className="px-7 py-3 bg-white text-[#B35336] font-semibold text-sm rounded-full shadow-md hover:bg-amber-50 active:scale-95 transition-all cursor-pointer font-sans-kr"
              >
                회원 등록
              </button>
              <button
                onClick={() => {
                  onSelectCategory('toys');
                  document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-7 py-3 border border-white/80 text-white font-medium text-sm rounded-full hover:bg-white/10 active:scale-95 transition-all cursor-pointer font-sans-kr"
              >
                DOG TOYS
              </button>
            </div>
          </div>

          {/* Right Visual Frame (모델 1) */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative w-full max-w-md lg:max-w-lg aspect-[4/3] sm:aspect-[16/11] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/20 group">
              <img
                src="/assets/aistudio/hero_model_1.jpg"
                alt="멍득템 펫샵 매장과 반려견 모델 1"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              {/* Woof! Badge */}
              <div className="absolute top-4 left-4 bg-[#F5B842] text-[#2C2420] text-xs font-extrabold px-3 py-1.5 rounded-full shadow-md rotate-[-8deg] flex items-center gap-1">
                <span>Woof!</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Circular Pawfetch Stamp Badge */}
            <div className="hidden sm:flex absolute -bottom-4 -right-2 items-center justify-center w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-[#F5B842] text-[#2C2420] p-1.5 shadow-xl rotate-[12deg] hover:rotate-0 transition-transform cursor-pointer select-none z-20">
              <div className="w-full h-full rounded-full border border-dashed border-[#2C2420]/50 flex flex-col items-center justify-center p-1 text-center">
                <span className="text-[7px] uppercase tracking-wider font-extrabold text-[#593E10]">FOR HAPPY DOGS</span>
                <span className="text-[10px] font-black tracking-tight font-serif-kr">PAWFETCH</span>
                <span className="text-[8px] font-serif font-bold italic">Pet Co.</span>
                <span className="text-[6.5px] font-semibold text-[#593E10]">MADE WITH LOVE</span>
                <div className="w-2.5 h-[1px] bg-[#2C2420]/40 my-0.5" />
                <span className="text-[6px] tracking-widest font-bold">★ NATURAL ★</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. 하단 배너: 상품후기 포인트 적립 (모델 2)
         ───────────────────────────────────────────────────────────── */}
      <div className="relative w-full bg-[#9E4528] text-white overflow-hidden py-12 lg:py-16 border-b border-[#87361D]">
        {/* Subtle background glow */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-300 via-transparent to-black" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          {/* Left Visual Frame (모델 2) */}
          <div className="lg:col-span-6 relative flex justify-center items-center order-2 lg:order-1">
            <div className="relative w-full max-w-md lg:max-w-lg aspect-[4/3] sm:aspect-[16/11] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/20 group">
              <img
                src="/assets/aistudio/hero_model_2.png"
                alt="멍득템 가방을 멘 반려견 모델 2"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              {/* Let's go! Badge */}
              <div className="absolute top-4 left-4 bg-[#FF758F] text-white text-xs font-extrabold px-3 py-1.5 rounded-full shadow-md rotate-[-8deg]">
                Let&apos;s go!
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Text Content with Paw Watermark */}
          <div className="lg:col-span-6 space-y-6 lg:pl-6 text-center lg:text-left order-1 lg:order-2 relative">
            {/* Center Heart Paw Decorative Stamp */}
            <div className="hidden lg:block absolute -top-8 right-8 w-28 h-28 opacity-25 pointer-events-none">
              <svg viewBox="0 0 100 100" fill="currentColor" className="text-white">
                <circle cx="28" cy="28" r="14" />
                <circle cx="50" cy="18" r="13" />
                <circle cx="72" cy="28" r="14" />
                <circle cx="15" cy="50" r="12" />
                <path d="M50 48 C 30 35, 10 55, 30 75 L 50 95 L 70 75 C 90 55, 70 35, 50 48 Z" />
              </svg>
            </div>

            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-amber-200 uppercase font-sans-kr flex items-center justify-center lg:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-300" />
              MUNG-DEUKTEM REWARD POINT
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-kr font-bold leading-[1.3] tracking-tight drop-shadow-sm">
              상품후기<br />
              <span className="text-amber-100">포인트 적립</span>
            </h2>

            <p className="text-sm sm:text-base text-amber-100/90 font-sans-kr leading-relaxed">
              상품후기 작성시 포인트 샵에서 쓸 수 있는 포인트 적립<br />
              <span className="text-xs text-amber-200">사진 후기 500P · 일반 후기 300P 즉시 지급</span>
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={onOpenReview}
                className="px-7 py-3 bg-white text-[#9E4528] font-semibold text-sm rounded-full shadow-md hover:bg-amber-50 active:scale-95 transition-all cursor-pointer font-sans-kr flex items-center gap-1.5"
              >
                <span>후기 작성</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenPoints}
                className="px-7 py-3 border border-white/80 text-white font-medium text-sm rounded-full hover:bg-white/10 active:scale-95 transition-all cursor-pointer font-sans-kr"
              >
                내 포인트 적립금
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
