'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
            🧮
          </div>
          <Link href="/" className="font-bold text-xl text-primary">
            Математика Ағашы
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <a href="/skill-tree" className="text-sm font-medium hover:text-primary transition-colors">
            Дағдылар
          </a>
          <a href="/progress" className="text-sm font-medium hover:text-primary transition-colors">
            Жетістіктер
          </a>
          <a href="/komekshi" className="text-sm font-medium hover:text-primary transition-colors">
            Көмекші
          </a>
          <a href="/calculator" className="text-sm font-medium hover:text-primary transition-colors">
            Калкулятор
          </a>
        </div>

        <div className="flex items-center space-x-2">
          <Link href="/login">
            <Button variant="outline" size="sm">
              Кіру
            </Button>
          </Link>
          <Link href="/register">
            <Button size="sm">Тіркелу</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
