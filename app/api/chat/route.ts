import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { message, history } = await request.json()

    // Check if Gemini API key is available
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          message:
            "I'm not configured yet! Please add your GEMINI_API_KEY to the environment variables to start chatting with me. 🔧",
        },
        { status: 200 },
      )
    }

    // Prepare the conversation context for Gemini
    const systemPrompt = ` "Сенің атың – Көмекші. Сен қазақ тілінде 3-сынып оқушыларына арналған жасанды интеллект чат-ботсың. Сенің міндетің – математика есептерін шығарып, түсіндіріп беру және математикаға қатысты сұрақтарға жауап беру. Балаларға қарапайым тілде, қысқа әрі түсінікті түрде жауап бер. Әрбір шешімді қадам-қадамымен көрсетіп түсіндір. Оқушы қателессе, жұмсақ түрде түзетіп, дұрыс шешуге бағыт бер.`

    // Build conversation history for context
    const conversationHistory = history.slice(-5).map((msg: any) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    }))

    // Add current message
    conversationHistory.push({
      role: "user",
      parts: [{ text: message }],
    })

    // Call Gemini API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: conversationHistory,
          systemInstruction: {
            parts: [{ text: systemPrompt }],
          },
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
            {
              category: "HARM_CATEGORY_HATE_SPEECH",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
            {
              category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
            {
              category: "HARM_CATEGORY_DANGEROUS_CONTENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
          ],
        }),
      },
    )

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.status}`)
    }

    const data = await response.json()

    // Extract the response text
    const aiResponse =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I'm having trouble thinking right now. Could you try asking again? 🤔"

    return NextResponse.json({ message: aiResponse })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      {
        message: "Oops! Something went wrong on my end. Let's try that again! 😅",
      },
      { status: 200 },
    )
  }
}
