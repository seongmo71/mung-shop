import React from 'react';
import { Article } from '../types/petshop';
import { BookOpen, ArrowRight, Clock } from 'lucide-react';

interface AdviceJournalProps {
  articles: Article[];
  onOpenArticle: (article: Article) => void;
}

export const AdviceJournal: React.FC<AdviceJournalProps> = ({
  articles,
  onOpenArticle,
}) => {
  const featuredArticle = articles[0];
  const sideArticles = articles.slice(1);

  return (
    <section id="advice" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#EAE2D7] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold tracking-widest text-[#B35336] uppercase font-sans-kr flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              PAWFETCH JOURNAL & CARE ADVICE
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-kr font-bold text-[#2C2420] tracking-tight">
              반려견 케어 가이드
            </h2>
            <p className="text-sm sm:text-base text-[#7A6C5F] font-sans-kr">
              건강한 영양 급여부터 계절별 산책 팁까지, 포페치 전문가의 가이드
            </p>
          </div>
        </div>

        {/* 2-Column Split Matching Image 5 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Big Featured Article Card (Matching Image 5 Left) */}
          {featuredArticle && (
            <div 
              onClick={() => onOpenArticle(featuredArticle)}
              className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-[#EAE2D7] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              {/* Featured Visual Image with PAWFETCH text */}
              <div className="relative aspect-[16/10] bg-[#EBD8CE] overflow-hidden">
                <img
                  src="/assets/aistudio/6_be9f840a.webp"
                  alt={featuredArticle.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Featured Content Text */}
              <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between text-center sm:text-left">
                <div className="space-y-3">
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold text-[#8A7968] tracking-widest uppercase">
                    <span>FEATURED</span>
                    <span>·</span>
                    <span className="tabular-nums">{featuredArticle.date}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif-kr font-bold text-[#2C2420] group-hover:text-[#B35336] transition-colors leading-tight">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#7A6C5F] leading-relaxed line-clamp-3">
                    {featuredArticle.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#F0E9DF] mt-6 flex items-center justify-between">
                  <span className="text-xs text-[#8A7968] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredArticle.readTime}
                  </span>
                  <button className="px-6 py-2.5 bg-[#1F1916] text-white group-hover:bg-[#B35336] font-bold text-xs uppercase tracking-wider rounded-full transition-colors cursor-pointer flex items-center gap-1.5">
                    <span>SEE ALL</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Right Column: 4 Editorial Mini Cards (Matching Image 5 Right) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {sideArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => onOpenArticle(article)}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-[#EAE2D7] shadow-sm hover:shadow-md hover:border-[#B35336] transition-all flex items-center gap-4 group cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 bg-[#F2ECE3]">
                  <img
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center gap-2">
                    {article.tag && (
                      <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                        {article.tag}
                      </span>
                    )}
                    <span className="text-[11px] text-[#8A7968] font-medium tabular-nums">
                      {article.date}
                    </span>
                  </div>

                  <h4 className="text-sm font-serif-kr font-bold text-[#2C2420] group-hover:text-[#B35336] transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h4>

                  <p className="text-xs text-[#7A6C5F] line-clamp-1">
                    {article.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
