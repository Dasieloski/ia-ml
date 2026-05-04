"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  ArrowRight,
  DollarSign,
  TrendingUp,
  Brain,
  ChevronRight,
  Menu,
  X,
  Zap,
  Clock,
  Target,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Hero3DScene, HeroBackground } from "@/components/landing/hero-3d";

const E = [0.22, 1, 0.36, 1] as const;

// ─── Data ────────────────────────────────────────────────────────────────────

const salaryLevels = [
  { label: "Sin AI/ML", range: "$25–45k", pct: 18, dim: true },
  { label: "Jr ML Engineer", range: "$55–75k", pct: 38, dim: false },
  { label: "ML Engineer", range: "$80–110k", pct: 58, dim: false },
  { label: "Senior ML Eng.", range: "$120–155k", pct: 78, dim: false },
  { label: "AI Tech Lead", range: "$160–200k+", pct: 100, dim: false },
];

const phases = [
  {
    n: "00",
    title: "Orientación",
    weeks: 1,
    salary: "",
    desc: "Qué hace un AI Engineer y qué paga el mercado hoy.",
  },
  {
    n: "01",
    title: "Python",
    weeks: 4,
    salary: "$40–60k",
    desc: "Python limpio con calidad de producción. Sin esto, nada más funciona.",
  },
  {
    n: "02",
    title: "Matemáticas",
    weeks: 6,
    salary: "$55–75k",
    desc: "Álgebra lineal, estadística y cálculo. Exactamente lo que necesitas, nada más.",
  },
  {
    n: "03",
    title: "ML Clásico",
    weeks: 8,
    salary: "$65–95k",
    desc: "Algoritmos supervisados y no supervisados. El core que todos los empleos exigen.",
  },
  {
    n: "04",
    title: "Deep Learning",
    weeks: 10,
    salary: "$90–130k",
    desc: "Redes neuronales, PyTorch, CNNs, RNNs, Transformers. Aquí empieza el dinero real.",
  },
  {
    n: "05",
    title: "LLMs & GenAI",
    weeks: 8,
    salary: "$120–160k",
    desc: "RAG, agents, fine-tuning, APIs de OpenAI/Anthropic. La skill más cotizada en 2025–26.",
  },
  {
    n: "06",
    title: "MLOps & Deploy",
    weeks: 6,
    salary: "$150–200k+",
    desc: "Docker, CI/CD, monitoring. La diferencia entre un junior y un senior bien pagado.",
  },
];

const tech = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "scikit-learn",
  "HuggingFace",
  "LangChain",
  "OpenAI API",
  "FastAPI",
  "Docker",
  "MLflow",
  "NumPy",
  "Pandas",
  "SQL",
  "Transformers",
  "LLMs",
  "RAG",
  "Computer Vision",
  "Kubernetes",
  "Weights&Biases",
  "FAISS",
  "ChromaDB",
  "Anthropic",
  "Pydantic",
  "Streamlit",
  "Gradio",
];

// ─── Components ───────────────────────────────────────────────────────────────

function Marquee() {
  const items = [...tech, ...tech, ...tech];
  return (
    <div className="relative overflow-hidden border-y border-white/[0.05] py-3.5 bg-[#06060a]">
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#06060a] to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#06060a] to-transparent" />
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        {items.map((t, i) => (
          <span
            key={i}
            className="text-[11px] font-mono text-white/20 shrink-0 tracking-wider"
          >
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function SalaryBar({ item, i }: { item: (typeof salaryLevels)[0]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08, ease: E }}
      className="group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <span
          className={`text-xs ${item.dim ? "text-white/25" : "text-white/55"} group-hover:text-white/80 transition-colors`}
        >
          {item.label}
        </span>
        <span
          className={`text-xs font-mono font-bold ${item.dim ? "text-white/20" : "text-[#f0c040]"}`}
        >
          {item.range}
        </span>
      </div>
      <div className="h-[3px] rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: item.dim
              ? "rgba(255,255,255,0.12)"
              : `linear-gradient(90deg, #f0c040, #f0c040cc)`,
            boxShadow: item.dim ? "none" : "0 0 10px rgba(240,192,64,0.45)",
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${item.pct}%` }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 + i * 0.08, duration: 0.9, ease: E }}
        />
      </div>
    </motion.div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div className="bg-[#06060a] text-white overflow-x-hidden min-h-screen">
      {/* ── Nav ───────────────────────────────────────────────────── */}
      <header className="fixed top-0 z-50 w-full border-b border-white/[0.04] bg-[#06060a]/85 backdrop-blur-2xl">
        <div className="mx-auto flex h-12 max-w-5xl items-center justify-between px-5">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="h-6 w-6 rounded-md border border-[#f0c040]/25 bg-[#f0c040]/10 flex items-center justify-center transition-colors group-hover:bg-[#f0c040]/20">
              <DollarSign className="h-3.5 w-3.5 text-[#f0c040]" />
            </div>
            <span className="text-xs font-bold tracking-tight text-white/80 group-hover:text-white transition-colors">
              AI/ML Roadmap
            </span>
            <span className="hidden sm:inline text-[10px] font-mono text-white/20 border border-white/[0.08] rounded px-1.5 py-0.5 ml-1">
              personal
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <Button
              asChild
              size="sm"
              className="h-7 px-3 text-xs font-bold bg-[#f0c040] text-black hover:bg-[#f0c040]/85 shadow-[0_0_30px_-8px_rgba(240,192,64,0.6)]"
            >
              <Link href="/roadmap">Abrir mapa →</Link>
            </Button>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="sm:hidden h-7 w-7 flex items-center justify-center rounded text-white/40 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              {menuOpen ? (
                <X className="h-3.5 w-3.5" />
              ) : (
                <Menu className="h-3.5 w-3.5" />
              )}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: E }}
              className="overflow-hidden border-t border-white/[0.04] bg-[#06060a] sm:hidden"
            >
              <div className="px-5 py-4 space-y-1">
                <Link
                  href="/roadmap"
                  className="block text-sm text-white/60 hover:text-white py-2 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Abrir roadmap
                </Link>
                <Link
                  href="/login"
                  className="block text-sm text-white/60 hover:text-white py-2 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <HeroBackground />
        {/* Gold glow overlay for money theme */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_65%_40%,rgba(240,192,64,0.07),transparent)]" />
        </div>
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_75%_70%_at_50%_50%,black,transparent)]" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative mx-auto w-full max-w-5xl px-5 pt-12"
        >
          <div className="grid lg:grid-cols-[1fr_430px] gap-6 items-center min-h-[calc(100vh-48px)] py-20">
            {/* Left: Copy */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-7 text-[10px] font-mono text-[#f0c040]/65 border border-[#f0c040]/20 bg-[#f0c040]/5 rounded-full px-3 py-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#f0c040] animate-pulse shrink-0" />
                Roadmap personal · En construcción activa
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.06, ease: E }}
                className="text-[2.1rem] sm:text-5xl lg:text-[5.5rem] font-black tracking-[-0.04em] sm:tracking-[-0.045em] leading-[0.95] sm:leading-[0.92] mb-5 sm:mb-7"
              >
                <span className="text-white/20">De </span>$30k
                <br />
                <span className="text-white/20">a </span>
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #f0c040 0%, #f5d060 40%, #fff8d6 100%)",
                  }}
                >
                  $185k
                </span>
                <br />
                <span className="text-white/20 text-[0.65em] tracking-[-0.02em]">
                  en AI/ML.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.13, ease: E }}
                className="text-sm text-white/40 leading-relaxed max-w-md mb-7 sm:mb-9"
              >
                Construí este roadmap para mí. No para vender cursos, no para
                impresionar — solo para tener el camino más corto y directo a
                ganar bien haciendo AI/ML en producción.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-7 sm:mb-10"
              >
                <Button
                  asChild
                  size="lg"
                  className="h-11 px-7 text-sm font-black bg-[#f0c040] text-black hover:bg-[#f0c040]/88 shadow-[0_0_60px_-8px_rgba(240,192,64,0.55)] transition-all hover:shadow-[0_0_80px_-8px_rgba(240,192,64,0.7)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Link href="/roadmap">
                    Ir al mapa <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </motion.div>

              {/* Salary progression */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.32, duration: 0.5 }}
                className="flex items-center gap-1.5 flex-wrap max-w-xs"
              >
                {[
                  { v: "$30k", l: "hoy" },
                  { v: "$65k", l: "6m" },
                  { v: "$100k", l: "12m" },
                  { v: "$185k", l: "24m" },
                ].map((s, i, arr) => (
                  <span key={s.l} className="flex items-center gap-1.5">
                    <span className="text-center">
                      <div
                        className={`text-sm font-black tabular-nums ${i === arr.length - 1 ? "text-[#f0c040]" : "text-white/" + [20, 35, 50][i]}`}
                      >
                        {s.v}
                      </div>
                      <div className="text-[9px] text-white/18 font-mono">
                        {s.l}
                      </div>
                    </span>
                    {i < arr.length - 1 && (
                      <ChevronRight className="h-2.5 w-2.5 text-white/12 shrink-0" />
                    )}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right: 3D */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.18, ease: E }}
              className="relative h-[260px] sm:h-[340px] lg:h-[480px] lg:self-center"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(240,192,64,0.14),transparent_65%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_40%,rgba(90,255,214,0.07),transparent_60%)]" />
              <Hero3DScene />
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="text-[9px] font-mono text-white/20 tracking-[0.2em] uppercase">
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-px h-6 bg-gradient-to-b from-white/20 to-transparent"
          />
        </motion.div>
      </section>

      {/* ── Marquee ───────────────────────────────────────────────── */}
      <Marquee />

      {/* ── El mercado no espera ──────────────────────────────────── */}
      <section className="py-24 relative">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Text */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[10px] text-[#f0c040]/55 font-mono uppercase tracking-[0.22em] mb-3"
              >
                La realidad
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.04, ease: E }}
                className="text-4xl sm:text-5xl font-black tracking-[-0.035em] leading-[1.0] mb-5"
              >
                AI/ML paga
                <br />
                <span className="text-white/22">brutal.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-sm text-white/38 leading-relaxed mb-6 max-w-sm"
              >
                El mercado de AI Engineers explota y las empresas no encuentran
                gente con las skills correctas. Los que saben cobran premium.
                Los que aprenden con el enfoque equivocado siguen ganando lo
                mismo.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <Link
                  href="/roadmap"
                  className="inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-[#f0c040] transition-colors font-mono border-b border-white/10 hover:border-[#f0c040]/40 pb-0.5"
                >
                  Ver el mapa completo <ArrowRight className="h-3 w-3" />
                </Link>
              </motion.div>
            </div>

            {/* Salary bars */}
            <div className="space-y-4 pt-2">
              {salaryLevels.map((item, i) => (
                <SalaryBar key={item.label} item={item} i={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── El plan: fases con salary markers ─────────────────────── */}
      <section className="py-20 border-t border-white/[0.04] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(240,192,64,0.04),transparent)]" />
        <div className="mx-auto max-w-5xl px-5 relative">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] text-[#f0c040]/55 font-mono uppercase tracking-[0.22em] mb-3"
          >
            El plan
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: E }}
            className="text-3xl sm:text-4xl font-black tracking-[-0.03em] mb-10"
          >
            7 fases. <span className="text-white/25">~18 meses.</span>
            <br />
            Un resultado concreto.
          </motion.h2>

          <div className="relative">
            {/* Vertical track line */}
            <div className="absolute left-[10px] top-3 bottom-3 w-px bg-gradient-to-b from-[#f0c040]/50 via-[#f0c040]/15 to-transparent hidden sm:block" />

            <div className="space-y-2">
              {phases.map((p, i) => (
                <motion.div
                  key={p.n}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, ease: E }}
                  className="group relative flex items-start gap-4 rounded-xl border border-white/[0.05] bg-white/[0.015] hover:bg-white/[0.035] hover:border-white/[0.1] transition-all duration-200 px-4 py-3 sm:pl-8 cursor-default"
                >
                  {/* Node dot */}
                  <div className="absolute left-[7px] top-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full bg-[#f0c040]/40 border border-[#f0c040]/60 hidden sm:block group-hover:bg-[#f0c040]/80 transition-colors" />

                  <div className="text-xl font-black text-white/[0.05] tabular-nums leading-none shrink-0 w-7 hidden sm:block mt-0.5">
                    {p.n}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center flex-wrap gap-2 mb-0.5">
                      <span className="text-sm font-bold text-white/85 group-hover:text-white transition-colors">
                        {p.title}
                      </span>
                      <span className="text-[10px] font-mono text-white/20 border border-white/[0.07] rounded px-1.5 py-0.5">
                        {p.weeks} {p.weeks === 1 ? "sem" : "sem"}
                      </span>
                    </div>
                    <p className="text-xs text-white/30 leading-snug">
                      {p.desc}
                    </p>
                  </div>
                  {p.salary && (
                    <div className="shrink-0 text-right self-center">
                      <div className="text-xs font-black font-mono text-[#f0c040]/75 group-hover:text-[#f0c040] transition-colors">
                        {p.salary}
                      </div>
                      <div className="text-[9px] text-white/18">target</div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, ease: E }}
            className="mt-8 text-center"
          >
            <Button
              asChild
              className="h-10 px-8 text-sm font-black bg-[#f0c040] text-black hover:bg-[#f0c040]/88 shadow-[0_0_50px_-8px_rgba(240,192,64,0.5)] hover:shadow-[0_0_70px_-8px_rgba(240,192,64,0.65)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Link href="/roadmap">
                Ver el mapa interactivo{" "}
                <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── CTA final ─────────────────────────────────────────────── */}
      <section className="py-20 border-t border-white/[0.04]">
        <div className="mx-auto max-w-5xl px-5">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border border-[#f0c040]/15 bg-[#f0c040]/[0.04] overflow-hidden p-10 md:p-16 text-center"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(240,192,64,0.07),transparent)]" />
            <div className="relative">
              <p className="text-[10px] font-mono text-[#f0c040]/50 uppercase tracking-[0.22em] mb-4">
                Sin excusas
              </p>
              <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.035em] mb-4">
                El mapa ya está.
                <br />
                <span className="text-white/25">Solo falta empezar.</span>
              </h2>
              <p className="text-sm text-white/35 mb-8 max-w-sm mx-auto">
                Cada día que pasa sin aprender AI/ML es dinero que alguien más
                está cobrando.
              </p>
              <Button
                asChild
                className="h-11 px-8 text-sm font-black bg-[#f0c040] text-black hover:bg-[#f0c040]/88 shadow-[0_0_70px_-10px_rgba(240,192,64,0.6)] transition-all hover:scale-[1.02]"
              >
                <Link href="/roadmap">
                  Empezar ahora <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────── */}
      <footer className="border-t border-white/[0.04] py-6">
        <div className="mx-auto max-w-5xl px-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <DollarSign className="h-3.5 w-3.5 text-[#f0c040]/30" />
            <span className="text-[11px] font-mono text-white/18">
              AI/ML Roadmap — personal
            </span>
          </div>
          <span className="text-[11px] text-white/15 hidden sm:block">
            Hecho para mí. Por mí.
          </span>
        </div>
      </footer>
    </div>
  );
}
