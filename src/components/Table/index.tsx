import { useEffect, useState } from "react";
import { Container, Middle, TableArrows } from "./styles";
import { CaretLeft, CaretRight } from "phosphor-react";
import { Workout } from "../../@types/styles";

export interface TabelProps {
  workout: Workout[];
  currentPageNumber?: (pageNumber: number) => void;
  nextNewPage?: (newPage: boolean) => void;
  newWorkout?: boolean;
  muscleWord?: string;
  exerciseWord?: string;
  observationWord?: string;
  seriesWord?: string;
  repsWord?: string;
  weightWord?: string;
}

export function Tabel({
  workout,
  nextNewPage,
  newWorkout = false,
  muscleWord = "Músculo",
  exerciseWord = "Exercícios",
  observationWord = "Observações",
  seriesWord = "Séries",
  repsWord = "Reps",
  weightWord = "Peso",
}: TabelProps) {
  const [pageNumber, setPageNumber] = useState(0);
  const [tableRows, setTableRows] = useState(0);

  function handleNextPage() {
    const numberOfGroups = workout.length - 1;
    if (numberOfGroups > pageNumber) setPageNumber((state) => state + 1);
    if (newWorkout && pageNumber == numberOfGroups) nextNewPage;
  }

  function handlePreviusPage() {
    if (pageNumber) setPageNumber((state) => state - 1);
  }

  function highestNumberOfSeriesInTheGroup() {
    return workout[pageNumber].exercisesProps.reduce(
      (max: number, exercise) => {
        const numberOfSeries = exercise.seriesProps.props.length;
        return numberOfSeries > max ? numberOfSeries : max;
      },
      0
    );
  }

  function NumberOfSeries(i: number) {
    return Array.from({ length: i }, () => (
      <>
        <th>{repsWord}</th>
        <th>{weightWord}</th>
      </>
    ));
  }

  useEffect(() => {
    setTableRows(workout[pageNumber].exercisesProps.length);
  }, [pageNumber, workout]);

  const generateTableRows = () => {
    function gerateTableRowsForRepsAndWeight(i: number, exerciseNum: number) {
      return Array.from({ length: i }, (_, index) => (
        <>
          <td>
            <span>
              {workout[pageNumber].exercisesProps[exerciseNum]?.seriesProps
                .props[index]?.reps || "-"}
            </span>
          </td>
          <td>
            <span>
              {workout[pageNumber].exercisesProps[exerciseNum]?.seriesProps
                .props[index]?.weight
                ? `${workout[pageNumber].exercisesProps[exerciseNum].seriesProps.props[index].weight} Kg`
                : "-"}
            </span>
          </td>
        </>
      ));
    }

    return Array.from({ length: tableRows }).map((_, exerciseNumber) => (
      <tr key={exerciseNumber}>
        <td>
          <span>
            {workout[pageNumber].exercisesProps[exerciseNumber]?.muscle || "-"}
          </span>
        </td>
        <td>
          <span>
            {workout[pageNumber].exercisesProps[exerciseNumber]?.exercise ||
              "-"}
          </span>
        </td>
        <td>
          <span>
            {workout[pageNumber].exercisesProps[exerciseNumber]?.observation ||
              "-"}
          </span>
        </td>
        <td>
          <span>
            {workout[pageNumber].exercisesProps[exerciseNumber]?.seriesProps
              .props.length || "-"}
          </span>
        </td>
        {gerateTableRowsForRepsAndWeight(
          workout[pageNumber].exercisesProps[0]?.seriesProps.props.length || 0,
          exerciseNumber
        )}
      </tr>
    ));
  };

  return (
    <Container>
      <span>{`Página ${pageNumber + 1}`}</span>
      <Middle>
        <TableArrows onClick={handlePreviusPage}>
          <CaretLeft size={32} />
        </TableArrows>
        <table>
          <caption>{workout[pageNumber].group}</caption>
          <thead>
            <tr>
              <th>{muscleWord}</th>
              <th>{exerciseWord}</th>
              <th>{observationWord}</th>
              <th>{seriesWord}</th>
              {NumberOfSeries(highestNumberOfSeriesInTheGroup())}
            </tr>
          </thead>
          <tbody>{generateTableRows()}</tbody>
        </table>
        <TableArrows onClick={handleNextPage}>
          <CaretRight size={32} />
        </TableArrows>
      </Middle>
    </Container>
  );
}
