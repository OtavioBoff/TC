import { useForm } from "react-hook-form";
import { FormContainer, Input } from "./styles";
import { SubmitButton } from "../../../New-Workout/Main/styles";

interface ShareFormProps {
  onSubmit: (email: string) => void;
}

export function ShareForm({ onSubmit }: ShareFormProps) {
  const { handleSubmit, register } = useForm<{ email: string }>();

  const onSubmitForm = (data: { email: string }) => {
    onSubmit(data.email);
  };
  // const sendNotification = async () => {
  //   if (!email || !workoutId) {
  //     alert("Por favor, insira o e-mail e o ID do treino.");
  //     return;
  //   }

  //   try {
  //     const response = await axios.post("http://localhost:4000/notifications", {
  //       workoutId,
  //       userEmail: email,
  //       title,
  //       message,
  //     });
  //     console.log("Notificação enviada:", response.data);
  //     alert("Notificação enviada com sucesso!");
  //   } catch (error) {
  //     console.error("Erro ao enviar notificação:", error);
  //     alert("Erro ao enviar notificação.");
  //   }
  // };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmitForm)}>
      <Input placeholder="email" {...register("email", { required: true })} />
      <SubmitButton type="submit">Salvar</SubmitButton>
    </FormContainer>
  );
}
