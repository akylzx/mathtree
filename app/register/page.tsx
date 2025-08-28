'use client'

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"

export default function RegisterPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (!email || !password || !confirmPassword) {
      setError("Барлық өрістерді толтырыңыз.")
      return
    }
    if (password !== confirmPassword) {
      setError("Құпиясөздер сәйкес келмейді.")
      return
    }
    if (password.length < 6) {
      setError("Құпиясөз кем дегенде 6 таңбадан тұруы керек.")
      return
    }

    // Mock registration logic
    console.log("Тіркеу әрекеті:", { email, password })
    setSuccess("Сіз сәтті тіркелдіңіз! Енді кіруге болады.")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
    // In a real application, you would send this data to a backend API
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white rounded-lg shadow-xl p-6">
          <CardHeader className="text-center mb-6">
            <CardTitle className="text-3xl font-bold text-primary">Тіркелу 📝</CardTitle>
            <p className="text-lg text-muted-foreground">Жаңа есептік жазба жасаңыз</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Электрондық пошта
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Сіздің электрондық поштаңыз"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 text-base"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Құпиясөз
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Құпиясөзіңіз"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-12 text-base"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Құпиясөзді растаңыз
                </label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Құпиясөзді қайталаңыз"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="h-12 text-base"
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              {success && <p className="text-green-500 text-sm">{success}</p>}
              <Button type="submit" className="w-full h-12 text-lg">
                Тіркелу
              </Button>
            </form>
            <p className="text-center text-sm text-gray-600 mt-4">
              Есептік жазбаңыз бар ма?{' '}
              <Link href="/login" className="text-primary hover:underline">
                Кіру
              </Link>
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
