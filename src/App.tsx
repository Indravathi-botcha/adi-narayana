import { motion, AnimatePresence } from "motion/react";
import { Home, User, Tent, Briefcase, Mail, UnfoldVertical, Box, Sun, Grid3X3 } from "lucide-react";
import { useState, useEffect } from "react";

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
          7 Years of Animation Production
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
            I am a 3D Modeling Artist with 7 years of experience in high-end animation production. My approach is rooted in a traditional fine arts background, allowing me to bridge the gap between physical volumes and digital precision.
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

const SectionProjects = () => {
  const projects = [
    { title: "TALKING TOM HEROES", category: "Hero Props & Gadgets", video: "/assets/Screencast from 27-04-26 09:58:58 PM IST.webm" },
    { title: "BARBIE ENVIRONMENT", category: "Modular Set Design", video: "/assets/Screencast from 27-04-26 09:59:53 PM IST.webm" },
    { title: "BAL BAHUBALI", category: "Stylized Character Study", video: "/assets/Screencast from 27-04-26 10:01:06 PM IST.webm" },
    { title: "BOLLYWOOF ASSETS", category: "Production Prop Design", video: "/assets/Screencast from 27-04-26 10:02:09 PM IST.webm" },
    { title: "LITTLE SINGHAM 3D", category: "Environment Setdressing", video: "/assets/Screencast from 27-04-26 10:02:54 PM IST.webm" },
    { title: "HITRO MODULAR", category: "Structural Modeling", video: "/assets/Screencast from 27-04-26 10:05:16 PM IST.webm" },
    { title: "ROBIN HOOD SETS", category: "Scene Layout & Props", video: "/assets/Screencast from 27-04-26 10:09:19 PM IST.webm" },
    { title: "GEOMETRY TOPOLOGY", category: "Clean Mesh Study", video: "/assets/Screencast from 27-04-26 10:10:44 PM IST.webm" },
    { title: "ORGANIC SCULPTING", category: "Digital Clay Study", video: "/assets/Screencast from 27-04-26 10:11:59 PM IST.webm" },
    { title: "ATMOSPHERIC LIGHTING", category: "Render Setup", video: "/assets/Screencast from 27-04-26 10:12:57 PM IST.webm" },
    { title: "PBR MATERIAL WORK", category: "Texture Design", video: "/assets/Screencast from 27-04-26 10:16:02 PM IST.webm" },
    { title: "SET DRESSING LIB", category: "Asset Management", video: "/assets/Screencast from 27-04-26 10:20:40 PM IST.webm" },
    { title: "VIRTUAL PRODUCTION", category: "Unreal Engine Scene", video: "/assets/Screencast from 27-04-26 10:22:26 PM IST.webm" },
    { title: "HISTORICAL RECON", category: "Fine Art Research", video: "/assets/Screencast from 27-04-26 10:23:41 PM IST.webm" },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-40 px-6 sm:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-16">
          <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-on-surface-variant mb-4">Portfolio</span>
          <h2 className="font-display text-5xl sm:text-7xl font-black text-black leading-none tracking-tighter">SELECTED WORKS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-xl bg-surface-low mb-6 border border-black/5 shadow-sm transition-all group-hover:shadow-xl relative bg-black">
                <video 
                  src={project.video} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="font-display text-2xl font-black text-black mb-1">AI GENERATED</h3>
                  <p className="text-sm text-on-surface-variant uppercase tracking-widest">{project.category}</p>
                </div>
                <div className="w-10 h-10 border border-black/10 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <UnfoldVertical className="w-4 h-4 rotate-45" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const SectionExperience = () => {
  const experiences = [
    { year: "2023 — Present", role: "3D Modeling Artist", company: "DNEG (Redefine)", desc: "Building physical worlds for feature animation. Specialized in hero props, environment sets, and modular asset libraries for titles like Talking Tom Heroes and Barbie." },
    { year: "2019 — 2023", role: "3D Modeling Artist", company: "Symbiosys Entertainment", desc: "Production modeling for series projects including Bal Bahubali, Robin Hood, and Little Singham 3D. Balanced aesthetics with animation-friendly geometry." },
    { year: "2015 — 2019", role: "BFA Sculpture", company: "Andhra University", desc: "Foundation in traditional clay sculpting, anatomy, and proportion. Developed the spatial 'seeing' skills essential for high-end digital modeling." },
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
            <h4 className="font-display text-2xl font-bold mb-2">DOWNLOAD FULL RESUME</h4>
            <p className="text-white/60 text-sm">PDF Version • 2.4 MB • Updated Apr 2024</p>
          </div>
          <button className="px-8 py-4 bg-white text-black rounded-full font-display text-xs font-bold tracking-widest hover:bg-white/90 transition-all">
            GET PDF
          </button>
        </div>
      </div>
    </motion.section>
  );
};

const SectionContact = () => (
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
            <a href="mailto:adinarayanaballa32@gmail.com" className="text-2xl font-display font-medium hover:text-black/60 transition-colors">adinarayanaballa32@gmail.com</a>
            <p className="mt-2 text-on-surface-variant">+91 9133344153</p>
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
        <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Full Name</label>
              <input type="text" className="w-full border-b border-black/10 py-3 focus:outline-none focus:border-black transition-colors" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Email Address</label>
              <input type="email" className="w-full border-b border-black/10 py-3 focus:outline-none focus:border-black transition-colors" placeholder="john@example.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Inquiry Type</label>
            <select className="w-full border-b border-black/10 py-3 focus:outline-none focus:border-black bg-transparent">
              <option>Architectural Visualisation</option>
              <option>Interior Modelling</option>
              <option>Custom Asset Creation</option>
              <option>Other</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Detailed Message</label>
            <textarea rows={4} className="w-full border-b border-black/10 py-3 focus:outline-none focus:border-black transition-colors resize-none" placeholder="How can we help?" />
          </div>
          <button className="w-full sm:w-auto px-12 py-5 bg-black text-white rounded-full font-display text-xs font-bold tracking-widest hover:bg-black/90 transition-all flex items-center justify-center gap-3">
            SEND INQUIRY
            <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              <UnfoldVertical className="w-4 h-4 rotate-90" />
            </motion.div>
          </button>
        </form>
      </div>
    </div>
  </motion.section>
);

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

      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-10 right-10 z-40 bg-black text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
      >
        <UnfoldVertical className="w-5 h-5" />
      </motion.button>
    </div>
  );
}
