import React, { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "../../context/RouterContext";
import { 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight,
  MessageSquare,
  Sparkles
} from "lucide-react";
import { createWhatsAppLink, trackEvent } from "../../utils/analytics";

// Imagens principais de alta definição para cada categoria
const HERO_ITEMS = [
  {
    id: "camiseta",
    short: "Camiseta",
    name: "Camiseta",
    fullName: "Camisetas Personalizadas & Moda",
    tag: "Promocional & Moda",
    desc: "Algodão penteado, dry-fit e poliviscose com corte clássico ou oversized.",
    image: "/images/hero/01-tshirt.jpg",
  },
  {
    id: "polo",
    short: "Polo",
    name: "Polo Piquet",
    fullName: "Camisas Polo Corporativas",
    tag: "Atendimento & Equipes",
    desc: "Malha piquet premium, golas estruturadas e bordado de alta definição.",
    image: "/images/hero/02-polo.jpg",
  },
  {
    id: "social",
    short: "Camisaria",
    name: "Camisa Social",
    fullName: "Camisaria Executiva Sob Medida",
    tag: "Corporativo & Gestão",
    desc: "Modelagens slim e tradicionais em tricoline, maquinetados e fios nobres.",
    image: "/images/hero/03-social.jpg",
  },
  {
    id: "jaleco",
    short: "Jaleco",
    name: "Jaleco & Saúde",
    fullName: "Jalecos & Linha Hospitalar",
    tag: "Saúde & Laboratórios",
    desc: "Gabardine nobre, tecidos antimicrobianos e acabamento sanitário.",
    image: "/images/hero/04-jaleco.jpg",
  },
  {
    id: "blazer",
    short: "Alfaiataria",
    name: "Alfaiataria",
    fullName: "Alfaiataria & Blazers Executivos",
    tag: "Alta Gestão & Recepção",
    desc: "Cortes refinados com forração interna e acabamento de alfaiataria fina.",
    image: "/images/hero/05-blazer.jpg",
  },
  {
    id: "industrial",
    short: "Operacional",
    name: "Brim Operacional",
    fullName: "Uniforme Operacional & Pesado",
    tag: "Indústria & Logística",
    desc: "Brim 100% algodão ou misto, costura reforçada e faixas refletivas.",
    image: "/images/hero/06-industrial.jpg",
  },
  {
    id: "frigorifico",
    short: "Frigorífico",
    name: "Térmico Sub-Zero",
    fullName: "Uniformes Térmicos & Frigoríficos",
    tag: "Câmaras Frias",
    desc: "Mantas térmicas com proteção para baixas temperaturas e umidade.",
    image: "/images/hero/07-frigo.jpg",
  },
  {
    id: "private-label",
    short: "Para sua Loja",
    name: "Para sua Loja",
    fullName: "Coleções para sua Loja",
    tag: "Marcas & Varejo B2B",
    desc: "Confecção completa sob a etiqueta da sua marca, com molde próprio ou desenvolvido.",
    image: "/images/hero/08-dress.jpg",
  },
  {
    id: "wind-banner",
    short: "Wind Banner",
    name: "Wind Banner",
    fullName: "Wind Banners & Comunicação Têxtil",
    tag: "Comunicação Visual",
    desc: "Poliéster naval com estampa em sublimação digital de alta durabilidade.",
    image: "/images/hero/09-windbanner.jpg",
  },
];

export const NatexHero: React.FC = () => {
  const { openQuoteModal } = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollNavRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [imagesLoadedMap, setImagesLoadedMap] = useState<Record<number, boolean>>({});
  const imagesCacheRef = useRef<HTMLImageElement[]>([]);
  
  // Transition physics
  const targetIndexRef = useRef<number>(0);
  const transitionAlphaRef = useRef<number>(1);
  const fromIndexRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);

  // Pre-load all 9 images immediately
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];

    HERO_ITEMS.forEach((item, idx) => {
      const img = new Image();
      img.src = item.image;
      img.onload = () => {
        setImagesLoadedMap((prev) => ({ ...prev, [idx]: true }));
        // If it's the first image, render immediately
        if (idx === 0) {
          drawCanvas(0, 0, 1);
        }
      };
      loadedImages.push(img);
    });

    imagesCacheRef.current = loadedImages;
  }, []);

  // Canvas drawing function (supports smooth cross-fade, DPR retina, clean proportion)
  const drawCanvas = useCallback((toIdx: number, fromIdx: number = 0, alpha: number = 1) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const canvasW = canvas.width;
    const canvasH = canvas.height;

    // Minimalist clean light background
    ctx.fillStyle = "#F8FAFC";
    ctx.fillRect(0, 0, canvasW, canvasH);

    const imgTo = imagesCacheRef.current[toIdx];
    const imgFrom = imagesCacheRef.current[fromIdx];

    const renderImg = (img: HTMLImageElement, opacity: number) => {
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const imgW = img.naturalWidth;
      const imgH = img.naturalHeight;
      const imgRatio = imgW / imgH;
      const canvasRatio = canvasW / canvasH;

      let dw: number, dh: number, dx: number, dy: number;

      if (canvasRatio > imgRatio) {
        // Desktop
        dw = canvasW;
        dh = canvasW / imgRatio;
        dx = 0;
        dy = (canvasH - dh) / 2;
      } else {
        // Mobile vertical
        dh = canvasH;
        dw = canvasH * imgRatio;
        dx = (canvasW - dw) / 2;
        dy = 0;
      }

      ctx.globalAlpha = opacity;
      ctx.drawImage(img, dx, dy, dw, dh);
    };

    if (alpha < 1 && imgFrom && imgFrom.complete) {
      renderImg(imgFrom, 1);
      renderImg(imgTo, alpha);
    } else if (imgTo && imgTo.complete) {
      renderImg(imgTo, 1);
    }
    ctx.globalAlpha = 1;
  }, []);

  // Resize handler with Retina support
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = container.clientWidth;
      const height = container.clientHeight;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      drawCanvas(currentIndex, currentIndex, 1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex, drawCanvas]);

  // Smooth transition on category selection
  const changeToIndex = useCallback((newIndex: number) => {
    if (newIndex === currentIndex) return;

    fromIndexRef.current = currentIndex;
    targetIndexRef.current = newIndex;
    setCurrentIndex(newIndex);
    transitionAlphaRef.current = 0;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const startTime = performance.now();
    const duration = 280; // 280ms crisp transition

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease-out curve
      const eased = 1 - Math.pow(1 - progress, 3);
      transitionAlphaRef.current = eased;

      drawCanvas(newIndex, fromIndexRef.current, eased);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        transitionAlphaRef.current = 1;
        drawCanvas(newIndex, newIndex, 1);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    // Scroll only the pill container horizontally without affecting window scroll
    if (scrollNavRef.current) {
      const navEl = scrollNavRef.current;
      const targetBtn = navEl.children[newIndex] as HTMLElement;
      if (targetBtn) {
        const scrollLeftTarget = targetBtn.offsetLeft - (navEl.clientWidth / 2) + (targetBtn.clientWidth / 2);
        navEl.scrollTo({ left: Math.max(0, scrollLeftTarget), behavior: "smooth" });
      }
    }
  }, [currentIndex, drawCanvas]);

  const currentItem = HERO_ITEMS[currentIndex];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = (prev + 1) % HERO_ITEMS.length;
      changeToIndex(next);
      return next;
    });
  }, [changeToIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => {
      const prevIdx = (prev - 1 + HERO_ITEMS.length) % HERO_ITEMS.length;
      changeToIndex(prevIdx);
      return prevIdx;
    });
  }, [changeToIndex]);

  // Wheel and swipe support for smooth transitions when scrolling over the hero
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let touchStartY = 0;
    let touchStartX = 0;
    let isTransitioning = false;

    const handleWheel = (e: WheelEvent) => {
      // If user scrolls horizontally or shifts with mousewheel, navigate items
      if (Math.abs(e.deltaX) > 30 && !isTransitioning) {
        isTransitioning = true;
        if (e.deltaX > 0) {
          handleNext();
        } else {
          handlePrev();
        }
        setTimeout(() => {
          isTransitioning = false;
        }, 350);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const diffX = touchStartX - touchEndX;
      const diffY = touchStartY - touchEndY;

      // Detect horizontal swipe
      if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: true });
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentIndex, handleNext, handlePrev]);

  // Auto transition periodically if inactive (subtle rotation)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % HERO_ITEMS.length;
        changeToIndex(next);
        return next;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [changeToIndex]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[540px] sm:h-[620px] lg:h-[680px] bg-[#FAF9F6] border-b border-stone-200/90 overflow-hidden select-none"
    >
      {/* 1. Main Canvas Render (Crisp Garment Display) */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block z-0"
      />

      {/* Subtle Minimalist Gradients for Clean Readability */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-t from-[#FAF9F6]/95 via-[#FAF9F6]/30 to-transparent sm:bg-gradient-to-r sm:from-[#FAF9F6]/95 sm:via-[#FAF9F6]/50 sm:to-transparent" />

      {/* 2. Technical Garment Selector (Atelier Studio Bar) */}
      <div className="absolute top-4 sm:top-6 left-0 right-0 z-20 flex items-center justify-center px-4 overflow-x-auto no-scrollbar">
        <div 
          ref={scrollNavRef}
          className="flex items-center gap-1 sm:gap-1.5 p-1 rounded-xl bg-white/92 backdrop-blur-md border border-stone-300/80 shadow-sm max-w-full overflow-x-auto no-scrollbar"
        >
          {HERO_ITEMS.map((item, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={item.id}
                onClick={() => changeToIndex(index)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? "bg-[#0F172A] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-950 hover:bg-stone-100"
                }`}
              >
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />}
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Bespoke Technical Spec Card (Bottom Left with haute manufacture framing) */}
      <div className="absolute bottom-6 left-4 sm:left-8 right-4 sm:right-auto z-20 max-w-full sm:max-w-lg">
        <div className="p-6 sm:p-7 rounded-[4px] bg-white/95 backdrop-blur-xl border border-stone-300/90 shadow-xl shadow-slate-950/10 text-slate-900 space-y-3.5">
          
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {currentItem.fullName}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
              {currentItem.desc}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={() => {
                trackEvent('quote_modal_open', { origin: `hero_${currentItem.id}` });
                openQuoteModal({ source: `hero_${currentItem.id}` });
              }}
              className="inline-flex items-center justify-center px-5 py-2.5 bg-[#FF6B00] hover:bg-[#e05e00] text-white text-xs sm:text-sm font-bold rounded-[6px] shadow-sm transition-all hover:translate-y-[-1px] active:translate-y-[0px] cursor-pointer"
            >
              <span>Solicitar Cotação</span>
            </button>

            <a
              href={createWhatsAppLink(`Olá! Gostaria de uma cotação para ${currentItem.fullName} com a Natex Confecções.`, `hero_${currentItem.id}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-slate-800 text-xs sm:text-sm font-semibold rounded-[6px] border border-stone-200/80 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-700" />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>
      </div>

    </section>
  );
};
