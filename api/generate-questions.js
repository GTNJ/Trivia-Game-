const OPENAI_API_URL = "https://api.openai.com/v1/responses";
const DEFAULT_MODEL = process.env.OPENAI_MODEL || "gpt-5-mini";

function setCorsHeaders(response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function buildPrompt(topic, subcategory, count) {
  return [
    `Create ${count} original multiple-choice trivia questions.`,
    `Topic: ${topic}.`,
    `Subcategory or difficulty: ${subcategory}.`,
    "Rules:",
    "- Return exactly 4 answer options per question.",
    "- Return exactly 1 correct answer per question.",
    "- Keep questions short, clear, and suitable for a casual game.",
    "- Avoid duplicate questions and avoid repeating the same correct answer too often.",
    "- Make wrong answers plausible but clearly incorrect.",
    "- Do not include explanations.",
  ].join("\n");
}

function sanitizeQuestions(questions) {
  if (!Array.isArray(questions)) return [];

  return questions
    .filter((question) => question && typeof question === "object")
    .map((question, index) => {
      const answers = Array.isArray(question.answers)
        ? question.answers.filter((answer) => typeof answer === "string" && answer.trim())
        : [];

      const uniqueAnswers = [...new Set(answers)].slice(0, 4);
      const correctAnswer = typeof question.correctAnswer === "string" ? question.correctAnswer.trim() : "";
      const prompt = typeof question.question === "string" ? question.question.trim() : "";

      if (!prompt || uniqueAnswers.length !== 4 || !correctAnswer || !uniqueAnswers.includes(correctAnswer)) {
        return null;
      }

      return {
        id: question.id || `ai-${Date.now()}-${index}`,
        question: prompt,
        answers: uniqueAnswers,
        correctAnswer,
      };
    })
    .filter(Boolean);
}

module.exports = async function handler(request, response) {
  setCorsHeaders(response);

  if (request.method === "OPTIONS") {
    response.status(200).end();
    return;
  }

  if (request.method !== "POST") {
    response.status(405).json({ error: "Method not allowed." });
    return;
  }

  if (!process.env.OPENAI_API_KEY) {
    response.status(500).json({ error: "Missing OPENAI_API_KEY." });
    return;
  }

  const topic = typeof request.body?.topic === "string" ? request.body.topic.trim() : "";
  const subcategory = typeof request.body?.subcategory === "string" ? request.body.subcategory.trim() : "";
  const requestedCount = Number(request.body?.count);
  const count = Number.isFinite(requestedCount) ? Math.min(Math.max(requestedCount, 1), 10) : 10;

  if (!topic || !subcategory) {
    response.status(400).json({ error: "Topic and subcategory are required." });
    return;
  }

  try {
    const openAIResponse = await fetch(OPENAI_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: DEFAULT_MODEL,
        input: [
          {
            role: "system",
            content: [
              {
                type: "input_text",
                text: "You generate trivia question sets for a browser game. Return valid JSON only.",
              },
            ],
          },
          {
            role: "user",
            content: [
              {
                type: "input_text",
                text: buildPrompt(topic, subcategory, count),
              },
            ],
          },
        ],
        text: {
          format: {
            type: "json_schema",
            name: "trivia_questions",
            strict: true,
            schema: {
              type: "object",
              additionalProperties: false,
              properties: {
                questions: {
                  type: "array",
                  minItems: count,
                  maxItems: count,
                  items: {
                    type: "object",
                    additionalProperties: false,
                    properties: {
                      id: { type: "string" },
                      question: { type: "string" },
                      answers: {
                        type: "array",
                        minItems: 4,
                        maxItems: 4,
                        items: { type: "string" },
                      },
                      correctAnswer: { type: "string" },
                    },
                    required: ["id", "question", "answers", "correctAnswer"],
                  },
                },
              },
              required: ["questions"],
            },
          },
        },
      }),
    });

    if (!openAIResponse.ok) {
      const details = await openAIResponse.text();
      response.status(openAIResponse.status).json({ error: "OpenAI request failed.", details });
      return;
    }

    const payload = await openAIResponse.json();
    const outputText = payload.output_text;
    if (!outputText) {
      response.status(502).json({ error: "OpenAI returned no structured output." });
      return;
    }

    const parsed = JSON.parse(outputText);
    const questions = sanitizeQuestions(parsed.questions);
    if (questions.length < count) {
      response.status(502).json({ error: "OpenAI returned too few valid questions." });
      return;
    }

    response.status(200).json({ questions: questions.slice(0, count) });
  } catch (error) {
    response.status(500).json({
      error: "Failed to generate AI trivia questions.",
      details: error instanceof Error ? error.message : String(error),
    });
  }
};
