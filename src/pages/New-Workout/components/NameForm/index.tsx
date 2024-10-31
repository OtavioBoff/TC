import { useForm } from "react-hook-form";
import { FormContainer, Input } from "./styles";
import { Workouts } from "../../../../@types";
import { useContext } from "react";
import { RegisterWorkoutContext } from "../../../../contexts/workoutContext";
import { SubmitButton } from "../../Main/styles";

interface WorkoutNameFormProps {
  onSubmit: ({ name }: Workouts) => void;
  toEdit: boolean;
  nameRequiredTo: "workout" | "group";
}

export function NameForm({
  onSubmit,
  toEdit,
  nameRequiredTo,
}: WorkoutNameFormProps) {
  const { workouts, workoutsIndex, workout, pageIndex, isEditingWorkout } =
    useContext(RegisterWorkoutContext);
  const { handleSubmit, register } = useForm<Workouts>();

  const renderInputField = () => {
    switch (nameRequiredTo) {
      case "workout":
        return (
          <Input
            placeholder="Nome do treino"
            {...register("name", { required: true })}
            defaultValue={isEditingWorkout ? workouts[workoutsIndex]?.name : ""}
          />
        );

      case "group":
        return (
          <Input
            placeholder="Nome do grupamento"
            {...register("name", { required: true })}
            defaultValue={
              toEdit ? workout[pageIndex]?.group : "Novo grupamento"
            }
          />
        );

      default:
        return null;
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      {renderInputField()}
      <SubmitButton type="submit">Salvar</SubmitButton>
    </FormContainer>
  );
}
