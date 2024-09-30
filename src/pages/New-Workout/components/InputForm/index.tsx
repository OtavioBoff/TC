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
import { useContext } from "react";
import { RegisterWorkoutContext } from "../../../../contexts/workoutContext";

export interface NewExerciseForm {
  exerciseProps: ExercisesProps;
  group?: string;
}

interface InputFormProps {
  onSubmit: (data: NewExerciseForm) => void;
  newGroup: boolean;
  toEdit: boolean;
  numberOfExerciseToEdit: number;
}

export function InputForm({
  onSubmit,
  newGroup,
  toEdit,
  numberOfExerciseToEdit,
}: InputFormProps) {
  const { workout, pageIndex } = useContext(RegisterWorkoutContext);

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
            defaultValue={
              toEdit
                ? workout[pageIndex].exercisesProps[numberOfExerciseToEdit]
                    .seriesProps?.props[index]?.reps
                : 0
            }
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
            defaultValue={
              toEdit
                ? workout[pageIndex].exercisesProps[numberOfExerciseToEdit]
                    .seriesProps?.props[index]?.weight
                : 0
            }
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
            defaultValue={toEdit ? workout[pageIndex].group : ""}
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
              defaultValue={
                toEdit
                  ? workout[pageIndex].exercisesProps[numberOfExerciseToEdit]
                      .muscle
                  : ""
              }
            />
          </InputsBox>
          <InputsBox>
            <label>Exercise</label>
            <TextInput
              placeholder="exercise"
              {...register("exerciseProps.exercise")}
              defaultValue={
                toEdit
                  ? workout[pageIndex].exercisesProps[numberOfExerciseToEdit]
                      .exercise
                  : ""
              }
            />
          </InputsBox>
          <InputsBox>
            <label>Observation</label>
            <TextAreaInput
              placeholder="description"
              {...register("exerciseProps.observation")}
              defaultValue={
                toEdit
                  ? workout[pageIndex].exercisesProps[numberOfExerciseToEdit]
                      .observation
                  : ""
              }
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
              defaultValue={
                toEdit
                  ? workout[pageIndex].exercisesProps[numberOfExerciseToEdit]
                      .seriesProps.num
                  : 0
              }
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
