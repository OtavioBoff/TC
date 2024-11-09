import { useForm } from "react-hook-form";
import { FormContainer, Input } from "./styles";
import { useContext } from "react";
import { RegisterWorkoutContext } from "../../../../contexts/workoutContext";
import { SubmitButton } from "../../Main/styles";

interface WorkoutNameFormProps {
  onSubmit: (name: string) => void;
  toEdit: boolean;
  nameRequiredTo: "workout" | "group";
}

export function NameForm({
  onSubmit,
  toEdit,
  nameRequiredTo,
}: WorkoutNameFormProps) {
  const { workout, workoutsIndex, group, pageIndex, isEditingWorkout } =
    useContext(RegisterWorkoutContext);
  const { handleSubmit, register } = useForm<{ name: string }>();

  const renderInputField = () => {
    switch (nameRequiredTo) {
      case "workout":
        return (
          <Input
            placeholder="Nome do treino"
            {...register("name", { required: true })}
            defaultValue={isEditingWorkout ? workout[workoutsIndex]?.name : ""}
          />
        );

      case "group":
        return (
          <Input
            placeholder="Nome do grupamento"
            {...register("name", { required: true })}
            defaultValue={toEdit ? group[pageIndex]?.group : "Novo grupamento"}
          />
        );

      default:
        return null;
    }
  };

  const onSubmitForm = (data: { name: string }) => {
    onSubmit(data.name);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmitForm)}>
      {renderInputField()}
      <SubmitButton type="submit">Salvar</SubmitButton>
    </FormContainer>
  );
}
