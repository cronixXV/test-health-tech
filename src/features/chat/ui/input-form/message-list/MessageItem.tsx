import { Box, Typography, Paper, Avatar } from "@mui/material";

import type { MessageItemProps } from "./types";

export const MessageItem = ({ message }: MessageItemProps) => {
  const isUser = message.sender === "user";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        mb: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isUser ? "row-reverse" : "row",
          alignItems: "flex-start",
          gap: 1.5,
          maxWidth: "80%",
        }}
      >
        <Avatar sx={{ bgcolor: isUser ? "primary.main" : "secondary.main" }}>
          {isUser ? "U" : "A"}
        </Avatar>

        <Paper
          sx={{
            p: 2,
            bgcolor: isUser ? "primary.light" : "background.paper",
            borderRadius: isUser ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
          }}
        >
          <Typography variant="body1">{message.text}</Typography>
          <Typography
            variant="caption"
            display="block"
            sx={{
              mt: 1,
              textAlign: "right",
              color: "text.secondary",
            }}
          >
            {message.timestamp.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};
