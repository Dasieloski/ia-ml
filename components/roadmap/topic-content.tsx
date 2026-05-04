"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  CheckCircle2,
  Circle,
  Clock,
  ExternalLink,
  Lightbulb,
  Target,
  Layers,
  Zap,
  Flame,
  Code2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Topic } from "@/lib/roadmap-data";
import { useProgress } from "@/lib/progress-store";
import { getTopicExercises, type Exercise } from "@/lib/exercises";

interface TopicContentProps {
  topic: Topic;
  phaseId: string;
}

const difficultyStyles: Record<
  string,
  { label: string; color: string; bg: string }
> = {
  beginner: {
    label: "Principiante",
    color: "#5affd6",
    bg: "rgba(90,255,214,0.08)",
  },
  intermediate: {
    label: "Intermedio",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.08)",
  },
  advanced: {
    label: "Avanzado",
    color: "#fbbf24",
    bg: "rgba(251,191,36,0.08)",
  },
  expert: { label: "Experto", color: "#f472b6", bg: "rgba(244,114,182,0.08)" },
};

const E = [0.22, 1, 0.36, 1] as const;

// ─── Exercise card ─────────────────────────────────────────────────────────────
function ExerciseCard({
  exercise,
  exerciseKey,
  phaseId,
  topicId,
  index,
}: {
  exercise: Exercise;
  exerciseKey: string;
  phaseId: string;
  topicId: string;
  index: number;
}) {
  const { isCompleted, toggleComplete } = useProgress();
  const done = isCompleted(phaseId, topicId, exerciseKey);

  const isEasy = exercise.difficulty === "easy";
  const accent = isEasy ? "#5affd6" : "#f0c040";
  const Icon = isEasy ? Zap : Flame;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 + index * 0.08, ease: E }}
      className={cn(
        "rounded-xl border p-4 transition-all duration-200",
        done
          ? "border-white/[0.1] bg-white/[0.03] opacity-60"
          : "border-white/[0.08] bg-white/[0.02] hover:border-white/[0.14] hover:bg-white/[0.04]",
      )}
      style={{
        borderLeftWidth: 2,
        borderLeftColor: done ? "rgba(255,255,255,0.12)" : accent,
      }}
    >
      {/* Header */}
      <div className="flex items-start gap-2.5 mb-3">
        <div
          className="shrink-0 h-6 w-6 rounded-md flex items-center justify-center mt-0.5"
          style={{ background: `${accent}15` }}
        >
          <Icon className="h-3.5 w-3.5" style={{ color: accent }} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span
              className="text-[10px] font-bold uppercase tracking-[0.12em]"
              style={{ color: `${accent}90` }}
            >
              {isEasy ? "Sencillo" : "Difícil"}
            </span>
          </div>
          <h4
            className={cn(
              "text-xs font-bold leading-snug",
              done ? "text-white/35 line-through" : "text-white/85",
            )}
          >
            {exercise.title}
          </h4>
        </div>
      </div>

      {/* Description */}
      <p
        className={cn(
          "text-[11px] leading-relaxed mb-3",
          done ? "text-white/20" : "text-white/45",
        )}
      >
        {exercise.description}
      </p>

      {/* Complete button */}
      <button
        onClick={() => toggleComplete(phaseId, topicId, exerciseKey)}
        className={cn(
          "w-full flex items-center justify-center gap-2 py-1.5 rounded-lg text-[11px] font-medium transition-all duration-150",
          done
            ? "bg-white/[0.04] text-white/25 hover:bg-white/[0.07] hover:text-white/40"
            : "hover:opacity-90 active:scale-[0.98]",
        )}
        style={done ? {} : { background: `${accent}15`, color: accent }}
      >
        {done ? (
          <>
            <CheckCircle2 className="h-3 w-3" />
            Completado
          </>
        ) : (
          <>
            <Circle className="h-3 w-3" />
            Marcar como completado
          </>
        )}
      </button>
    </motion.div>
  );
}

// ─── Main component ─────────────────────────────────────────────────────────────
export function TopicContent({ topic, phaseId }: TopicContentProps) {
  const { isCompleted, toggleComplete, getTopicProgress } = useProgress();

  const progress = getTopicProgress(phaseId, topic.id);
  const diff = difficultyStyles[topic.difficulty] ?? difficultyStyles.beginner;

  const doneSubs = topic.subtopics.filter((_, i) =>
    isCompleted(phaseId, topic.id, `${topic.id}-subtopic-${i}`),
  ).length;

  // Get exercises (memoized by JS module — no hook needed)
  const [easyEx, hardEx] = getTopicExercises({
    id: topic.id,
    title: topic.title,
    subtopics: topic.subtopics,
    description: topic.description,
    difficulty: topic.difficulty,
  });

  const easyKey = `${topic.id}-exercise-easy`;
  const hardKey = `${topic.id}-exercise-hard`;

  return (
    <div className="px-4 py-4 space-y-5 text-white">
      {/* ── Meta row ─────────────────────────────────────────────── */}
      <div className="flex flex-wrap items-center gap-2">
        <span
          className="text-[10px] font-bold px-2 py-0.5 rounded-full"
          style={{ color: diff.color, background: diff.bg }}
        >
          {diff.label}
        </span>
        <span className="flex items-center gap-1 text-[10px] text-white/35 font-mono border border-white/[0.08] rounded-full px-2 py-0.5">
          <Clock className="h-2.5 w-2.5" />
          {topic.estimatedHours}h
        </span>
        {doneSubs > 0 && (
          <span className="text-[10px] font-mono text-[#5affd6]/70">
            {doneSubs}/{topic.subtopics.length} subtemas
          </span>
        )}
      </div>

      {/* ── Description ──────────────────────────────────────────── */}
      <p className="text-xs text-white/40 leading-relaxed">
        {topic.description}
      </p>

      {/* ── Progress bar ─────────────────────────────────────────── */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-white/25 font-mono">Progreso</span>
          <span className="text-white/40 font-mono font-bold">{progress}%</span>
        </div>
        <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, #5affd6, #f0c040)",
              boxShadow: "0 0 6px rgba(90,255,214,0.4)",
            }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8, ease: E, delay: 0.2 }}
          />
        </div>
      </div>

      {/* ── Subtopics ────────────────────────────────────────────── */}
      <div className="space-y-1">
        <p className="text-[10px] font-semibold text-white/25 uppercase tracking-[0.15em] flex items-center gap-1.5 mb-2">
          <Layers className="h-2.5 w-2.5" />
          Subtemas ({topic.subtopics.length})
        </p>

        {topic.subtopics.map((subtopic, i) => {
          const subtopicId = `${topic.id}-subtopic-${i}`;
          const done = isCompleted(phaseId, topic.id, subtopicId);

          return (
            <motion.button
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.03, ease: E }}
              onClick={() => toggleComplete(phaseId, topic.id, subtopicId)}
              className={cn(
                "w-full flex items-start gap-2.5 px-3 py-2 rounded-lg text-left transition-all duration-150",
                done
                  ? "bg-[#5affd6]/[0.06] border border-[#5affd6]/15"
                  : "border border-transparent hover:bg-white/[0.04] hover:border-white/[0.08]",
              )}
            >
              <span className="shrink-0 mt-0.5">
                {done ? (
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#5affd6]" />
                ) : (
                  <Circle className="h-3.5 w-3.5 text-white/20" />
                )}
              </span>
              <span
                className={cn(
                  "text-[11px] leading-snug flex-1",
                  done ? "text-white/35 line-through" : "text-white/60",
                )}
              >
                {subtopic}
              </span>
              <span className="shrink-0 text-[9px] font-mono text-white/15 mt-0.5">
                {i + 1}/{topic.subtopics.length}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* ── Dependencies ─────────────────────────────────────────── */}
      {topic.dependencies && topic.dependencies.length > 0 && (
        <div className="space-y-1.5">
          <p className="text-[10px] font-semibold text-white/25 uppercase tracking-[0.15em] flex items-center gap-1.5">
            <Target className="h-2.5 w-2.5" />
            Requiere saber
          </p>
          <div className="flex flex-wrap gap-1.5">
            {topic.dependencies.map((dep, i) => (
              <span
                key={i}
                className="text-[10px] text-white/35 border border-white/[0.08] rounded px-2 py-0.5 font-mono"
              >
                {dep}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* ── Resources ────────────────────────────────────────────── */}
      {topic.resources && topic.resources.length > 0 && (
        <div className="space-y-1.5">
          <p className="text-[10px] font-semibold text-white/25 uppercase tracking-[0.15em] flex items-center gap-1.5 mb-2">
            <BookOpen className="h-2.5 w-2.5" />
            Recursos ({topic.resources.length})
          </p>
          <div className="space-y-1">
            {topic.resources.map((res, i) => (
              <motion.a
                key={i}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.04 }}
                className="group flex items-center gap-2 px-3 py-2 rounded-lg border border-white/[0.06] hover:border-white/[0.14] hover:bg-white/[0.03] transition-all duration-150"
              >
                <span className="flex-1 text-[11px] text-white/45 group-hover:text-white/75 transition-colors truncate">
                  {res.title}
                </span>
                <ExternalLink className="h-3 w-3 text-white/15 group-hover:text-[#5affd6]/60 transition-colors shrink-0" />
              </motion.a>
            ))}
          </div>
        </div>
      )}

      {/* ── Study tip ────────────────────────────────────────────── */}
      <div className="rounded-xl border border-[#f0c040]/15 bg-[#f0c040]/[0.04] p-3">
        <div className="flex items-center gap-1.5 mb-1.5">
          <Lightbulb className="h-3 w-3 text-[#f0c040]/60" />
          <span className="text-[10px] font-semibold text-[#f0c040]/60 uppercase tracking-[0.12em]">
            Tip
          </span>
        </div>
        <p className="text-[11px] text-white/30 leading-relaxed">
          Practica con código real antes de marcar como completado. El que
          implementa aprende. El que solo lee, olvida.
        </p>
      </div>

      {/* ── Exercises ────────────────────────────────────────────── */}
      <div className="space-y-2.5">
        {/* Section header */}
        <div className="flex items-center gap-2 pt-1">
          <Code2 className="h-3 w-3 text-white/30" />
          <p className="text-[10px] font-semibold text-white/30 uppercase tracking-[0.15em]">
            Ejercicios prácticos
          </p>
        </div>

        <ExerciseCard
          exercise={easyEx}
          exerciseKey={easyKey}
          phaseId={phaseId}
          topicId={topic.id}
          index={0}
        />
        <ExerciseCard
          exercise={hardEx}
          exerciseKey={hardKey}
          phaseId={phaseId}
          topicId={topic.id}
          index={1}
        />
      </div>

      {/* Bottom spacer */}
      <div className="h-4" />
    </div>
  );
}
