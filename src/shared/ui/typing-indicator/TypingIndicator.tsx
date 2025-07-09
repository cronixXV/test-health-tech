import { Box, Typography } from "@mui/material";

export const TypingIndicator = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        p: 1.5,
        mb: 2,
        bgcolor: "background.paper",
        borderRadius: "18px 18px 18px 4px",
        alignSelf: "flex-start",
        maxWidth: "80%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 0.5,
          "& > div": {
            width: 8,
            height: 8,
            bgcolor: "text.secondary",
            borderRadius: "50%",
            animation: "pulse 1.5s infinite",
            "&:nth-of-type(2)": { animationDelay: "0.3s" },
            "&:nth-of-type(3)": { animationDelay: "0.6s" },
          },
          "@keyframes pulse": {
            "0%, 100%": { opacity: 0.3 },
            "50%": { opacity: 1 },
          },
        }}
      >
        <div />
        <div />
        <div />
      </Box>
      <Typography variant="body2" color="textSecondary">
        Печатает...
      </Typography>
    </Box>
  );
};
