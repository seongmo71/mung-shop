import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Heart, ArrowRight } from 'lucide-react';

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
  const [currentSlide, setCurrentSlide] = useState<0 | 1>(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section 
      id="hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full bg-[#B35336] text-white overflow-hidden select-none transition-colors duration-700 min-h-[580px] lg:min-h-[640px] flex flex-col justify-between"
    >
      {/* Subtle organic background wave/glow */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-200 via-transparent to-black" />

      {/* Slide 1: Welcome 5% Discount (Image 2 - 1_3e2e1046.webp) */}
      {currentSlide === 0 && (
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10 animate-in fade-in duration-500">
          {/* Left Text Content */}
          <div className="lg:col-span-6 space-y-6 lg:pr-8 text-center lg:text-left">
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

          {/* Right Visual Frame */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative w-full max-w-md lg:max-w-lg aspect-[4/3] sm:aspect-[16/11] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/20 group">
              <img
                src="/assets/aistudio/1_3e2e1046.webp"
                alt="멍득템 펫샵 매장과 반려견"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-700"
              />
              {/* Woof! Badge */}
              <div className="absolute top-4 left-4 bg-[#F5B842] text-[#2C2420] text-xs font-extrabold px-3 py-1.5 rounded-full shadow-md rotate-[-8deg] flex items-center gap-1">
                <span>Woof!</span>
              </div>
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      )}

      {/* Slide 2: Review Points (Image 1 - 2_a5688296.jpg) */}
      {currentSlide === 1 && (
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10 animate-in fade-in duration-500">
          {/* Left Visual Frame */}
          <div className="lg:col-span-6 relative flex justify-center items-center order-2 lg:order-1">
            <div className="relative w-full max-w-md lg:max-w-lg aspect-[4/3] sm:aspect-[16/11] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/20 group">
              <img
                src="/assets/aistudio/2_a5688296.jpg"
                alt="멍득템 가방을 멘 반려견"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-left group-hover:scale-105 transition-transform duration-700"
              />
              {/* Let's go! Badge */}
              <div className="absolute top-4 left-4 bg-[#FF758F] text-white text-xs font-extrabold px-3 py-1.5 rounded-full shadow-md rotate-[-8deg]">
                Let&apos;s go!
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Text Content with Paw Watermark */}
          <div className="lg:col-span-6 space-y-6 lg:pl-8 text-center lg:text-left order-1 lg:order-2 relative">
            {/* Center Heart Paw Decorative Stamp */}
            <div className="hidden lg:block absolute -top-8 right-12 w-28 h-28 opacity-30 pointer-events-none">
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

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-kr font-bold leading-[1.3] tracking-tight drop-shadow-sm">
              상품후기<br />
              <span className="text-amber-100">포인트 적립</span>
            </h1>

            <p className="text-sm sm:text-base text-amber-100/90 font-sans-kr leading-relaxed">
              상품후기 작성시 포인트 샵에서 쓸 수 있는 포인트 적립<br />
              <span className="text-xs text-amber-200">사진 후기 500P · 일반 후기 300P 즉시 지급</span>
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={onOpenReview}
                className="px-7 py-3 bg-white text-[#B35336] font-semibold text-sm rounded-full shadow-md hover:bg-amber-50 active:scale-95 transition-all cursor-pointer font-sans-kr flex items-center gap-1.5"
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
      )}

      {/* Stepper Navigation Strip & Circular Seal Badge */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-6 flex items-end justify-between z-20">
        {/* Step Indicator (Matches STEP 01 - SNIFF / STEP 02 - CHASE in screenshot) */}
        <div className="flex items-center gap-6 text-xs sm:text-sm font-bold tracking-widest text-amber-100/80">
          <button
            onClick={() => setCurrentSlide(0)}
            className={`transition-all pb-1 cursor-pointer flex items-center gap-2 ${
              currentSlide === 0
                ? 'text-white border-b-2 border-white scale-105'
                : 'text-white/60 hover:text-white'
            }`}
          >
            <span>STEP 01 — SNIFF</span>
          </button>
          <span className="text-white/40">/</span>
          <button
            onClick={() => setCurrentSlide(1)}
            className={`transition-all pb-1 cursor-pointer flex items-center gap-2 ${
              currentSlide === 1
                ? 'text-white border-b-2 border-white scale-105'
                : 'text-white/60 hover:text-white'
            }`}
          >
            <span>STEP 02 — CHASE TRAIL</span>
          </button>
        </div>

        {/* Carousel Prev/Next Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? 1 : 0))}
            className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center backdrop-blur-sm transition-colors cursor-pointer"
            aria-label="이전 슬라이드"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? 1 : 0))}
            className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center backdrop-blur-sm transition-colors cursor-pointer"
            aria-label="다음 슬라이드"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Authentic Circular Pawfetch Stamp Badge (Yellow Seal from screenshots) */}
        <div className="hidden sm:flex relative items-center justify-center w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-[#F5B842] text-[#2C2420] p-1.5 shadow-xl rotate-[12deg] hover:rotate-0 transition-transform cursor-pointer select-none">
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
    </section>
  );
};
