import React, { useState } from 'react';
import { Search, User, ShoppingBag, Menu, X, Sparkles, Heart } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenPoints: () => void;
  onOpenMembership: () => void;
  onOpenSearch: () => void;
  onSelectCategory: (catId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenPoints,
  onOpenMembership,
  onOpenSearch,
  onSelectCategory,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFD3] transition-all">
      {/* Top micro announcement bar */}
      {announcementVisible && (
        <div className="bg-[#B35336] text-white text-xs py-1.5 px-4 flex items-center justify-between font-sans-kr">
          <div className="flex-1 text-center font-medium flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>신규 회원 가입 즉시 <strong>5% 즉시 할인</strong> + 상품후기 작성 시 <strong>500P 무제한 적립</strong></span>
            <button 
              onClick={onOpenMembership}
              className="ml-2 underline font-semibold hover:text-amber-200 transition-colors cursor-pointer"
            >
              혜택보기
            </button>
          </div>
          <button 
            onClick={() => setAnnouncementVisible(false)}
            className="text-white/80 hover:text-white p-0.5 ml-2 cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Main Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 shrink-0 group cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="w-10 h-10 rounded-full bg-[#B35336] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <span className="text-xl" role="img" aria-label="paw">🐾</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-[#2C2420] font-sans-kr flex items-center gap-1.5">
              mung-deuktem
            </span>
            <span className="text-[10px] tracking-widest text-[#8A7968] uppercase font-semibold">
              PET SHOP · 멍득템
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider text-[#4A3E38] font-sans-kr">
          <a 
            href="#hero" 
            className="hover:text-[#B35336] transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#B35336]"
          >
            HOME
          </a>
          <a 
            href="#categories" 
            onClick={() => onSelectCategory('all')}
            className="hover:text-[#B35336] transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#B35336]"
          >
            SHOP
          </a>
          <a 
            href="#deals" 
            className="hover:text-[#B35336] transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#B35336]"
          >
            특가혜택
          </a>
          <a 
            href="#advice" 
            className="hover:text-[#B35336] transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#B35336]"
          >
            ADVICE
          </a>
          <a 
            href="#popular" 
            className="hover:text-[#B35336] transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#B35336]"
          >
            STOCKISTS
          </a>
          <a 
            href="#contact" 
            className="hover:text-[#B35336] transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#B35336]"
          >
            CONTACT
          </a>
        </nav>

        {/* Zone 3: Search, User Points/Account, Cart */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Search Trigger Input (matching screenshot search pill) */}
          <div 
            onClick={onOpenSearch}
            className="hidden sm:flex items-center gap-2 bg-[#F2ECE3] hover:bg-[#EAE2D7] text-[#7A6C5F] text-xs px-3.5 py-2 rounded-full cursor-pointer transition-colors w-40 lg:w-48 border border-[#E3D9CC]"
          >
            <Search className="w-3.5 h-3.5 text-[#8F8071]" />
            <span className="truncate">Search products...</span>
          </div>

          <button 
            onClick={onOpenSearch}
            className="sm:hidden p-2 text-[#4A3E38] hover:text-[#B35336] transition-colors"
            aria-label="상품 검색"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* User / Membership / Points */}
          <button 
            onClick={onOpenMembership}
            title="회원 등급 & 내 포인트"
            className="p-2 text-[#4A3E38] hover:text-[#B35336] hover:bg-[#F2ECE3] rounded-full transition-colors cursor-pointer relative"
            aria-label="회원 정보"
          >
            <User className="w-5 h-5" />
          </button>

          {/* Shopping Bag Button with Badge */}
          <button 
            onClick={onOpenCart}
            title="장바구니 보기"
            className="flex items-center gap-1.5 p-2 text-[#4A3E38] hover:text-[#B35336] hover:bg-[#F2ECE3] rounded-full transition-colors cursor-pointer relative group"
            aria-label="장바구니"
          >
            <ShoppingBag className="w-5 h-5 text-[#2C2420] group-hover:text-[#B35336] transition-colors" />
            <span className="absolute -top-1 -right-1 bg-[#B35336] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
              {cartCount}
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#4A3E38] hover:text-[#B35336]"
            aria-label="모바일 메뉴"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#E8DFD3] px-6 py-4 space-y-3 font-sans-kr shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-2.5 text-base font-medium text-[#4A3E38]">
            <a 
              href="#hero" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#B35336]"
            >
              HOME
            </a>
            <a 
              href="#categories" 
              onClick={() => { onSelectCategory('all'); setMobileMenuOpen(false); }}
              className="py-1 hover:text-[#B35336]"
            >
              SHOP (전체 카테고리)
            </a>
            <a 
              href="#deals" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#B35336]"
            >
              신규회원 특가
            </a>
            <a 
              href="#advice" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#B35336]"
            >
              ADVICE (반려 가이드)
            </a>
            <a 
              href="#popular" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#B35336]"
            >
              인기 상품
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#B35336]"
            >
              CONTACT (고객센터)
            </a>
          </div>
          <div className="pt-3 border-t border-[#E8DFD3] flex items-center justify-between">
            <button 
              onClick={() => { onOpenPoints(); setMobileMenuOpen(false); }}
              className="text-xs font-semibold text-[#B35336] flex items-center gap-1"
            >
              <Heart className="w-3.5 h-3.5 fill-[#B35336]" />
              내 포인트 적립금 조회
            </button>
            <button 
              onClick={() => { onOpenMembership(); setMobileMenuOpen(false); }}
              className="text-xs bg-[#B35336] text-white px-3 py-1.5 rounded-full"
            >
              회원 혜택
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
