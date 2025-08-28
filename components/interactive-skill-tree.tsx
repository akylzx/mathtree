"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface Topic {
  id: string
  title: string
  description: string
  icon: string
  color: string
  progress: number
  totalLessons: number
  x: number
  y: number
  dependencies: string[]
  unlocked: boolean
}

interface InteractiveSkillTreeProps {
  topics: Topic[]
}

export function InteractiveSkillTree({ topics }: InteractiveSkillTreeProps) {
  const [hoveredTopic, setHoveredTopic] = useState<string | null>(null)

  // Create connections between dependent topics
  const renderConnections = () => {
    return topics.map((topic) => {
      return topic.dependencies.map((depId) => {
        const dependency = topics.find((t) => t.id === depId)
        if (!dependency) return null

        const startX = dependency.x
        const startY = dependency.y + 8
        const endX = topic.x
        const endY = topic.y - 2

        return (
          <line
            key={`${depId}-${topic.id}`}
            x1={`${startX}%`}
            y1={`${startY}%`}
            x2={`${endX}%`}
            y2={`${endY}%`}
            stroke={topic.unlocked ? "#10b981" : "#d1d5db"}
            strokeWidth="3"
            strokeDasharray={topic.unlocked ? "0" : "8,4"}
            className="transition-all duration-300"
          />
        )
      })
    })
  }

  return (
    <div className="relative w-full h-[600px] bg-white rounded-2xl shadow-lg border-2 border-green-200 overflow-hidden">
      {/* SVG for connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">{renderConnections()}</svg>

      {/* Topic nodes */}
      {topics.map((topic) => (
        <div
          key={topic.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${topic.x}%`,
            top: `${topic.y}%`,
          }}
          onMouseEnter={() => setHoveredTopic(topic.id)}
          onMouseLeave={() => setHoveredTopic(null)}
        >
          <div className="relative">
            {/* Glow effect for unlocked topics */}
            {topic.unlocked && (
              <div
                className={`absolute inset-0 ${topic.color} rounded-full blur-lg opacity-30 scale-110 animate-pulse`}
              />
            )}

            {/* Main topic node */}
            <Link href={topic.unlocked ? `/topic/${topic.id}` : "#"}>
              <Button
                variant="outline"
                size="lg"
                className={`
                  relative w-20 h-20 rounded-full border-4 transition-all duration-300 hover:scale-110
                  ${
                    topic.unlocked
                      ? `${topic.color} text-white border-white shadow-lg hover:shadow-xl`
                      : "bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed"
                  }
                  ${hoveredTopic === topic.id ? "scale-110 z-10" : ""}
                `}
                disabled={!topic.unlocked}
              >
                <span className="text-2xl">{topic.icon}</span>
              </Button>
            </Link>

            {/* Progress ring */}
            {topic.progress > 0 && (
              <div className="absolute -inset-1">
                <svg className="w-22 h-22 transform -rotate-90">
                  <circle
                    cx="44"
                    cy="44"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="transparent"
                    className="text-gray-200"
                  />
                  <circle
                    cx="44"
                    cy="44"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - topic.progress / 100)}`}
                    className="text-yellow-400 transition-all duration-500"
                  />
                </svg>
              </div>
            )}

            {/* Topic info tooltip */}
            {hoveredTopic === topic.id && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-20">
                <div className="bg-white rounded-lg shadow-xl border-2 border-gray-200 p-4 min-w-64 max-w-xs">
                  <h3 className="font-bold text-lg text-gray-800 mb-1">{topic.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{topic.description}</p>

                  {topic.progress > 0 && (
                    <div className="mb-2">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Үлгерім</span>
                        <span>{topic.progress}%</span>
                      </div>
                      <Progress value={topic.progress} className="h-2" />
                    </div>
                  )}

                  <div className="text-xs text-gray-500">
                    {topic.totalLessons} сабақ • {topic.unlocked ? "Қолжетімді" : "Құлыпталған"}
                  </div>

                  {!topic.unlocked && topic.dependencies.length > 0 && (
                    <div className="mt-2 text-xs text-orange-600">
                      Аяқтау: {topic.dependencies.map((dep) => topics.find((t) => t.id === dep)?.title).join(", ")}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white/90 rounded-lg p-3 shadow-md">
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span>Қолжетімді</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            <span>Құлыпталған</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-yellow-400 rounded-full"></div>
            <span>Жалғасуда</span>
          </div>
        </div>
      </div>
    </div>
  )
}
