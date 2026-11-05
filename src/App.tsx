import React, { useState } from 'react';
import { Product, CartItem, Review, PointHistoryItem, Article } from './types/petshop';
import { PRODUCTS, ARTICLES, INITIAL_REVIEWS, INITIAL_POINTS_HISTORY } from './data/mockData';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { NewMemberDeals } from './components/NewMemberDeals';
import { CategorySlider } from './components/CategorySlider';
import { FeaturedShowcase } from './components/FeaturedShowcase';
import { ProductCatalog } from './components/ProductCatalog';
import { AdviceJournal } from './components/AdviceJournal';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ReviewModal } from './components/ReviewModal';
import { PointsModal } from './components/PointsModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ArticleModal } from './components/ArticleModal';
import { MembershipModal } from './components/MembershipModal';
import { SearchModal } from './components/SearchModal';
import { ShoppingBag, ArrowUp, CheckCircle, Heart } from 'lucide-react';

export default function App() {
  // State
  const [products] = useState<Product[]>(PRODUCTS);
  const [articles] = useState<Article[]>(ARTICLES);
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [userPoints, setUserPoints] = useState<number>(3500);
  const [pointHistory, setPointHistory] = useState<PointHistoryItem[]>(INITIAL_POINTS_HISTORY);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Cart
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: PRODUCTS[1], // 바이레프 허니콤츄 default in bag for delightful preview
      quantity: 1,
    },
  ]);

  // Modals
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isPointsOpen, setIsPointsOpen] = useState(false);
  const [isMembershipOpen, setIsMembershipOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);
  const [detailArticle, setDetailArticle] = useState<Article | null>(null);

  // Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 2800);
  };

  // Cart Handlers
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`"${product.name}"을(를) 장바구니에 담았습니다!`);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleUsePoints = (points: number) => {
    setUserPoints((prev) => Math.max(0, prev - points));
    setPointHistory((prev) => [
      {
        id: 'pt-' + Date.now(),
        type: 'use',
        description: '주문 결제 시 적립금 사용',
        amount: points,
        date: new Date().toLocaleDateString('ko-KR'),
      },
      ...prev,
    ]);
  };

  // Review submission handler (awards 500P)
  const handleSubmitReview = (newReview: Review) => {
    setReviews((prev) => [newReview, ...prev]);
    setUserPoints((prev) => prev + newReview.pointsEarned);
    setPointHistory((prev) => [
      {
        id: 'pt-' + Date.now(),
        type: 'earn',
        description: `상품후기 작성 적립 (${newReview.productName})`,
        amount: newReview.pointsEarned,
        date: newReview.date,
      },
      ...prev,
    ]);
    showToast(`후기 등록 완료! ${newReview.pointsEarned}P가 지급되었습니다. 🎉`);
  };

  const totalCartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2420] flex flex-col font-sans-kr selection:bg-[#B35336] selection:text-white">
      {/* 1. Navbar (Matching Top Bar Contract) */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenPoints={() => setIsPointsOpen(true)}
        onOpenMembership={() => setIsMembershipOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onSelectCategory={setSelectedCategory}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Hero Slider (Images 1 & 2) */}
        <HeroSlider
          onOpenReview={() => setIsReviewOpen(true)}
          onOpenPoints={() => setIsPointsOpen(true)}
          onOpenMembership={() => setIsMembershipOpen(true)}
          onSelectCategory={setSelectedCategory}
        />

        {/* 3. New Member Deals (Image 3) */}
        <NewMemberDeals
          products={products}
          onAddToCart={(p) => handleAddToCart(p, 1)}
          onOpenProductDetail={setDetailProduct}
        />

        {/* 4. Category Slider (Image 4) */}
        <CategorySlider
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* 5. Featured Showcase (Images 4 & 6) */}
        <FeaturedShowcase
          products={products}
          onAddToCart={(p) => handleAddToCart(p, 1)}
          onOpenProductDetail={setDetailProduct}
        />

        {/* 6. Product Catalog */}
        <ProductCatalog
          products={products}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onAddToCart={(p) => handleAddToCart(p, 1)}
          onOpenProductDetail={setDetailProduct}
        />

        {/* 7. Advice & Journal (Image 5) */}
        <AdviceJournal
          articles={articles}
          onOpenArticle={setDetailArticle}
        />
      </main>

      {/* 8. Footer (Image 5) */}
      <Footer
        onOpenMembership={() => setIsMembershipOpen(true)}
        onOpenReview={() => setIsReviewOpen(true)}
        onSelectCategory={setSelectedCategory}
      />

      {/* Floating Action Button (Quick Cart & Scroll to top) */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-center gap-2.5">
        <button
          onClick={scrollToTop}
          title="맨 위로"
          className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#4A3E38] shadow-md border border-[#E2D6C6] flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="맨 위로"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

        <button
          onClick={() => setIsCartOpen(true)}
          title="장바구니 열기"
          className="relative w-12 h-12 rounded-full bg-[#B35336] hover:bg-[#9E4528] text-white shadow-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="장바구니 열기"
        >
          <ShoppingBag className="w-5 h-5" />
          {totalCartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-amber-400 text-[#1F1916] text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-md">
              {totalCartCount}
            </span>
          )}
        </button>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-[#1F1916]/95 text-white backdrop-blur-md px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 text-xs sm:text-sm font-medium animate-in slide-in-from-bottom-3 duration-300 border border-white/10">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-1 text-amber-300 underline font-bold hover:text-amber-200 cursor-pointer"
          >
            장바구니 확인
          </button>
        </div>
      )}

      {/* Modals & Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        userPoints={userPoints}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onUsePoints={handleUsePoints}
      />

      <ReviewModal
        isOpen={isReviewOpen}
        onClose={() => setIsReviewOpen(false)}
        products={products}
        onSubmitReview={handleSubmitReview}
      />

      <PointsModal
        isOpen={isPointsOpen}
        onClose={() => setIsPointsOpen(false)}
        userPoints={userPoints}
        history={pointHistory}
        onOpenReview={() => setIsReviewOpen(true)}
      />

      <ProductDetailModal
        product={detailProduct}
        isOpen={!!detailProduct}
        onClose={() => setDetailProduct(null)}
        onAddToCart={handleAddToCart}
        reviews={reviews}
        onOpenReview={() => {
          setDetailProduct(null);
          setIsReviewOpen(true);
        }}
      />

      <ArticleModal
        article={detailArticle}
        isOpen={!!detailArticle}
        onClose={() => setDetailArticle(null)}
      />

      <MembershipModal
        isOpen={isMembershipOpen}
        onClose={() => setIsMembershipOpen(false)}
        onOpenPoints={() => setIsPointsOpen(true)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={products}
        onOpenProductDetail={setDetailProduct}
        onAddToCart={(p) => handleAddToCart(p, 1)}
      />
    </div>
  );
}
