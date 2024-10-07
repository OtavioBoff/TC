import { useContext } from "react";
import {
  Container,
  CopyButton,
  DownloadButton,
  EditButton,
  Header,
  RemoveButton,
  WorkoutGroup,
  WorkoutGroupName,
  WorkoutName,
} from "./styles";
import { RegisterWorkoutContext } from "../../../../contexts/workoutContext";
import { BiEdit } from "react-icons/bi";
import { PiDownloadSimple, PiTrash } from "react-icons/pi";
import { MdCopyAll } from "react-icons/md";

interface WorkoutBoxProps {
  workoutsIndex: number;
  openWorkout: (workoutsIndex: number, groupIndex: number) => void;
  openWorkoutToEdit: (workoutsIndex: number) => void;
  deleteWorkout: (workoutsIndex: number) => void;
  copyWorkout: (workoutsIndex: number) => void;
  downloadWorkout: (workoutsIndex: number) => void;
}

export function WorkoutBox({
  workoutsIndex,
  openWorkout,
  openWorkoutToEdit,
  deleteWorkout,
  copyWorkout,
  downloadWorkout,
}: WorkoutBoxProps) {
  const { workouts } = useContext(RegisterWorkoutContext);

  return (
    <Container onClick={() => openWorkout(workoutsIndex, 0)}>
      <Header>
        <WorkoutName>{workouts[workoutsIndex].name}</WorkoutName>
        <div>
          <DownloadButton
            title="Baixar"
            onClick={(e) => {
              e.stopPropagation();
              downloadWorkout(workoutsIndex);
            }}
          >
            <PiDownloadSimple size={24} />
          </DownloadButton>
          <CopyButton
            to="/new-workout"
            title="Copiar"
            onClick={(e) => {
              e.stopPropagation();
              copyWorkout(workoutsIndex);
            }}
          >
            <MdCopyAll size={24} />
          </CopyButton>
          <EditButton
            to="/new-workout"
            title="Editar"
            onClick={(e) => {
              e.stopPropagation();
              openWorkoutToEdit(workoutsIndex);
            }}
          >
            <BiEdit size={24} />
          </EditButton>
          <RemoveButton
            title="Excluir"
            onClick={(e) => {
              e.stopPropagation();
              deleteWorkout(workoutsIndex);
            }}
          >
            <PiTrash size={24} />
          </RemoveButton>
        </div>
      </Header>
      <WorkoutGroup>
        {workouts[workoutsIndex].workout.map((item, index) => (
          <WorkoutGroupName
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              openWorkout(workoutsIndex, index);
            }}
          >
            {item.group}
          </WorkoutGroupName>
        ))}
      </WorkoutGroup>
    </Container>
  );
}
