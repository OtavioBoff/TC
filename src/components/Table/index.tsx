import { useContext, useEffect } from "react";
import { Container, Middle, TableArrows } from "./styles";
import { CaretLeft, CaretRight } from "phosphor-react";
import { generateTableRows } from "./TableRow";
import { RegisterWorkoutContext } from "../../contexts/workoutContext";

export interface TableProps {
  currentPageNumber?: (pageIndex: number) => void;
  nextNewPage?: () => void;
  muscleWord?: string;
  exerciseWord?: string;
  observationWord?: string;
  seriesWord?: string;
  repsWord?: string;
  weightWord?: string;
}

export function Table({
  nextNewPage,
  currentPageNumber,
  muscleWord = "Músculo",
  exerciseWord = "Exercícios",
  observationWord = "Observações",
  seriesWord = "Séries",
  repsWord = "Reps",
  weightWord = "Peso",
}: TableProps) {
  const { workout, pageIndex, setPageIndex } = useContext(
    RegisterWorkoutContext
  );

  function handleNextPage() {
    const numberOfGroups = workout.length - 1;
    if (numberOfGroups > pageIndex && !(workout[pageIndex].group == ""))
      setPageIndex(pageIndex + 1);
    if (pageIndex == numberOfGroups && nextNewPage) nextNewPage();
  }

  function handlePreviousPage() {
    if (pageIndex) setPageIndex(pageIndex - 1);
  }

  const highestNumberOfSeriesInTheGroup = workout[
    pageIndex
  ]?.exercisesProps.reduce((max: number, exercise) => {
    const numberOfSeries = exercise.seriesProps.props.length;
    return numberOfSeries > max ? numberOfSeries : max;
  }, 0);

  function NumberOfSeries(i: number) {
    return Array.from({ length: i }, () => (
      <>
        <th>{repsWord}</th>
        <th>{weightWord}</th>
      </>
    ));
  }

  useEffect(() => {
    if (currentPageNumber) currentPageNumber(pageIndex);
  }, [pageIndex, workout, currentPageNumber]);

  return (
    <Container>
      <span id="pag">{`Página ${pageIndex + 1}`}</span>
      <Middle>
        <TableArrows onClick={handlePreviousPage}>
          <CaretLeft size={32} />
        </TableArrows>
        <table>
          <caption>{workout[pageIndex]?.group}</caption>
          <thead>
            <tr>
              <th>{muscleWord}</th>
              <th>{exerciseWord}</th>
              <th>{observationWord}</th>
              <th>{seriesWord}</th>
              {NumberOfSeries(highestNumberOfSeriesInTheGroup)}
            </tr>
          </thead>
          <tbody>
            {generateTableRows({
              workout,
              pageIndex,
              highestNumberOfSeriesInTheGroup,
            })}
          </tbody>
        </table>
        <TableArrows onClick={handleNextPage}>
          <CaretRight size={32} />
        </TableArrows>
      </Middle>
    </Container>
  );
}
