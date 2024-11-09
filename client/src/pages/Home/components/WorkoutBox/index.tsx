import { useContext } from "react";
import {
  Container,
  CopyButton,
  DownloadButton,
  EditButton,
  Header,
  RemoveButton,
  ShareButton,
  WorkoutGroup,
  WorkoutGroupName,
  WorkoutName,
} from "./styles";
import { RegisterWorkoutContext } from "../../../../contexts/workoutContext";
import { BiEdit } from "react-icons/bi";
import { PiDownloadSimple, PiTrash } from "react-icons/pi";
import { MdCopyAll } from "react-icons/md";
import { Group } from "../../../../@types";
import { TbUserShare } from "react-icons/tb";

interface WorkoutBoxProps {
  workoutsIndex: number;
  openWorkout: (workoutsIndex: number, groupIndex: number) => void;
  openWorkoutToEdit: (workoutsIndex: number) => void;
  deleteWorkout: (workoutsIndex: number) => void;
  copyWorkout: (workoutsIndex: number) => void;
  downloadWorkout: (workoutsIndex: number) => void;
  shareWorkout: (workoutsIndex: number) => void;
}

export function WorkoutBox({
  workoutsIndex,
  openWorkout,
  openWorkoutToEdit,
  deleteWorkout,
  copyWorkout,
  downloadWorkout,
  shareWorkout,
}: WorkoutBoxProps) {
  const { workout } = useContext(RegisterWorkoutContext);

  return (
    <Container onClick={() => openWorkout(workoutsIndex, 0)}>
      <Header>
        <WorkoutName>{workout[workoutsIndex].name}</WorkoutName>
        <div>
          <ShareButton
            title="Compartilhar"
            onClick={(e) => {
              e.stopPropagation();
              shareWorkout(workoutsIndex);
            }}
          >
            <TbUserShare size={24} />
          </ShareButton>
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
            to="/create"
            title="Copiar"
            onClick={(e) => {
              e.stopPropagation();
              copyWorkout(workoutsIndex);
            }}
          >
            <MdCopyAll size={24} />
          </CopyButton>
          <EditButton
            to="/create"
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
              deleteWorkout(workout[workoutsIndex].id);
            }}
          >
            <PiTrash size={24} />
          </RemoveButton>
        </div>
      </Header>
      <WorkoutGroup>
        {workout[workoutsIndex].group.map((item: Group, index: number) => (
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
