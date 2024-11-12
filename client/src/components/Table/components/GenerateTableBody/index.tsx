import { GenerateTableRowsForRepsAndWeight } from "../GenerateTableRowsForRepsAndWeight";
import { Group } from "../../../../@types";
import { PiTrash } from "react-icons/pi";
import { BiEdit, BiPlus } from "react-icons/bi";
import {
  AddButtonCell,
  AddButtonRow,
  EditButton,
  RemoveButton,
} from "../../styles";
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
  tableWorkout: Group[];
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
  const { setGroup } = useContext(RegisterWorkoutContext);

  const handleDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination || destination.index === source.index) return;

    const reorderedExercises = [...tableWorkout[tablePageIndex].exercisesProps];
    const [removed] = reorderedExercises.splice(source.index, 1);
    reorderedExercises.splice(destination.index, 0, removed);

    const updatedWorkout = [...tableWorkout];
    updatedWorkout[tablePageIndex] = {
      ...updatedWorkout[tablePageIndex],
      exercisesProps: reorderedExercises,
    };

    setGroup(updatedWorkout);
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
                      <GenerateTableRowsForRepsAndWeight
                        highestNumberOfSeriesInTheGroup={
                          highestNumberOfSeriesInTheGroup
                        }
                        exerciseNum={index}
                        group={tableWorkout}
                        pageIndex={tablePageIndex}
                      />
                      {isEditable && (
                        <td>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
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
                    </TableRow>
                  )}
                </Draggable>
              )
            )}
            {provided.placeholder}
            {isEditable && (
              <AddButtonRow onClick={onNewExercise}>
                <AddButtonCell colSpan={29}>
                  <BiPlus size={32} />
                </AddButtonCell>
              </AddButtonRow>
            )}
          </tbody>
        )}
      </Droppable>
    </DragDropContext>
  );
}
