import { useContext, useEffect } from "react";
import { Container, Middle, TableArrows } from "./styles";
import { CaretLeft, CaretRight } from "phosphor-react";
import { generateTableRows } from "./TableRow";
import { RegisterContext } from "../../contexts/context";

export interface TableProps {
  currentPageNumber?: (pageNumber: number) => void;
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
  const { workout, pageNumber, setPageNumber } = useContext(RegisterContext);

  function handleNextPage() {
    const numberOfGroups = workout.length - 1;
    if (numberOfGroups > pageNumber && !(workout[pageNumber].group == ""))
      setPageNumber(pageNumber + 1);
    if (pageNumber == numberOfGroups && nextNewPage) nextNewPage();
  }

  function handlePreviousPage() {
    if (pageNumber) setPageNumber(pageNumber - 1);
  }

  function highestNumberOfSeriesInTheGroup() {
    return workout[pageNumber]?.exercisesProps.reduce(
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
    if (currentPageNumber) currentPageNumber(pageNumber);
  }, [pageNumber, workout, currentPageNumber]);

  return (
    <Container>
      <span>{`Página ${pageNumber + 1}`}</span>
      <Middle>
        <TableArrows onClick={handlePreviousPage}>
          <CaretLeft size={32} />
        </TableArrows>
        <table>
          <caption>{workout[pageNumber]?.group}</caption>
          <thead>
            <tr>
              <th>{muscleWord}</th>
              <th>{exerciseWord}</th>
              <th>{observationWord}</th>
              <th>{seriesWord}</th>
              {NumberOfSeries(highestNumberOfSeriesInTheGroup())}
            </tr>
          </thead>
          <tbody>{generateTableRows({ workout, pageNumber })}</tbody>
        </table>
        <TableArrows onClick={handleNextPage}>
          <CaretRight size={32} />
        </TableArrows>
      </Middle>
    </Container>
  );
}
