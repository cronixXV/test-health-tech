import { Box, Typography, Paper, Avatar } from "@mui/material";
import ReactMarkdown from "react-markdown";
import type { MessageItemProps } from "./types";
import Grow from "@mui/material/Grow";

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

        <Grow in={true} timeout={300}>
          <Paper
            sx={{
              p: 2,
              bgcolor: isUser ? "primary.light" : "background.paper",
              borderRadius: isUser
                ? "18px 18px 4px 18px"
                : "18px 18px 18px 4px",
            }}
          >
            <ReactMarkdown>{message.text}</ReactMarkdown>
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
        </Grow>
      </Box>
    </Box>
  );
};
