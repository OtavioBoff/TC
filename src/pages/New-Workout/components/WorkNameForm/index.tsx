import { useForm } from "react-hook-form";
import { FormContainer, Input, SubmitButton } from "./styles";
import { Workouts } from "../../../../@types";

interface WorkoutNameFormProps {
  onSubmit: ({ name }: Workouts) => void;
}

export function WorkoutNameForm({ onSubmit }: WorkoutNameFormProps) {
  const { handleSubmit, register } = useForm<Workouts>();
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Nome do treino"
        {...register("name", { required: true })}
      />
      <SubmitButton type="submit">submit</SubmitButton>
    </FormContainer>
  );
}
