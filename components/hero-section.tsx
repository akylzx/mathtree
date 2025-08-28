import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-card to-background py-20">
      <div className="container px-4 mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6">
              <span className="text-4xl">🌳</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
              Қош келдің, <span className="text-primary">Математика Әлеміне!</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
              Мыңдаған 3-сынып оқушыларына қосылып, қызықты сабақтармен математикалық біліміңді дамыт. Білімің әдемі ағаштай қалай өсетінін көр!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6">
              🚀 Оқуды қазір баста!
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              👨‍👩‍👧‍👦 Ата-аналарға ақпарат
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="p-6 text-center border-2 hover:border-primary/50 transition-colors">
              <div className="text-3xl mb-3">➕</div>
              <h3 className="font-semibold mb-2">Қосу және Азайту</h3>
              <p className="text-sm text-muted-foreground">Қызықты ойындармен негіздерді меңгер</p>
            </Card>
            <Card className="p-6 text-center border-2 hover:border-primary/50 transition-colors">
              <div className="text-3xl mb-3">✖️</div>
              <h3 className="font-semibold mb-2">Көбейту</h3>
              <p className="text-sm text-muted-foreground">Ойын арқылы көбейту кестесін үйрен</p>
            </Card>
            <Card className="p-6 text-center border-2 hover:border-primary/50 transition-colors">
              <div className="text-3xl mb-3">📐</div>
              <h3 className="font-semibold mb-2">Пішіндер мен Өрнектер</h3>
              <p className="text-sm text-muted-foreground">Геометрия әлемін зертте</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
