'use client'

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SkillTree } from "@/components/skill-tree"
import { AchievementsSection } from "@/components/achievements-section"
import { ParentSection } from "@/components/parent-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <SkillTree />
        <AchievementsSection />
        <ParentSection />
      </main>
      <footer className="bg-card border-t py-8">
        <div className="container px-4 mx-auto text-center">
          <p className="text-muted-foreground">Математика Ағашы. Бүкіл әлемнің оқушылар үшін математиканы қызықты етеміз! 🌳</p>
        </div>
      </footer>
    </div>
  )
}
