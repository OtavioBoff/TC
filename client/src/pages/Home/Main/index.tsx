import { Container } from "./styles";
import { WorkoutBox } from "../components/WorkoutBox";
import { RegisterWorkoutContext } from "../../../contexts/workoutContext";
import { useContext, useState } from "react";
import { Table } from "../../../components/Table";
import { Modal } from "../../../components/Modal";
import { Workout } from "../../../@types";
// import { GeneratePDF } from "../components/generatePDF";

export function Home() {
  const {
    workouts,
    setWorkout,
    setWorkouts,
    setPageIndex,
    setWorkoutsIndex,
    setIsEditingWorkout,
  } = useContext(RegisterWorkoutContext);

  const [workoutToTable, setWorkoutToTable] = useState<Workout[]>([]);
  const [pageIndexToTable, setPageIndexToTable] = useState<number>(0);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  function openWorkout(workoutsIndex: number, groupIndex: number) {
    setWorkoutToTable(workouts[workoutsIndex].workout);
    setPageIndexToTable(groupIndex);
    openModal();
  }

  function openWorkoutToEdit(workoutsIndex: number) {
    setWorkout(workouts[workoutsIndex].workout);
    setWorkoutsIndex(workoutsIndex);
    setPageIndex(0);
    setIsEditingWorkout(true);
  }

  function copyWorkout(workoutsIndex: number) {
    setWorkout(workouts[workoutsIndex].workout);
    setWorkoutsIndex(workoutsIndex);
    setPageIndex(0);
    setIsEditingWorkout(false);
  }

  function deleteWorkout(workoutsIndex: number) {
    const updatedWorkouts = [...workouts];
    updatedWorkouts.splice(workoutsIndex, 1);
    setWorkouts(updatedWorkouts);
  }

  function downloadWorkout(workoutsIndex: number) {
    setWorkoutsIndex(workoutsIndex);
    // GeneratePDF();
  }

  return (
    <Container>
      {workouts.map((_, index) => (
        <WorkoutBox
          key={index}
          workoutsIndex={index}
          openWorkout={openWorkout}
          openWorkoutToEdit={openWorkoutToEdit}
          deleteWorkout={deleteWorkout}
          copyWorkout={copyWorkout}
          downloadWorkout={downloadWorkout}
        />
      ))}
      <Modal isVisible={isModalVisible} onClose={closeModal}>
        <Table workout={workoutToTable} workoutPageIndex={pageIndexToTable} />
      </Modal>
    </Container>
  );
}
