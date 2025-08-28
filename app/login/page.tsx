'use client'

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (!email || !password) {
      setError("Барлық өрістерді толтырыңыз.")
      return
    }

    // Mock login logic
    console.log("Кіру әрекеті:", { email, password })
    if (email === "test@example.com" && password === "password123") {
      setSuccess("Сіз сәтті кірдіңіз!")
      // In a real application, you would handle session/token storage here
    } else {
      setError("Қате электрондық пошта немесе құпиясөз.")
    }
    setEmail("")
    setPassword("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white rounded-lg shadow-xl p-6">
          <CardHeader className="text-center mb-6">
            <CardTitle className="text-3xl font-bold text-primary">Кіру 🔑</CardTitle>
            <p className="text-lg text-muted-foreground">Есептік жазбаңызға кіріңіз</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
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
              {error && <p className="text-red-500 text-sm">{error}</p>}
              {success && <p className="text-green-500 text-sm">{success}</p>}
              <Button type="submit" className="w-full h-12 text-lg">
                Кіру
              </Button>
            </form>
            <p className="text-center text-sm text-gray-600 mt-4">
              Есептік жазбаңыз жоқ па?{' '}
              <Link href="/register" className="text-primary hover:underline">
                Тіркелу
              </Link>
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
