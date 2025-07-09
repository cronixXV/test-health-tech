export type MessageSender = "user" | "assistant";

export interface Message {
  id: string;
  text: string;
  sender: MessageSender;
  timestamp: Date;
}

export interface ChatState {
  messages: Message[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
