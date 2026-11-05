import React, { useState } from 'react';
import { ArrowRight, Instagram, Facebook, Check, Phone, Clock, Mail } from 'lucide-react';

interface FooterProps {
  onOpenMembership: () => void;
  onOpenReview: () => void;
  onSelectCategory: (catId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenMembership,
  onOpenReview,
  onSelectCategory,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
  };

  return (
    <footer id="contact" className="bg-[#120F0D] text-[#D1C6BC] font-sans-kr">
      {/* 1. Yellow Accent Newsletter Bar (Matching Image 5) */}
      <div className="bg-[#E5A832] text-[#1F1916] py-5 px-4 sm:px-6 lg:px-8 border-b border-[#D49924]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Join Us & Discount */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-full bg-[#1F1916] text-[#E5A832] flex items-center justify-center shrink-0">
              <span className="text-xl">🐾</span>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-black tracking-tight leading-tight">
                Join Us
              </h4>
              <p className="text-xs sm:text-sm font-medium text-[#3D2F18]">
                Sign up and receive 10% off your first order (첫 주문 10% 할인 쿠폰 즉시 발급)
              </p>
            </div>
          </div>

          {/* Right Email Form */}
          <div className="w-full md:w-auto">
            {subscribed ? (
              <div className="bg-[#1F1916] text-white px-5 py-2.5 rounded-full flex items-center gap-2 text-xs font-semibold animate-in fade-in">
                <Check className="w-4 h-4 text-[#E5A832]" />
                <span>구독 완료! 이메일로 10% 웰컴 쿠폰 코드가 발송되었습니다.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex items-center w-full md:w-96">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address (이메일 주소를 입력하세요)"
                  required
                  className="w-full bg-[#FCECB5] text-[#2C2420] placeholder-[#806B42] text-xs sm:text-sm px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1F1916] pr-12 border border-[#DEC47A]"
                />
                <button
                  type="submit"
                  aria-label="이메일 구독 신청"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#1F1916] text-white hover:bg-[#3D2F18] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* 2. Main 4-Column Navigation (Matching Image 5) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          {/* Column 1: OUR RANGES */}
          <div className="space-y-4">
            <h5 className="text-xs font-black uppercase tracking-[0.2em] text-white border-b border-[#2C2420] pb-2 font-serif-kr">
              OUR RANGES
            </h5>
            <div className="space-y-3 text-xs leading-relaxed">
              <div>
                <p className="font-bold text-white/90">Natural Treats</p>
                <ul className="mt-1 space-y-1 text-[#9E9085]">
                  <li><button onClick={() => onSelectCategory('treats')} className="hover:text-white transition-colors cursor-pointer">View products (전체 간식)</button></li>
                  <li><button onClick={() => onSelectCategory('treats')} className="hover:text-white transition-colors cursor-pointer">Air Dried Treats (에어드라이)</button></li>
                  <li><button onClick={() => onSelectCategory('food')} className="hover:text-white transition-colors cursor-pointer">Premium Pate (습식 파테)</button></li>
                </ul>
              </div>

              <div className="pt-2">
                <p className="font-bold text-white/90">Toys &amp; Play</p>
                <ul className="mt-1 space-y-1 text-[#9E9085]">
                  <li><button onClick={() => onSelectCategory('toys')} className="hover:text-white transition-colors cursor-pointer">View products (전체 장난감)</button></li>
                  <li><button onClick={() => onSelectCategory('toys')} className="hover:text-white transition-colors cursor-pointer">Rope Toys (터그 로프)</button></li>
                  <li><button onClick={() => onSelectCategory('toys')} className="hover:text-white transition-colors cursor-pointer">Plush Toys &amp; Knitting (니팅볼)</button></li>
                  <li><button onClick={() => onSelectCategory('toys')} className="hover:text-white transition-colors cursor-pointer">Fetch &amp; Flying (원반/공)</button></li>
                  <li><button onClick={() => onSelectCategory('toys')} className="hover:text-white transition-colors cursor-pointer">Puzzle Toys (노즈워크 퍼즐)</button></li>
                </ul>
              </div>

              <div className="pt-2">
                <p className="font-bold text-white/90">Starter Hampers</p>
                <ul className="mt-1 space-y-1 text-[#9E9085]">
                  <li><button onClick={() => onSelectCategory('supplies')} className="hover:text-white transition-colors cursor-pointer">View products (스타터 선물세트)</button></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 2: USEFUL LINKS */}
          <div className="space-y-4">
            <h5 className="text-xs font-black uppercase tracking-[0.2em] text-white border-b border-[#2C2420] pb-2 font-serif-kr">
              USEFUL LINKS
            </h5>
            <ul className="space-y-2 text-xs text-[#9E9085]">
              <li><a href="#advice" className="hover:text-white transition-colors">Benefits of raw feeding (자연식의 효능)</a></li>
              <li><a href="#advice" className="hover:text-white transition-colors">How to feed raw for breeding (생애주기별 급여)</a></li>
              <li><a href="#advice" className="hover:text-white transition-colors">Feeding Guidelines (일일 권장 급여량)</a></li>
              <li><a href="#hero" className="hover:text-white transition-colors">Pawfetch Superstars (베스트 리뷰어)</a></li>
              <li><a href="#advice" className="hover:text-white transition-colors">How to feed raw dog food (자연식 가이드)</a></li>
              <li><a href="#deals" className="hover:text-white transition-colors">Raw Feeding (신선 원육 공정)</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us (멍득템 스토리)</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ (자주 묻는 질문)</a></li>
              <li><button onClick={onOpenMembership} className="hover:text-white transition-colors cursor-pointer text-left">Puppy Club (퍼피 클럽 혜택)</button></li>
              <li><a href="#advice" className="hover:text-white transition-colors">Blog (반려 매거진)</a></li>
            </ul>
          </div>

          {/* Column 3: CUSTOMER SERVICES */}
          <div className="space-y-4">
            <h5 className="text-xs font-black uppercase tracking-[0.2em] text-white border-b border-[#2C2420] pb-2 font-serif-kr">
              CUSTOMER SERVICES
            </h5>
            <ul className="space-y-2 text-xs text-[#9E9085]">
              <li><button onClick={onOpenMembership} className="hover:text-white transition-colors cursor-pointer">Log in / Register (로그인 및 회원가입)</button></li>
              <li><button onClick={onOpenReview} className="hover:text-white transition-colors cursor-pointer">Reviews (상품 후기 작성 + 500P)</button></li>
              <li><a href="#delivery" className="hover:text-white transition-colors">Delivery Information (당일배송 안내)</a></li>
              <li><a href="#refund" className="hover:text-white transition-colors">Refund &amp; Returns Policy (교환/환불 정책)</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">Terms &amp; Conditions (이용약관)</a></li>
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy (개인정보처리방침)</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact (1:1 실시간 문의)</a></li>
            </ul>
          </div>

          {/* Column 4: CONNECT WITH US & CUSTOMER HOTLINE */}
          <div className="space-y-4">
            <h5 className="text-xs font-black uppercase tracking-[0.2em] text-white border-b border-[#2C2420] pb-2 font-serif-kr">
              CONNECT WITH US
            </h5>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#1F1916] hover:bg-[#B35336] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#1F1916] hover:bg-[#B35336] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <div 
                title="TikTok @mungdeuktem"
                className="w-9 h-9 rounded-full bg-[#1F1916] hover:bg-[#B35336] text-white flex items-center justify-center transition-colors cursor-pointer text-xs font-bold"
              >
                ♪
              </div>
            </div>

            {/* Customer Center Info */}
            <div className="pt-2 space-y-1.5 text-xs text-[#9E9085]">
              <div className="flex items-center gap-2 text-white font-bold">
                <Phone className="w-3.5 h-3.5 text-[#E5A832]" />
                <span className="text-sm">1588-9922</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 mt-0.5 text-[#E5A832] shrink-0" />
                <span>평일 09:30 ~ 18:00 (점심 12:30 ~ 13:30)<br />주말/공휴일 휴무 (카카오톡 1:1 상담 가능)</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Mail className="w-3.5 h-3.5 text-[#E5A832]" />
                <span>support@mung-deuktem.co.kr</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Row: Brand Logo & Legal Copyright (Matching Image 5) */}
      <div className="border-t border-[#1F1916] bg-[#0A0807] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#70645B]">
          {/* Pawfetch Brand Mark */}
          <div className="flex items-center gap-2">
            <span className="text-base" role="img" aria-label="paw">🐾</span>
            <span className="font-bold tracking-wider text-white uppercase font-sans-kr">
              PAWFETCH · 멍득템 PET SHOP
            </span>
          </div>

          {/* Legal / Copyright */}
          <div className="text-center sm:text-right">
            <p>© Pawfetch Pet Co. Ltd 2026. All Rights Reserved.</p>
            <p className="text-[11px] text-[#554C45] mt-0.5">
              주식회사 멍득템 | 대표: 김반려 | 서울특별시 강남구 도산대로 12길 34 멍득템 빌딩
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
