import React from 'react';
import { Product } from '../types/petshop';
import { Sparkles, ShoppingBag, Check } from 'lucide-react';

interface NewMemberDealsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onOpenProductDetail: (product: Product) => void;
}

export const NewMemberDeals: React.FC<NewMemberDealsProps> = ({
  products,
  onAddToCart,
  onOpenProductDetail,
}) => {
  const dealProducts = products.filter((p) => p.isNewMemberDeal);
  const jerkyProduct = dealProducts.find((p) => p.id === 'homemade-raw-jerky-set') || products[2];
  const ballProduct = dealProducts.find((p) => p.id === 'organic-knitting-ball') || products[3];

  return (
    <section id="deals" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#EAE2D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Matching Image 3) */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B35336] tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WELCOME SPECIAL BENEFIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-kr font-bold text-[#2C2420] tracking-tight">
            신규회원 특가
          </h2>
          <p className="text-sm sm:text-base text-[#7A6C5F] font-sans-kr">
            신규 가입 당일 혜택
          </p>
        </div>

        {/* Two Featured Pastel Cards (Matching Image 3 Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {/* Card 1: 100% Domestic Raw Treats */}
          <div className="group rounded-3xl overflow-hidden bg-[#FCEEE9] border border-[#F3DDD5] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
            {/* Image Container with organic warm background */}
            <div 
              onClick={() => jerkyProduct && onOpenProductDetail(jerkyProduct)}
              className="relative aspect-[4/3] bg-[#EBD8CE] overflow-hidden cursor-pointer"
            >
              <img
                src="/assets/aistudio/deal_jerky.jpg"
                alt="수제 간식 - 100% 국내 제조"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#B35336] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                신규 특가 33% OFF
              </div>
            </div>

            {/* Content & Action */}
            <div className="p-8 text-center flex-1 flex flex-col justify-between items-center space-y-4">
              <div className="space-y-1.5">
                <p className="text-xs sm:text-sm font-medium tracking-wider text-[#8A7968] uppercase font-sans-kr">
                  100% 국내 제조
                </p>
                <h3 className="text-2xl sm:text-3xl font-serif-kr font-bold text-[#2C2420]">
                  수제 간식
                </h3>
                <p className="text-xs sm:text-sm text-[#7A6C5F] line-clamp-2 max-w-md">
                  신선한 무항생제 오리안심 & 소간 져키 (70도 저온 16시간 슬로우 건조)
                </p>
                <div className="pt-2 flex items-baseline justify-center gap-2">
                  <span className="text-xl sm:text-2xl font-bold text-[#B35336] tabular-nums">
                    {jerkyProduct?.price.toLocaleString()}원
                  </span>
                  <span className="text-sm text-[#A89A8A] line-through tabular-nums">
                    {jerkyProduct?.originalPrice?.toLocaleString()}원
                  </span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => jerkyProduct && onAddToCart(jerkyProduct)}
                  className="px-8 py-3 bg-[#1F1916] text-white hover:bg-[#B35336] active:scale-95 text-xs sm:text-sm font-bold tracking-wider rounded-full shadow-md transition-all cursor-pointer font-sans-kr flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>SHOP NOW</span>
                </button>
                <button
                  onClick={() => jerkyProduct && onOpenProductDetail(jerkyProduct)}
                  className="px-4 py-3 border border-[#D5C6B5] hover:bg-white text-[#4A3E38] text-xs sm:text-sm font-medium rounded-full transition-colors cursor-pointer"
                >
                  상세보기
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Knitting Ball Toy */}
          <div className="group rounded-3xl overflow-hidden bg-[#FCEEE9] border border-[#F3DDD5] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
            {/* Image Container */}
            <div 
              onClick={() => ballProduct && onOpenProductDetail(ballProduct)}
              className="relative aspect-[4/3] bg-[#EBD8CE] overflow-hidden cursor-pointer"
            >
              <img
                src="/assets/aistudio/deal_knitting_ball.jpg"
                alt="니팅볼 - 무독성 무형광염료"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#B35336] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                신규 특가 36% OFF
              </div>
            </div>

            {/* Content & Action */}
            <div className="p-8 text-center flex-1 flex flex-col justify-between items-center space-y-4">
              <div className="space-y-1.5">
                <p className="text-xs sm:text-sm font-medium tracking-wider text-[#8A7968] uppercase font-sans-kr">
                  무독성 무형광염료
                </p>
                <h3 className="text-2xl sm:text-3xl font-serif-kr font-bold text-[#2C2420]">
                  니팅볼
                </h3>
                <p className="text-xs sm:text-sm text-[#7A6C5F] line-clamp-2 max-w-md">
                  100% 천연 유기농 순면 털실 치석 케어 & 노즈워크 플레이볼
                </p>
                <div className="pt-2 flex items-baseline justify-center gap-2">
                  <span className="text-xl sm:text-2xl font-bold text-[#B35336] tabular-nums">
                    {ballProduct?.price.toLocaleString()}원
                  </span>
                  <span className="text-sm text-[#A89A8A] line-through tabular-nums">
                    {ballProduct?.originalPrice?.toLocaleString()}원
                  </span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => ballProduct && onAddToCart(ballProduct)}
                  className="px-8 py-3 bg-[#1F1916] text-white hover:bg-[#B35336] active:scale-95 text-xs sm:text-sm font-bold tracking-wider rounded-full shadow-md transition-all cursor-pointer font-sans-kr flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>SHOP NOW</span>
                </button>
                <button
                  onClick={() => ballProduct && onOpenProductDetail(ballProduct)}
                  className="px-4 py-3 border border-[#D5C6B5] hover:bg-white text-[#4A3E38] text-xs sm:text-sm font-medium rounded-full transition-colors cursor-pointer"
                >
                  상세보기
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Small trust point banner */}
        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-[#EAE2D7] text-center text-xs text-[#7A6C5F] font-sans-kr">
          <div className="flex items-center justify-center gap-2 py-2">
            <Check className="w-4 h-4 text-[#B35336]" />
            <span>신규 가입 즉시 5% 자동 할인 적용</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-2">
            <Check className="w-4 h-4 text-[#B35336]" />
            <span>당일 오후 2시 이전 주문 시 오늘 출발</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-2">
            <Check className="w-4 h-4 text-[#B35336]" />
            <span>구매 후 사진 리뷰 작성 시 500P 적립</span>
          </div>
        </div>
      </div>
    </section>
  );
};
