import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ParentSection() {
  return (
    <section id="parents" className="py-20 bg-card/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ата-аналар мен Мұғалімдерге</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Балаңыздың оқу үлгерімін қадағалаңыз, оқу барысы туралы ақпарат алыңыз және оның математикалық саяхатына сенімді түрде қолдау көрсетіңіз.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="font-semibold mb-2">Үлгерімді Бақылау</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Балаңыздың оқу үлгерімі туралы толық есептер мен жақсартуға болатын бағыттарды алыңыз.
            </p>
            <Button variant="outline" size="sm">
              Көбірек білу
            </Button>
          </Card>

          <Card className="p-6">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="font-semibold mb-2">Оқу Бағдарламасына Сәйкес</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Барлық мазмұн 3-сыныптың математика стандарттарына және оқу мақсаттарына сәйкес келеді.
            </p>
            <Button variant="outline" size="sm">
              Стандарттарды қарау
            </Button>
          </Card>

          <Card className="p-6">
            <div className="text-3xl mb-4">🛡️</div>
            <h3 className="font-semibold mb-2">Қауіпсіз және Сенімді</h3>
            <p className="text-sm text-muted-foreground mb-4">
              COPPA талаптарына сәйкес, жарнамасыз, чат функцияларсыз және сыртқы сілтемелерсіз.
            </p>
            <Button variant="outline" size="sm">
              Қауіпсіздік туралы ақпарат
            </Button>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="text-lg px-8 py-6">
            👨‍👩‍👧‍👦 Ата-ана аккаунтын жасау
          </Button>
        </div>
      </div>
    </section>
  )
}
