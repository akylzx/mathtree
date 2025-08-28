'use client'

import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

const skills = [
  { id: 1, name: "Санау", icon: "🔢", level: 1, completed: true },
  { id: 2, name: "Қосу", icon: "➕", level: 2, completed: true },
  { id: 3, name: "Азайту", icon: "➖", level: 2, completed: true },
  { id: 4, name: "Кезекті санау", icon: "🦘", level: 3, completed: false },
  { id: 5, name: "Көбейту", icon: "✖️", level: 3, completed: false },
  { id: 6, name: "Бөлу", icon: "➗", level: 3, completed: false },
  { id: 7, name: "Бөлшектер", icon: "🍕", level: 4, completed: false },
  { id: 8, name: "Пішіндер", icon: "📐", level: 4, completed: false },
  { id: 9, name: "Уақыт", icon: "🕐", level: 5, completed: false },
  { id: 10, name: "Өлшеу", icon: "📏", level: 5, completed: false },
  { id: 11, name: "Есептер", icon: "🤔", level: 6, completed: false },
]

const skillsByLevel: Record<number, typeof skills> = skills.reduce((acc, skill) => {
  (acc[skill.level] = acc[skill.level] || []).push(skill)
  return acc
}, {} as Record<number, typeof skills>)

export default function ProgressPage() {
  const totalLevels = 6 // Assuming 6 levels in total, as requested
  const completedSkills = skills.filter(skill => skill.completed).length
  const totalSkills = skills.length
  const overallProgress = (completedSkills / totalSkills) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Сенің Үлгерімің! 🚀</h1>
        <p className="text-lg text-muted-foreground mb-12 text-center">
          Осы жерден сен өз біліміңнің қалай өсіп жатқанын көре аласың. Жаңа дағдыларды ашып, деңгейлерді бағындыр!
        </p>

        {/* Overall Progress Bar */}
        <Card className="p-6 mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl mb-2">Жалпы Үлгерім</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-3">
              <span className="font-semibold text-lg">{completedSkills} / {totalSkills} дағды меңгерілді</span>
              <span className="text-primary text-xl font-bold">{overallProgress.toFixed(0)}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-4">
              <div
                className="bg-primary h-4 rounded-full transition-all duration-500"
                style={{ width: `${overallProgress}%` }}
              ></div>
            </div>
          </CardContent>
        </Card>

        {/* Levels Section */}
        {Array.from({ length: totalLevels }, (_, i) => i + 1).map((level) => (
          <div key={level} className="mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              Деңгей {level}: {
                level === 1 ? "Бастаушы" :
                level === 2 ? "Оңай" :
                level === 3 ? "Орташа" :
                level === 4 ? "Жақсы" :
                level === 5 ? "Жоғары" :
                "Мастер"
              }
              <span className="ml-4 text-primary text-2xl">
                {skillsByLevel[level] && skillsByLevel[level].filter(s => s.completed).length === skillsByLevel[level].length && "🏆"}
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsByLevel[level] ? (
                skillsByLevel[level].map((skill) => (
                  <Card key={skill.id} className="p-5 flex items-center space-x-4 shadow-md">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center text-3xl
                      ${skill.completed ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-500"}`}
                    >
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold">{skill.name}</h3>
                      <p className="text-muted-foreground">Деңгей {skill.level}</p>
                    </div>
                    {skill.completed && (
                      <CheckCircle className="text-green-500 w-6 h-6" />
                    )}
                  </Card>
                ))
              ) : (
                <p className="text-muted-foreground col-span-full">Бұл деңгейде әлі дағдылар жоқ.</p>
              )}
            </div>
          </div>
        ))}

        <div className="text-center mt-12">
          <Button size="lg">
            Жаңа дағдыларды зерттеу
          </Button>
        </div>
      </main>
    </div>
  )
}
