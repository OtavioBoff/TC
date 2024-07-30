import { MouseEvent, useState } from "react";
import { Container } from "./styles";
import { Plus, Trash } from "phosphor-react";

// interface SeriesProps {
//   reps?: number;
//   weight?: number;
// }

// interface ExercisesProps {
//   muscle: string;
//   exercise: string;
//   observation?: string;
//   seriesProps: SeriesProps[];
// }

// interface Workout {
//   group: string;
//   exercisesProps: ExercisesProps[];
// }

interface TabelProps {
  groupWord?: string;
  muscleWord?: string;
  exerciseWord?: string;
  observationWord?: string;
  seriesWord?: string;
  repsWord?: string;
  weightWord?: string;
}

export function Tabel({
  groupWord = "Grupo A",
  muscleWord = "Músculo",
  exerciseWord = "Exercícios",
  observationWord = "Observações",
  seriesWord = "Séries",
  repsWord = "Repetições",
  weightWord = "Kg",
}: TabelProps) {
  // const [workouts, setWorkouts] = useState<Workout[]>([
  //   {
  //     group: "Upper Body",
  //     exercisesProps: [
  //       {
  //         muscle: "Chest",
  //         exercise: "Bench Press",
  //         observation: "Keep elbows at 45 degrees",
  //         seriesProps: [
  //           { reps: 10, weight: 50 },
  //           { reps: 8, weight: 55 },
  //           { reps: 6, weight: 60 },
  //         ],
  //       },
  //       {
  //         muscle: "Triceps",
  //         exercise: "Tricep Dips",
  //         seriesProps: [{ reps: 12 }, { reps: 10 }, { reps: 8, weight: 20 }],
  //       },
  //     ],
  //   },
  // ]);

  // function handleMuscleChange(event: ChangeEvent<HTMLInputElement>) {
  //   console.log(event.target.value);
  //   event.target.value = workouts[0].exercisesProps[0].muscle;
  //   console.log(event.target.value);
  // }

  // function handleExerciseChange(event: ChangeEvent<HTMLInputElement>) {}

  // function handleObsChange(event: ChangeEvent<HTMLInputElement>) {}

  // function handleSeriesChange(event: ChangeEvent<HTMLInputElement>) {}

  // function handleRepsChange(event: ChangeEvent<HTMLInputElement>) {}

  // function handleWeightChange(event: ChangeEvent<HTMLInputElement>) {}

  const [tableRows, setTableRows] = useState(5);

  const generateTableRows = () => {
    return Array.from({ length: tableRows }).map((_, index) => (
      <tr key={index}>
        <td>
          <input
            type="text"
            id="muscle"
            name="muscle"
            // onChange={handleMuscleChange}
          />
        </td>
        <td>
          <input
            type="text"
            id="exercises"
            name="exercises"
            // onChange={handleExerciseChange}
          />
        </td>
        <td>
          <input
            type="text"
            id="observation"
            name="observation"
            // onChange={handleObsChange}
          />
        </td>
        <td>
          <input
            type="number"
            id="series"
            name="series"
            // onChange={handleSeriesChange}
          />
        </td>
        <td>
          <input
            type="number"
            id="reps"
            name="reps"
            // onChange={handleRepsChange}
          />
        </td>
        <td>
          <input
            type="number"
            id="weight"
            name="weight"
            // onChange={handleWeightChange}
          />
        </td>
      </tr>
    ));
  };

  function handleAddTableRow(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (tableRows < 9) setTableRows(tableRows + 1);
  }
  function handleRemoveTableRow(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (tableRows > 1) setTableRows(tableRows - 1);
  }

  return (
    <Container>
      <form action="">
        <table>
          <caption>{groupWord}</caption>
          <thead>
            <tr>
              <th>{muscleWord}</th>
              <th>{exerciseWord}</th>
              <th>{observationWord}</th>
              <th>{seriesWord}</th>
              <th>{repsWord}</th>
              <th>{weightWord}</th>
            </tr>
          </thead>
          <tbody>{generateTableRows()}</tbody>
        </table>
        <footer>
          <button type="submit" id="add-row" onClick={handleAddTableRow}>
            <Plus size={20} />
          </button>
          <button type="submit" id="remove-row" onClick={handleRemoveTableRow}>
            <Trash size={20} />
          </button>
        </footer>
      </form>
    </Container>
  );
}
