import React, { useContext, useEffect, useState } from "react";
import {
  AddButtonCell,
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
import { PiCaretLeft, PiCaretRight, PiTrash } from "react-icons/pi";
import { BiEdit, BiPlus } from "react-icons/bi";
import { Group } from "../../@types";
import { RegisterWorkoutContext } from "../../contexts/workoutContext";
import { AddButtonRow } from "./styles";
import { GenerateTableBody } from "./components/GenerateTableBody";

interface TableProps {
  group: Group[];
  workoutPageIndex?: number;
  isEditable?: boolean;
  onPageNumberChange?: (currentPageNumber: number) => void;
  OnEditExercise?: (exerciseNumber: number) => void;
  OnEditGroupName?: () => void;
  OnNextPageIsNew?: () => void;
  OnNewExercise?: () => void;
  editRemoveWord?: string;
  muscleWord?: string;
  exerciseWord?: string;
  observationWord?: string;
  seriesWord?: string;
  repsWord?: string;
  weightWord?: string;
}

export function Table({
  group,
  workoutPageIndex = 0,
  isEditable = false,
  OnNewExercise,
  OnNextPageIsNew,
  OnEditExercise,
  OnEditGroupName,
  onPageNumberChange,
  editRemoveWord = "Editar\n\nExcluir",
  muscleWord = "Músculo",
  exerciseWord = "Exercícios",
  observationWord = "Observações",
  seriesWord = "Séries",
  repsWord = "Reps",
  weightWord = "Peso",
}: TableProps) {
  const { setGroup } = useContext(RegisterWorkoutContext);

  const [tableWorkout, setTableWorkout] = useState<Group[]>(group);
  const [tablePageIndex, setTablePageIndex] =
    useState<number>(workoutPageIndex);

  useEffect(() => {
    setTableWorkout(group);
  }, [group]);

  useEffect(() => {
    onPageNumberChange?.(tablePageIndex);
  }, [tablePageIndex, tableWorkout, onPageNumberChange]);

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
    if (OnEditExercise) {
      OnEditExercise(exerciseNumber);
    }
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
    setGroup(updatedWorkout);
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
    setGroup(updatedWorkout);
  };

  const onNewExercise = () => {
    OnNewExercise?.();
  };

  return (
    <Container>
      <Content>
        <TableArrows onClick={handlePreviousPage} onKeyDown={handleKeyDown}>
          <PiCaretLeft size={32} />
        </TableArrows>
        <MiddleContent>
          <table
            style={
              tableWorkout[tablePageIndex]?.exercisesProps.length == 0
                ? { background: "transparent" }
                : {}
            }
          >
            <caption>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <WorkoutGroup>
                  {tableWorkout[tablePageIndex]?.group}
                </WorkoutGroup>
                {isEditable && tableWorkout[tablePageIndex].group != "" && (
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
                  <th>{muscleWord}</th>
                  <th>{exerciseWord}</th>
                  <th>{observationWord}</th>
                  <th>{seriesWord}</th>
                  {NumberOfSeries(highestNumberOfSeriesInTheGroup)}
                  {isEditable && (
                    <th
                      style={{
                        width: "100px",
                      }}
                    >
                      {editRemoveWord}
                    </th>
                  )}
                </tr>
              )}
            </thead>
            {tableWorkout[tablePageIndex]?.exercisesProps.length == 0 ? (
              <tbody>
                <tr className="emptyPage">
                  <td className="emptyPage" style={{ border: "0px" }}>
                    <EmptyPage>{"Pagina vazia"}</EmptyPage>
                  </td>
                </tr>
                <AddButtonRow onClick={onNewExercise}>
                  <AddButtonCell colSpan={29}>
                    <BiPlus size={32} />
                  </AddButtonCell>
                </AddButtonRow>
              </tbody>
            ) : (
              <GenerateTableBody
                tableWorkout={tableWorkout}
                tablePageIndex={tablePageIndex}
                highestNumberOfSeriesInTheGroup={
                  highestNumberOfSeriesInTheGroup
                }
                isEditable={isEditable}
                onEditExercise={onEditExercise}
                removeExercise={removeExercise}
                onNewExercise={onNewExercise}
              />
            )}
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
