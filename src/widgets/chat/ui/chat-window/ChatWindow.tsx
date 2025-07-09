import { Box, Typography, Stack } from "@mui/material";
import { useChatStore } from "../../../../features/chat/model/store/useChatStore";
import { MessageList } from "../../../../features/chat/ui/input-form/message-list/MessageList";
import { InputForm } from "../../../../features/chat/ui/input-form/InputForm";

export const ChatWindow = () => {
  const { messages, status, sendMessage, error } = useChatStore();
  const isLoading = status === "loading";

  return (
    <Stack
      sx={{
        flexDirection: "column",
        height: "100vh",
        margin: "0 auto",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "primary.contrastText",
          p: 2,
          textAlign: "start",
        }}
      >
        <Typography variant="h6">Чат-приложение</Typography>
      </Box>

      <MessageList messages={messages} />

      {error && (
        <Typography color="error" sx={{ p: 2, textAlign: "center" }}>
          {error}
        </Typography>
      )}

      <Box sx={{ p: 2, borderTop: 1, borderColor: "divider" }}>
        <InputForm onSubmit={sendMessage} isLoading={isLoading} />
      </Box>
    </Stack>
  );
};
