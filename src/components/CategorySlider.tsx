import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CATEGORIES } from '../data/mockData';

interface CategorySliderProps {
  selectedCategory: string;
  onSelectCategory: (catId: string) => void;
}

// Category visual cards mapping (using dog portraits matching Image 4)
const CATEGORY_CARDS = [
  {
    id: 'food',
    name: '강아지 사료',
    dogBreed: '프렌치 불독',
    bgColor: 'bg-[#B4D0E7]',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=500&q=80',
    description: '건식/습식/자연식'
  },
  {
    id: 'treats',
    name: '강아지 간식',
    dogBreed: '골든 리트리버',
    bgColor: 'bg-[#E5AA70]',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=500&q=80',
    description: '수제져키/덴탈껌/트릿'
  },
  {
    id: 'supplements',
    name: '강아지 영양제',
    dogBreed: '잉글리쉬 코커 스패니얼',
    bgColor: 'bg-[#EFA89A]',
    image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=500&q=80',
    description: '관절/유산균/눈건강'
  },
  {
    id: 'supplies',
    name: '강아지 용품',
    dogBreed: '골든 퍼피',
    bgColor: 'bg-[#F2BA49]',
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=500&q=80',
    description: '식기/하네스/방석'
  },
  {
    id: 'hygiene',
    name: '배변 / 위생',
    dogBreed: '아이리쉬 세터',
    bgColor: 'bg-[#73A580]',
    image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=500&q=80',
    description: '배변패드/친환경 샴푸'
  },
  {
    id: 'apparel',
    name: '의류 / 악세서리',
    dogBreed: '보더 콜리',
    bgColor: 'bg-[#E7D6C4]',
    image: 'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?auto=format&fit=crop&w=500&q=80',
    description: '케이프/스카프/산책룩'
  },
  {
    id: 'toys',
    name: '장난감 / 노즈워크',
    dogBreed: '비숑 프리제',
    bgColor: 'bg-[#F4A8B9]',
    image: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=500&q=80',
    description: '니팅볼/터그/퍼즐'
  }
];

export const CategorySlider: React.FC<CategorySliderProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleClickCategory = (catId: string) => {
    onSelectCategory(catId);
    const catalogElem = document.getElementById('catalog');
    if (catalogElem) {
      catalogElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#EAE2D7] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title & Arrow Nav Buttons (Matching Image 4) */}
        <div className="flex items-end justify-between mb-8 sm:mb-10">
          <div className="space-y-1">
            <h2 className="text-3xl sm:text-4xl font-serif-kr font-bold text-[#2C2420] tracking-tight">
              카테고리별 상품
            </h2>
            <p className="text-sm sm:text-base text-[#7A6C5F] font-sans-kr">
              빠르게 원하는 제품을 찾아보세요
            </p>
          </div>

          {/* Left/Right Round Arrow Navigation (Matching Image 4) */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleScroll('left')}
              className="w-10 h-10 rounded-full border border-[#D8CDBC] hover:border-[#B35336] bg-white hover:bg-[#FAF7F2] text-[#4A3E38] hover:text-[#B35336] flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
              aria-label="이전 카테고리"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-10 h-10 rounded-full border border-[#D8CDBC] hover:border-[#B35336] bg-white hover:bg-[#FAF7F2] text-[#4A3E38] hover:text-[#B35336] flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
              aria-label="다음 카테고리"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Dog Cards Slider */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-none scroll-smooth snap-x select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {CATEGORY_CARDS.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <div
                key={cat.id}
                onClick={() => handleClickCategory(cat.id)}
                className={`snap-start shrink-0 w-44 sm:w-52 flex flex-col group cursor-pointer transition-transform duration-300 ${
                  isSelected ? 'scale-[1.02]' : 'hover:-translate-y-1'
                }`}
              >
                {/* Dog Portrait Card Container (Matching Image 4 rounded portrait style) */}
                <div
                  className={`w-full aspect-[4/5] rounded-2xl overflow-hidden relative shadow-sm border transition-all ${
                    isSelected
                      ? 'border-[#B35336] ring-2 ring-[#B35336]/30 shadow-md'
                      : 'border-[#E2D6C6] group-hover:border-[#B35336]'
                  }`}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-2 left-2 right-2 text-center text-[10px] text-white/90 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {cat.description}
                  </div>
                </div>

                {/* Category Label Below Card (Matching Image 4) */}
                <div className="mt-3 text-center">
                  <span
                    className={`text-sm sm:text-base font-medium font-sans-kr transition-colors ${
                      isSelected
                        ? 'text-[#B35336] font-bold underline underline-offset-4'
                        : 'text-[#2C2420] group-hover:text-[#B35336]'
                    }`}
                  >
                    {cat.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
