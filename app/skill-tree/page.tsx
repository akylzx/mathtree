'use client'

import { Navbar } from "@/components/navbar"
import { InteractiveSkillTree } from "@/components/interactive-skill-tree"

const mathTopics = [
  {
    id: "place-value",
    title: "Разрядтық мән",
    description: "Бірлік, ондық, жүздіктерді үйрен",
    icon: "🔢",
    color: "bg-blue-500",
    progress: 0,
    totalLessons: 6,
    x: 50,
    y: 10,
    dependencies: [],
    unlocked: true,
  },
  {
    id: "addition-subtraction",
    title: "Қосу және Азайту",
    description: "1,000-ға дейінгі сандарды қосып, азайт",
    icon: "➕",
    color: "bg-green-500",
    progress: 0,
    totalLessons: 5,
    x: 50,
    y: 30,
    dependencies: ["place-value"],
    unlocked: false,
  },
  {
    id: "multiplication-facts",
    title: "Көбейту Кестесі",
    description: "Негізгі көбейту кестесін меңгер",
    icon: "✖️",
    color: "bg-purple-500",
    progress: 0,
    totalLessons: 5,
    x: 25,
    y: 50,
    dependencies: ["addition-subtraction"],
    unlocked: false,
  },
  {
    id: "division",
    title: "Бөлуге Кіріспе",
    description: "Бөлудің негізгі ұғымдарын үйрен",
    icon: "➗",
    color: "bg-orange-500",
    progress: 0,
    totalLessons: 8,
    x: 75,
    y: 50,
    dependencies: ["addition-subtraction"],
    unlocked: false,
  },
  {
    id: "fractions",
    title: "Бөлшектер",
    description: "Жарты, үштен бір, төрттен бір бөлшектерді түсін",
    icon: "🍕",
    color: "bg-red-500",
    progress: 0,
    totalLessons: 4,
    x: 15,
    y: 75,
    dependencies: ["multiplication-facts"],
    unlocked: false,
  },
  {
    id: "measurement",
    title: "Өлшеу",
    description: "Ұзындық, салмақ және көлем туралы біл",
    icon: "📏",
    color: "bg-yellow-500",
    progress: 0,
    totalLessons: 9,
    x: 40,
    y: 75,
    dependencies: ["multiplication-facts"],
    unlocked: false,
  },
  {
    id: "area-perimeter",
    title: "Аудан және Периметр",
    description: "Пішіндердің ауданы мен периметрін тап",
    icon: "⬜",
    color: "bg-teal-500",
    progress: 0,
    totalLessons: 7,
    x: 65,
    y: 75,
    dependencies: ["division"],
    unlocked: false,
  },
  {
    id: "word-problems",
    title: "Есептер",
    description: "Нақты өмірдегі математикалық есептерді шығар",
    icon: "📝",
    color: "bg-pink-500",
    progress: 0,
    totalLessons: 4,
    x: 85,
    y: 75,
    dependencies: ["division"],
    unlocked: false,
  },
  {
    id: "geometry",
    title: "Геометрия",
    description: "Пішіндер мен кеңістікті зертте",
    icon: "📐",
    color: "bg-cyan-500",
    progress: 0,
    totalLessons: 3,
    x: 50,
    y: 95,
    dependencies: ["place-value"],
    unlocked: false,
  },
]

export default function SkillTreePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">3-сынып Математика Дағдыларының Ағашы</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Математика әлеміндегі саяхатыңа шық! Жаңа дағдыларды ашу үшін тапсырмаларды орында.
          </p>
        </div>

        <InteractiveSkillTree topics={mathTopics} />
      </main>
    </div>
  )
}
