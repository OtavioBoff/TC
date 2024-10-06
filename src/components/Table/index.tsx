import React, { useContext, useEffect } from "react";
import {
  Container,
  Content,
  EditButton,
  EmptyPage,
  Footer,
  MiddleContent,
  PageIndex,
  RemoveButton,
  TableArrows,
  WorkoutGroup,
} from "./styles";
import { generateTableRows } from "./TableRow";
import { RegisterWorkoutContext } from "../../contexts/workoutContext";
import { PiCaretLeft, PiCaretRight, PiTrash } from "react-icons/pi";
import { BiEdit } from "react-icons/bi";

export interface TableProps {
  isEditable?: boolean;
  currentPageNumber?: (pageIndex: number) => void;
  OnEditExercise?: (exerciseNumber: number) => void;
  OnEditGroupName?: () => void;
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
  OnEditGroupName,
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

  useEffect(() => {
    if (currentPageNumber) currentPageNumber(pageIndex);
  }, [pageIndex, workout, currentPageNumber]);

  if (workout.length === 0) {
    return (
      <Container>
        <Content>
          <EmptyPage>{"Não há nenhum treino aberto"}</EmptyPage>
        </Content>
      </Container>
    );
  }

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

  function onEditExercise(exerciseNumber: number) {
    OnEditExercise?.(exerciseNumber);
  }

  function removeExercise(exerciseNumber: number) {
    const updatedWorkout = [...workout];

    const currentExercises = [...updatedWorkout[pageIndex].exercisesProps];

    currentExercises.splice(exerciseNumber, 1);

    updatedWorkout[pageIndex] = {
      ...updatedWorkout[pageIndex],
      exercisesProps: currentExercises,
    };

    setWorkout(updatedWorkout);
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (event.key === "ArrowLeft") handlePreviousPage();
    if (event.key === "ArrowRight") handleNextPage();
  };

  const handleEditGroupName = () => {
    OnEditGroupName?.();
  };

  const handleRemovePage = () => {
    const updatedWorkout = [...workout];
    updatedWorkout.splice(pageIndex, 1);
    setWorkout(updatedWorkout);
  };

  return (
    <Container>
      <Content>
        <TableArrows onClick={handlePreviousPage} onKeyDown={handleKeyDown}>
          <PiCaretLeft size={32} />
        </TableArrows>
        <MiddleContent>
          <table>
            <caption>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <WorkoutGroup>{workout[pageIndex]?.group}</WorkoutGroup>
                {isEditable && (
                  <EditButton
                    title="Editar nome do grupo"
                    onClick={handleEditGroupName}
                  >
                    <BiEdit size={24} />
                  </EditButton>
                )}
              </div>
            </caption>
            <thead>
              {workout[pageIndex]?.exercisesProps.length == 0 ? (
                <></>
              ) : (
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
              )}
            </thead>
            <tbody>
              {workout[pageIndex]?.exercisesProps.length == 0 ? (
                <tr>
                  <td>
                    <EmptyPage>{"Pagina vazia"}</EmptyPage>
                  </td>
                </tr>
              ) : (
                generateTableRows({
                  workout,
                  pageIndex,
                  highestNumberOfSeriesInTheGroup,
                  isEditable,
                  onEditExercise,
                  removeExercise,
                })
              )}
            </tbody>
          </table>
        </MiddleContent>
        <TableArrows onClick={handleNextPage} onKeyDown={handleKeyDown}>
          <PiCaretRight size={32} />
        </TableArrows>
      </Content>
      <Footer>
        <PageIndex>{pageIndex + 1}</PageIndex>
        {isEditable && (
          <RemoveButton title="Excluir Página" onClick={handleRemovePage}>
            <PiTrash size={24} />
          </RemoveButton>
        )}
      </Footer>
    </Container>
  );
}
