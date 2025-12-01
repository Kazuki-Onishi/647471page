import React from 'react';
import { MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { ProductCategory } from './types';

// --- Data ---

const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'petit-four',
    title: 'プティフール',
    englishTitle: 'Petit Four',
    subtitle: 'Heavenly pastry creations that will satisfy your cravings',
    image: '/images/products/petit-four/petit-four-assort.jpg'
  },
  {
    id: 'menu',
    title: '店内メニュー',
    englishTitle: 'Cafe Menu',
    subtitle: 'Deliciously decadent cookies that are sure to impress',
    image: '/images/products/menu/menu-set-1.jpg'
  },
  {
    id: 'cake',
    title: 'ホールケーキ',
    englishTitle: 'Whole Cake',
    subtitle: "Freshly-baked loaves of bread you'll find irresistible",
    image: '/images/products/cake/cake-before-vegan.jpg'
  },
  {
    id: 'gift',
    title: 'ギフト',
    englishTitle: 'Gift',
    subtitle: "Freshly-baked loaves of bread you'll find irresistible",
    image: '/images/hero/hero-main.jpg'
  },
  {
    id: 'baked',
    title: '焼き菓子',
    englishTitle: 'Baked Goods',
    subtitle: 'Deliciously decadent cookies that are sure to impress',
    image: '/images/products/menu/menu-set-1.jpg'
  },
  {
    id: 'goods',
    title: '雑貨',
    englishTitle: 'Goods',
    subtitle: 'Heavenly pastry creations that will satisfy your cravings',
    image: '/images/products/petit-four/petit-four-assort.jpg'
  }
];

const VERTICAL_LINKS = [
  '私たちの物語',
  'アレルギー対応',
  'Yukiko Uno',
  '採用情報',
  'よくある質問',
  'お問い合わせ',
  'ご注文の確認'
];

// --- Components ---

// Shared SVG Paths for consistency between Logo and Pattern
// Increased stroke weights for better visibility
const LOGO_PATHS = (
  <>
    {/* Hat Top Outline */}
    <path d="M50 65 C 40 55, 40 35, 65 35 C 70 20, 100 20, 105 35 C 125 30, 145 45, 135 75" strokeWidth="3" />
    
    {/* Hat Brim Left & Right */}
    <path d="M60 65 L 60 95 L 95 95" strokeWidth="3" /> 
    <path d="M115 65 L 120 95" strokeWidth="3" />

    {/* Face */}
    <circle cx="70" cy="115" r="5" fill="none" strokeWidth="3" />
    <circle cx="110" cy="115" r="5" fill="none" strokeWidth="3" />

    {/* Mouth with Leaf/Sprout */}
    <path d="M65 145 Q 90 165 115 140" strokeWidth="3" />
    <path d="M115 140 Q 130 135 135 145 Q 125 150 118 145" strokeWidth="3" />

    {/* Outlined Text - Thicker Stroke */}
    <text x="90" y="190" textAnchor="middle" fontFamily="'Zen Maru Gothic', sans-serif" fontSize="26" fontWeight="700" letterSpacing="1" strokeWidth="2">Uno Yukiko</text>
    <text x="90" y="220" textAnchor="middle" fontFamily="'Zen Maru Gothic', sans-serif" fontSize="28" fontWeight="700" letterSpacing="1" strokeWidth="2">CAKES</text>
  </>
);

const ChefLogo = ({
  className = "",
  width = 100,
  variant = "main",
  style
}: { className?: string; width?: string | number; variant?: "main" | "badge"; style?: React.CSSProperties }) => {
  const src =
    variant === "badge"
      ? "/logo/logobadge/unoyukikocakeslogo_green_bgremoved.png"
      : "/logo/logomain/unoyukikocakeslogo_white_bgremoved.png";

  const resolvedWidth = typeof width === "number" ? `${width}px` : width;

  return (
    <img
      src={src}
      alt="Uno Yukiko Cakes logo"
      className={`object-contain ${className}`}
      style={{ width: resolvedWidth, height: "auto", maxWidth: "200px", aspectRatio: "1 / 1", ...(style || {}) }}
    />
  );
};

const GLOBAL_ANIMATIONS = `
@keyframes fadeInUp {
  from { opacity: 0; transform: translate3d(0, 24px, 0); }
  to { opacity: 1; transform: translate3d(0, 0, 0); }
}
@keyframes fadeInDown {
  from { opacity: 0; transform: translate3d(0, -16px, 0); }
  to { opacity: 1; transform: translate3d(0, 0, 0); }
}
@keyframes slowZoom {
  from { transform: scale(1); }
  to { transform: scale(1.06); }
}
@keyframes logoDropPath {
  0% { top: -140px; opacity: 0; }
  55% { top: 52vh; opacity: 1; }
  72% { top: 46vh; }
  100% { top: calc(100% - 150px); }
}
@keyframes logoTiltBounce {
  0% { transform: translate(-50%, -28%) scale(0.82) rotate(-10deg); filter: drop-shadow(0 12px 24px rgba(0,0,0,0.28)); }
  55% { transform: translate(-50%, 6%) scale(1.05) rotate(5deg); }
  70% { transform: translate(-50%, -4%) scale(0.97) rotate(-3deg); }
  100% { transform: translate(-50%, 0%) scale(1) rotate(0deg); filter: drop-shadow(0 10px 20px rgba(0,0,0,0.22)); }
}
@keyframes logoTrailFade {
  0% { opacity: 0; transform: scaleY(0.4); }
  45% { opacity: 0.8; transform: scaleY(1); }
  100% { opacity: 0; transform: scaleY(0.6); }
}
@keyframes logoHalo {
  0% { opacity: 0; transform: translateY(-40%) scale(0.6); }
  60% { opacity: 0.7; transform: translateY(6%) scale(1.05); }
  100% { opacity: 0.4; transform: translateY(0) scale(1); }
}
@keyframes floatY {
  0% { transform: translateY(-6%); }
  50% { transform: translateY(8%); }
  100% { transform: translateY(-6%); }
}
@keyframes pulseRing {
  0% { transform: scale(0.85); opacity: 0.55; }
  70% { transform: scale(1.25); opacity: 0; }
  100% { transform: scale(1.25); opacity: 0; }
}
@keyframes arrowDown {
  0% { transform: translateY(0); opacity: 0.6; }
  50% { transform: translateY(6px); opacity: 1; }
  100% { transform: translateY(0); opacity: 0.6; }
}
@keyframes frameGlow {
  0% { box-shadow: 0 0 0 rgba(255, 255, 255, 0); }
  45% { box-shadow: 0 10px 24px rgba(255, 255, 255, 0.14); }
  100% { box-shadow: 0 0 0 rgba(255, 255, 255, 0); }
}
@keyframes bloomPulse {
  0% { opacity: 0; transform: scale(0.98); }
  50% { opacity: 0.08; transform: scale(1.02); }
  100% { opacity: 0; transform: scale(1.05); }
}
@keyframes charPop {
  0% { transform: translateY(6px) scale(0.94); opacity: 0; text-shadow: 0 0 0 rgba(255, 255, 255, 0); }
  35% { transform: translateY(-2px) scale(1.08); opacity: 1; text-shadow: 0 10px 26px rgba(255, 255, 255, 0.28); }
  60% { transform: translateY(0) scale(1.02); opacity: 1; text-shadow: 0 4px 12px rgba(255, 255, 255, 0.18); }
  100% { transform: translateY(0) scale(1); opacity: 1; text-shadow: 0 0 0 rgba(255, 255, 255, 0); }
}
`;

// Custom Background Pattern Component
// Increased opacity to 0.12 so it doesn't blend invisibly
const BackgroundPattern = () => (
  <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.08]" aria-hidden="true">
     <svg width="100%" height="100%">
       <pattern id="chef-pattern" x="0" y="0" width="280" height="280" patternUnits="userSpaceOnUse" patternTransform="rotate(-12)">
          <image href="/logo/logobadge/unoyukikocakeslogo_green_bgremoved.png" x="20" y="20" width="140" height="140" opacity="0.8" />
       </pattern>
       <rect x="0" y="0" width="100%" height="100%" fill="url(#chef-pattern)" />
     </svg>
  </div>
);

const SketchyBox = ({ 
  children, 
  className = "",
  borderColor = "border-[#fff9ed]",
  contentClassName = ""
}: { 
  children: React.ReactNode, 
  className?: string,
  borderColor?: string,
  contentClassName?: string
}) => (
  <div className={`relative w-full h-full ${className}`}>
    {/* Hand-drawn border simulation - Layer 1 */}
    <div 
      className={`absolute inset-0 ${borderColor} border-[3px] opacity-90 pointer-events-none transition-all duration-500`} 
      style={{ borderRadius: '95% 5% 97% 3% / 3% 96% 3% 97%' }}
    ></div>
    {/* Hand-drawn border simulation - Layer 2 (Inner wobble) */}
    <div 
      className={`absolute inset-[3px] ${borderColor} border-[2px] opacity-70 pointer-events-none transition-all duration-500`} 
      style={{ borderRadius: '2% 98% 2% 98% / 98% 2% 98% 2%' }}
    ></div>
    
    <div className={`relative z-10 p-8 md:p-12 flex flex-col items-center justify-center text-center h-full w-full ${contentClassName}`}>
      {children}
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fff9ed] text-[#5A5A5A] overflow-x-hidden font-sans selection:bg-[#77c5ba] selection:text-white relative">
      
      <style>{GLOBAL_ANIMATIONS}</style>

      {/* Global Background Pattern */}
      <BackgroundPattern />

      {/* 1. Hero Image - z-10 to sit above pattern */}
      <header className="relative z-10 w-full overflow-hidden bg-[#fff9ed]">
        <img 
          src="/images/hero/hero-main.jpg" 
          alt="Bento Cake and Tea" 
          className="block w-full h-auto object-contain md:object-cover object-center"
          style={{ animation: 'fadeInUp 0.9s ease-out 0.05s both, slowZoom 18s ease-in-out infinite alternate', backgroundColor: '#fff9ed' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-[#fff9ed]/18 to-[#fff9ed]/32 pointer-events-none" />
        {/* Logo Overlay */}
        <div
          className="absolute left-1/2 flex flex-col items-center z-10 pointer-events-none"
          style={{ transform: 'translateX(-50%)', animation: 'logoDropPath 1.6s cubic-bezier(0.25, 1, 0.4, 1) 0.15s both' }}
        >
          <div className="relative flex flex-col items-center">
            <div
              aria-hidden="true"
              className="absolute top-[-12px] -z-10 flex flex-col items-center"
            >
              <div
                className="w-[2px] h-[45vh] md:h-[70vh] bg-gradient-to-b from-[#d7f4ed] via-[#77c5ba] to-transparent opacity-70"
                style={{ animation: 'logoTrailFade 1.6s ease-out 0.15s both', filter: 'blur(0.3px)' }}
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -z-10 w-20 h-20 rounded-full bg-[#77c5ba]/30 blur-3xl"
              style={{ animation: 'logoHalo 1.6s ease-out 0.15s both' }}
            />
            <ChefLogo
              variant="badge"
              width={72}
              className="drop-shadow-[0_10px_24px_rgba(0,0,0,0.24)]"
              style={{ animation: 'logoTiltBounce 1.6s cubic-bezier(0.25, 1, 0.4, 1) 0.15s both' }}
            />
          </div>
        </div>
        {/* Scroll cue */}
        <div className="flex absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 text-[#fff9ed]">
          <span className="text-[10px] tracking-[0.3em] uppercase bg-white/25 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
            Scroll
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-white/60 via-white/80 to-transparent" />
          <div
            className="w-3 h-3 border-b border-r border-white rotate-45"
            style={{ animation: 'arrowDown 1.2s ease-in-out infinite' }}
          />
        </div>
      </header>

      {/* 2. Teal Introduction - z-10 to cover pattern with solid color */}
      <section
        className="bg-[#77c5ba] py-16 px-4 md:px-10 flex justify-center relative z-10"
        style={{ animation: 'fadeInUp 0.9s ease 0.15s both' }}
      >
        <div className="w-full max-w-6xl">
          <div className="relative bg-[#77c5ba] shadow-lg flex justify-center">
            <div
              className="relative mx-auto w-full max-w-5xl bg-[#77c5ba] flex items-center justify-center overflow-hidden"
              style={{ aspectRatio: '4 / 3', maxHeight: '760px', minHeight: '360px' }}
            >
              <div className="pointer-events-none absolute inset-0">
                <div
                  className="absolute inset-[-12%] rounded-[42px] bg-gradient-to-b from-[#c7f4ea]/12 via-[#77c5ba]/8 to-transparent blur-3xl"
                  style={{ animation: 'bloomPulse 9s ease-in-out infinite' }}
                ></div>
              </div>
              <div className="relative w-full max-w-3xl" style={{ animation: 'frameGlow 10s ease-in-out infinite' }}>
                <SketchyBox
                  className="w-full h-full max-w-3xl bg-transparent"
                  borderColor="border-[#fff9ed]"
                  contentClassName="gap-6 md:gap-8 text-center px-6 md:px-10 lg:px-14 py-10"
                >
                  <ChefLogo className="text-[#fff9ed]" width="clamp(30px, 4vw, 60px)" />
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold serif leading-tight md:leading-tight tracking-widest text-[#fff9ed]">
                  {['\u30d7','\u30c6\u30a3','\u30d5','\u30fc','\u30eb','\u306b'].map((ch, i) => (
                    <span
                      key={`line1-${i}`}
                      style={{
                        animation: `charPop 2s cubic-bezier(0.33, 1, 0.68, 1)`,
                        animationDelay: `${i * 0.08}s`,
                        animationIterationCount: 2,
                        animationFillMode: 'forwards',
                        display: 'inline-block'
                      }}
                    >
                      {ch}
                    </span>
                  ))}
                  <br className="hidden md:block" />
                  {['\u98db','\u3073','\u5207','\u308a','\u306e','\u3057','\u3042','\u308f','\u305b','\u3092','\uff01'].map((ch, i) => (
                    <span
                      key={`line2-${i}`}
                      style={{
                        animation: `charPop 2s cubic-bezier(0.33, 1, 0.68, 1)`,
                        animationDelay: `${0.5 + i * 0.07}s`,
                        animationIterationCount: 2,
                        animationFillMode: 'forwards',
                        display: 'inline-block'
                      }}
                    >
                      {ch}
                    </span>
                  ))}
                </h2>
                  <p className="text-base md:text-lg tracking-[0.25em] font-semibold text-[#fff9ed]">
                    All Vegan & GlutenFree
                  </p>
                  <ChefLogo className="text-[#fff9ed]" width="clamp(30px, 4vw, 60px)" />
                </SketchyBox>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 3. Mission (Gold/Brown) - sketchy frames like reference */}
      <section
        className="bg-[#ab9873] py-16 px-4 md:px-12 relative z-10"
        style={{ animation: 'fadeInUp 0.9s ease 0.22s both' }}
      >
        <div className="max-w-6xl mx-auto relative">
          <div className="pointer-events-none absolute inset-0 border-2 border-[#f1e7d3] rounded-[40px] opacity-90 -rotate-1" aria-hidden="true"></div>
          <div className="pointer-events-none absolute inset-3 border-2 border-[#f7eedd] rounded-[44px] opacity-85 rotate-1" aria-hidden="true"></div>
          <div className="relative rounded-[36px] p-5 md:p-8 bg-[#ab9873]/40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
              
              {/* Text Content */}
              <div className="relative text-[#fff9ed] flex flex-col items-center">
                <div className="relative bg-[#ab9873] rounded-[30px] px-8 md:px-10 py-10 md:py-12 flex flex-col items-center gap-5 md:gap-6 w-full">
                  <ChefLogo className="text-[#fff9ed]" width="clamp(30px, 4vw, 60px)" />
                  <h2 className="text-3xl md:text-4xl serif font-bold tracking-[0.25em] text-center">
                    おいしさとやさしさの約束
                  </h2>
                  <p className="leading-[2] text-base md:text-lg font-medium tracking-wide text-center max-w-xl">
                    植物性100%でも心に残る満足感を<br />
                    素材はできる限り国産・オーガニック<br />
                    季節の彩りと香りを大切にしています
                  </p>
                  <p className="leading-[2] text-base md:text-lg font-medium tracking-wide text-center max-w-xl">
                    小さなお子さまにも安心して贈れる<br />
                    そんなお菓子作りを続けています
                  </p>
                  <button className="border border-[#fff9ed] px-7 py-2 rounded-full text-sm tracking-[0.2em] text-[#fff9ed] hover:bg-[#fff9ed] hover:text-[#ab9873] transition-colors duration-300">
                    私たちについて
                  </button>
                  <ChefLogo className="text-[#fff9ed]" width="clamp(30px, 4vw, 60px)" />
                </div>
              </div>
              
              {/* Images stacked */}
              <div className="relative flex items-center justify-center">
                <div className="relative bg-[#ab9873] rounded-[36px] overflow-hidden min-h-[360px] flex flex-col gap-4 items-center justify-center px-4 py-6">
                  <div className="w-full max-w-sm aspect-[5/4] rounded-[28px] overflow-hidden shadow-lg">
                    <img 
                      src="/images/products/cake/cake-before-vegan.jpg" 
                      alt="Cake display at the counter" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full max-w-sm aspect-[5/4] rounded-[28px] overflow-hidden shadow-lg">
                    <img 
                      src="/images/products/menu/menu-set-1.jpg" 
                      alt="Assorted vegan treats" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
  
            </div>
          </div>
        </div>
      </section>
      {/* 4. Split Columns (Allergy & Ramen) - z-10 */}
      <section
        className="bg-[#77c5ba] px-4 py-4 md:px-12 md:py-12 text-[#fff9ed] relative z-10"
        style={{ animation: 'fadeInUp 0.9s ease 0.28s both' }}
      >
         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            <div className="aspect-square">
              <SketchyBox>
                 <h3 className="text-3xl serif font-medium mb-4 tracking-[0.2em]">アレルギー対応</h3>
                 <span className="text-3xl text-[#FDE68A] mb-6 block">✻</span>
                 <p className="text-base leading-loose tracking-wide opacity-90 mb-6 font-light">
                    小麦製品を調理したことのない<br/>
                    厨房で調理しています<br/>
                    コンタミの可能性を保証するも<br/>
                    のではございません
                 </p>
                 <div className="text-lg font-medium mb-2 tracking-wider">
                    小麦・乳・卵 不使用
                 </div>
                 <p className="text-sm opacity-80 mt-2 tracking-wide">
                    一部にナッツを含む商品<br/>がございます
                 </p>
              </SketchyBox>
            </div>

            <div className="aspect-square">
               <SketchyBox>
                  <h3 className="text-3xl serif font-medium mb-4 tracking-[0.2em]">UNO RAMEN</h3>
                  <span className="text-3xl text-[#FDE68A] mb-6 block">✻</span>
                  <div className="h-12"></div>
               </SketchyBox>
            </div>

         </div>
      </section>

      {/* 5. Products - transparent bg so pattern shows */}
      <section
        className="py-20 relative"
        style={{ animation: 'fadeInUp 0.9s ease 0.34s both' }}
      >
         <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <div className="mb-16">
               <h2 className="text-[60px] serif text-[#ab9873] italic tracking-wider mb-2">product</h2>
               <p className="text-[10px] md:text-xs text-gray-400 tracking-[0.2em] uppercase">
                  プティフール | 焼き菓子 | ホールケーキ | ギフト | 雑貨
               </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16 md:gap-x-12">
               {PRODUCT_CATEGORIES.map((product) => (
                  <div key={product.id} className="group flex flex-col items-center text-center">
                     <div className="relative w-36 h-36 md:w-56 md:h-56 rounded-full overflow-hidden mb-8 shadow-md ring-4 ring-offset-4 ring-[#ab9873]/20 bg-white">
                        <img 
                           src={product.image} 
                           alt={product.title} 
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex flex-col items-center justify-center text-white p-4">
                           <h3 className="text-xl md:text-3xl serif tracking-widest mb-2 drop-shadow-md">{product.title}</h3>
                           <p className="text-[9px] md:text-[10px] uppercase tracking-wider opacity-90">{product.englishTitle}</p>
                        </div>
                     </div>
                     <p className="text-[10px] text-gray-400 leading-relaxed max-w-[180px] hidden md:block tracking-wide bg-[#fff9ed]/80 backdrop-blur-sm p-1 rounded">
                        {product.subtitle}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. Online Shop CTA */}
      <section
        className="py-12 px-4 md:px-12 relative z-10"
        style={{ animation: 'fadeInUp 0.9s ease 0.4s both' }}
      >
         <div className="max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm border border-[#ab9873]/20 rounded-3xl shadow-lg overflow-hidden">
               <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="md:col-span-2 p-8 md:p-12 flex flex-col gap-4">
                     <p className="text-xs uppercase tracking-[0.3em] text-[#ab9873]">Online Shop</p>
                     <h3 className="text-2xl md:text-3xl serif font-semibold text-[#5A4D41] tracking-widest">
                        お取り寄せ・ギフトのご案内
                     </h3>
                     <p className="text-sm md:text-base text-[#5A5A5A] leading-relaxed">
                        プティフール、焼き菓子、ホールケーキ、ギフトセットをオンラインでご注文いただけます。
                        アレルギー表記付きで全国配送にも対応しています。
                     </p>
                     <div className="flex flex-wrap gap-3 pt-2">
                        <a 
                          href="https://example.com/onlineshop" 
                          className="bg-[#ab9873] text-white px-6 py-2 rounded-full text-sm tracking-[0.2em] hover:bg-[#967f59] transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          オンラインショップへ
                        </a>
                        <a 
                          href="#contact" 
                          className="border border-[#ab9873] text-[#ab9873] px-6 py-2 rounded-full text-sm tracking-[0.2em] hover:bg-[#ab9873] hover:text-white transition-colors"
                        >
                          お問い合わせ
                        </a>
                     </div>
                     <ul className="grid grid-cols-2 gap-3 text-xs md:text-sm text-[#5A4D41] tracking-wide pt-4">
                        <li>• 全品ヴィーガン & グルテンフリー</li>
                        <li>• ギフト包装・梱包対応</li>
                        <li>• 冷凍便で全国配送</li>
                        <li>• カスタムメッセージ同封可</li>
                     </ul>
                  </div>
                  <div className="relative bg-[#ab9873]/10 flex items-center justify-center p-6">
                     <div className="absolute inset-4 border border-[#ab9873]/40 rounded-[28px] -rotate-1" aria-hidden="true"></div>
                     <div className="absolute inset-6 border border-[#ab9873]/30 rounded-[32px] rotate-1" aria-hidden="true"></div>
                     <img 
                       src="/images/hero/hero-main.jpg" 
                       alt="Assorted vegan sweets gift box" 
                       className="relative z-10 rounded-2xl object-cover w-full h-full max-h-[260px] shadow-md"
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 7. About Us (Teal) - z-10 */}
      <section
        id="contact"
        className="bg-[#77c5ba] py-16 px-6 md:px-12 text-[#fff9ed] relative z-10"
        style={{ animation: 'fadeInUp 0.9s ease 0.46s both' }}
      >
         <div className="max-w-6xl mx-auto">
            <SketchyBox className="bg-white/5 backdrop-blur-sm">
               <h2 className="text-4xl serif text-center mb-12 tracking-[0.2em]">About Us</h2>
               
               <div className="flex flex-col lg:flex-row gap-12 text-left w-full">
                  {/* Text */}
                  <div className="flex-1">
                     <p className="leading-[2.5] text-sm md:text-base font-light mb-8 text-justify tracking-wider">
                        京都の中心地から北へおよそ20分ほどの一乗寺エリアは、
                        ユニークなお店が数多く集い、春には桜が、秋には紅葉といった
                        風光明媚な街であります。<br />
                        そんな魅力的なアーケードの一角にムシヤシナイはございます。
                        ぜひお越しください。
                     </p>
                     <div className="space-y-2 text-sm font-light opacity-90 tracking-wide">
                        <p className="font-medium">Uno Yukiko Cakes - Mushiyashinai</p>
                        <p>京都市左京区一乗寺里ノ西町78</p>
                        <p>電話：075-723-8364</p>
                        <p>定休日：月曜・火曜</p>
                        <p>open : 11:00-18:00</p>
                        <p>イートイン : 17:30 ラストオーダー</p>
                     </div>
                  </div>

                  {/* Maps & Visuals */}
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="md:col-span-2 h-48 overflow-hidden rounded-sm border border-white/30">
                        <img src="/images/hero/hero-main.jpg" alt="Tea set and petit fours" className="w-full h-full object-cover" />
                     </div>
                     
                     {/* Mock Map */}
                     <div className="bg-[#F0F0F0] h-48 relative overflow-hidden flex items-center justify-center text-gray-500 rounded-sm">
                        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Google_Maps_Logo_2020.svg/512px-Google_Maps_Logo_2020.svg.png')] bg-center bg-no-repeat bg-contain opacity-10"></div>
                        <div className="z-10 flex flex-col items-center">
                           <MapPin className="text-red-500 mb-1" size={24} />
                           <span className="text-xs font-bold">Google Map</span>
                        </div>
                     </div>

                     {/* Mock Calendar */}
                     <div className="bg-white text-gray-600 h-48 p-4 flex flex-col rounded-sm">
                        <div className="text-xs text-center border-b border-gray-200 pb-2 mb-2 font-bold">2025年 11月</div>
                        <div className="flex-1 grid grid-cols-7 text-[10px] text-center items-center">
                           <span className="text-red-400 font-bold">日</span><span>月</span><span>火</span><span>水</span><span>木</span><span>金</span><span>土</span>
                           {[...Array(30)].map((_, i) => (
                              <span key={i} className={`p-1 flex items-center justify-center ${[2,3,9,10,16,17,23,24].includes(i) ? 'bg-gray-100 rounded-full text-gray-400' : ''}`}>
                                 {i + 1}
                              </span>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </SketchyBox>
         </div>
      </section>

      {/* 7. Vertical Links List - transparent so pattern shows */}
      <section className="py-24 relative z-10">
         <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-center">
              {VERTICAL_LINKS.map((link, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-[#5A5A5A] hover:text-[#77c5ba] text-base tracking-[0.22em] transition-colors duration-300 font-light bg-[#fff9ed]/70 px-3 py-2 rounded-md shadow-sm"
                >
                  {link}
                </a>
              ))}
            </div>
         </div>
      </section>

      {/* 8. Footer Hero - z-10 */}
      <footer className="relative h-[70vh] w-full z-10">
         <img 
            src="/images/products/cake/cake-before-vegan.jpg" 
            alt="Whole cakes and tarts display" 
            className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-[#5A4D41]/60 flex flex-col justify-between p-12 text-[#fff9ed]">
            
            <div className="mt-12 text-center w-full flex justify-center">
               <ChefLogo />
            </div>

            <div className="border-t border-[#fff9ed]/40 pt-8 flex flex-col md:flex-row justify-between items-end">
               <div className="mb-8 md:mb-0">
                  <h2 className="text-3xl serif mb-2 tracking-widest">Find us here</h2>
                  <a href="mailto:hello@reallygreatsite.com" className="text-sm tracking-wider font-light hover:underline">
                     hello@reallygreatsite.com
                  </a>
               </div>
               
               <div className="flex gap-4">
                  {[Facebook, Twitter, Instagram].map((Icon, i) => (
                     <a key={i} href="#" className="w-10 h-10 border border-[#fff9ed] rounded-full flex items-center justify-center hover:bg-[#fff9ed] hover:text-[#5A4D41] transition-all duration-300">
                        <Icon size={16} />
                     </a>
                  ))}
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default App;
