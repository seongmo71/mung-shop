import React from 'react';
import { Product } from '../types/petshop';
import { ChevronLeft, ChevronRight, ShoppingBag, Sparkles } from 'lucide-react';

interface FeaturedShowcaseProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onOpenProductDetail: (product: Product) => void;
}

export const FeaturedShowcase: React.FC<FeaturedShowcaseProps> = ({
  products,
  onAddToCart,
  onOpenProductDetail,
}) => {
  const royalCanin = products.find((p) => p.id === 'royal-canin-indoor-mini') || products[0];
  const honeyComb = products.find((p) => p.id === 'biref-honeycomb-chew') || products[1];

  return (
    <section id="popular" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#EAE2D7] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Matching Image 4 bottom and Image 6) */}
        <div className="flex items-end justify-between mb-8 sm:mb-12">
          <div className="space-y-1">
            <h2 className="text-3xl sm:text-4xl font-serif-kr font-bold text-[#2C2420] tracking-tight">
              지금 많이 찾는 상품
            </h2>
            <p className="text-sm sm:text-base text-[#7A6C5F] font-sans-kr">
              인기 상품을 지금 만나 보세요
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                const el = document.getElementById('catalog');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-10 h-10 rounded-full border border-[#D8CDBC] hover:border-[#B35336] bg-white text-[#4A3E38] hover:text-[#B35336] flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
              aria-label="이전 상품"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('catalog');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-10 h-10 rounded-full border border-[#D8CDBC] hover:border-[#B35336] bg-white text-[#4A3E38] hover:text-[#B35336] flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
              aria-label="다음 상품"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Two Signature Hero Cards (Matching Image 6 layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Royal Canin Mini Indoor Adult (Dark Espresso Theme) */}
          <div className="relative rounded-3xl overflow-hidden bg-[#1D1714] text-white p-8 sm:p-12 min-h-[380px] sm:min-h-[440px] flex flex-col justify-between shadow-lg group">
            {/* Background Image / Texture overlay */}
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity pointer-events-none">
              <img
                src="/assets/aistudio/5_d9f8e351.jpg"
                alt="로얄캐닌 사료"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-left"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1D1714] via-[#1D1714]/90 to-transparent pointer-events-none" />

            {/* Content Top */}
            <div className="relative z-10 max-w-md space-y-4">
              <span className="inline-block text-xs uppercase tracking-widest text-[#E5AA70] font-semibold">
                PREMIUM ADULT NUTRITION · 8.7KG
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif-kr font-bold leading-snug tracking-tight">
                로얄캐닌 독 미니<br />
                인도어 어덜트 8.7Kg<br />
                <span className="text-[#E5AA70]">소화기 건강</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#D1C5B8] leading-relaxed pt-1">
                실내 소형견 맞춤 L.I.P 고소화성 단백질 설계로 변 냄새와 양을 현저히 줄여줍니다.
              </p>
              <div className="pt-2 flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
                  {royalCanin.price.toLocaleString()}원
                </span>
                <span className="text-sm text-[#8F8071] line-through tabular-nums">
                  {royalCanin.originalPrice?.toLocaleString()}원
                </span>
              </div>
            </div>

            {/* Action Bottom */}
            <div className="relative z-10 pt-8 flex items-center gap-3">
              <button
                onClick={() => onAddToCart(royalCanin)}
                className="px-8 py-3 bg-white text-[#1D1714] hover:bg-[#FAF7F2] active:scale-95 font-semibold text-sm rounded-full shadow-md transition-all cursor-pointer font-sans-kr flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>구매 하기</span>
              </button>
              <button
                onClick={() => onOpenProductDetail(royalCanin)}
                className="px-5 py-3 border border-white/30 hover:border-white text-white/90 hover:text-white text-sm font-medium rounded-full transition-colors cursor-pointer"
              >
                상세 정보
              </button>
            </div>
          </div>

          {/* Card 2: Biref Honeycomb Chew (Warm Amber Gold with Special Offer Badge) */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#8C5E35] to-[#5C371A] text-white p-8 sm:p-12 min-h-[380px] sm:min-h-[440px] flex flex-col justify-between shadow-lg group">
            {/* Background Image of Honeycomb Puppy */}
            <div className="absolute inset-0 opacity-40 group-hover:opacity-50 transition-opacity pointer-events-none">
              <img
                src="/assets/aistudio/5_d9f8e351.jpg"
                alt="바이레프 허니콤츄"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-right"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-[#5C371A]/40 to-transparent pointer-events-none" />

            {/* Pink Circular Special Offer Badge (Matching Image 6) */}
            <div className="absolute top-6 right-6 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#E64C82] text-white flex flex-col items-center justify-center p-2 text-center shadow-xl rotate-[12deg] group-hover:rotate-0 transition-transform z-20">
              <span className="text-[8px] font-bold tracking-wider uppercase opacity-90">SPECIAL OFFER</span>
              <span className="text-base sm:text-lg font-black font-serif tracking-tight leading-tight">10,000원</span>
              <span className="text-[8px] font-bold tracking-wider uppercase opacity-90">PUPPY CLUB</span>
            </div>

            {/* Content Bottom/Middle */}
            <div className="relative z-10 max-w-md space-y-3 pt-4 sm:pt-0">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-amber-200 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>PUPPY CLUB BEST CHOICE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif-kr font-bold tracking-tight">
                바이레프 허니콤츄
              </h3>
              <p className="text-xs sm:text-sm text-amber-100 font-medium font-sans-kr">
                치킨/베지/황태/칠면조/야크치즈/카밍(12개입)
              </p>
              <p className="text-xs text-amber-200/80 leading-relaxed max-w-xs">
                특허받은 벌집 육각 기포 구조로 씹을 때마다 자연스럽게 치태를 제거해주는 덴탈 츄
              </p>
              <div className="pt-2 flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
                  {honeyComb.price.toLocaleString()}원
                </span>
                <span className="text-sm text-white/60 line-through tabular-nums">
                  {honeyComb.originalPrice?.toLocaleString()}원
                </span>
              </div>
            </div>

            {/* Action Bottom */}
            <div className="relative z-10 pt-8 flex items-center gap-3">
              <button
                onClick={() => onAddToCart(honeyComb)}
                className="px-8 py-3 bg-white text-[#5C371A] hover:bg-amber-50 active:scale-95 font-semibold text-sm rounded-full shadow-md transition-all cursor-pointer font-sans-kr flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>구매 하기</span>
              </button>
              <button
                onClick={() => onOpenProductDetail(honeyComb)}
                className="px-5 py-3 border border-white/30 hover:border-white text-white/90 hover:text-white text-sm font-medium rounded-full transition-colors cursor-pointer"
              >
                상세 정보
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
