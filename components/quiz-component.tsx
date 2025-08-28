"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Question {
  question: string
  options: string[]
  correct: number
}

interface QuizComponentProps {
  questions: Question[]
  onComplete: () => void // Add this prop
}

export function QuizComponent({ questions, onComplete }: QuizComponentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return

    const newAnswers = [...answers, selectedAnswer]
    setAnswers(newAnswers)

    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1)
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      setShowResult(true)
      onComplete() // Call onComplete here when quiz is finished
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnswers([])
  }

  if (showResult) {
    return (
      <Card className="bg-gradient-to-br from-green-100 to-blue-100">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">🎉 Тамаша!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="text-4xl font-bold text-primary">
            {score}/{questions.length}
          </div>
          <p className="text-lg">
            {score === questions.length
              ? "Керемет! Сен бұл сабақты толық меңгердің!"
              : score >= questions.length / 2
                ? "Жақсы жұмыс! Жаттығуды жалғастыра бер!"
                : "Қайта байқап көр! Келесі жолы міндетті түрде шығады!"}
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={resetQuiz} variant="outline">
              Қайтадан байқау
            </Button>
            <Button>Келесі сабақ</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  const question = questions[currentQuestion]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>🧠 Жаттығу уақыты</span>
          <span className="text-sm font-normal">
            Сұрақ {currentQuestion + 1} / {questions.length}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <h3 className="text-xl font-semibold text-center">{question.question}</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant={selectedAnswer === index ? "default" : "outline"}
              className="h-auto p-4 text-left justify-start"
              onClick={() => handleAnswerSelect(index)}
            >
              <span className="font-semibold mr-2">{String.fromCharCode(65 + index)}.</span>
              {option}
            </Button>
          ))}
        </div>

        <div className="text-center">
          <Button onClick={handleNextQuestion} disabled={selectedAnswer === null} size="lg">
            {currentQuestion + 1 === questions.length ? "Тестті аяқтау" : "Келесі сұрақ"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
