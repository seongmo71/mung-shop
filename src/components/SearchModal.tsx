import React, { useState, useMemo } from 'react';
import { Product } from '../types/petshop';
import { X, Search, ShoppingBag, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onOpenProductDetail: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const POPULAR_KEYWORDS = [
  '로얄캐닌',
  '허니콤츄',
  '수제 간식',
  '니팅볼',
  '파테',
  '유산균',
  '오트밀 샴푸',
  '스타터',
];

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onOpenProductDetail,
  onAddToCart,
}) => {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags?.some((t) => t.toLowerCase().includes(q))
    );
  }, [products, query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 p-4 font-sans-kr animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#E2D6C6] overflow-hidden">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-[#E8DFD3] bg-white flex items-center gap-3">
          <Search className="w-5 h-5 text-[#B35336] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="상품명, 견종별 사료, 간식, 용품을 검색해보세요"
            autoFocus
            className="flex-1 bg-transparent text-sm sm:text-base font-medium text-[#2C2420] focus:outline-none placeholder-[#A89A8A]"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-[#8A7968] hover:text-[#2C2420] px-2 py-1 rounded bg-[#F2ECE3] cursor-pointer"
            >
              지우기
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#F2ECE3] text-[#7A6C5F] hover:text-[#2C2420] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Popular Keyword Suggestions */}
        <div className="p-4 sm:p-6 bg-[#FAF7F2] border-b border-[#E8DFD3]">
          <span className="text-[11px] font-bold text-[#8A7968] uppercase tracking-wider block mb-2.5">
            자주 찾는 인기 검색어
          </span>
          <div className="flex flex-wrap gap-2">
            {POPULAR_KEYWORDS.map((kw) => (
              <button
                key={kw}
                onClick={() => setQuery(kw)}
                className="px-3 py-1 bg-white hover:bg-[#F2ECE3] border border-[#E0D5C7] rounded-full text-xs font-medium text-[#4A3E38] hover:text-[#B35336] transition-colors cursor-pointer"
              >
                #{kw}
              </button>
            ))}
          </div>
        </div>

        {/* Results Area */}
        <div className="p-4 sm:p-6 max-h-[50vh] overflow-y-auto space-y-3">
          {!query.trim() ? (
            <div className="py-8 text-center text-xs text-[#8A7968]">
              키워드를 입력하시거나 위 인기 검색어를 클릭해보세요.
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 text-center space-y-2 text-[#8A7968]">
              <p className="text-sm font-semibold text-[#2C2420]">
                &quot;{query}&quot;에 대한 검색 결과가 없습니다.
              </p>
              <p className="text-xs">
                단어의 철자가 맞는지 확인해보시거나 다른 검색어를 입력해주세요.
              </p>
            </div>
          ) : (
            results.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onClose();
                  onOpenProductDetail(product);
                }}
                className="bg-white p-3.5 rounded-2xl border border-[#E8DFD3] hover:border-[#B35336] hover:shadow-sm transition-all flex items-center justify-between gap-4 cursor-pointer group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-[#F2ECE3] shrink-0 border border-[#E8DFD3]">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] text-[#8A7968] font-bold uppercase">
                      {product.categoryLabel}
                    </span>
                    <h4 className="text-xs sm:text-sm font-semibold text-[#2C2420] group-hover:text-[#B35336] transition-colors truncate">
                      {product.name}
                    </h4>
                    <span className="text-xs font-bold text-[#B35336] tabular-nums">
                      {product.price.toLocaleString()}원
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product);
                    }}
                    className="p-2 rounded-full bg-[#FAF7F2] hover:bg-[#B35336] text-[#4A3E38] hover:text-white transition-colors cursor-pointer border border-[#E0D5C7]"
                    title="장바구니 담기"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                  <ArrowRight className="w-4 h-4 text-[#A89A8A] group-hover:text-[#B35336] transition-colors" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
