import React, { useState, useMemo } from 'react';
import { Product } from '../types/petshop';
import { CATEGORIES } from '../data/mockData';
import { ShoppingBag, Star, Heart, Check, Filter } from 'lucide-react';

interface ProductCatalogProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (catId: string) => void;
  onAddToCart: (product: Product) => void;
  onOpenProductDetail: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onAddToCart,
  onOpenProductDetail,
}) => {
  const [sortBy, setSortBy] = useState<'popular' | 'priceAsc' | 'priceDesc' | 'rating'>('popular');
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());

  const toggleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setLikedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filteredProducts = useMemo(() => {
    let list = products.filter((p) => {
      if (selectedCategory === 'all') return true;
      return p.category === selectedCategory;
    });

    if (sortBy === 'popular') {
      list.sort((a, b) => b.reviewCount - a.reviewCount);
    } else if (sortBy === 'priceAsc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'priceDesc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [products, selectedCategory, sortBy]);

  return (
    <section id="catalog" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#EAE2D7] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title & Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-serif-kr font-bold text-[#2C2420] tracking-tight">
            멍득템 큐레이션 스토어
          </h2>
          <p className="text-sm sm:text-base text-[#7A6C5F] font-sans-kr">
            자연주의 영양과 프리미엄 라이프스타일을 담은 엄선된 반려견 제품
          </p>
        </div>

        {/* Filter Controls (Segmented Tabs & Sort Selector) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-[#E8DFD3]">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full whitespace-nowrap transition-all cursor-pointer ${
                    active
                      ? 'bg-[#B35336] text-white shadow-sm'
                      : 'bg-[#F0E9DF] text-[#5C4F47] hover:bg-[#E6DED3] hover:text-[#2C2420]'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 self-end sm:self-auto shrink-0 text-xs text-[#7A6C5F]">
            <Filter className="w-3.5 h-3.5" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#F0E9DF] border border-[#E0D5C7] rounded-lg px-3 py-1.5 text-xs font-medium text-[#4A3E38] focus:outline-none focus:ring-1 focus:ring-[#B35336] cursor-pointer"
            >
              <option value="popular">인기순 (리뷰 많은 순)</option>
              <option value="rating">평점 높은 순</option>
              <option value="priceAsc">낮은 가격순</option>
              <option value="priceDesc">높은 가격순</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            const isLiked = likedIds.has(product.id);
            return (
              <div
                key={product.id}
                onClick={() => onOpenProductDetail(product)}
                className="group bg-white rounded-2xl overflow-hidden border border-[#EAE2D7] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                {/* Product Image Area */}
                <div className="relative aspect-square bg-[#F7F3EE] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                    {product.discountRate && (
                      <span className="bg-[#B35336] text-white text-[11px] font-bold px-2 py-0.5 rounded shadow-sm">
                        {product.discountRate}% OFF
                      </span>
                    )}
                    {product.isNewMemberDeal && (
                      <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                        신규특가
                      </span>
                    )}
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => toggleLike(e, product.id)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 hover:bg-white backdrop-blur-sm flex items-center justify-center text-[#7A6C5F] hover:text-[#B35336] shadow-sm transition-colors cursor-pointer z-10"
                    aria-label="찜하기"
                  >
                    <Heart className={`w-4 h-4 ${isLiked ? 'fill-[#B35336] text-[#B35336]' : ''}`} />
                  </button>

                  {/* Quick Add Button Overlay */}
                  <div className="absolute bottom-3 right-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity z-10 hidden sm:block">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product);
                      }}
                      className="w-full py-2 bg-[#2C2420]/90 hover:bg-[#B35336] backdrop-blur-sm text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>장바구니 담기</span>
                    </button>
                  </div>
                </div>

                {/* Info Container */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category & Weight */}
                    <div className="flex items-center justify-between text-[11px] text-[#8A7968] font-medium uppercase font-sans-kr mb-1">
                      <span>{product.categoryLabel}</span>
                      {product.weightOrQuantity && <span>{product.weightOrQuantity}</span>}
                    </div>

                    {/* Product Title */}
                    <h3 className="text-sm sm:text-base font-semibold text-[#2C2420] line-clamp-2 leading-snug group-hover:text-[#B35336] transition-colors font-sans-kr">
                      {product.name}
                    </h3>

                    {/* Rating & Review Count */}
                    <div className="mt-1.5 flex items-center gap-1.5 text-xs text-[#7A6C5F]">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span className="ml-1 font-semibold text-[#2C2420] tabular-nums">
                          {product.rating}
                        </span>
                      </div>
                      <span className="text-[#C2B7A8]">·</span>
                      <span className="tabular-nums">리뷰 {product.reviewCount}</span>
                    </div>
                  </div>

                  {/* Price and Mobile Add */}
                  <div className="mt-4 pt-3 border-t border-[#F0E9DF] flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-base sm:text-lg font-bold text-[#B35336] tabular-nums">
                          {product.price.toLocaleString()}원
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs text-[#A89A8A] line-through tabular-nums">
                            {product.originalPrice.toLocaleString()}원
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product);
                      }}
                      className="sm:hidden p-2 bg-[#FAF7F2] hover:bg-[#B35336] text-[#4A3E38] hover:text-white rounded-full transition-colors cursor-pointer border border-[#E2D6C6]"
                      aria-label="장바구니 담기"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
