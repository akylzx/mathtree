import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Lock, Play } from "lucide-react"
import Link from "next/link"

interface Lesson {
  id: number
  title: string
  description: string
  completed: boolean
  locked: boolean
}

interface LessonCardProps {
  lesson: Lesson
  topicId: string
}

export function LessonCard({ lesson, topicId }: LessonCardProps) {
  return (
    <Card
      className={`transition-all duration-300 hover:shadow-lg ${
        lesson.locked
          ? "bg-gray-100 opacity-60"
          : lesson.completed
            ? "bg-green-50 border-green-300"
            : "bg-white hover:scale-105"
      }`}
    >
      <CardHeader className="text-center">
        <div className="flex justify-center mb-2">
          {lesson.locked ? (
            <Lock className="w-8 h-8 text-gray-400" />
          ) : lesson.completed ? (
            <CheckCircle className="w-8 h-8 text-green-500" />
          ) : (
            <Play className="w-8 h-8 text-primary" />
          )}
        </div>
        <CardTitle className="text-lg font-bold">{lesson.title}</CardTitle>
        <CardDescription className="text-sm">{lesson.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {lesson.locked ? (
          <Button disabled className="w-full" size="sm">
            Құлыпталған
          </Button>
        ) : (
          <Link href={`/lesson/${topicId}/${lesson.id}`}>
            <Button className="w-full" size="sm">
              {lesson.completed ? "Қайта қарау" : "Сабақты бастау"}
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
  )
}
