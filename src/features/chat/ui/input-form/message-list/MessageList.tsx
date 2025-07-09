import { Box, Typography } from "@mui/material";
import type { MessageListProps } from "./types";
import { MessageItem } from "./MessageItem";

export const MessageList = ({ messages }: MessageListProps) => {
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
          <Typography variant="body1">Начните диалог</Typography>
        </Box>
      )}
    </Box>
  );
};
