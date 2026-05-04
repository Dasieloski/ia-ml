"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X, BookOpen, Sparkles } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { roadmapData, type Topic } from "@/lib/roadmap-data"
import { cn } from "@/lib/utils"

interface SearchResult {
  type: "topic" | "subtopic"
  phaseId: string
  phaseName: string
  topicId: string
  topicTitle: string
  subtopic?: string
  matchedField: string
  matchedText: string
  difficulty: string
}

interface SearchExplorerProps {
  onNavigate: (phaseId: string, topicId: string) => void
}

export function SearchExplorer({ onNavigate }: SearchExplorerProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [difficultyFilter, setDifficultyFilter] = useState<string>("all")
  const [isOpen, setIsOpen] = useState(false)

  const searchResults = useMemo(() => {
    if (!searchQuery.trim() && difficultyFilter === "all") {
      return []
    }

    const results: SearchResult[] = []
    const query = searchQuery.toLowerCase().trim()

    roadmapData.phases.forEach(phase => {
      phase.modules.forEach(module => {
        module.submodules.forEach(submodule => {
          submodule.topics.forEach(topic => {
            const matchesDifficulty = difficultyFilter === "all" || topic.difficulty === difficultyFilter
            
            if (!matchesDifficulty) return

            // Search in topic title and description
            if (query && (
              topic.title.toLowerCase().includes(query) ||
              topic.description.toLowerCase().includes(query)
            )) {
              results.push({
                type: "topic",
                phaseId: phase.id,
                phaseName: phase.title,
                topicId: topic.id,
                topicTitle: topic.title,
                matchedField: "Tema",
                matchedText: topic.title,
                difficulty: topic.difficulty
              })
            }

            // Search in subtopics (strings array)
            if (topic.subtopics) {
              topic.subtopics.forEach((subtopic, index) => {
                const matchesQuery = !query || subtopic.toLowerCase().includes(query)

                if (matchesQuery && (query || difficultyFilter !== "all")) {
                  // Avoid duplicates - only add if not already added as topic
                  const alreadyAdded = results.some(
                    r => r.topicId === topic.id && r.type === "subtopic" && r.subtopic === subtopic
                  )
                  if (!alreadyAdded && subtopic.toLowerCase().includes(query)) {
                    results.push({
                      type: "subtopic",
                      phaseId: phase.id,
                      phaseName: phase.title,
                      topicId: topic.id,
                      topicTitle: topic.title,
                      subtopic: subtopic,
                      matchedField: "Subtema",
                      matchedText: subtopic,
                      difficulty: topic.difficulty
                    })
                  }
                }
              })
            }
          })
        })
      })
    })

    return results.slice(0, 50) // Limit results
  }, [searchQuery, difficultyFilter])

  const handleResultClick = (result: SearchResult) => {
    onNavigate(result.phaseId, result.topicId)
    setIsOpen(false)
  }

  const clearFilters = () => {
    setSearchQuery("")
    setDifficultyFilter("all")
  }

  const hasActiveFilters = searchQuery || difficultyFilter !== "all"

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Search className="h-4 w-4" />
          <span className="hidden sm:inline">Buscar</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-xl">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            Explorador de Contenido
          </SheetTitle>
          <SheetDescription>
            Busca temas y conceptos en todo el roadmap
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar en el roadmap..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>

          {/* Filters */}
          <div className="flex gap-2">
            <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Dificultad" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las dificultades</SelectItem>
                <SelectItem value="beginner">Principiante</SelectItem>
                <SelectItem value="intermediate">Intermedio</SelectItem>
                <SelectItem value="advanced">Avanzado</SelectItem>
                <SelectItem value="expert">Experto</SelectItem>
              </SelectContent>
            </Select>

            {hasActiveFilters && (
              <Button variant="ghost" size="icon" onClick={clearFilters}>
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Results Count */}
          {hasActiveFilters && (
            <p className="text-sm text-muted-foreground">
              {searchResults.length} resultado{searchResults.length !== 1 ? "s" : ""} encontrado{searchResults.length !== 1 ? "s" : ""}
            </p>
          )}

          {/* Results */}
          <ScrollArea className="h-[calc(100vh-280px)]">
            <AnimatePresence mode="popLayout">
              {searchResults.length > 0 ? (
                <div className="space-y-2 pr-4">
                  {searchResults.map((result, index) => (
                    <motion.div
                      key={`${result.phaseId}-${result.topicId}-${result.subtopic || ""}-${index}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ delay: index * 0.02 }}
                    >
                      <SearchResultCard 
                        result={result} 
                        onClick={() => handleResultClick(result)}
                      />
                    </motion.div>
                  ))}
                </div>
              ) : hasActiveFilters ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Search className="h-12 w-12 text-muted-foreground/50 mb-4" />
                  <p className="text-muted-foreground">No se encontraron resultados</p>
                  <p className="text-sm text-muted-foreground/70">
                    Intenta con otros terminos o filtros
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <BookOpen className="h-12 w-12 text-muted-foreground/50 mb-4" />
                  <p className="text-muted-foreground">Comienza a buscar</p>
                  <p className="text-sm text-muted-foreground/70">
                    Escribe para buscar temas o conceptos
                  </p>
                </div>
              )}
            </AnimatePresence>
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  )
}

interface SearchResultCardProps {
  result: SearchResult
  onClick: () => void
}

function SearchResultCard({ result, onClick }: SearchResultCardProps) {
  const getTypeColor = () => {
    switch (result.type) {
      case "topic": return "bg-primary/10 text-primary border-primary/20"
      case "subtopic": return "bg-blue-500/10 text-blue-500 border-blue-500/20"
    }
  }

  const getDifficultyColor = () => {
    switch (result.difficulty) {
      case "beginner": return "bg-emerald-500/10 text-emerald-500"
      case "intermediate": return "bg-blue-500/10 text-blue-500"
      case "advanced": return "bg-amber-500/10 text-amber-500"
      case "expert": return "bg-red-500/10 text-red-500"
      default: return "bg-muted text-muted-foreground"
    }
  }

  return (
    <Card 
      className="cursor-pointer hover:bg-muted/50 transition-colors"
      onClick={onClick}
    >
      <CardHeader className="p-3">
        <div className="flex items-start gap-3">
          <Badge variant="outline" className={cn("shrink-0 text-xs", getTypeColor())}>
            {result.matchedField}
          </Badge>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-sm font-medium truncate">
              {result.type === "subtopic" && result.subtopic 
                ? result.subtopic 
                : result.topicTitle}
            </CardTitle>
            <CardDescription className="text-xs mt-1 truncate">
              {result.phaseName} {result.type === "subtopic" && `→ ${result.topicTitle}`}
            </CardDescription>
          </div>
          <Badge variant="secondary" className={cn("text-xs shrink-0", getDifficultyColor())}>
            {result.difficulty}
          </Badge>
        </div>
      </CardHeader>
    </Card>
  )
}
