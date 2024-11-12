import { useForm } from "react-hook-form";
import { FormContainer, Input } from "./styles";
import { SubmitButton } from "../../../New-Workout/Main/styles";
import axios from "axios";
import { useContext } from "react";
import { RegisterWorkoutContext } from "../../../../contexts/workoutContext";
import { RegisterUserContext } from "../../../../contexts/userContext";

interface FormProps {
  email: string;
  message: string;
}

interface ShareFormProps {
  onShareFormSubmit: () => void;
}

export function ShareForm({ onShareFormSubmit }: ShareFormProps) {
  const { workout, workoutsIndex } = useContext(RegisterWorkoutContext);
  const { user } = useContext(RegisterUserContext);

  const { handleSubmit, register } = useForm<FormProps>();

  const sendNotification = async (data: FormProps) => {
    const message = data.message;
    const userEmail = data.email;
    const workoutId = workout[workoutsIndex].id;
    const userName = user.name;
    try {
      const response = await axios.post("http://localhost:4000/notifications", {
        workoutId,
        userName,
        userEmail,
        message,
      });
      console.log(response);
      onShareFormSubmit();
    } catch (error) {
      console.error("Erro ao enviar notificação:", error);
      alert("Erro ao enviar notificação.");
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(sendNotification)}>
      <Input
        placeholder="mensagem"
        {...register("message", { required: true })}
      />
      <Input placeholder="email" {...register("email", { required: true })} />
      <SubmitButton type="submit">Salvar</SubmitButton>
    </FormContainer>
  );
}
