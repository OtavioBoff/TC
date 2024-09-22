import { useContext } from "react";
import {
  Container,
  WorkoutGroup,
  WorkoutGroupName,
  WorkoutName,
} from "./styles";
import { RegisterWorkoutContext } from "../../../../../contexts/workoutContext";

interface WorkoutBoxProps {
  workoutIndex: number;
  openWorkout: (workoutIndex: number, groupIndex: number) => void;
}

export function WorkoutBox({ workoutIndex, openWorkout }: WorkoutBoxProps) {
  const { workouts } = useContext(RegisterWorkoutContext);

  return (
    <Container onClick={() => openWorkout(workoutIndex, 0)}>
      <WorkoutName>{workouts[workoutIndex].name}</WorkoutName>
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
