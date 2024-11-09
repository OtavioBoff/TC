import { Container } from "./styles";
import { WorkoutBox } from "../components/WorkoutBox";
import { RegisterWorkoutContext } from "../../../contexts/workoutContext";
import { useContext, useEffect, useState } from "react";
import { Table } from "../../../components/Table";
import { Modal } from "../../../components/Modal";
import {
  ExerciseBack,
  Group,
  GroupBack,
  SeriesBack,
  WorkoutBack,
} from "../../../@types";
import axios from "axios";
import api from "../../../services/api";
import { ShareForm } from "../components/ShareForm";
// import { GeneratePDF } from "../components/generatePDF";

export function Home() {
  const {
    workout,
    setWorkout,
    setGroup,
    setPageIndex,
    setWorkoutsIndex,
    setIsEditingWorkout,
  } = useContext(RegisterWorkoutContext);

  const [isSharing, setIsSharing] = useState(false);

  const [workoutToTable, setWorkoutToTable] = useState<Group[]>([]);
  const [pageIndexToTable, setPageIndexToTable] = useState<number>(0);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  function openWorkout(workoutsIndex: number, groupIndex: number) {
    setWorkoutToTable(workout[workoutsIndex].group);
    setPageIndexToTable(groupIndex);
    setIsSharing(false);
    openModal();
  }

  function openWorkoutToEdit(workoutsIndex: number) {
    setGroup(workout[workoutsIndex].group);
    setWorkoutsIndex(workoutsIndex);
    setPageIndex(0);
    setIsEditingWorkout(true);
  }

  function copyWorkout(workoutsIndex: number) {
    setGroup(workout[workoutsIndex].group);
    setWorkoutsIndex(workoutsIndex);
    setPageIndex(0);
    setIsEditingWorkout(false);
  }

  function shareWorkout(workoutsIndex: number) {
    console.log(workout[workoutsIndex].id);
    setIsSharing(true);
    openModal();
  }

  function onShareFormSubmit(email: string) {
    console.log(email);
    closeModal();
  }

  useEffect(() => {
    api
      .get("/workouts/1")
      .then((response) => {
        if (response.data.length > 0) {
          const workoutsData = response.data.map((workout: WorkoutBack) => ({
            id: workout.id,
            name: workout.name,
            group: workout.groups.map((group: GroupBack) => ({
              id: group.id,
              group: group.name,
              exercisesProps: group.exercises.map((exercise: ExerciseBack) => ({
                id: exercise.id,
                muscle: exercise.muscle,
                exercise: exercise.exercise,
                observation: exercise.observation,
                seriesProps: {
                  num: exercise.series.length,
                  props: exercise.series.map((series: SeriesBack) => ({
                    id: series.id,
                    reps: series.reps,
                    weight: series.weight,
                  })),
                },
              })),
            })),
          }));

          console.log(workoutsData);
          setWorkout(workoutsData);
        }
      })
      .catch((error) => console.error("Erro ao buscar workout:", error));
  }, [setWorkout]);

  async function deleteWorkout(workoutId: number) {
    try {
      const response = await axios.delete(
        `http://localhost:4000/workouts/${workoutId}`
      );

      setWorkout(workout.filter((w) => w.id !== workoutId));

      // Alternar refresh para garantir que os dados estejam atualizados no banco

      console.log("Workout deleted successfully:", response.data);
    } catch (error) {
      console.error("Error deleting workout:", error);
    }
  }

  function downloadWorkout(workoutsIndex: number) {
    setWorkoutsIndex(workoutsIndex);
    // GeneratePDF();
  }

  return (
    <Container>
      {workout.map((_, index) => (
        <WorkoutBox
          key={index}
          workoutsIndex={index}
          openWorkout={openWorkout}
          openWorkoutToEdit={openWorkoutToEdit}
          deleteWorkout={deleteWorkout}
          copyWorkout={copyWorkout}
          downloadWorkout={downloadWorkout}
          shareWorkout={shareWorkout}
        />
      ))}
      <Modal isVisible={isModalVisible} onClose={closeModal}>
        {isSharing ? (
          <ShareForm onSubmit={onShareFormSubmit} />
        ) : (
          <Table group={workoutToTable} workoutPageIndex={pageIndexToTable} />
        )}
      </Modal>
    </Container>
  );
}
