'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"

export default function CalculatorPage() {
  
  const [display, setDisplay] = useState("0")
  const [currentValue, setCurrentValue] = useState<number | null>(null)
  const [operator, setOperator] = useState<string | null>(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleDigitClick = (digit: string) => {
    if (error) {
      setDisplay(digit)
      setError(null)
    } else if (waitingForOperand) {
      setDisplay(digit)
      setWaitingForOperand(false)
    } else {
      setDisplay(display === "0" ? digit : display + digit)
    }
  }

  const handleOperatorClick = (nextOperator: string) => {
    const inputValue = parseFloat(display)

    if (currentValue === null) {
      setCurrentValue(inputValue)
    } else if (operator) {
      const result = performOperation[operator](currentValue, inputValue)
      if (result === "Error: Division by zero") {
        setError("0-ге бөлу мүмкін емес, ақылдым! 😅")
        setDisplay("Қате!")
        setCurrentValue(null)
        setOperator(null)
        setWaitingForOperand(false)
        return
      }
      setCurrentValue(result as number)
      setDisplay(String(result))
    }
    setWaitingForOperand(true)
    setOperator(nextOperator)
    setError(null)
  }

  const performOperation: Record<string, (a: number, b: number) => number | string> = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => (b === 0 ? "Error: Division by zero" : a / b),
  }

  const handleEqualsClick = () => {
    if (currentValue === null || operator === null || waitingForOperand) {
      return
    }

    const inputValue = parseFloat(display)
    const result = performOperation[operator](currentValue, inputValue)

    if (result === "Error: Division by zero") {
      setError("0-ге бөлу мүмкін емес, ақылдым! 😅")
      setDisplay("Қате!")
      setCurrentValue(null)
      setOperator(null)
      setWaitingForOperand(false)
      return
    }

    setDisplay(String(result))
    setCurrentValue(null)
    setOperator(null)
    setWaitingForOperand(true)
    setError(null)
  }

  const handleClear = () => {
    setDisplay("0")
    setCurrentValue(null)
    setOperator(null)
    setWaitingForOperand(false)
    setError(null)
  }

  const handleDecimal = () => {
    if (error) {
      setDisplay("0.")
      setError(null)
    } else if (waitingForOperand) {
      setDisplay("0.")
      setWaitingForOperand(false)
    } else if (!display.includes(".")) {
      setDisplay(display + ".")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100">
      <Navbar />
      <div className="flex items-center justify-center pt-8 px-4">
        <Card className="w-full max-w-md bg-white rounded-3xl shadow-xl p-6">
          <CardHeader className="text-center mb-6">
            <CardTitle className="text-4xl font-bold text-primary">Калкулятор Ойыны 🧮</CardTitle>
            <p className="text-lg text-muted-foreground">Сандарды санау өте қызықты!</p>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="bg-gray-100 rounded-xl p-4 text-right text-5xl font-bold text-gray-800 h-20 flex items-center justify-end overflow-hidden">
              {error ? error : display}
            </div>

            <div className="grid grid-cols-4 gap-4">
              {/* Number Buttons */}
              <Button className="col-span-2 h-16 text-3xl bg-orange-400 hover:bg-orange-500" onClick={handleClear}>
                C
              </Button>
              <Button className="h-16 text-3xl bg-blue-400 hover:bg-blue-500" onClick={() => handleOperatorClick("/")}>
                ÷
              </Button>
              <Button className="h-16 text-3xl bg-blue-400 hover:bg-blue-500" onClick={() => handleOperatorClick("*")}>
                ×
              </Button>

              {[7, 8, 9].map((num) => (
                <Button key={num} className="h-16 text-3xl bg-gray-200 hover:bg-gray-300 text-gray-800" onClick={() => handleDigitClick(String(num))}>
                  {num}
                </Button>
              ))}
              <Button className="h-16 text-3xl bg-blue-400 hover:bg-blue-500" onClick={() => handleOperatorClick("-")}>
                -
              </Button>

              {[4, 5, 6].map((num) => (
                <Button key={num} className="h-16 text-3xl bg-gray-200 hover:bg-gray-300 text-gray-800" onClick={() => handleDigitClick(String(num))}>
                  {num}
                </Button>
              ))}
              <Button className="h-16 text-3xl bg-blue-400 hover:bg-blue-500" onClick={() => handleOperatorClick("+")}>
                +
              </Button>

              {[1, 2, 3].map((num) => (
                <Button key={num} className="h-16 text-3xl bg-gray-200 hover:bg-gray-300 text-gray-800" onClick={() => handleDigitClick(String(num))}>
                  {num}
                </Button>
              ))}
              <Button className="h-16 text-3xl bg-green-500 hover:bg-green-600 col-span-2" onClick={handleEqualsClick}>
                =
              </Button>

              <Button className="h-16 text-3xl bg-gray-200 hover:bg-gray-300 text-gray-800" onClick={() => handleDigitClick("0")}>
                0
              </Button>
              <Button className="h-16 text-3xl bg-gray-200 hover:bg-gray-300 text-gray-800" onClick={handleDecimal}>
                .
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
