import { Container } from "./styles";
import { WorkoutBox } from "./components/WorkoutBox";
import { RegisterWorkoutContext } from "../../../contexts/workoutContext";
import { useContext, useState } from "react";
import { Table } from "../../../components/Table";
import { Modal } from "./components/Modal";

export function Home() {
  const { workouts, setWorkout, setPageIndex } = useContext(
    RegisterWorkoutContext
  );

  const [isModalVisible, setIsModalVisible] = useState(false);
  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  function openWorkout(workoutIndex: number, groupIndex: number) {
    console.log(workoutIndex, groupIndex);
    setPageIndex(groupIndex);
    setWorkout(workouts[workoutIndex].workout);
    openModal();
  }

  return (
    <Container>
      {workouts.map((_, index) => (
        <WorkoutBox
          key={index}
          workoutIndex={index}
          openWorkout={openWorkout}
        />
      ))}
      <Modal isVisible={isModalVisible} onClose={closeModal}>
        <Table />
      </Modal>
    </Container>
  );
}
