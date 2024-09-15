import {
  FormContainer,
  InputsBox,
  InputsContainer,
  NumberInput,
  SubmitButton,
  TextInput,
} from "./styles";
import { ExercisesProps } from "../../../../@types/styles";
import { useFieldArray, useForm } from "react-hook-form";

export interface NewExerciseForm {
  exerciseProps: ExercisesProps;
}
interface InputFormProps {
  onSubmit: (data: NewExerciseForm) => void;
}
export function InputForm({ onSubmit }: InputFormProps) {
  const newRowForm = useForm<NewExerciseForm>({
    defaultValues: {
      exerciseProps: {
        muscle: "",
        exercise: "",
        observation: "",
        seriesProps: {
          num: 1,
          props: [{ reps: 0, weight: 0 }],
        },
      },
    },
  });
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
          <TextInput
            placeholder="description"
            {...register("exerciseProps.observation")}
          />
        </InputsBox>
        <InputsBox>
          <label>Series</label>
          <NumberInput
            type="number"
            placeholder="0"
            min={1}
            max={8}
            {...register("exerciseProps.seriesProps.num", {
              valueAsNumber: true,
            })}
          />
        </InputsBox>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {generateToRepsAndWeight(seriesCount)}
        </div>
      </InputsContainer>
      <SubmitButton type="submit">Submit</SubmitButton>
    </FormContainer>
  );
}
