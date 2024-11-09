import {
  FormContainer,
  InputsBox,
  InputsContainer,
  MiddleContainer,
  NumberInput,
  TextAreaInput,
  TextInput,
} from "./styles";
import { SubmitButton } from "../../Main/styles";
import { ExercisesProps } from "../../../../@types";
import { useFieldArray, useForm } from "react-hook-form";
import { useContext } from "react";
import { RegisterWorkoutContext } from "../../../../contexts/workoutContext";
import { v4 } from "uuid";

export interface NewExerciseForm {
  exerciseProps: ExercisesProps;
}

interface ExerciseFormProps {
  onSubmit: (data: NewExerciseForm) => void;
  toEdit: boolean;
  numberOfExerciseToEdit: number;
}

export function ExerciseForm({
  onSubmit,
  toEdit,
  numberOfExerciseToEdit,
}: ExerciseFormProps) {
  const { group, pageIndex } = useContext(RegisterWorkoutContext);

  const newRowForm = useForm<NewExerciseForm>({});

  const { register, handleSubmit, watch, control } = newRowForm;

  const uid = v4();

  useFieldArray({
    control,
    name: "exerciseProps.seriesProps.props",
  });

  const seriesCount =
    watch("exerciseProps.seriesProps.num") !== undefined
      ? watch("exerciseProps.seriesProps.num")
      : toEdit
      ? group[pageIndex].exercisesProps[numberOfExerciseToEdit].seriesProps.num
      : 1;

  const generateToRepsAndWeight = (numberOfSeries: number) => {
    if (seriesCount > 12) numberOfSeries = 12;
    return Array.from({ length: numberOfSeries }).map((_, index) => {
      return (
        <div key={index} style={{ display: "flex", gap: "10px" }}>
          <InputsBox>
            {index === 0 && <label>Repetições</label>}
            <NumberInput
              type="number"
              placeholder="0"
              {...register(`exerciseProps.seriesProps.props.${index}.reps`, {
                valueAsNumber: true,
              })}
              defaultValue={
                toEdit
                  ? group[pageIndex].exercisesProps[numberOfExerciseToEdit]
                      .seriesProps?.props[index]?.reps
                  : 0
              }
            />
          </InputsBox>
          <InputsBox>
            {index === 0 && <label>Peso</label>}
            <NumberInput
              type="number"
              placeholder="0 kg"
              {...register(`exerciseProps.seriesProps.props.${index}.weight`, {
                valueAsNumber: true,
              })}
              defaultValue={
                toEdit
                  ? group[pageIndex].exercisesProps[numberOfExerciseToEdit]
                      .seriesProps?.props[index]?.weight
                  : 0
              }
            />
          </InputsBox>
        </div>
      );
    });
  };
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <MiddleContainer>
        <input type="hidden" {...register("exerciseProps.id")} value={uid} />
        <InputsContainer>
          <div>
            <InputsBox>
              <label>Músculo</label>
              <TextInput
                {...register("exerciseProps.muscle")}
                defaultValue={
                  toEdit
                    ? group[pageIndex].exercisesProps[numberOfExerciseToEdit]
                        .muscle
                    : ""
                }
              />
            </InputsBox>
            <InputsBox>
              <label>Exercício</label>
              <TextInput
                {...register("exerciseProps.exercise")}
                defaultValue={
                  toEdit
                    ? group[pageIndex].exercisesProps[numberOfExerciseToEdit]
                        .exercise
                    : ""
                }
              />
            </InputsBox>
          </div>
          <InputsBox>
            <label>Observações</label>
            <TextAreaInput
              {...register("exerciseProps.observation")}
              defaultValue={
                toEdit
                  ? group[pageIndex].exercisesProps[numberOfExerciseToEdit]
                      .observation
                  : ""
              }
            />
          </InputsBox>
          <InputsBox>
            <label>Séries</label>
            <NumberInput
              id="series"
              type="number"
              min={1}
              max={12}
              {...register("exerciseProps.seriesProps.num", {
                valueAsNumber: true,
              })}
              defaultValue={
                toEdit
                  ? group[pageIndex].exercisesProps[numberOfExerciseToEdit]
                      .seriesProps.num
                  : 0
              }
            />
          </InputsBox>
        </InputsContainer>
        <InputsContainer>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {generateToRepsAndWeight(seriesCount)}
          </div>
        </InputsContainer>
      </MiddleContainer>
      <SubmitButton type="submit">
        {toEdit ? "Salvar" : "Adicionar Exercício"}
      </SubmitButton>
    </FormContainer>
  );
}
