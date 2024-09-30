import { useContext } from "react";
import {
  Container,
  EditButton,
  Header,
  WorkoutGroup,
  WorkoutGroupName,
  WorkoutName,
} from "./styles";
import { RegisterWorkoutContext } from "../../../../contexts/workoutContext";
import { BiEdit } from "react-icons/bi";

interface WorkoutBoxProps {
  workoutIndex: number;
  openWorkout: (workoutIndex: number, groupIndex: number) => void;
  openWorkoutToEdit: (workoutIndex: number) => void;
}

export function WorkoutBox({
  workoutIndex,
  openWorkout,
  openWorkoutToEdit,
}: WorkoutBoxProps) {
  const { workouts } = useContext(RegisterWorkoutContext);

  return (
    <Container onClick={() => openWorkout(workoutIndex, 0)}>
      <Header>
        <WorkoutName>{workouts[workoutIndex].name}</WorkoutName>
        <EditButton
          onClick={(e) => {
            e.stopPropagation();
            openWorkoutToEdit(workoutIndex);
          }}
        >
          <BiEdit size={24} />
        </EditButton>
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
