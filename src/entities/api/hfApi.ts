import type { Message } from "../../features/chat/model";

const MODELS = {
  MISTRAL: "mistralai/Mistral-7B-Instruct-v0.3",
};

export const sendHFMessage = async (
  messages: Message[],
  model: string = MODELS.MISTRAL
): Promise<string> => {
  try {
    // Форматируем историю сообщений для модели
    const formattedMessages = messages.map((msg) => ({
      role: msg.sender === "user" ? "user" : "assistant",
      content: msg.text,
    }));

    const response = await fetch(
      `https://api-inference.huggingface.co/models/${model}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_HF_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: formattedMessages,
          parameters: {
            max_new_tokens: 500, // Ограничение длины ответа
            temperature: 0.7,
            return_full_text: false,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `HF API error: ${errorData.error || response.statusText}`
      );
    }

    const data = await response.json();

    // Обработка разных форматов ответа
    if (Array.isArray(data) && data[0]?.generated_text) {
      return data[0].generated_text;
    }
    if (data.generated_text) {
      return data.generated_text;
    }
    if (data[0]?.generated_text) {
      return data[0].generated_text;
    }

    throw new Error("Неверный формат ответа от Hugging Face");
  } catch (error) {
    console.error("HF API Error:", error);
    throw new Error(
      "Ошибка при запросе к Hugging Face: " +
        (error instanceof Error ? error.message : String(error))
    );
  }
};
