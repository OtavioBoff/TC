import {
  FormContainer,
  InputsBox,
  InputsContainer,
  MiddleContainer,
  NumberInput,
  SubmitButton,
  TextAreaInput,
  TextInput,
} from "./styles";
import { ExercisesProps } from "../../../../@types";
import { useFieldArray, useForm } from "react-hook-form";

export interface NewExerciseForm {
  exerciseProps: ExercisesProps;
  group?: string;
}
interface InputFormProps {
  onSubmit: (data: NewExerciseForm) => void;
  newGroup: boolean;
}
export function InputForm({ onSubmit, newGroup }: InputFormProps) {
  const newRowForm = useForm<NewExerciseForm>({});
  const { register, handleSubmit, watch, control } = newRowForm;

  useFieldArray({
    control,
    name: "exerciseProps.seriesProps.props",
  });

  const seriesCount = watch("exerciseProps.seriesProps.num") ?? 1;

  const generateToRepsAndWeight = (numberOfSeries: number) => {
    if (seriesCount > 8) numberOfSeries = 8;
    return Array.from({ length: numberOfSeries }).map((_, index) => (
      <div key={index} style={{ display: "flex", gap: "10px" }}>
        <InputsBox>
          <label>Reps</label>
          <NumberInput
            type="number"
            placeholder="0"
            {...register(`exerciseProps.seriesProps.props.${index}.reps`, {
              valueAsNumber: true,
            })}
          />
        </InputsBox>
        <InputsBox>
          <label>Weight</label>
          <NumberInput
            type="number"
            placeholder="0 kg"
            {...register(`exerciseProps.seriesProps.props.${index}.weight`, {
              valueAsNumber: true,
            })}
          />
        </InputsBox>
      </div>
    ));
  };
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      {newGroup && (
        <InputsBox>
          <label>Grupo</label>
          <TextInput
            placeholder="nome"
            id="group-name"
            {...register("group", { required: true })}
          />
        </InputsBox>
      )}
      <MiddleContainer>
        <InputsContainer>
          <InputsBox>
            <label>Muscle</label>
            <TextInput
              placeholder="muscle"
              {...register("exerciseProps.muscle")}
            />
          </InputsBox>
          <InputsBox>
            <label>Exercise</label>
            <TextInput
              placeholder="exercise"
              {...register("exerciseProps.exercise")}
            />
          </InputsBox>
          <InputsBox>
            <label>Observation</label>
            <TextAreaInput
              placeholder="description"
              {...register("exerciseProps.observation")}
            />
          </InputsBox>
          <InputsBox>
            <label>Series</label>
            <NumberInput
              id="series"
              type="number"
              placeholder="0"
              min={1}
              max={8}
              {...register("exerciseProps.seriesProps.num", {
                valueAsNumber: true,
              })}
            />
          </InputsBox>
        </InputsContainer>
        <InputsContainer>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {generateToRepsAndWeight(seriesCount < 1 ? 1 : seriesCount)}
          </div>
        </InputsContainer>
      </MiddleContainer>
      <SubmitButton type="submit">Submit</SubmitButton>
    </FormContainer>
  );
}
