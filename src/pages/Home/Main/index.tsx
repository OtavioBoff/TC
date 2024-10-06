import { Container } from "./styles";
import { WorkoutBox } from "../components/WorkoutBox";
import { RegisterWorkoutContext } from "../../../contexts/workoutContext";
import { useContext, useState } from "react";
import { Table } from "../../../components/Table";
import { Modal } from "../../../components/Modal";

export function Home() {
  const { workouts, setWorkout, setWorkouts, setPageIndex, setWorkoutIndex } =
    useContext(RegisterWorkoutContext);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  function openWorkout(workoutIndex: number, groupIndex: number) {
    setIsEditable(false);
    setPageIndex(groupIndex);
    setWorkout(workouts[workoutIndex].workout);
    openModal();
  }

  function openWorkoutToEdit(workoutIndex: number) {
    setWorkoutIndex(workoutIndex);
    setIsEditable(true);
    setWorkout(workouts[workoutIndex].workout);
    setPageIndex(0);
  }

  function deleteWorkout(workoutIndex: number) {
    const updatedWorkouts = [...workouts];
    updatedWorkouts.splice(workoutIndex, 1);
    setWorkouts(updatedWorkouts);
  }

  return (
    <Container>
      {workouts.map((_, index) => (
        <WorkoutBox
          key={index}
          workoutIndex={index}
          openWorkout={openWorkout}
          openWorkoutToEdit={openWorkoutToEdit}
          deleteWorkout={deleteWorkout}
        />
      ))}
      <Modal isVisible={isModalVisible} onClose={closeModal}>
        <Table isEditable={isEditable} />
      </Modal>
    </Container>
  );
}
