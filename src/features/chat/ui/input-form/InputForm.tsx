import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, Button, Box, CircularProgress } from "@mui/material";
import { messageInputSchema } from "../../model";
import type { MessageInput } from "../../model";
import type { InputFormProps } from "./types";

export const InputForm = ({ onSubmit, isLoading }: InputFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<MessageInput>({
    resolver: zodResolver(messageInputSchema),
    mode: "onChange",
  });

  const handleFormSubmit: SubmitHandler<MessageInput> = (data) => {
    onSubmit(data.text);
    reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleFormSubmit)}
      sx={{ display: "flex", gap: 2, mt: 2 }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Введите сообщение..."
        error={!!errors.text}
        helperText={errors.text?.message}
        disabled={isLoading}
        {...register("text")}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isLoading || !isValid}
        sx={{ minWidth: 120 }}
      >
        {isLoading ? <CircularProgress size={24} /> : "Отправить"}
      </Button>
    </Box>
  );
};
