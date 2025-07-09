import { CssBaseline, ThemeProvider } from "@mui/material";
import { ChatWindow } from "../widgets/chat/ui/chat-window/ChatWindow";
import { theme } from "../shared/theme/theme";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ChatWindow />
    </ThemeProvider>
  );
};
