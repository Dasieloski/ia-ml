"use client"

import {
  useState, useEffect, useCallback, useMemo,
  createContext, useContext,
} from "react"
import type { ReactNode } from "react"
import { roadmapData } from "./roadmap-data"

// ─── Lookup tables built ONCE at module load ──────────────────────────────────
// No magic multipliers — real counts from the actual data.

const topicSubtopicCount: Record<string, number> = {}
const phaseSubtopicCount: Record<string, number> = {}
let TOTAL_SUBTOPICS = 0

for (const phase of roadmapData.phases) {
  let phaseTotal = 0
  for (const mod of phase.modules) {
    for (const sub of mod.submodules) {
      for (const topic of sub.topics) {
        const n = topic.subtopics.length
        topicSubtopicCount[topic.id] = n
        phaseTotal += n
        TOTAL_SUBTOPICS += n
      }
    }
  }
  phaseSubtopicCount[phase.id] = phaseTotal
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface ProgressState {
  completedItems: string[]
  lastUpdated: string
}

const defaultState: ProgressState = {
  completedItems: [],
  lastUpdated: new Date().toISOString(),
}

export interface ProgressStore {
  completedItems: Set<string>
  isLoaded: boolean
  totalSubtopics: number
  isCompleted: (phaseId: string, topicId: string, subtopicId: string) => boolean
  toggleComplete: (phaseId: string, topicId: string, subtopicId: string) => void
  getTopicProgress: (phaseId: string, topicId: string) => number
  getPhaseProgress: (phaseId: string) => number
  getTotalProgress: () => number
  resetProgress: () => void
}

// ─── Context ──────────────────────────────────────────────────────────────────

const ProgressContext = createContext<ProgressStore | null>(null)

// ─── Provider — ONE instance, shared across all children ─────────────────────

const STORAGE_KEY = "aiml-roadmap-progress"

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ProgressState>(defaultState)
  const [isLoaded, setIsLoaded] = useState(false)

  // Hydrate from localStorage once on mount
  useEffect(() => {
    if (typeof window === "undefined") return
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setState(JSON.parse(raw) as ProgressState)
    } catch {/* ignore */}
    setIsLoaded(true)
  }, [])

  // Persist every time state changes (after hydration)
  useEffect(() => {
    if (!isLoaded || typeof window === "undefined") return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {/* ignore */}
  }, [state, isLoaded])

  // O(1) lookup set — recreated only when completedItems array changes
  const completedItems = useMemo(
    () => new Set(state.completedItems),
    [state.completedItems],
  )

  const isCompleted = useCallback(
    (phaseId: string, topicId: string, subtopicId: string) =>
      completedItems.has(`${phaseId}:${topicId}:${subtopicId}`),
    [completedItems],
  )

  const toggleComplete = useCallback(
    (phaseId: string, topicId: string, subtopicId: string) => {
      const key = `${phaseId}:${topicId}:${subtopicId}`
      setState(prev => {
        const next = new Set(prev.completedItems)
        if (next.has(key)) next.delete(key)
        else next.add(key)
        return { completedItems: Array.from(next), lastUpdated: new Date().toISOString() }
      })
    },
    [],
  )

  // ── Progress calculations using real counts ─────────────────────────────────

  const getTopicProgress = useCallback(
    (phaseId: string, topicId: string): number => {
      const total = topicSubtopicCount[topicId] ?? 0
      if (total === 0) return 0
      const prefix = `${phaseId}:${topicId}:`
      const done = state.completedItems.filter(k => k.startsWith(prefix)).length
      return Math.round((done / total) * 100)
    },
    [state.completedItems],
  )

  const getPhaseProgress = useCallback(
    (phaseId: string): number => {
      const total = phaseSubtopicCount[phaseId] ?? 0
      if (total === 0) return 0
      const prefix = `${phaseId}:`
      const done = state.completedItems.filter(k => k.startsWith(prefix)).length
      return Math.round((done / total) * 100)
    },
    [state.completedItems],
  )

  const getTotalProgress = useCallback(
    (): number => {
      if (TOTAL_SUBTOPICS === 0) return 0
      return Math.round((state.completedItems.length / TOTAL_SUBTOPICS) * 100)
    },
    [state.completedItems],
  )

  const resetProgress = useCallback(
    () => setState({ completedItems: [], lastUpdated: new Date().toISOString() }),
    [],
  )

  const store: ProgressStore = {
    completedItems,
    isLoaded,
    totalSubtopics: TOTAL_SUBTOPICS,
    isCompleted,
    toggleComplete,
    getTopicProgress,
    getPhaseProgress,
    getTotalProgress,
    resetProgress,
  }

  return (
    <ProgressContext.Provider value={store}>
      {children}
    </ProgressContext.Provider>
  )
}

// ─── Hook — throws if used outside provider ───────────────────────────────────

export function useProgress(): ProgressStore {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error("useProgress() must be used inside <ProgressProvider>")
  return ctx
}
