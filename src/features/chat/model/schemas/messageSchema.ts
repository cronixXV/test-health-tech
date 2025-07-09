import { z } from "zod";

export const messageInputSchema = z.object({
  text: z.string().min(1, "Сообщение не может быть пустым"),
});

export type MessageInput = z.infer<typeof messageInputSchema>;
