import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const skills = [
  { id: 1, name: "Санау", icon: "🔢", level: 1, completed: true, x: 50, y: 90 },
  { id: 2, name: "Қосу", icon: "➕", level: 2, completed: true, x: 30, y: 70 },
  { id: 3, name: "Азайту", icon: "➖", level: 2, completed: true, x: 70, y: 70 },
  { id: 4, name: "Кезекті санау", icon: "🦘", level: 3, completed: false, x: 20, y: 50 },
  { id: 5, name: "Көбейту", icon: "✖️", level: 3, completed: false, x: 50, y: 50 },
  { id: 6, name: "Бөлу", icon: "➗", level: 3, completed: false, x: 80, y: 50 },
  { id: 7, name: "Бөлшектер", icon: "🍕", level: 4, completed: false, x: 35, y: 30 },
  { id: 8, name: "Пішіндер", icon: "📐", level: 4, completed: false, x: 65, y: 30 },
  { id: 9, name: "Уақыт", icon: "🕐", level: 5, completed: false, x: 50, y: 10 },
]

export function SkillTree() {
  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Маңызды Нәтижелер!</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">94%</div>
              <p className="text-sm text-muted-foreground">оқушылар 30 күн ішінде математика бағаларын жақсартады</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">2.5x</div>
              <p className="text-sm text-muted-foreground">дәстүрлі әдістерге қарағанда жылдамырақ оқу</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
              <p className="text-sm text-muted-foreground">3-сынып оқушылары бізбен бірге математиканы меңгеріп жатыр</p>
            </Card>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Математика дағдыларыңның қалай өсетінін көр! Жаңа тарауларды ашу және жетістіктерге жету үшін сабақтарды аяқта.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <Card className="p-6 mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">Жалпы үлгерім</span>
              <span className="text-sm text-muted-foreground">9 дағдының 3-і меңгерілді</span>
            </div>
            <div className="w-full bg-muted rounded-full h-3">
              <div className="bg-primary h-3 rounded-full transition-all duration-500" style={{ width: "33%" }}></div>
            </div>
          </Card>

          {/* Skill Tree Visualization */}
          <Card className="p-8 relative overflow-hidden" style={{ minHeight: "500px" }}>
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" className="absolute inset-0">
                {/* Tree trunk */}
                <rect x="48%" y="85%" width="4%" height="15%" fill="currentColor" />
                {/* Connecting lines */}
                <line x1="50%" y1="85%" x2="30%" y2="70%" stroke="currentColor" strokeWidth="2" opacity="0.3" />
                <line x1="50%" y1="85%" x2="70%" y2="70%" stroke="currentColor" strokeWidth="2" opacity="0.3" />
                <line x1="30%" y1="70%" x2="20%" y2="50%" stroke="currentColor" strokeWidth="2" opacity="0.3" />
                <line x1="50%" y1="70%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="2" opacity="0.3" />
                <line x1="70%" y1="70%" x2="80%" y2="50%" stroke="currentColor" strokeWidth="2" opacity="0.3" />
              </svg>
            </div>

            {skills.map((skill) => (
              <div
                key={skill.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
              >
                <Button
                  variant={skill.completed ? "default" : "outline"}
                  size="lg"
                  className={`w-16 h-16 rounded-full text-2xl relative ${
                    skill.completed
                      ? "bg-primary hover:bg-primary/90"
                      : skill.level <= 3
                        ? "hover:bg-accent"
                        : "opacity-50 cursor-not-allowed"
                  }`}
                  disabled={!skill.completed && skill.level > 3}
                >
                  {skill.icon}
                  {skill.completed && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </Button>
                <div className="text-center mt-2">
                  <p className="text-sm font-medium">{skill.name}</p>
                  <p className="text-xs text-muted-foreground">Деңгей {skill.level}</p>
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </section>
  )
}
