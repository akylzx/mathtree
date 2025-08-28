'use client'

import { Navbar } from "@/components/navbar"
import { LessonCard } from "@/components/lesson-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Temporary mock data for lessons under a topic
const topicLessons: Record<string, any[]> = {
  "place-value": [
    { id: 1, title: "Бірлік, Ондық, Жүздіктер", description: "Сандардың орнын үйрен", completed: true, locked: false },
    { id: 2, title: "Сандарды оқу", description: "Үш таңбалы сандарды қалай оқу керектігін біл", completed: false, locked: false },
    { id: 3, title: "Сандарды жазу", description: "Сандарды дұрыс жазуды жаттық", completed: false, locked: false },
    { id: 4, title: "Сандарды салыстыру", description: "Сандарды үлкен-кішілігіне қарай салыстыру", completed: false, locked: false },
    { id: 5, title: "Сандарды дөңгелектеу", description: "Сандарды жуықтап дөңгелектеу", completed: false, locked: true },
    { id: 6, title: "Сандарды реттеу", description: "Сандарды өсу/кему ретімен орналастыру", completed: false, locked: true },
  ],
  "addition-subtraction": [
    { id: 1, title: "2 таңбалы сандарды қосу", description: "Екі таңбалы сандарды қалай қосу керектігін үйрен", completed: false, locked: false },
    { id: 2, title: "Топтастырумен қосу", description: "Топтастыру арқылы қосуды меңгер", completed: false, locked: false },
    { id: 3, title: "3 таңбалы сандарды қосу", description: "Үш таңбалы сандарды қосуды үйрен", completed: false, locked: true },
    { id: 4, title: "2 таңбалы сандарды азайту", description: "Екі таңбалы сандарды қалай азайту керектігін үйрен", completed: false, locked: true },
    { id: 5, title: "3 таңбалы сандарды азайту", description: "Үш таңбалы сандарды азайтуды үйрен", completed: false, locked: true },
  ],
  "multiplication-facts": [
    { id: 1, title: "Көбейтуді түсіну", description: "Көбейту не екенін біл", completed: false, locked: false },
    { id: 2, title: "Көбейту кестесі 0, 1, 2", description: "0, 1, 2 көбейту кестесін жатта", completed: false, locked: false },
    { id: 3, title: "Көбейту кестесі 3, 4, 5", description: "3, 4, 5 көбейту кестесін үйрен", completed: false, locked: true },
    { id: 4, title: "Көбейту кестесі 6, 7, 8", description: "6, 7, 8 көбейту кестесін үйрен", completed: false, locked: true },
    { id: 5, title: "Көбейту кестесі 9, 10", description: "9, 10 көбейту кестесін үйрен", completed: false, locked: true },
  ],
  "fractions": [
    { id: 1, title: "Бөлшектер деген не?", description: "Бөлшектердің негіздерін үйрен", completed: false, locked: false },
    { id: 2, title: "Бөлшектерді салыстыру", description: "Бөлшектерді салыстыруды үйрен", completed: false, locked: true },
    { id: 3, title: "Эквивалентті бөлшектер", description: "Эквивалентті бөлшектерді тап", completed: false, locked: true },
    { id: 4, title: "Бөлшектерді қосу және азайту", description: "Бөлшектерді қосу және азайту", completed: false, locked: true },
  ],
  "word-problems": [
    { id: 1, title: "Есептерді түсіну", description: "Есептерді қалай шешу керектігін үйрен", completed: false, locked: false },
    { id: 2, title: "Қосу және азайту есептері", description: "Қосу және азайтуға арналған есептерді шеш", completed: false, locked: true },
    { id: 3, title: "Көбейту және бөлу есептері", description: "Көбейту және бөлуге арналған есептерді шеш", completed: false, locked: true },
    { id: 4, title: "Аралас амалдар есептері", description: "Аралас амалдарды қолданатын есептерді шеш", completed: false, locked: true },
  ],
  "geometry": [
    { id: 1, title: "Пішіндер әлемі", description: "Негізгі 2D пішіндерді таны", completed: false, locked: false },
    { id: 2, title: "Қабырғалар мен төбелер", description: "Пішіндердің қабырғалары мен төбелерін анықта", completed: false, locked: true },
    { id: 3, title: "Көлемді пішіндер (3D)", description: "Негізгі 3D пішіндермен таныс", completed: false, locked: true },
  ],
}

export default function TopicPage({ params }: { params: { topicId: string } }) {
  const lessons = topicLessons[params.topicId] || []
  const topicTitle = params.topicId
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link href="/skill-tree">
            <Button variant="outline" size="sm">
              Артқа
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-primary">{topicTitle} Тақырыбы</h1>
          <div></div> {/* Spacer */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.length > 0 ? (
            lessons.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} topicId={params.topicId} />
            ))
          ) : (
            <p className="text-center text-muted-foreground col-span-full">Бұл тақырыпта сабақтар әлі жоқ.</p>
          )}
        </div>
      </main>
    </div>
  )
}
