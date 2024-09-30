import React, { useContext, useEffect } from "react";
import { Container, PageNumber, TableArrows } from "./styles";
import { generateTableRows } from "./TableRow";
import { RegisterWorkoutContext } from "../../contexts/workoutContext";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";

export interface TableProps {
  isEditable?: boolean;
  currentPageNumber?: (pageIndex: number) => void;
  OnEditExercise?: (exerciseNumber: number) => void;
  nextNewPage?: () => void;
  editRemoveWord?: string;
  muscleWord?: string;
  exerciseWord?: string;
  observationWord?: string;
  seriesWord?: string;
  repsWord?: string;
  weightWord?: string;
}

export function Table({
  isEditable = false,
  nextNewPage,
  OnEditExercise,
  currentPageNumber,
  editRemoveWord = "Editar\n\nExcluir",
  muscleWord = "Músculo",
  exerciseWord = "Exercícios",
  observationWord = "Observações",
  seriesWord = "Séries",
  repsWord = "Reps",
  weightWord = "Peso",
}: TableProps) {
  const { workout, setWorkout, pageIndex, setPageIndex } = useContext(
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
    return Array.from({ length: i }, (_, index) => (
      <React.Fragment key={index}>
        <th>{repsWord}</th>
        <th>{weightWord}</th>
      </React.Fragment>
    ));
  }

  useEffect(() => {
    if (currentPageNumber) currentPageNumber(pageIndex);
  }, [pageIndex, workout, currentPageNumber]);

  function onEditExercise(exerciseNumber: number) {
    OnEditExercise?.(exerciseNumber);
  }

  function removeExercise(exerciseNumber: number) {
    const updatedWorkouts = [...workout];

    const currentExercises = [...updatedWorkouts[pageIndex].exercisesProps];

    currentExercises.splice(exerciseNumber, 1);

    updatedWorkouts[pageIndex] = {
      ...updatedWorkouts[pageIndex],
      exercisesProps: currentExercises,
    };

    setWorkout(updatedWorkouts);
  }

  return (
    <Container>
      <TableArrows onClick={handlePreviousPage}>
        <PiCaretLeft size={32} />
      </TableArrows>
      <table>
        <caption>
          <div>
            <span>{workout[pageIndex]?.group}</span>
            <PageNumber>{pageIndex + 1}</PageNumber>
          </div>
        </caption>
        <thead>
          <tr>
            {isEditable && (
              <th
                style={{
                  width: "100px",
                }}
              >
                {editRemoveWord}
              </th>
            )}
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
            isEditable,
            onEditExercise,
            removeExercise,
          })}
        </tbody>
      </table>
      <TableArrows onClick={handleNextPage}>
        <PiCaretRight size={32} />
      </TableArrows>
    </Container>
  );
}
