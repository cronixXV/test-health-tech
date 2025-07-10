import { Box, Typography } from "@mui/material";
import type { MessageListProps } from "./types";
import { MessageItem } from "./MessageItem";
import { useEffect, useRef } from "react";

export const MessageList = ({ messages }: MessageListProps) => {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box
      sx={{
        flex: 1,
        overflowY: "auto",
        p: 2,
        bgcolor: "background.default",
        borderRadius: 1,
        mb: 2,
      }}
    >
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
      <div ref={endRef} />

      {messages.length === 0 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            color: "text.secondary",
          }}
        >
          <Typography variant="h6" sx={{ mt: 2 }}>
            Начните разговор
          </Typography>
        </Box>
      )}
    </Box>
  );
};
