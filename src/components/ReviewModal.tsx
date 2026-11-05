import React, { useState } from 'react';
import { Product, Review } from '../types/petshop';
import { X, Star, Camera, Sparkles, CheckCircle2, Gift } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSubmitReview: (review: Review) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({
  isOpen,
  onClose,
  products,
  onSubmitReview,
}) => {
  const [selectedProductId, setSelectedProductId] = useState(products[0]?.id || '');
  const [dogName, setDogName] = useState('뭉치');
  const [dogBreed, setDogBreed] = useState('토이 푸들 (3세)');
  const [rating, setRating] = useState(5);
  const [hasPhoto, setHasPhoto] = useState(true);
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;

    const prod = products.find((p) => p.id === selectedProductId) || products[0];
    const newReview: Review = {
      id: 'rev-' + Date.now(),
      productId: prod.id,
      productName: prod.name,
      author: '반려가족 (나)',
      dogName: dogName || '우리 아이',
      dogBreed: dogBreed || '반려견',
      rating,
      comment,
      date: new Date().toLocaleDateString('ko-KR'),
      pointsEarned: hasPhoto ? 500 : 300,
      helpfulCount: 1,
    };

    onSubmitReview(newReview);
    setIsSubmitted(true);

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setComment('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 font-sans-kr animate-in fade-in">
      <div className="relative w-full max-w-lg bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#E2D6C6] overflow-hidden">
        {/* Header */}
        <div className="bg-[#B35336] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🐾</span>
            <div>
              <h3 className="text-lg font-bold font-serif-kr">상품후기 작성 &amp; 포인트 적립</h3>
              <p className="text-xs text-amber-200">
                사진 후기 작성 시 <strong>500P</strong> 즉시 지급!
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {isSubmitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-serif-kr font-bold text-[#2C2420]">
              소중한 후기가 등록되었습니다!
            </h4>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-center max-w-xs mx-auto">
              <div className="flex items-center justify-center gap-1.5 text-[#B35336] font-bold text-sm">
                <Gift className="w-4 h-4" />
                <span>+500P 적립 완료</span>
              </div>
              <p className="text-xs text-[#7A6C5F] mt-1">
                다음 번 주문 결제 시 현금처럼 바로 사용하실 수 있습니다.
              </p>
            </div>
            <p className="text-xs text-[#8A7968]">
              다른 반려가족분들에게 큰 도움이 되는 생생한 리뷰에 감사드립니다.
            </p>
            <button
              onClick={handleClose}
              className="w-full py-3.5 bg-[#B35336] text-white font-bold text-sm rounded-full shadow-md hover:bg-[#9E4528] transition-colors cursor-pointer"
            >
              확인
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Product Select */}
            <div>
              <label className="block text-xs font-bold text-[#4A3E38] mb-1">
                후기 작성 상품 선택
              </label>
              <select
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(e.target.value)}
                className="w-full bg-white border border-[#D5C6B5] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#2C2420] focus:ring-2 focus:ring-[#B35336] focus:outline-none cursor-pointer"
              >
                {products.map((p) => (
                  <option key={p.id} value={p.id}>
                    [{p.categoryLabel}] {p.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Dog Profile inputs */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#4A3E38] mb-1">
                  반려견 이름
                </label>
                <input
                  type="text"
                  value={dogName}
                  onChange={(e) => setDogName(e.target.value)}
                  placeholder="예: 뭉치, 보리"
                  required
                  className="w-full bg-white border border-[#D5C6B5] rounded-xl px-3.5 py-2 text-xs text-[#2C2420] focus:ring-2 focus:ring-[#B35336] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#4A3E38] mb-1">
                  견종 및 나이
                </label>
                <input
                  type="text"
                  value={dogBreed}
                  onChange={(e) => setDogBreed(e.target.value)}
                  placeholder="예: 토이 푸들 (3세)"
                  required
                  className="w-full bg-white border border-[#D5C6B5] rounded-xl px-3.5 py-2 text-xs text-[#2C2420] focus:ring-2 focus:ring-[#B35336] focus:outline-none"
                />
              </div>
            </div>

            {/* Star Rating */}
            <div>
              <label className="block text-xs font-bold text-[#4A3E38] mb-1.5">
                만족도 별점
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-1 hover:scale-110 transition-transform cursor-pointer"
                  >
                    <Star
                      className={`w-7 h-7 ${
                        star <= rating
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-stone-300'
                      }`}
                    />
                  </button>
                ))}
                <span className="text-xs font-bold text-[#B35336] ml-2">
                  {rating === 5 ? '매우 만족해요! 🐶' : rating === 4 ? '만족해요' : '보통이에요'}
                </span>
              </div>
            </div>

            {/* Photo Attachment Toggle */}
            <div className="bg-white p-3.5 rounded-2xl border border-[#E0D5C7] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#E0D5C7] flex items-center justify-center text-[#B35336]">
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#2C2420]">
                    사진 후기 등록 (포인트 +500P)
                  </p>
                  <p className="text-[11px] text-[#8A7968]">
                    반려견이 맛있게 먹는 사진이나 착용 사진
                  </p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={hasPhoto}
                onChange={(e) => setHasPhoto(e.target.checked)}
                className="w-4 h-4 rounded accent-[#B35336] cursor-pointer"
              />
            </div>

            {/* Comment */}
            <div>
              <label className="block text-xs font-bold text-[#4A3E38] mb-1">
                후기 내용
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="기호성, 배변 상태, 포장 상태 등 솔직한 경험을 남겨주시면 다른 반려가족에게 큰 힘이 됩니다."
                rows={4}
                required
                className="w-full bg-white border border-[#D5C6B5] rounded-xl p-3 text-xs sm:text-sm text-[#2C2420] focus:ring-2 focus:ring-[#B35336] focus:outline-none resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-[#B35336] hover:bg-[#9E4528] active:scale-[0.99] text-white font-bold text-sm rounded-full shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>후기 등록하고 {hasPhoto ? '500P' : '300P'} 받기</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
