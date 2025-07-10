import { CssBaseline, ThemeProvider } from "@mui/material";
import { ChatWindow } from "../widgets";
import { theme } from "../shared";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ChatWindow />
    </ThemeProvider>
  );
};
