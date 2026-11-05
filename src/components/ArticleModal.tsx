import React from 'react';
import { Article } from '../types/petshop';
import { X, Clock, Calendar, BookOpen, Share2 } from 'lucide-react';

interface ArticleModalProps {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 font-sans-kr animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#E2D6C6] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-[#E8DFD3] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2 text-xs font-bold text-[#B35336] uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>PAWFETCH JOURNAL</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#F2ECE3] text-[#7A6C5F] hover:text-[#2C2420] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Cover Image */}
          <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden bg-[#F2ECE3] shadow-xs">
            <img
              src={article.image}
              alt={article.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Metadata */}
          <div className="flex items-center gap-4 text-xs text-[#8A7968] font-medium">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
            {article.tag && (
              <>
                <span>·</span>
                <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold">
                  {article.tag}
                </span>
              </>
            )}
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-serif-kr font-bold text-[#2C2420] leading-tight">
            {article.title}
          </h2>

          {/* Lead Summary */}
          <p className="text-sm sm:text-base font-medium text-[#7A6C5F] italic border-l-2 border-[#B35336] pl-4 py-1 leading-relaxed">
            {article.summary}
          </p>

          {/* Article Body */}
          <div className="space-y-4 text-sm text-[#4A3E38] leading-relaxed whitespace-pre-line border-t border-[#E8DFD3] pt-6 font-sans-kr">
            {article.content}
          </div>

          {/* Footer of modal */}
          <div className="pt-6 border-t border-[#E8DFD3] flex items-center justify-between text-xs text-[#8A7968]">
            <span>글: 포페치 반려견 영양 &amp; 행동 연구소</span>
            <button
              onClick={() => {
                navigator.clipboard?.writeText(window.location.href);
                alert('아티클 링크가 복사되었습니다!');
              }}
              className="flex items-center gap-1 text-[#B35336] hover:underline font-semibold cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>공유하기</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
