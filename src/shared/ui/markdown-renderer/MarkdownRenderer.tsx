import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { Box } from "@mui/material";
import type { MarkdownRendererProps } from "./types";

export const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  return (
    <Box
      sx={{
        "& h1, & h2, & h3": { mt: 2, mb: 1.5 },
        "& p": { mb: 1 },
        "& pre": {
          bgcolor: "background.paper",
          p: 2,
          borderRadius: 1,
          overflowX: "auto",
        },
        "& code": { fontFamily: "monospace" },
        "& table": { borderCollapse: "collapse", width: "100%" },
        "& th, & td": { border: "1px solid", p: 1 },
      }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {content}
      </ReactMarkdown>
    </Box>
  );
};
