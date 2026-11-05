import { Product, Article, Review, PointHistoryItem } from '../types/petshop';

export const CATEGORIES = [
  { id: 'all', name: '전체 상품', count: 28 },
  { id: 'food', name: '강아지 사료', count: 8, dogName: '프렌치 불독', tag: '건식/습식/자연식' },
  { id: 'treats', name: '강아지 간식', count: 12, dogName: '골든 리트리버', tag: '동결건조/수제져키' },
  { id: 'supplements', name: '강아지 영양제', count: 6, dogName: '코커 스패니얼', tag: '관절/유산균/오메가3' },
  { id: 'supplies', name: '강아지 용품', count: 9, dogName: '골든 퍼피', tag: '식기/하네스/방석' },
  { id: 'hygiene', name: '배변 / 위생', count: 7, dogName: '레드 리트리버', tag: '배변패드/친환경샴푸' },
  { id: 'apparel', name: '의류 / 악세서리', count: 5, dogName: '보더 콜리', tag: '외출복/스카프/케이프' },
  { id: 'toys', name: '장난감 / 노즈워크', count: 8, dogName: '비숑 프리제', tag: '터그/니팅볼/퍼즐' },
];

export const PRODUCTS: Product[] = [
  // 1. Image 6 Featured: Royal Canin Mini Indoor Adult
  {
    id: 'royal-canin-indoor-mini',
    name: '로얄캐닌 독 미니 인도어 어덜트 8.7Kg 소화기 건강',
    englishName: 'Royal Canin Mini Indoor Adult Dog Food',
    category: 'food',
    categoryLabel: '강아지 사료',
    price: 89000,
    originalPrice: 98000,
    discountRate: 9,
    image: '/assets/aistudio/5_d9f8e351.jpg',
    description: '실내에서 주로 생활하는 소형견 성견(생후 10개월~8년)을 위한 맞춤 영양 사료입니다. 고소화성 L.I.P 단백질과 적절한 식이섬유로 변 냄새와 양을 현저히 줄여줍니다.',
    tags: ['실내 소형견', '변냄새 감소', '소화기 건강', '피모 관리'],
    rating: 4.9,
    reviewCount: 342,
    isPopular: true,
    weightOrQuantity: '8.7kg',
    features: [
      '고소화성 L.I.P. 단백질 적용으로 변 냄새 40% 감소',
      'L-카르니틴 함유로 이상적인 실내 체중 유지 지원',
      'EPA & DHA 풍부하여 건강한 피부와 윤기 나는 모질 강화',
      '치석 형성 감소를 돕는 칼슘 킬레이트 성분 함유'
    ]
  },
  // 2. Image 6 Featured: Biref Honeycomb Chew
  {
    id: 'biref-honeycomb-chew',
    name: '바이레프 허니콤츄 치킨/베지/황태/칠면조/야크치즈/카밍',
    englishName: 'Biref Honeycomb Chew Functional Dog Dental Stick',
    category: 'treats',
    categoryLabel: '강아지 간식',
    price: 10000,
    originalPrice: 16000,
    discountRate: 38,
    image: '/assets/aistudio/5_d9f8e351.jpg',
    description: '반려견의 치석 케어와 스트레스 완화를 동시에 도와주는 육각 허니콤 구조의 기능성 덴탈 껌. 12개입 개별 포장으로 위생적입니다.',
    tags: ['구강 항균', '벌집구조', '기호성 최고', '무방부제'],
    rating: 4.95,
    reviewCount: 521,
    isPopular: true,
    isSpecialOffer: true,
    specialBadge: 'SPECIAL OFFER 10,000원 PUPPY CLUB',
    weightOrQuantity: '12개입 (1박스)',
    features: [
      '특허받은 육각 벌집 기포 구조로 씹을 때마다 잇몸 마사지 & 치태 제거',
      '천연 야크치즈와 신선한 닭가슴살 베이스로 뛰어난 기호성',
      '카모마일 & L-테아닌 함유로 분리불안 완화 및 심신 안정',
      '글루텐 프리, 무합성착향료, 무인공색소의 100% 휴먼그레이드'
    ]
  },
  // 3. Image 3 Featured Deal: 100% Domestic Raw Treats
  {
    id: 'homemade-raw-jerky-set',
    name: '100% 국내 제조 프리미엄 수제 간식 세트 (오리안심 & 소간 져키)',
    englishName: '100% Handcrafted Raw Premium Dog Jerky Set',
    category: 'treats',
    categoryLabel: '강아지 간식',
    price: 12000,
    originalPrice: 18000,
    discountRate: 33,
    image: '/assets/aistudio/3_5021d272.jpg',
    description: '신선한 무항생제 국내산 원육만을 70도 저온에서 16시간 정성껏 건조하여 영양 손실 없이 바삭하고 쫄깃하게 완성한 멍득템 시그니처 수제 간식입니다.',
    tags: ['100% 국내제조', '무항생제 원육', '저온건조', '신규회원특가'],
    rating: 5.0,
    reviewCount: 428,
    isNewMemberDeal: true,
    weightOrQuantity: '150g (오리 80g + 소간 70g)',
    features: [
      'HACCP 인증 국내 전용 제조 시설에서 100% 수제 가공',
      '원재료 외 보존료, 첨가물, 염분 무첨가 원칙',
      '눈물자국 완화 및 빈혈 예방에 탁월한 소간 함유',
      '지퍼백 진공 이중 포장으로 신선함 보존'
    ]
  },
  // 4. Image 3 Featured Deal: Knitting Ball Toy
  {
    id: 'organic-knitting-ball',
    name: '무독성 무형광염료 친환경 수제 니팅볼 (치석제거 & 노즈워크)',
    englishName: 'Non-Toxic Hand-Knitted Organic Cotton Ball Toy',
    category: 'toys',
    categoryLabel: '장난감 / 노즈워크',
    price: 8900,
    originalPrice: 14000,
    discountRate: 36,
    image: '/assets/aistudio/3_5021d272.jpg',
    description: '반려견이 물고 뜯어도 솜이 튀어나오지 않는 100% 오가닉 순면 털실로 짠 무독성 니팅볼입니다. 틈새에 사료나 간식을 넣어 노즈워크 놀이로 즐길 수 있습니다.',
    tags: ['무독성 오가닉', '무형광염료', '치석제거', '신규회원특가'],
    rating: 4.88,
    reviewCount: 290,
    isNewMemberDeal: true,
    weightOrQuantity: '단품 (직경 8.5cm)',
    features: [
      'KC 어린이 안전인증 털실 및 무독성 식물성 천연 염료 사용',
      '촘촘한 뜨개 조직으로 물고 씹을 때 치아 플라그 자연 제거',
      '물세탁 및 자연 건조가 가능하여 항상 청결하게 유지',
      '소형견부터 중형견까지 부드럽고 안전하게 물기 좋은 탄성'
    ]
  },
  // 5. Raw Marrow Bones (Image 5 Article Connection)
  {
    id: 'pawfetch-raw-marrow-bone',
    name: '포페치 청정 한우 생우족 사골 본마로우 본 (2EA)',
    englishName: 'Pawfetch Fresh Beef Marrow Chewing Bone',
    category: 'treats',
    categoryLabel: '강아지 간식',
    price: 15900,
    originalPrice: 21000,
    discountRate: 24,
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80',
    description: '청정 방목 한우의 단단하고 영양 가득한 골수를 그대로 품은 천연 씹는 본. 칼슘과 콜라겐이 풍부하며 스트레스 해소에 최고입니다.',
    tags: ['자연식', '골수 본마로우', '스트레스 해소', '치아 관리'],
    rating: 4.9,
    reviewCount: 165,
    weightOrQuantity: '2개입 (약 400g)',
    features: ['급속 개별 냉동', '방부제 무첨가', '단단한 씹는 맛']
  },
  // 6. Probiotics Supplement
  {
    id: 'pawfetch-probiotics-plus',
    name: '포페치 닥터 바이옴 500억 살아있는 생유산균 (30포)',
    englishName: 'Pawfetch Daily Probiotics & Digestive Enzymes',
    category: 'supplements',
    categoryLabel: '강아지 영양제',
    price: 32000,
    originalPrice: 38000,
    discountRate: 15,
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
    description: '소화 흡수율을 극대화한 특허 4중 코팅 캡슐 유산균. 장 건강, 묽은 변 개선, 소화기 면역력을 동시에 지켜줍니다.',
    tags: ['생유산균', '장건강', '면역력 증진', '간편 스틱'],
    rating: 4.94,
    reviewCount: 380,
    weightOrQuantity: '30포 (1개월분)',
    features: ['500억 보장균수', '기호성 좋은 치즈향', '개별 스틱 포장']
  },
  // 7. Natural Pate Can (Image 5 Footer Category: Premium Pate)
  {
    id: 'pawfetch-premium-pate-salmon',
    name: '포페치 프리미엄 생연어 & 당근 홀푸드 파테 캔 150g',
    englishName: 'Pawfetch Premium Salmon & Carrot Pate Wet Food',
    category: 'food',
    categoryLabel: '강아지 사료',
    price: 4500,
    originalPrice: 5500,
    discountRate: 18,
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80',
    description: '신선한 노르웨이 생연어와 유기농 당근, 완두콩을 부드럽게 쪄낸 프리미엄 자연식 파테. 음수량 부족한 아이들에게 최고의 식사입니다.',
    tags: ['습식 파테', '생연어 70%', '음수량 충전', '그레인프리'],
    rating: 4.87,
    reviewCount: 198,
    weightOrQuantity: '150g x 1캔',
    features: ['그레인프리 곡물 무첨가', '오메가3 오일 함유', '부드러운 무스 제형']
  },
  // 8. Air Dried Treats (Image 5 Footer Category: Air Dried Treats)
  {
    id: 'air-dried-beef-cubes',
    name: '포페치 에어드라이 청정 호주산 소고기 큐브 트릿 120g',
    englishName: 'Pawfetch Air-Dried Australian Grass-Fed Beef Cubes',
    category: 'treats',
    categoryLabel: '강아지 간식',
    price: 13500,
    originalPrice: 17000,
    discountRate: 20,
    image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=800&q=80',
    description: '호주 목초사육 소고기를 전통 에어드라이 건조 공법으로 완성하여 육즙과 영양을 농축시킨 프리미엄 칭찬 간식입니다.',
    tags: ['에어드라이', '칭찬 트릿', '고단백 저지방', '목초 사육'],
    rating: 4.92,
    reviewCount: 275,
    weightOrQuantity: '120g',
    features: ['훈련용 한입 큐브', '인공 향료 Zero', '풍부한 철분과 단백질']
  },
  // 9. Eco Rope & Fetch Toy (Image 5 Footer Category: Rope Toys)
  {
    id: 'natural-cotton-rope-tug',
    name: '멍득템 내추럴 코튼 3노트 터그 로프 & 우드 링 토이',
    englishName: 'Mung-Deuktem Natural 3-Knot Cotton Rope Tug',
    category: 'toys',
    categoryLabel: '장난감 / 노즈워크',
    price: 9900,
    originalPrice: 13000,
    discountRate: 23,
    image: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=800&q=80',
    description: '무염색 천연 순면으로 단단하게 매듭지어 치실 효과가 있는 대형견 겸용 안심 터그 로프 토이입니다.',
    tags: ['치실 효과', '천연 순면', '스트레스 해소', '튼튼한 내구성'],
    rating: 4.85,
    reviewCount: 142,
    weightOrQuantity: '길이 45cm',
    features: ['씹으면서 플라그 케어', '천연 너도밤나무 링 포인트', '세탁기 물세탁 가능']
  },
  // 10. Hypoallergenic Shampoo (Hygiene)
  {
    id: 'pawfetch-gentle-oat-shampoo',
    name: '포페치 순한 오트밀 & 세라마이드 저자극 펫 샴푸 500ml',
    englishName: 'Pawfetch Soothing Oatmeal & Ceramide Pet Shampoo',
    category: 'hygiene',
    categoryLabel: '배변 / 위생',
    price: 24000,
    originalPrice: 28000,
    discountRate: 14,
    image: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&w=800&q=80',
    description: '피부가 예민하고 건조하여 자주 긁는 아이들을 위한 EWG 그린 등급 오트밀 추출물 저자극 딥 모이스처 샴푸입니다.',
    tags: ['저자극', 'EWG 그린', '오트밀 보습', '은은한 아기향'],
    rating: 4.96,
    reviewCount: 312,
    weightOrQuantity: '500ml',
    features: ['자연유래 계면활성제', '린스 겸용 부드러운 코팅', '인공 실리콘 배제']
  },
  // 11. Apparel / Cape (Image 1 Dog bib accessory style)
  {
    id: 'mungdeuktem-linen-bib-cape',
    name: '멍득템 시그니처 린넨 핸드메이드 레이스 빕 & 케이프',
    englishName: 'Mung-Deuktem Handcrafted Linen Lace Bib & Cape',
    category: 'apparel',
    categoryLabel: '의류 / 악세서리',
    price: 18000,
    originalPrice: 22000,
    discountRate: 18,
    image: '/assets/aistudio/2_a5688296.jpg',
    description: '멍득템 모델견 착용 정품! 시원한 천연 린넨과 부드러운 순면 레이스로 제작되어 산책 시 목을 조이지 않고 사랑스럽게 연출됩니다.',
    tags: ['핸드메이드', '천연 린넨', '사진 맛집', '맞춤 핏'],
    rating: 4.93,
    reviewCount: 187,
    weightOrQuantity: 'Free Size (목둘레 20~38cm 조절)',
    features: ['뒤쪽 리본 묶음형 조절', '피부 자극 없는 코튼 라이닝', '세탁 후 원형 유지']
  },
  // 12. Starter Hamper (Image 5 Footer Category: Starter Hampers)
  {
    id: 'pawfetch-puppy-starter-hamper',
    name: '포페치 퍼피 & 신규회원 스타터 웰컴 햄퍼 선물박스',
    englishName: 'Pawfetch Puppy Club Luxury Welcome Gift Hamper',
    category: 'supplies',
    categoryLabel: '강아지 용품',
    price: 49000,
    originalPrice: 75000,
    discountRate: 34,
    image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=800&q=80',
    description: '신규 입양 가족 및 퍼피 클럽 회원을 위해 사료 샘플, 수제 져키 2종, 니팅볼, 샴푸 미니어처, 에코백까지 한 상자에 담았습니다.',
    tags: ['선물박스', '퍼피 클럽', '첫구매 추천', '한정수량'],
    rating: 5.0,
    reviewCount: 96,
    weightOrQuantity: '풀 패키지 세트',
    features: ['고급 자석 싸바리 박스 포장', '멍득템 에코백 증정', '첫 구매 감사 5,000원 쿠폰북']
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'art-summer-feeding',
    title: 'PLAY & FEEDING IN SUMMER: 여름철 건강 관리 가이드',
    summary: 'The sun is out and temperatures are rising. We have put together a little guide about play & feeding in summer.',
    content: `여름철 기온이 상승하면 반려견들은 사람보다 체온 조절 능력이 취약하여 식욕 부진이나 탈수, 열사병 위험에 쉽게 노출됩니다. 
    
1. 충분한 수분 보충: 생수뿐 아니라 수분 함량이 75% 이상인 습식 파테나 차가운 오이, 당근 스틱을 보충해주세요.
2. 산책 시간 조절: 아스팔트 바닥이 뜨거워지는 낮 11시~오후 5시는 피하고 이른 아침이나 해가 진 저녁에 산책하세요.
3. 시원한 실내 노즈워크: 야외 활동이 어려울 땐 멍득템 니팅볼이나 콩 토이에 얼린 간식을 넣어 실내 에너지를 발산시켜주세요.`,
    date: '2025. 08. 14',
    tag: 'FEATURED',
    image: '/assets/aistudio/6_be9f840a.webp',
    readTime: '3 min read'
  },
  {
    id: 'art-what3words',
    title: "WE'RE NOW ACCEPTING WHAT3WORDS",
    summary: '이제 산책 중인 공원이나 복잡한 빌라 단지에서도 전 세계를 3미터 정사각형으로 나눈 세 단어 주소로 더 정확하게 배송받으세요.',
    content: '멍득템은 이제 혁신적인 What3Words 위치 서비스를 도입하여 전원주택, 캠핑장, 야외 훈련소 어디에서든 정확한 위치로 신선 배송을 제공합니다.',
    date: '2025. 07. 16',
    tag: 'NEW',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80',
    readTime: '2 min read'
  },
  {
    id: 'art-right-dog',
    title: 'CONSIDERING THE RIGHT DOG FOR YOUR FAMILY',
    summary: '우리 가족의 라이프스타일, 주거 환경, 산책 주기에 가장 잘 맞는 반려견 견종과 입양 전 체크리스트.',
    content: '활동량이 많은 보더콜리와 차분한 성향의 시츄 등 견종 고유의 유전적 특성과 에너지 레벨을 고려하여 평생을 함께할 가족을 맞이하는 올바른 방법을 소개합니다.',
    date: '2025. 04. 19',
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80',
    readTime: '5 min read'
  },
  {
    id: 'art-safely-workout',
    title: 'HOW TO SAFELY WORKOUT YOUR DOG',
    summary: '관절에 무리 없는 올바른 산책법과 실내 코어 근육 강화 트레이닝 비법.',
    content: '슬개골 탈구 예방을 위해 집 안 미끄럼 방지 매트 설치, 적정 체중 관리, 무리한 계단 오르내리기 방지 등 매일 실천할 수 있는 관절 보호 가이드를 전합니다.',
    date: '2025. 03. 01',
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=800&q=80',
    readTime: '4 min read'
  },
  {
    id: 'art-raw-marrow-bones',
    title: 'FEEDING RAW MARROW BONES TO YOUR DOGS',
    summary: '생사골 뼈 급여 시 주의사항과 치아 손상 없이 즐기는 안전한 본마로우 츄잉 노하우.',
    content: '익힌 뼈는 날카롭게 부러져 위험하지만, 가공되지 않은 신선한 생골수 뼈는 안전하게 치석을 긁어내고 엔도르핀을 생성합니다. 올바른 크기 선택법을 알아보세요.',
    date: '2025. 01. 28',
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80',
    readTime: '4 min read'
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    productId: 'royal-canin-indoor-mini',
    productName: '로얄캐닌 독 미니 인도어 어덜트 8.7Kg',
    author: '김*민 (chong***)',
    dogName: '뭉치',
    dogBreed: '토이 푸들 (4세)',
    rating: 5,
    comment: '우리 뭉치가 장이 예민해서 사료 바꾸기 겁났는데 로얄캐닌 미니 인도어로 바꾸고 나서 변 상태가 단단하고 냄새도 진짜 확 줄었어요! 8.7kg 대용량이라 든든하고 멍득템 배송도 하루만에 왔네요 ㅎㅎ 포인트 적립도 쏠쏠합니다!',
    date: '2026. 03. 18',
    pointsEarned: 500,
    helpfulCount: 38
  },
  {
    id: 'rev-2',
    productId: 'biref-honeycomb-chew',
    productName: '바이레프 허니콤츄',
    author: '이*정 (happy***)',
    dogName: '보리',
    dogBreed: '말티즈 (2세)',
    rating: 5,
    comment: '입맛 까다로운 보리가 봉지 소리만 나도 달려와요 ㅋㅋ 육각 벌집 구멍 사이에 치약 살짝 묻혀서 주면 이 닦기 전쟁 끝납니다. 10,000원 특가할 때 무조건 쟁여야 해요!',
    date: '2026. 03. 20',
    pointsEarned: 500,
    helpfulCount: 29
  },
  {
    id: 'rev-3',
    productId: 'homemade-raw-jerky-set',
    productName: '100% 국내 제조 프리미엄 수제 간식 세트',
    author: '박*수 (woof***)',
    dogName: '초코',
    dogBreed: '포메라니안 (3세)',
    rating: 5,
    comment: '원육 냄새가 신선하고 딱딱하지 않아서 소형견도 씹기 좋아요. 인공첨가물 없어서 안심하고 급여합니다. 후기 쓰고 500P 적립 받아서 다음 결제에 썼어요!',
    date: '2026. 03. 22',
    pointsEarned: 500,
    helpfulCount: 15
  }
];

export const INITIAL_POINTS_HISTORY: PointHistoryItem[] = [
  {
    id: 'pt-1',
    type: 'earn',
    description: '신규 회원 가입 축하 포인트 적립',
    amount: 3000,
    date: '2026. 03. 15'
  },
  {
    id: 'pt-2',
    type: 'earn',
    description: '상품후기 작성 적립 (로얄캐닌 독 미니 인도어)',
    amount: 500,
    date: '2026. 03. 18'
  }
];
