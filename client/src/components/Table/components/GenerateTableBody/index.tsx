import { GenerateTableRowsForRepsAndWeight } from "../GenerateTableRowsForRepsAndWeight";
import { Workout } from "../../../../@types";
import { PiTrash } from "react-icons/pi";
import { BiEdit, BiPlus } from "react-icons/bi";
import { AddButton, EditButton, RemoveButton } from "../../styles";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { useContext } from "react";
import { RegisterWorkoutContext } from "../../../../contexts/workoutContext";
import { TableRow } from "./styles";

interface GenerateTableBodyProps {
  tableWorkout: Workout[];
  tablePageIndex: number;
  highestNumberOfSeriesInTheGroup: number;
  isEditable: boolean;
  onEditExercise: (exerciseNumber: number) => void;
  onNewExercise: () => void;
  removeExercise: (exerciseNumber: number) => void;
}

export function GenerateTableBody({
  tableWorkout,
  tablePageIndex,
  highestNumberOfSeriesInTheGroup,
  isEditable,
  onEditExercise,
  onNewExercise,
  removeExercise,
}: GenerateTableBodyProps) {
  const { setWorkout } = useContext(RegisterWorkoutContext);

  const handleDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    // Verifica se houve uma mudança de posição
    if (!destination || destination.index === source.index) return;

    // Realoca o exercício para a nova posição dentro do mesmo grupo
    const reorderedExercises = [...tableWorkout[tablePageIndex].exercisesProps];
    const [removed] = reorderedExercises.splice(source.index, 1);
    reorderedExercises.splice(destination.index, 0, removed);

    const updatedWorkout = [...tableWorkout];
    updatedWorkout[tablePageIndex] = {
      ...updatedWorkout[tablePageIndex],
      exercisesProps: reorderedExercises,
    };

    setWorkout(updatedWorkout);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="exercise-list" type="EXERCISE">
        {(provided) => (
          <tbody ref={provided.innerRef} {...provided.droppableProps}>
            {tableWorkout[tablePageIndex]?.exercisesProps.map(
              (exercise, index) => (
                <Draggable
                  key={`exercise-${index}`}
                  draggableId={`exercise-${index}`}
                  index={index}
                  isDragDisabled={!isEditable} // Desativa o arrasto quando `isEditable` é false
                >
                  {(provided) => (
                    <TableRow
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {isEditable && (
                        <td>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.5rem",
                            }}
                          >
                            <EditButton
                              title="Editar"
                              onClick={() => onEditExercise(index)}
                            >
                              <BiEdit size={24} />
                            </EditButton>
                            <RemoveButton
                              title="Excluir"
                              onClick={() => removeExercise(index)}
                            >
                              <PiTrash size={24} />
                            </RemoveButton>
                          </div>
                        </td>
                      )}
                      <td>
                        <span>{exercise.muscle || "-"}</span>
                      </td>
                      <td>
                        <span>{exercise.exercise || "-"}</span>
                      </td>
                      <td>
                        <span>{exercise.observation || "-"}</span>
                      </td>
                      <td>
                        <span>{exercise.seriesProps.props.length || "-"}</span>
                      </td>
                      {/* {generateTableRowsForRepsAndWeight(
                        highestNumberOfSeriesInTheGroup,
                        index,
                        tableWorkout,
                        tablePageIndex
                      )} */}
                      <GenerateTableRowsForRepsAndWeight
                        highestNumberOfSeriesInTheGroup={
                          highestNumberOfSeriesInTheGroup
                        }
                        exerciseNum={index}
                        workout={tableWorkout}
                        pageIndex={tablePageIndex}
                      />
                    </TableRow>
                  )}
                </Draggable>
              )
            )}
            {provided.placeholder}
            {isEditable && (
              <td colSpan={29}>
                <AddButton
                  style={{
                    borderTopLeftRadius: "0px",
                    borderTopRightRadius: "0px",
                    borderTop: "0px",
                    flexGrow: "0",
                  }}
                  onClick={onNewExercise}
                >
                  <BiPlus size={32} />
                </AddButton>
              </td>
            )}
          </tbody>
        )}
      </Droppable>
    </DragDropContext>
  );
}
