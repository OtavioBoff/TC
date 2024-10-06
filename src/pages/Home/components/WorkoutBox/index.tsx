import { useContext } from "react";
import {
  Container,
  EditButton,
  Header,
  RemoveButton,
  WorkoutGroup,
  WorkoutGroupName,
  WorkoutName,
} from "./styles";
import { RegisterWorkoutContext } from "../../../../contexts/workoutContext";
import { BiEdit } from "react-icons/bi";
import { PiTrash } from "react-icons/pi";

interface WorkoutBoxProps {
  workoutIndex: number;
  openWorkout: (workoutIndex: number, groupIndex: number) => void;
  openWorkoutToEdit: (workoutIndex: number) => void;
  deleteWorkout: (workoutIndex: number) => void;
}

export function WorkoutBox({
  workoutIndex,
  openWorkout,
  openWorkoutToEdit,
  deleteWorkout,
}: WorkoutBoxProps) {
  const { workouts } = useContext(RegisterWorkoutContext);

  return (
    <Container onClick={() => openWorkout(workoutIndex, 0)}>
      <Header>
        <WorkoutName>{workouts[workoutIndex].name}</WorkoutName>
        <div>
          <EditButton
            to="/new-workout"
            title="Editar"
            onClick={(e) => {
              e.stopPropagation();
              openWorkoutToEdit(workoutIndex);
            }}
          >
            <BiEdit size={24} />
          </EditButton>
          <RemoveButton
            title="Excluir"
            onClick={(e) => {
              e.stopPropagation();
              deleteWorkout(workoutIndex);
            }}
          >
            <PiTrash size={24} />
          </RemoveButton>
        </div>
      </Header>
      <WorkoutGroup>
        {workouts[workoutIndex].workout.map((item, index) => (
          <WorkoutGroupName
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              openWorkout(workoutIndex, index);
            }}
          >
            {item.group}
          </WorkoutGroupName>
        ))}
      </WorkoutGroup>
    </Container>
  );
}
