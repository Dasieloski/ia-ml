"use client";

import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Download,
  RotateCcw,
  Search,
  DollarSign,
  CheckCircle2,
  Circle,
  Clock,
  ChevronRight,
  BookOpen,
  Code,
  Brain,
  Layers,
  Rocket,
  Zap,
  TrendingUp,
  Target,
  GitBranch,
  LayoutList,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SearchExplorer } from "./search-explorer";
import { TopicContent } from "./topic-content";
import {
  roadmapData,
  type Topic,
  type Phase,
  type Module,
} from "@/lib/roadmap-data";
import { useProgress, ProgressProvider } from "@/lib/progress-store";
import { cn } from "@/lib/utils";

// ─── Salary per phase level ───────────────────────────────────────────────────
const SALARY: Record<string, string> = {
  fundamentals: "$40–65k",
  intermediate: "$65–95k",
  advanced: "$95–130k",
  specialization: "$130–165k",
  projects: "$165–200k+",
};

const LEVEL_ACCENT: Record<string, string> = {
  fundamentals: "#5affd6",
  intermediate: "#60a5fa",
  advanced: "#fbbf24",
  specialization: "#f472b6",
  projects: "#a78bfa",
};

const LEVEL_ICON: Record<string, LucideIcon> = {
  fundamentals: BookOpen,
  intermediate: Code,
  advanced: Brain,
  specialization: Layers,
  projects: Rocket,
};

const E = [0.22, 1, 0.36, 1] as const;

// ─── Types ────────────────────────────────────────────────────────────────────
interface SelectedItem {
  phase: Phase;
  topic: Topic;
}

// ─── Topic row ────────────────────────────────────────────────────────────────
interface TopicRowProps {
  topic: Topic;
  phaseId: string;
  isSelected: boolean;
  onClick: () => void;
}

function TopicRow({ topic, phaseId, isSelected, onClick }: TopicRowProps) {
  const { isCompleted } = useProgress();

  const totalSubs = topic.subtopics.length;
  const doneSubs = useMemo(
    () =>
      topic.subtopics.filter((_, i) =>
        isCompleted(phaseId, topic.id, `${topic.id}-subtopic-${i}`),
      ).length,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isCompleted, phaseId, topic.id, topic.subtopics.length],
  );
  const allDone = doneSubs === totalSubs && totalSubs > 0;
  const partial = doneSubs > 0 && !allDone;

  return (
    <button
      onClick={onClick}
      className={cn(
        "group w-full flex items-center gap-2 px-3 py-3 sm:py-1.5 text-left transition-all duration-150",
        isSelected
          ? "bg-[#f0c040]/10 border-l-2 border-[#f0c040]"
          : "border-l-2 border-transparent hover:bg-white/[0.04] hover:border-white/20",
        allDone && !isSelected && "opacity-50",
      )}
    >
      {/* Status indicator */}
      <span className="shrink-0">
        {allDone ? (
          <CheckCircle2 className="h-3 w-3 text-[#5affd6]" />
        ) : partial ? (
          <span className="relative flex h-3 w-3 items-center justify-center">
            <span
              className="absolute inset-0 rounded-full border border-[#f0c040]/60"
              style={{
                background: `conic-gradient(#f0c040 ${(doneSubs / totalSubs) * 360}deg, transparent 0deg)`,
                clipPath: "circle(50%)",
                opacity: 0.6,
              }}
            />
            <span className="absolute inset-[2px] rounded-full bg-[#06060a]" />
          </span>
        ) : (
          <Circle className="h-3 w-3 text-white/20 group-hover:text-white/40 transition-colors" />
        )}
      </span>

      {/* Title */}
      <span
        className={cn(
          "flex-1 text-[11px] leading-snug truncate transition-colors",
          isSelected
            ? "text-[#f0c040] font-medium"
            : "text-white/50 group-hover:text-white/80",
          allDone && "line-through",
        )}
      >
        {topic.title}
      </span>

      {/* Hours */}
      <span className="shrink-0 flex items-center gap-0.5 text-[10px] text-white/20 font-mono">
        {topic.estimatedHours}h
      </span>
    </button>
  );
}

// ─── Module card ──────────────────────────────────────────────────────────────
interface ModuleCardProps {
  module: Module;
  phase: Phase;
  selectedTopicId?: string;
  onTopicClick: (phase: Phase, topic: Topic) => void;
  accent: string;
}

function ModuleCard({
  module,
  phase,
  selectedTopicId,
  onTopicClick,
  accent,
}: ModuleCardProps) {
  const topics = module.submodules.flatMap((sub) => sub.topics);

  return (
    <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] overflow-hidden min-w-[180px]">
      {/* Module header */}
      <div
        className="px-3 py-2 border-b border-white/[0.05]"
        style={{ borderLeftColor: accent, borderLeftWidth: 2 }}
      >
        <p className="text-[10px] font-semibold text-white/55 truncate leading-tight">
          {module.title}
        </p>
        <p className="text-[9px] text-white/20 font-mono mt-0.5">
          {topics.length} temas
        </p>
      </div>

      {/* Topics */}
      <div className="py-1">
        {topics.map((topic) => (
          <TopicRow
            key={topic.id}
            topic={topic}
            phaseId={phase.id}
            isSelected={selectedTopicId === topic.id}
            onClick={() => onTopicClick(phase, topic)}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Phase Growth Map (SVG roots) ────────────────────────────────────────────

function PhaseGrowthMap({
  phase,
  onTopicClick,
  selectedTopicId,
}: {
  phase: Phase;
  onTopicClick: (phase: Phase, topic: Topic) => void;
  selectedTopicId?: string;
}) {
  const { isCompleted } = useProgress();
  const accent = LEVEL_ACCENT[phase.level] || "#5affd6";

  const allTopics = useMemo(
    () => phase.modules.flatMap((m) => m.submodules.flatMap((s) => s.topics)),
    [phase],
  );

  if (allTopics.length === 0) return null;

  // ── Layout computation ──────────────────────────────────────────────────
  const N = allTopics.length;
  const COLS = Math.min(5, Math.max(2, Math.ceil(Math.sqrt(N * 1.6))));
  const ROWS = Math.ceil(N / COLS);
  const W = 560;
  const H = Math.max(160, ROWS * 58 + 44);

  const ROOT_X = 22;
  const ROOT_Y = H / 2;
  const NX0 = 110; // topic area x start
  const NX1 = W - 18; // topic area x end
  const NY0 = 22;
  const NY1 = H - 22;

  const colGap = COLS > 1 ? (NX1 - NX0) / (COLS - 1) : 0;
  const rowGap = ROWS > 1 ? (NY1 - NY0) / (ROWS - 1) : 0;

  const nodes = allTopics.map((topic, i) => {
    const col = i % COLS;
    const row = Math.floor(i / COLS);
    // Slight vertical stagger on odd columns for organic feel
    const stagger = ROWS > 1 && col % 2 === 1 ? rowGap * 0.28 : 0;
    return {
      topic,
      x: NX0 + col * colGap,
      y: NY0 + row * rowGap + stagger,
    };
  });

  const anyDone = allTopics.some((t) =>
    t.subtopics.some((_, i) =>
      isCompleted(phase.id, t.id, `${t.id}-subtopic-${i}`),
    ),
  );

  return (
    <div
      className="flex-1 relative overflow-hidden"
      style={{ minHeight: H, background: "rgba(0,0,0,0.18)" }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        style={{ display: "block", minHeight: H }}
      >
        {/* Root glow pulse */}
        {anyDone && (
          <circle cx={ROOT_X} cy={ROOT_Y} r={12} fill={`${accent}10`}>
            <animate
              attributeName="r"
              values="8;14;8"
              dur="2.4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.6;0.15;0.6"
              dur="2.4s"
              repeatCount="indefinite"
            />
          </circle>
        )}

        {/* Root node */}
        <circle
          cx={ROOT_X}
          cy={ROOT_Y}
          r={5}
          fill={anyDone ? accent : "rgba(255,255,255,0.12)"}
          style={{
            filter: anyDone ? `drop-shadow(0 0 5px ${accent})` : "none",
            transition: "fill 0.6s",
          }}
        />

        {/* Roots + topic nodes */}
        {nodes.map(({ topic, x, y }, idx) => {
          const doneSubs = topic.subtopics.filter((_, i) =>
            isCompleted(phase.id, topic.id, `${topic.id}-subtopic-${i}`),
          ).length;
          const allDone = doneSubs === topic.subtopics.length && doneSubs > 0;
          const partial = doneSubs > 0 && !allDone;
          const isSelected = selectedTopicId === topic.id;

          // Bezier control points — S-curve for organic root look
          const cp1x = ROOT_X + (x - ROOT_X) * 0.42;
          const cp1y = ROOT_Y + (y - ROOT_Y) * 0.06;
          const cp2x = ROOT_X + (x - ROOT_X) * 0.68;
          const cp2y = y + (ROOT_Y - y) * 0.08;
          const pathD = `M ${ROOT_X} ${ROOT_Y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x} ${y}`;

          // Visual state
          const strokeColor = allDone
            ? accent
            : partial
              ? `${accent}45`
              : "rgba(255,255,255,0.045)";
          const strokeW = allDone ? 1.6 : partial ? 1.1 : 0.8;
          const nr = isSelected ? 6 : allDone ? 5 : partial ? 4 : 3.5;
          const nFill = allDone
            ? accent
            : partial
              ? `${accent}50`
              : "rgba(255,255,255,0.08)";
          const nStroke = isSelected
            ? "rgba(255,255,255,0.9)"
            : allDone
              ? accent
              : "rgba(255,255,255,0.14)";

          // Label truncation
          const label =
            topic.title.length > 22
              ? topic.title.slice(0, 20) + "…"
              : topic.title;
          // Position label: avoid going off right edge
          const labelX = x + nr + 4;
          const labelAnchor = "start";

          return (
            <g
              key={topic.id}
              style={{ cursor: "pointer" }}
              onClick={() => onTopicClick(phase, topic)}
            >
              {/* Root path */}
              <path
                d={pathD}
                stroke={strokeColor}
                strokeWidth={strokeW}
                fill="none"
                strokeLinecap="round"
                style={{
                  filter: allDone ? `drop-shadow(0 0 2px ${accent}70)` : "none",
                  transition: "stroke 0.55s, stroke-width 0.55s, filter 0.55s",
                }}
              />

              {/* Outer glow ring for selected/done */}
              {(allDone || isSelected) && (
                <circle
                  cx={x}
                  cy={y}
                  r={nr + 4}
                  fill="none"
                  stroke={isSelected ? "rgba(255,255,255,0.5)" : accent}
                  strokeWidth={0.6}
                  opacity={isSelected ? 0.8 : 0.3}
                  style={{ transition: "opacity 0.4s" }}
                />
              )}

              {/* Topic node */}
              <circle
                cx={x}
                cy={y}
                r={nr}
                fill={nFill}
                stroke={nStroke}
                strokeWidth={isSelected ? 1.5 : allDone ? 1 : 0.7}
                style={{
                  filter: allDone ? `drop-shadow(0 0 4px ${accent}90)` : "none",
                  transition: "fill 0.55s, r 0.3s, stroke 0.4s, filter 0.55s",
                }}
              />

              {/* Hover hit area (invisible, larger) */}
              <circle cx={x} cy={y} r={10} fill="transparent" />

              {/* Topic label */}
              <text
                x={labelX}
                y={y + 3.5}
                fontSize={6.8}
                textAnchor={labelAnchor}
                fill={
                  allDone
                    ? accent
                    : partial
                      ? "rgba(255,255,255,0.38)"
                      : "rgba(255,255,255,0.16)"
                }
                style={{
                  userSelect: "none",
                  transition: "fill 0.55s",
                  fontFamily: "inherit",
                  fontWeight: allDone ? "700" : "400",
                }}
              >
                {label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// ─── Phase section ─────────────────────────────────────────────────────────────────
interface PhaseSectionProps {
  phase: Phase;
  index: number;
  selectedTopicId?: string;
  onTopicClick: (phase: Phase, topic: Topic) => void;
}

function PhaseSection({
  phase,
  index,
  selectedTopicId,
  onTopicClick,
}: PhaseSectionProps) {
  const { getPhaseProgress } = useProgress();
  const progress = getPhaseProgress(phase.id);
  const accent = LEVEL_ACCENT[phase.level] || "#5affd6";
  const salary = SALARY[phase.level] || "";
  const Icon = LEVEL_ICON[phase.level] || BookOpen;
  const phaseNum = String(index).padStart(2, "0");

  return (
    <motion.section
      id={`phase-${phase.id}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.04 }}
      className="border-b border-white/[0.05] last:border-0"
    >
      {/* Phase header */}
      <div className="flex items-center gap-3 px-4 py-2.5 sticky top-0 z-10 bg-[#06060a]/95 backdrop-blur-md border-b border-white/[0.04]">
        <span className="text-[11px] font-black font-mono text-white/15 tabular-nums w-7 shrink-0">
          {phaseNum}
        </span>
        <div
          className="h-5 w-5 rounded flex items-center justify-center shrink-0"
          style={{ background: `${accent}18` }}
        >
          <Icon className="h-3 w-3" style={{ color: accent }} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h2 className="text-xs font-bold text-white/85 truncate">
              {phase.title}
            </h2>
            <span className="text-[9px] text-white/20 border border-white/[0.08] rounded px-1.5 py-0.5 font-mono shrink-0">
              {phase.estimatedWeeks}w
            </span>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 shrink-0">
          <div className="w-14 h-[2px] rounded-full bg-white/[0.07] overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${progress}%`,
                backgroundColor: accent,
                boxShadow: `0 0 5px ${accent}60`,
              }}
            />
          </div>
          <span className="text-[9px] font-mono text-white/25 w-6 tabular-nums">
            {progress}%
          </span>
        </div>
        {salary && (
          <div
            className="shrink-0 hidden sm:flex items-center gap-1 rounded-full border px-2 py-0.5"
            style={{
              borderColor: `${accent}30`,
              backgroundColor: `${accent}08`,
            }}
          >
            <DollarSign className="h-2.5 w-2.5" style={{ color: accent }} />
            <span
              className="text-[9px] font-black font-mono"
              style={{ color: accent }}
            >
              {salary}
            </span>
          </div>
        )}
      </div>

      {/* Mobile: modules full-width. Desktop: split with SVG map */}
      <div className="flex flex-col sm:flex-row">
        {/* Module cards */}
        <div className="w-full sm:w-[200px] sm:shrink-0 sm:border-r border-white/[0.04] p-2.5 space-y-2">
          {phase.modules.map((module) => (
            <ModuleCard
              key={module.id}
              module={module}
              phase={phase}
              selectedTopicId={selectedTopicId}
              onTopicClick={onTopicClick}
              accent={accent}
            />
          ))}
        </div>

        {/* SVG growth map — hidden on mobile */}
        <div className="hidden sm:block flex-1">
          <PhaseGrowthMap
            phase={phase}
            onTopicClick={onTopicClick}
            selectedTopicId={selectedTopicId}
          />
        </div>
      </div>
    </motion.section>
  );
}

// ─── Overall progress strip ───────────────────────────────────────────────────
function ProgressStrip() {
  const { getTotalProgress, completedItems, totalSubtopics } = useProgress();
  const progress = getTotalProgress();

  const totalHours = useMemo(() => {
    let h = 0;
    roadmapData.phases.forEach((p) =>
      p.modules.forEach((m) =>
        m.submodules.forEach((s) =>
          s.topics.forEach((t) => {
            h += t.estimatedHours;
          }),
        ),
      ),
    );
    return h;
  }, []);

  return (
    <div className="border-b border-white/[0.05] bg-[#08080e]/80 px-4 py-2 flex items-center gap-4 overflow-x-auto scrollbar-none">
      {/* Progress bar */}
      <div className="flex items-center gap-2 shrink-0">
        <div className="w-20 sm:w-32 h-[3px] rounded-full bg-white/[0.07] overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #5affd6, #f0c040)",
              boxShadow: "0 0 8px rgba(90,255,214,0.4)",
            }}
          />
        </div>
        <span className="text-[10px] font-black font-mono text-white/40 tabular-nums">
          {progress}%
        </span>
      </div>

      <span className="text-white/10 text-[10px] shrink-0">·</span>

      <span className="text-[10px] text-white/25 font-mono shrink-0">
        {completedItems.size} /{" "}
        <span className="text-white/40">{totalSubtopics}</span> subtemas
      </span>

      <span className="text-white/10 text-[10px] shrink-0 hidden sm:inline">
        ·
      </span>

      <span className="text-[10px] text-white/20 shrink-0 hidden sm:inline">
        ~{totalHours}h totales
      </span>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Goal */}
      <div className="shrink-0 flex items-center gap-1.5">
        <TrendingUp className="h-2.5 w-2.5 text-[#f0c040]/50" />
        <span className="text-[10px] font-mono text-[#f0c040]/60">
          Objetivo: <span className="font-black text-[#f0c040]">$185k+</span>
        </span>
      </div>
    </div>
  );
}

// ─── Topic detail panel ───────────────────────────────────────────────────────
interface TopicPanelProps {
  item: SelectedItem | null;
  onClose: () => void;
}

function TopicPanel({ item, onClose }: TopicPanelProps) {
  const accent = item ? LEVEL_ACCENT[item.phase.level] || "#5affd6" : "#5affd6";

  return (
    <AnimatePresence>
      {item && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel — bottom sheet on mobile, right panel on sm+ */}
          <motion.div
            key="panel"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 flex flex-col bg-[#08080e] rounded-t-2xl overflow-hidden sm:hidden"
            style={{
              maxHeight: "90dvh",
              boxShadow: "0 -20px 60px rgba(0,0,0,0.7)",
            }}
          >
            {/* Drag handle */}
            <div className="flex justify-center pt-3 pb-1 shrink-0">
              <div className="w-10 h-1 rounded-full bg-white/20" />
            </div>
            {/* Header */}
            <div
              className="flex items-center gap-3 px-4 py-2.5 border-b border-white/[0.06] shrink-0"
              style={{ borderTopWidth: 2, borderTopColor: accent }}
            >
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-mono text-white/30 truncate">
                  {item.phase.title}
                </p>
                <p className="text-sm font-bold text-white/85 truncate mt-0.5">
                  {item.topic.title}
                </p>
              </div>
              {SALARY[item.phase.level] && (
                <span className="text-[11px] font-black font-mono text-[#f0c040]/70 shrink-0">
                  {SALARY[item.phase.level]}
                </span>
              )}
              <button
                onClick={onClose}
                className="shrink-0 h-10 w-10 rounded-xl flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.07] transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto overscroll-contain">
              <TopicContent topic={item.topic} phaseId={item.phase.id} />
            </div>
          </motion.div>

          {/* Desktop: right-side panel */}
          <motion.div
            key="panel-desktop"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 280 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-[400px] flex-col bg-[#08080e] border-l border-white/[0.07] overflow-hidden hidden sm:flex"
            style={{ boxShadow: "-20px 0 60px rgba(0,0,0,0.5)" }}
          >
            <div
              className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06] shrink-0"
              style={{ borderTopWidth: 2, borderTopColor: accent }}
            >
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-mono text-white/30 truncate">
                  {item.phase.title}
                </p>
                <p className="text-xs font-bold text-white/80 truncate mt-0.5">
                  {item.topic.title}
                </p>
              </div>
              {SALARY[item.phase.level] && (
                <div className="shrink-0 flex items-center gap-1">
                  <DollarSign className="h-3 w-3 text-[#f0c040]/60" />
                  <span className="text-[10px] font-black font-mono text-[#f0c040]/70">
                    {SALARY[item.phase.level]}
                  </span>
                </div>
              )}
              <button
                onClick={onClose}
                className="shrink-0 h-8 w-8 rounded-lg flex items-center justify-center text-white/30 hover:text-white hover:bg-white/[0.07] transition-colors"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <TopicContent topic={item.topic} phaseId={item.phase.id} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Phase nav tabs ───────────────────────────────────────────────────────────
function PhaseNav({
  activePhaseId,
  onSelect,
}: {
  activePhaseId: string | null;
  onSelect: (id: string) => void;
}) {
  const { getPhaseProgress } = useProgress();

  const scrollTo = (phaseId: string) => {
    const el = document.getElementById(`phase-${phaseId}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    onSelect(phaseId);
  };

  return (
    <div className="border-b border-white/[0.05] bg-[#06060a] overflow-x-auto scrollbar-none">
      <div className="flex min-w-max px-3 py-0">
        {roadmapData.phases.map((phase, i) => {
          const accent = LEVEL_ACCENT[phase.level] || "#5affd6";
          const progress = getPhaseProgress(phase.id);
          const isActive = activePhaseId === phase.id;
          const n = String(i).padStart(2, "0");

          return (
            <button
              key={phase.id}
              onClick={() => scrollTo(phase.id)}
              className={cn(
                "relative flex items-center gap-1.5 px-3 py-2.5 text-left transition-colors border-b-2 whitespace-nowrap",
                isActive
                  ? "border-b-[#f0c040]"
                  : "border-transparent hover:border-white/20",
              )}
            >
              <span className="text-[9px] font-mono text-white/20 tabular-nums">
                {n}
              </span>
              <span
                className={cn(
                  "text-[11px] font-medium transition-colors",
                  isActive
                    ? "text-white/90"
                    : "text-white/35 hover:text-white/60",
                )}
              >
                {phase.title}
              </span>
              {progress > 0 && (
                <span
                  className="text-[9px] font-mono font-bold"
                  style={{ color: `${accent}80` }}
                >
                  {progress}%
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Roadmap Tree View ────────────────────────────────────────────────────────

interface TreeViewProps {
  selectedTopicId?: string;
  onTopicClick: (phase: Phase, topic: Topic) => void;
}

function RoadmapTreeView({ selectedTopicId, onTopicClick }: TreeViewProps) {
  const { getPhaseProgress, getTotalProgress, isCompleted } = useProgress();
  const totalProgress = getTotalProgress();

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden">
      {/* Sticky summary bar */}
      <div className="sticky top-0 z-10 bg-[#06060a]/95 backdrop-blur-md border-b border-white/[0.04] px-5 py-2.5 flex items-center gap-4">
        <div className="flex items-center gap-2.5 flex-1">
          <div className="w-28 sm:w-40 h-[3px] rounded-full bg-white/[0.06] overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${totalProgress}%`,
                background: "linear-gradient(90deg,#5affd6,#f0c040)",
                boxShadow: "0 0 8px rgba(90,255,214,0.4)",
              }}
            />
          </div>
          <span className="text-[10px] font-black font-mono text-white/40">
            {totalProgress}%
          </span>
          <span className="text-[10px] text-white/18 hidden sm:inline">
            {roadmapData.phases.length} fases ·{" "}
            {roadmapData.phases.reduce((a, p) => a + p.estimatedWeeks, 0)}{" "}
            semanas
          </span>
        </div>
        <span className="text-[10px] text-[#f0c040]/60 font-mono font-bold shrink-0">
          → $185k+
        </span>
      </div>

      {/* Phase tree */}
      <div className="px-4 sm:px-6 py-5 max-w-5xl mx-auto">
        <div className="relative">
          {/* Left trunk line */}
          <div className="absolute left-[9px] top-4 bottom-4 w-px bg-gradient-to-b from-white/15 via-white/[0.06] to-transparent" />

          <div className="space-y-0">
            {roadmapData.phases.map((phase, phaseIndex) => {
              const accent = LEVEL_ACCENT[phase.level] || "#5affd6";
              const salary = SALARY[phase.level] || "";
              const progress = getPhaseProgress(phase.id);
              const phaseNum = String(phaseIndex).padStart(2, "0");
              const Icon = LEVEL_ICON[phase.level] || BookOpen;

              return (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: phaseIndex * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative pl-8 pb-6"
                >
                  {/* Phase dot on trunk */}
                  <div
                    className="absolute left-0 top-[14px] h-[18px] w-[18px] rounded-full border flex items-center justify-center z-10"
                    style={{
                      borderColor: `${accent}50`,
                      background: progress > 0 ? `${accent}20` : "#06060a",
                      boxShadow: progress > 0 ? `0 0 10px ${accent}30` : "none",
                    }}
                  >
                    <span
                      className="text-[7px] font-black"
                      style={{ color: accent }}
                    >
                      {phaseNum}
                    </span>
                  </div>

                  {/* Phase header */}
                  <div className="flex items-center gap-2.5 flex-wrap py-2 border-b border-white/[0.04] mb-3">
                    <div
                      className="h-5 w-5 rounded flex items-center justify-center shrink-0"
                      style={{ background: `${accent}15` }}
                    >
                      <Icon className="h-3 w-3" style={{ color: accent }} />
                    </div>
                    <span className="text-sm font-bold text-white/80">
                      {phase.title}
                    </span>
                    {salary && (
                      <span
                        className="text-[10px] font-black font-mono"
                        style={{ color: accent }}
                      >
                        {salary}
                      </span>
                    )}
                    <div className="ml-auto flex items-center gap-3">
                      {/* Phase mini-progress */}
                      <div className="flex items-center gap-1.5">
                        <div className="w-14 h-[2px] rounded-full bg-white/[0.07] overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-700"
                            style={{
                              width: `${progress}%`,
                              backgroundColor: accent,
                            }}
                          />
                        </div>
                        <span className="text-[9px] font-mono text-white/25">
                          {progress}%
                        </span>
                      </div>
                      <span className="text-[9px] text-white/18 font-mono">
                        {phase.estimatedWeeks}w
                      </span>
                    </div>
                  </div>

                  {/* Modules + topics */}
                  <div className="space-y-3">
                    {phase.modules.map((module) => {
                      const topics = module.submodules.flatMap((s) => s.topics);
                      return (
                        <div key={module.id}>
                          {/* Module label */}
                          <p className="text-[10px] text-white/25 font-medium mb-2 tracking-wide">
                            {module.title}
                            <span className="text-white/15 font-mono ml-2">
                              {topics.length} temas
                            </span>
                          </p>

                          {/* Topic chips */}
                          <div className="flex flex-wrap gap-1.5">
                            {topics.map((topic) => {
                              const doneSubs = topic.subtopics.filter((_, i) =>
                                isCompleted(
                                  phase.id,
                                  topic.id,
                                  `${topic.id}-subtopic-${i}`,
                                ),
                              ).length;
                              const allDone =
                                doneSubs === topic.subtopics.length &&
                                doneSubs > 0;
                              const partial = doneSubs > 0 && !allDone;
                              const isSelected = selectedTopicId === topic.id;

                              return (
                                <motion.button
                                  key={topic.id}
                                  onClick={() => onTopicClick(phase, topic)}
                                  whileHover={{ scale: 1.04 }}
                                  whileTap={{ scale: 0.97 }}
                                  className={cn(
                                    "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all duration-150 border",
                                    isSelected ? "ring-1" : "",
                                  )}
                                  style={{
                                    borderColor: allDone
                                      ? `${accent}40`
                                      : partial
                                        ? `${accent}20`
                                        : "rgba(255,255,255,0.07)",
                                    background: allDone
                                      ? `${accent}12`
                                      : partial
                                        ? `${accent}06`
                                        : "rgba(255,255,255,0.02)",
                                    color: allDone
                                      ? accent
                                      : partial
                                        ? `${accent}80`
                                        : "rgba(255,255,255,0.4)",
                                    boxShadow: isSelected
                                      ? `0 0 0 1px ${accent}60, 0 0 12px ${accent}20`
                                      : allDone
                                        ? `0 0 8px ${accent}18`
                                        : "none",
                                  }}
                                >
                                  {/* Status dot */}
                                  <span
                                    className="w-1.5 h-1.5 rounded-full shrink-0"
                                    style={{
                                      background: allDone
                                        ? accent
                                        : partial
                                          ? `${accent}60`
                                          : "rgba(255,255,255,0.15)",
                                      boxShadow: allDone
                                        ? `0 0 4px ${accent}`
                                        : "none",
                                    }}
                                  />
                                  {topic.title}
                                  {/* Hours */}
                                  <span className="text-[9px] font-mono opacity-50 ml-0.5">
                                    {topic.estimatedHours}h
                                  </span>
                                </motion.button>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="h-12" />
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────

/** Outer shell: just provides context. All logic is in RoadmapContent. */
export function RoadmapApp() {
  return (
    <ProgressProvider>
      <RoadmapContent />
    </ProgressProvider>
  );
}

/** Inner: ALL useProgress() calls live here, safely inside ProgressProvider. */
type AppView = "map" | "tree";

function RoadmapContent() {
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);
  const [appView, setAppView] = useState<AppView>("map");
  const [activePhaseId, setActivePhaseId] = useState<string | null>(
    roadmapData.phases[0]?.id ?? null,
  );
  const { resetProgress, completedItems } = useProgress();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll spy - detect active phase
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const els = roadmapData.phases
      .map((p) => ({
        id: p.id,
        el: document.getElementById(`phase-${p.id}`),
      }))
      .filter((x) => x.el !== null);

    const onScroll = () => {
      const scrollTop = container.scrollTop;
      const containerTop = container.getBoundingClientRect().top;

      for (let i = els.length - 1; i >= 0; i--) {
        const { id, el } = els[i];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top - containerTop <= 100) {
          setActivePhaseId(id);
          break;
        }
      }
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  const handleTopicClick = useCallback((phase: Phase, topic: Topic) => {
    setSelectedItem((prev) =>
      prev?.topic.id === topic.id ? null : { phase, topic },
    );
  }, []);

  const handleExport = () => {
    const data = {
      exportDate: new Date().toISOString(),
      completedItems: Array.from(completedItems),
      version: "2.0",
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `aiml-roadmap-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // SearchExplorer bridge
  const handleSearchNav = useCallback((phaseId: string, topicId: string) => {
    const phase = roadmapData.phases.find((p) => p.id === phaseId);
    if (!phase) return;
    let found: Topic | null = null;
    for (const mod of phase.modules) {
      for (const sub of mod.submodules) {
        const t = sub.topics.find((t) => t.id === topicId);
        if (t) {
          found = t;
          break;
        }
      }
      if (found) break;
    }
    if (found) {
      setSelectedItem({ phase, topic: found });
      const el = document.getElementById(`phase-${phaseId}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <TooltipProvider delayDuration={300}>
      <div className="h-[100dvh] flex flex-col bg-[#06060a] text-white overflow-hidden">
        {/* ── Header ─────────────────────────────────────────────── */}
        <header className="shrink-0 h-12 border-b border-white/[0.05] bg-[#06060a]/90 backdrop-blur-xl flex items-center px-4 gap-3 z-20">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="h-6 w-6 rounded-md border border-[#f0c040]/25 bg-[#f0c040]/10 flex items-center justify-center">
              <DollarSign className="h-3.5 w-3.5 text-[#f0c040]" />
            </div>
            <span className="text-xs font-bold text-white/70 hidden sm:block">
              AI/ML Roadmap
            </span>
          </div>

          <div className="flex-1" />

          {/* Actions */}
          <div className="flex items-center gap-1">
            {/* View toggle */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() =>
                    setAppView((v) => (v === "map" ? "tree" : "map"))
                  }
                  className={cn(
                    "h-7 px-2.5 rounded-md flex items-center gap-1.5 text-[11px] font-medium transition-all",
                    appView === "tree"
                      ? "bg-[#5affd6]/12 text-[#5affd6] border border-[#5affd6]/25"
                      : "text-white/35 hover:text-white hover:bg-white/[0.06]",
                  )}
                >
                  {appView === "tree" ? (
                    <>
                      <LayoutList className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">Mapa</span>
                    </>
                  ) : (
                    <>
                      <GitBranch className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">Árbol</span>
                    </>
                  )}
                </button>
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                className="bg-[#0f0f14] border-white/[0.08] text-white/70 text-xs"
              >
                {appView === "tree" ? "Volver al mapa" : "Vista árbol general"}
              </TooltipContent>
            </Tooltip>

            <SearchExplorer onNavigate={handleSearchNav} />

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 text-white/35 hover:text-white hover:bg-white/[0.06]"
                  onClick={handleExport}
                >
                  <Download className="h-3.5 w-3.5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                className="bg-[#0f0f14] border-white/[0.08] text-white/70 text-xs"
              >
                Exportar progreso
              </TooltipContent>
            </Tooltip>

            <AlertDialog>
              <Tooltip>
                <TooltipTrigger asChild>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 text-white/35 hover:text-white hover:bg-white/[0.06]"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                    </Button>
                  </AlertDialogTrigger>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  className="bg-[#0f0f14] border-white/[0.08] text-white/70 text-xs"
                >
                  Reiniciar progreso
                </TooltipContent>
              </Tooltip>
              <AlertDialogContent className="bg-[#0d0d16] border-white/[0.1] text-white max-w-sm">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-white text-base">
                    ¿Borrar todo el progreso?
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-white/45 text-sm">
                    Esta acción no se puede deshacer. Perderás todo tu progreso
                    guardado.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="bg-white/[0.05] border-white/10 text-white/60 hover:bg-white/[0.1] text-xs h-8">
                    Cancelar
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={resetProgress}
                    className="bg-red-500/80 hover:bg-red-500 text-white text-xs h-8"
                  >
                    Sí, reiniciar
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </header>

        {/* ── Progress strip (only in map view) ────────────────────────────── */}
        {appView === "map" && <ProgressStrip />}

        {/* ── Phase nav tabs (only in map view) ──────────────────────────── */}
        {appView === "map" && (
          <PhaseNav activePhaseId={activePhaseId} onSelect={setActivePhaseId} />
        )}

        {/* ── Main content area: Map OR Tree ────────────────────────────── */}
        <AnimatePresence mode="wait">
          {appView === "map" ? (
            <motion.div
              key="map"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              ref={scrollRef}
              className="flex-1 overflow-y-auto overflow-x-hidden"
            >
              {roadmapData.phases.map((phase, index) => (
                <PhaseSection
                  key={phase.id}
                  phase={phase}
                  index={index}
                  selectedTopicId={selectedItem?.topic.id}
                  onTopicClick={handleTopicClick}
                />
              ))}
              <div className="h-16" />
            </motion.div>
          ) : (
            <motion.div
              key="tree"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex-1 flex flex-col overflow-hidden"
            >
              <RoadmapTreeView
                selectedTopicId={selectedItem?.topic.id}
                onTopicClick={handleTopicClick}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Topic detail panel ────────────────────────────────────────────── */}
        <TopicPanel item={selectedItem} onClose={() => setSelectedItem(null)} />
      </div>
    </TooltipProvider>
  );
}
