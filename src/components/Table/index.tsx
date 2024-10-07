import React, { useContext, useEffect, useState } from "react";
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
import { PiCaretLeft, PiCaretRight, PiTrash } from "react-icons/pi";
import { BiEdit } from "react-icons/bi";
import { Workout } from "../../@types";
import { RegisterWorkoutContext } from "../../contexts/workoutContext";

export interface TableProps {
  workout: Workout[];
  workoutPageIndex?: number;
  isEditable?: boolean;
  OnPageNumberChange?: (currentPageNumber: number) => void;
  OnEditExercise?: (exerciseNumber: number) => void;
  OnEditGroupName?: () => void;
  OnNextPageIsNew?: () => void;
  editRemoveWord?: string;
  muscleWord?: string;
  exerciseWord?: string;
  observationWord?: string;
  seriesWord?: string;
  repsWord?: string;
  weightWord?: string;
}

export function Table({
  workout,
  workoutPageIndex = 0,
  isEditable = false,
  OnNextPageIsNew,
  OnEditExercise,
  OnEditGroupName,
  OnPageNumberChange,
  editRemoveWord = "Editar\n\nExcluir",
  muscleWord = "Músculo",
  exerciseWord = "Exercícios",
  observationWord = "Observações",
  seriesWord = "Séries",
  repsWord = "Reps",
  weightWord = "Peso",
}: TableProps) {
  const { setWorkout } = useContext(RegisterWorkoutContext);

  const [tableWorkout, setTableWorkout] = useState<Workout[]>(workout);
  const [tablePageIndex, setTablePageIndex] =
    useState<number>(workoutPageIndex);

  useEffect(() => {
    setTableWorkout(workout);
  }, [workout]);

  useEffect(() => {
    OnPageNumberChange?.(tablePageIndex);
  }, [tablePageIndex, tableWorkout, OnPageNumberChange]);

  if (tableWorkout.length === 0) {
    return (
      <Container>
        <Content>
          <EmptyPage>{"Não há nenhum treino aberto"}</EmptyPage>
        </Content>
      </Container>
    );
  }

  function handleNextPage() {
    const lastPageIndex = tableWorkout.length - 1;
    if (tablePageIndex < lastPageIndex) {
      setTablePageIndex((prevIndex) => prevIndex + 1);
    } else if (tablePageIndex === lastPageIndex && OnNextPageIsNew) {
      OnNextPageIsNew();
    }
  }

  function handlePreviousPage() {
    if (tablePageIndex) setTablePageIndex(tablePageIndex - 1);
  }

  const highestNumberOfSeriesInTheGroup = tableWorkout[
    tablePageIndex
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
    const updatedWorkout = [...tableWorkout];

    const currentExercises = [...updatedWorkout[tablePageIndex].exercisesProps];

    currentExercises.splice(exerciseNumber, 1);

    updatedWorkout[tablePageIndex] = {
      ...updatedWorkout[tablePageIndex],
      exercisesProps: currentExercises,
    };

    setTableWorkout(updatedWorkout);
    setWorkout(updatedWorkout);
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    switch (event.key) {
      case "ArrowLeft":
        handlePreviousPage();
        break;
      case "ArrowRight":
        handleNextPage();
        break;
      default:
        break;
    }
  };

  const handleEditGroupName = () => {
    OnEditGroupName?.();
  };

  const handleRemovePage = () => {
    const updatedWorkout = [...tableWorkout];
    updatedWorkout.splice(tablePageIndex, 1);
    setTableWorkout(updatedWorkout);
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
                <WorkoutGroup>
                  {tableWorkout[tablePageIndex]?.group}
                </WorkoutGroup>
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
              {tableWorkout[tablePageIndex]?.exercisesProps.length == 0 ? (
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
              {tableWorkout[tablePageIndex]?.exercisesProps.length == 0 ? (
                <tr>
                  <td>
                    <EmptyPage>{"Pagina vazia"}</EmptyPage>
                  </td>
                </tr>
              ) : (
                generateTableRows({
                  tableWorkout,
                  tablePageIndex,
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
        <PageIndex>{tablePageIndex + 1}</PageIndex>
        {isEditable && (
          <RemoveButton title="Excluir Página" onClick={handleRemovePage}>
            <PiTrash size={24} />
          </RemoveButton>
        )}
      </Footer>
    </Container>
  );
}
