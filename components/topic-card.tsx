import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

interface Topic {
  id: string
  title: string
  description: string
  icon: string
  color: string
  progress: number
  totalLessons: number
}

interface TopicCardProps {
  topic: Topic
}

export function TopicCard({ topic }: TopicCardProps) {
  const progressPercentage = (topic.progress / topic.totalLessons) * 100

  return (
    <Card className={`${topic.color} hover:shadow-lg transition-all duration-300 hover:scale-105`}>
      <CardHeader className="text-center">
        <div className="text-4xl mb-2">{topic.icon}</div>
        <CardTitle className="text-lg font-bold">{topic.title}</CardTitle>
        <CardDescription className="text-sm">{topic.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Үлгерім</span>
            <span>
              {topic.progress}/{topic.totalLessons}
            </span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
        <Link href={`/topic/${topic.id}`}>
          <Button className="w-full" size="sm">
            {topic.progress === 0 ? "Оқуды бастау" : "Жалғастыру"}
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
