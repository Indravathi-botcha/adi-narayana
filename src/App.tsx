import { motion, AnimatePresence } from "motion/react";
import { Home, User, Tent, Briefcase, Mail, UnfoldVertical, Box, Sun, Grid3X3, X } from "lucide-react";
import { useState, useEffect, useRef, type ReactNode, type SVGProps } from "react";
import resumeUrl from "../assets/adinarayana_balla_resume.pdf?url";
import mayaShowreelUrl from "../assets/maya-showreel.mp4?url";

// --- Constants ---

const WHATSAPP_NUMBER = "919133344153";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Adinarayana, I came across your portfolio and would love to chat."
)}`;
const CONTACT_EMAIL = "adinarayanaballa32@gmail.com";

// --- Icons ---

const WhatsAppIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M19.05 4.91A10.06 10.06 0 0 0 12 2C6.48 2 2 6.48 2 12c0 1.76.46 3.48 1.34 4.99L2 22l5.13-1.32A9.99 9.99 0 0 0 12 22c5.52 0 10-4.48 10-10 0-2.67-1.04-5.18-2.95-7.09zM12 20.13a8.13 8.13 0 0 1-4.14-1.13l-.3-.18-3.04.78.81-2.96-.2-.31A8.12 8.12 0 0 1 3.87 12C3.87 7.51 7.51 3.87 12 3.87 14.18 3.87 16.22 4.72 17.76 6.26A8.06 8.06 0 0 1 20.13 12c0 4.49-3.64 8.13-8.13 8.13zm4.46-6.07c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.55.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.2-.72-.64-1.21-1.43-1.35-1.67-.14-.24-.02-.37.1-.49.11-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42l-.47-.01c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.43-.58 1.63-1.15.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28z" />
  </svg>
);

// --- Components ---

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full px-8 py-6 h-20 glass border-b border-black/5">
    <div className="text-2xl font-black tracking-tighter text-black font-display uppercase">
      ADINARAYANA BALLA
    </div>
  </header>
);

const heroVideos = [
  "lunjGXURiP4", // Talking Tom Heroes
  "0vygDVbB2YQ", // Barbie
  "tLFk-sl59Cw"  // Little Singham 3D
];

const SectionHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroVideos.length);
    }, 90000); // 1.5 minutes
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen flex flex-col items-center justify-center pt-32 pb-40 px-6 overflow-hidden"
    >
      <div className="relative w-full max-w-7xl flex flex-col items-center text-center">
        {/* Background circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-5 pointer-events-none -z-10">
          <div className="w-full h-full border border-black/10 rounded-full scale-150"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border border-black/5 rounded-full"></div>
        </div>

        <p className="font-display text-xs font-bold text-on-surface-variant mb-6 tracking-[0.4em] uppercase">
          5 Years of Animation Production
        </p>
        <h1 className="font-display text-4xl sm:text-6xl lg:text-8xl font-black text-black max-w-5xl leading-tight mb-12">
          CRAFTING CHARACTER & ENVIRONMENT WORLDS
        </h1>

        <div className="relative z-20 w-full max-w-4xl flex flex-col items-center">
          <div className="w-full aspect-video rounded-xl overflow-hidden group shadow-[0_40px_80px_rgba(0,0,0,0.06)] bg-surface-low border border-black/5 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="absolute inset-0 w-full h-full"
              >
                <iframe
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 brightness-90 group-hover:brightness-100"
                  src={`https://www.youtube.com/embed/${heroVideos[currentIndex]}?autoplay=1&mute=1&controls=0&loop=1&playlist=${heroVideos[currentIndex]}&showinfo=0&rel=0&modestbranding=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/5 pointer-events-none group-hover:bg-transparent transition-colors duration-500"></div>
          </div>

          {/* Dots */}
          <div className="mt-8 flex gap-3">
            {heroVideos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                  currentIndex === idx ? "bg-black w-8" : "bg-black/20 hover:bg-black/40"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-6 items-center justify-center">
          <button className="bg-black text-white px-10 py-4 rounded-full font-display text-xs font-bold tracking-widest hover:bg-black/90 transition-all active:scale-95 duration-200">
            VIEW PORTFOLIO
          </button>
          <button className="border border-black/20 text-black px-10 py-4 rounded-full font-display text-xs font-bold tracking-widest hover:bg-black/5 transition-all active:scale-95 duration-200">
            GET IN TOUCH
          </button>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div className="p-10 text-left border border-black/5 rounded-xl bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
            <User className="w-8 h-8 text-black mb-6" />
            <h3 className="font-display text-xl font-bold mb-3 tracking-tight">CHARACTER</h3>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              Specialized in high-fidelity character modeling and topology for feature animation.
            </p>
          </div>
          <div className="p-10 text-left border border-black/5 rounded-xl bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
            <Tent className="w-8 h-8 text-black mb-6" />
            <h3 className="font-display text-xl font-bold mb-3 tracking-tight">ENVIRONMENT</h3>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              Creating immersive setdressing, modular environments, and reusable asset libraries.
            </p>
          </div>
          <div className="p-10 text-left border border-black/5 rounded-xl bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
            <Box className="w-8 h-8 text-black mb-6" />
            <h3 className="font-display text-xl font-bold mb-3 tracking-tight">PROPS</h3>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              From hero gadgets to background fill, balancing aesthetics with pipeline efficiency.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const SectionAbout = () => (
  <motion.section 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="min-h-screen flex items-center justify-center py-40 px-6 sm:px-16"
  >
    <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
      <div className="lg:col-span-7 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-on-surface-variant">Profile Summary</span>
          <h2 className="font-display text-5xl sm:text-7xl font-black text-black leading-[1.1] tracking-tighter">
            SCULPTING <br/> DIGITAL REALMS.
          </h2>
        </div>
        <div className="max-w-xl space-y-8">
          <p className="text-xl text-black/60 font-light leading-relaxed">
            I am a 3D Modeling Artist with 5 years of experience in high-end animation production. My approach is rooted in a traditional fine arts background, allowing me to bridge the gap between physical volumes and digital precision.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Proficient in Autodesk Maya and Unreal Engine, I specialize in character design, environment setdressing, and prop creation. Whether I'm building hero characters or modular set pieces, my focus is always on visual integrity and production efficiency.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 pt-4">
          {["MAYA", "UNREAL ENGINE", "ZBRUSH", "BLENDER", "CLAY SCULPTING"].map(tech => (
            <span key={tech} className="px-6 py-2 bg-surface-low rounded-full font-display text-[10px] font-bold tracking-widest text-black">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="lg:col-span-5 relative">
        <div className="aspect-[4/5] bg-surface-low overflow-hidden rounded-2xl shadow-2xl relative z-10 group">
          <img 
            alt="Adinarayana Balla" 
            className="w-full h-full object-cover grayscale brightness-95 contrast-[1.05] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000 ease-out" 
            referrerPolicy="no-referrer"
            src="/assets/adi.jpeg"
          />
        </div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-black/10 -z-0"></div>
        <div className="absolute -top-10 -left-10 w-20 h-20 border border-black/10 -z-0"></div>
      </div>
    </div>
  </motion.section>
);

const muralImages = Object.values(
  import.meta.glob("../assets/murals/*.{jpeg,jpg,png,webp}", {
    eager: true,
    import: "default",
  })
) as string[];

const sculptingImages = Object.values(
  import.meta.glob("../assets/sculpting/*.{jpeg,jpg,png,webp}", {
    eager: true,
    import: "default",
  })
) as string[];

const sketchingImages = Object.values(
  import.meta.glob("../assets/sketching/*.{jpeg,jpg,png,webp}", {
    eager: true,
    import: "default",
  })
) as string[];

const aiWorkVideos = Object.values(
  import.meta.glob("../assets/*.webm", {
    eager: true,
    import: "default",
  })
) as string[];

type MarqueeRowProps = {
  label: string;
  title: string;
  count: number;
  duration?: number;
  reverse?: boolean;
  children: ReactNode;
};

const MarqueeRow = ({
  label,
  title,
  count,
  duration = 60,
  reverse = false,
  children,
}: MarqueeRowProps) => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const dragRef = useRef({
    active: false,
    startX: 0,
    startScroll: 0,
    moved: false,
  });
  const resumeTimerRef = useRef<number | null>(null);

  const pause = () => {
    pausedRef.current = true;
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  };

  const scheduleResume = (delay = 1200) => {
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = window.setTimeout(() => {
      pausedRef.current = false;
      resumeTimerRef.current = null;
    }, delay);
  };

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    let raf = 0;
    let last = performance.now();
    let initialized = false;

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;

      const half = track.scrollWidth / 2;
      if (half > 0) {
        if (!initialized) {
          if (reverse) viewport.scrollLeft = half;
          initialized = true;
        }

        if (!pausedRef.current && !dragRef.current.active) {
          const speed = half / duration;
          viewport.scrollLeft += speed * dt * (reverse ? -1 : 1);
        }

        if (viewport.scrollLeft >= half) {
          viewport.scrollLeft -= half;
          if (dragRef.current.active) dragRef.current.startScroll -= half;
        } else if (viewport.scrollLeft < 0) {
          viewport.scrollLeft += half;
          if (dragRef.current.active) dragRef.current.startScroll += half;
        }
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      if (resumeTimerRef.current !== null) {
        window.clearTimeout(resumeTimerRef.current);
        resumeTimerRef.current = null;
      }
    };
  }, [duration, reverse]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    pause();
    if (e.pointerType !== "mouse") return;
    const viewport = viewportRef.current;
    if (!viewport) return;
    dragRef.current = {
      active: true,
      startX: e.clientX,
      startScroll: viewport.scrollLeft,
      moved: false,
    };
    viewport.classList.add("is-dragging");
    viewport.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;
    if (!viewport || !dragRef.current.active) return;
    const dx = e.clientX - dragRef.current.startX;
    if (Math.abs(dx) > 3) dragRef.current.moved = true;
    viewport.scrollLeft = dragRef.current.startScroll - dx;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;
    if (viewport) {
      viewport.classList.remove("is-dragging");
      if (viewport.hasPointerCapture(e.pointerId)) {
        viewport.releasePointerCapture(e.pointerId);
      }
    }
    if (dragRef.current.active) {
      dragRef.current.active = false;
      scheduleResume(1200);
    } else {
      scheduleResume(1500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-16 mb-8 flex items-end justify-between gap-6">
        <div>
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-on-surface-variant mb-2 block">
            {label}
          </span>
          <h3 className="font-display text-3xl sm:text-5xl font-black text-black tracking-tighter leading-none">
            {title}
          </h3>
        </div>
        <span className="font-display text-xs font-bold tracking-widest text-on-surface-variant whitespace-nowrap hidden sm:block">
          {String(count).padStart(2, "0")} PIECES · DRAG TO SCROLL
        </span>
      </div>

      <div
        ref={viewportRef}
        className="marquee-viewport marquee-fade"
        onMouseEnter={pause}
        onMouseLeave={() => scheduleResume(0)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onTouchStart={pause}
        onTouchEnd={() => scheduleResume(1500)}
        onTouchCancel={() => scheduleResume(1500)}
      >
        <div ref={trackRef} className="marquee-track">
          {children}
          {children}
        </div>
      </div>
    </motion.div>
  );
};

const ImageCard = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex-shrink-0 mx-3 w-64 sm:w-72 md:w-80 aspect-[3/4] rounded-2xl overflow-hidden bg-surface-low border border-black/5 shadow-sm hover:shadow-2xl transition-all duration-500 group">
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
    />
  </div>
);

const VideoCard = ({ src }: { src: string }) => (
  <div className="flex-shrink-0 mx-3 w-64 sm:w-72 md:w-80 aspect-[3/4] rounded-2xl overflow-hidden bg-black border border-black/5 shadow-sm hover:shadow-2xl transition-all duration-500 group">
    <video
      src={src}
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
    />
  </div>
);

const SectionProjects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-40"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-16 mb-16 text-center">
        <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-on-surface-variant mb-4 block">
          Portfolio
        </span>
        <h2 className="font-display text-5xl sm:text-7xl font-black text-black leading-none tracking-tighter">
          SELECTED WORKS
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto mt-6 leading-relaxed">
          A continuous reel across disciplines — from traditional murals and
          clay sculpting to graphite sketches and AI-assisted experiments.
          Hover any row to pause it.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto px-6 sm:px-16 mb-28"
      >
        <div className="text-center mb-6">
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-on-surface-variant mb-2 block">
            Featured Reel
          </span>
          <h3 className="font-display text-3xl sm:text-5xl font-black text-black tracking-tighter leading-none">
            MAYA SHOW REEL
          </h3>
        </div>
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-[0_40px_80px_rgba(0,0,0,0.15)] border border-black/5 group">
          <video
            src={mayaShowreelUrl}
            controls
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl" />
        </div>
      </motion.div>

      <MarqueeRow
        label="Generative"
        title="AI WORKS"
        count={aiWorkVideos.length}
        duration={110}
      >
        {aiWorkVideos.map((src, i) => (
          <VideoCard key={`ai-${i}`} src={src} />
        ))}
      </MarqueeRow>

      <MarqueeRow
        label="Volume & Form"
        title="SCULPTING"
        count={sculptingImages.length}
        duration={95}
        reverse
      >
        {sculptingImages.map((src, i) => (
          <ImageCard
            key={`sculpt-${i}`}
            src={src}
            alt={`Sculpture ${i + 1}`}
          />
        ))}
      </MarqueeRow>

      <MarqueeRow
        label="Wall Art"
        title="MURALS"
        count={muralImages.length}
        duration={80}
      >
        {muralImages.map((src, i) => (
          <ImageCard key={`mural-${i}`} src={src} alt={`Mural ${i + 1}`} />
        ))}
      </MarqueeRow>

      <MarqueeRow
        label="Line & Shadow"
        title="SKETCHING"
        count={sketchingImages.length}
        duration={70}
        reverse
      >
        {sketchingImages.map((src, i) => (
          <ImageCard
            key={`sketch-${i}`}
            src={src}
            alt={`Sketch ${i + 1}`}
          />
        ))}
      </MarqueeRow>
    </motion.section>
  );
};

const ResumeViewer = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.97, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-black/5 bg-white">
              <div>
                <p className="font-display text-[10px] font-bold tracking-[0.3em] uppercase text-on-surface-variant">
                  Curriculum Vitae
                </p>
                <h3 className="font-display text-lg font-bold text-black tracking-tight">
                  Adinarayana Balla — Resume
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close resume viewer"
                className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <iframe
              src={`${resumeUrl}#toolbar=0&navpanes=0&view=FitH`}
              title="Adinarayana Balla Resume"
              className="flex-1 w-full bg-surface-low"
              onContextMenu={(e) => e.preventDefault()}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const SectionExperience = () => {
  const [resumeOpen, setResumeOpen] = useState(false);
  const experiences = [
    { year: "2023 — Present", role: "3D Modeling Artist", company: "DNEG (Redefine)", desc: "Building physical worlds for feature animation. Specialized in hero props, environment sets, and modular asset libraries for titles like Talking Tom Heroes and Barbie." },
    { year: "2021 — 2023", role: "3D Modeling Artist", company: "Symbiosys Entertainment", desc: "Production modeling for series projects including Bal Bahubali, Robin Hood, and Little Singham 3D. Balanced aesthetics with animation-friendly geometry." },
    { year: "2016 — 2020", role: "BFA Sculpture", company: "Andhra University", desc: "Foundation in traditional clay sculpting, anatomy, and proportion. Developed the spatial 'seeing' skills essential for high-end digital modeling." },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-40 px-6 sm:px-16 min-h-screen"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col mb-16 text-center">
          <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-on-surface-variant mb-4">Curriculum Vitae</span>
          <h2 className="font-display text-5xl sm:text-7xl font-black text-black leading-none tracking-tighter">PROFESSIONAL JOURNEY</h2>
        </div>

        <div className="space-y-1">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group py-12 border-b border-black/5 flex flex-col md:grid md:grid-cols-12 items-start md:items-center gap-6"
            >
              <div className="md:col-span-3 font-display text-xs font-bold tracking-widest text-on-surface-variant">
                {exp.year}
              </div>
              <div className="md:col-span-5">
                <h3 className="font-display text-3xl font-black text-black mb-1 group-hover:translate-x-2 transition-transform duration-300">{exp.role}</h3>
                <p className="text-sm font-medium text-on-surface-variant uppercase tracking-widest">{exp.company}</p>
              </div>
              <div className="md:col-span-4 text-on-surface-variant leading-relaxed text-sm">
                {exp.desc}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-black text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="font-display text-2xl font-bold mb-2">VIEW FULL RESUME</h4>
            <p className="text-white/60 text-sm">PDF Version • View only • Updated Apr 2026</p>
          </div>
          <button
            onClick={() => setResumeOpen(true)}
            className="px-8 py-4 bg-white text-black rounded-full font-display text-xs font-bold tracking-widest hover:bg-white/90 transition-all active:scale-95 duration-200"
          >
            VIEW RESUME
          </button>
        </div>
      </div>

      <ResumeViewer open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </motion.section>
  );
};

const SectionContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inquiry, setInquiry] = useState("Architectural Visualisation");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `Portfolio Inquiry — ${inquiry}${name ? ` (from ${name})` : ""}`;
    const body = [
      `Hi Adinarayana,`,
      ``,
      message || `(write your message here)`,
      ``,
      `— ${name || "(your name)"}`,
      email ? `Reply to: ${email}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  };

  return (
  <motion.section 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="pt-32 pb-40 px-6 sm:px-16"
  >
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div className="lg:col-span-5">
        <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-on-surface-variant mb-6 block">Connectivity</span>
        <h2 className="font-display text-6xl sm:text-8xl font-black text-black leading-none tracking-tighter mb-12">LET'S BUILD NEW REALITIES.</h2>
        
        <div className="space-y-10">
          <div>
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-3">Direct Contact</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-2xl font-display font-medium hover:text-black/60 transition-colors">{CONTACT_EMAIL}</a>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <a href="tel:+919133344153" className="text-on-surface-variant hover:text-black transition-colors">+91 9133344153</a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#25D366] text-white rounded-full font-display text-[10px] font-bold tracking-widest hover:bg-[#1ebd5b] transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                WHATSAPP
              </a>
            </div>
            <p className="text-on-surface-variant">Hyderabad, India</p>
          </div>
          <div>
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-3">Professional Channels</p>
            <div className="flex gap-6">
              {["LINKEDIN", "INSTAGRAM", "BEHANCE"].map(link => (
                <a key={link} href="#" className="font-display text-xs font-bold tracking-widest hover:underline">{link}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="lg:col-span-7 bg-white p-10 sm:p-16 rounded-3xl border border-black/5 shadow-2xl">
        <form className="space-y-10" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-2">
              <label htmlFor="contact-name" className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Full Name</label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-b border-black/10 py-3 focus:outline-none focus:border-black transition-colors"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="contact-email" className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Email Address</label>
              <input
                id="contact-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b border-black/10 py-3 focus:outline-none focus:border-black transition-colors"
                placeholder="john@example.com"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="contact-inquiry" className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Inquiry Type</label>
            <select
              id="contact-inquiry"
              value={inquiry}
              onChange={(e) => setInquiry(e.target.value)}
              className="w-full border-b border-black/10 py-3 focus:outline-none focus:border-black bg-transparent"
            >
              <option>Architectural Visualisation</option>
              <option>Interior Modelling</option>
              <option>Custom Asset Creation</option>
              <option>Other</option>
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="contact-message" className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Detailed Message</label>
            <textarea
              id="contact-message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border-b border-black/10 py-3 focus:outline-none focus:border-black transition-colors resize-none"
              placeholder="How can we help?"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-12 py-5 bg-black text-white rounded-full font-display text-xs font-bold tracking-widest hover:bg-black/90 transition-all active:scale-95 duration-200 flex items-center justify-center gap-3"
          >
            SEND INQUIRY
            <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              <UnfoldVertical className="w-4 h-4 rotate-90" />
            </motion.div>
          </button>
          <p className="text-[10px] text-on-surface-variant tracking-wider">
            Your inquiry opens in your default mail app, pre-filled and ready to send.
          </p>
        </form>
      </div>
    </div>
  </motion.section>
  );
};

const Navbar = ({ active, onChange }: { active: string; onChange: (id: string) => void }) => {
  const items = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Grid3X3 },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 bg-white/70 backdrop-blur-2xl rounded-full border border-black/10 px-4 py-2 shadow-2xl">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            className={`
              flex flex-col items-center justify-center px-4 py-2 rounded-full transition-all duration-300 group
              ${isActive ? 'bg-black/5 scale-105' : 'text-black/40 hover:text-black'}
            `}
          >
            <Icon className={`w-5 h-5 mb-1 ${isActive ? 'fill-current' : ''}`} />
            <span className="font-display text-[10px] font-bold uppercase tracking-tighter">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

// --- App Component ---

export default function App() {
  const [activeScreen, setActiveScreen] = useState('home');

  return (
    <div className="bg-surface-lowest min-h-screen">
      <Header />
      
      <main>
        {activeScreen === 'home' && <SectionHero />}
        {activeScreen === 'about' && <SectionAbout />}
        {activeScreen === 'projects' && <SectionProjects />}
        {activeScreen === 'experience' && <SectionExperience />}
        {activeScreen === 'contact' && <SectionContact />}
      </main>

      <Navbar active={activeScreen} onChange={setActiveScreen} />

      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-10 right-10 z-40 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:shadow-[0_15px_40px_rgba(37,211,102,0.5)] transition-shadow ring-4 ring-[#25D366]/15"
      >
        <WhatsAppIcon className="w-7 h-7" />
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping" />
      </motion.a>
    </div>
  );
}
