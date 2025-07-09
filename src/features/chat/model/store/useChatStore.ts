import { useState, useCallback } from "react";

import type { Message, ChatState } from "../types";

export const useChatStore = (): ChatState & {
  addMessage: (message: Message) => void;
  sendMessage: (text: string) => Promise<void>;
} => {
  const [state, setState] = useState<ChatState>({
    messages: [],
    status: "idle",
    error: null,
  });

  const addMessage = useCallback((message: Message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }, []);

  const sendMessage = useCallback(
    async (text: string) => {
      setState((prev) => ({ ...prev, status: "loading" }));

      try {
        // Пользовательское сообщение
        const userMessage: Message = {
          id: Date.now().toString(),
          text,
          sender: "user",
          timestamp: new Date(),
        };
        addMessage(userMessage);

        // TODO: Реальная интеграция с API
        // Имитация ответа бота
        setTimeout(() => {
          const botMessage: Message = {
            id: Date.now().toString(),
            text: `Это ответ на: "${text}"`,
            sender: "assistant",
            timestamp: new Date(),
          };
          addMessage(botMessage);
          setState((prev) => ({ ...prev, status: "succeeded" }));
        }, 1000);
      } catch (error) {
        setState((prev) => ({
          ...prev,
          status: "failed",
          error: "Ошибка при отправке сообщения",
        }));
      }
    },
    [addMessage]
  );

  return {
    ...state,
    addMessage,
    sendMessage,
  };
};
