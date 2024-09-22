import { useForm } from "react-hook-form";
import { FormContainer, Input, SubmitButton } from "./styles";

export interface WorkoutNameData {
  name: string;
}

interface WorkoutNameFormProps {
  onSubmit: (data: WorkoutNameData) => void;
}

export function WorkoutNameForm({ onSubmit }: WorkoutNameFormProps) {
  const workoutName = useForm<WorkoutNameData>();
  const { handleSubmit, register } = workoutName;
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
