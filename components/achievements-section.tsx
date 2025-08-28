import { Card } from "@/components/ui/card"

const achievements = [
  { id: 1, name: "Алғашқы Қадамдар", icon: "👶", description: "Алғашқы сабағыңды аяқта", earned: true },
  { id: 2, name: "Қосу Шебері", icon: "🏆", description: "Барлық қосу дағдыларын меңгер", earned: true },
  { id: 3, name: "Жылдамдық Чемпионы", icon: "⚡", description: "60 секундта 10 сұраққа жауап бер", earned: true },
  { id: 4, name: "Керемет Апта", icon: "📅", description: "Бір апта бойы күнде жаттығу жаса", earned: false },
  { id: 5, name: "Математика Сиқыршысы", icon: "🧙‍♂️", description: "3-сыныптың барлық дағдыларын аяқта", earned: false },
  { id: 6, name: "Көмекші", icon: "🤝", description: "Досыңа математикадан көмектес", earned: false },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Сенің Жетістіктерің</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Жаңа дағдыларды меңгеріп, жетістіктерге жеткен сайын төсбелгілер жина!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {achievements.map((achievement) => (
            <Card
              key={achievement.id}
              className={`p-4 text-center transition-all hover:scale-105 ${
                achievement.earned ? "bg-primary/10 border-primary/50" : "opacity-50 grayscale"
              }`}
            >
              <div className="text-3xl mb-2">{achievement.icon}</div>
              <h3 className="font-semibold text-sm mb-1">{achievement.name}</h3>
              <p className="text-xs text-muted-foreground">{achievement.description}</p>
              {achievement.earned && (
                <div className="mt-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary text-primary-foreground">
                    ✓ Алынды
                  </span>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
