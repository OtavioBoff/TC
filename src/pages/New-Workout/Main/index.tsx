// import { useContext, useState } from "react";
import { InputForm, NewExerciseForm } from "../components/InputForm";
import { AddButton, Container, SubmitButton } from "./styles";
import { Table } from "../../../components/Table";
import { Plus } from "phosphor-react";
import { Modal } from "../components/Modal";

import { useContext, useState } from "react";
import { WorkoutNameData, WorkoutNameForm } from "../components/WorkNameForm";
import { RegisterWorkoutContext } from "../../../contexts/workoutContext";

export function NewWorkout() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [workoutName, setWorkoutName] = useState("");
  const { workout, setWorkout, pageIndex, setPageIndex } = useContext(
    RegisterWorkoutContext
  );

  const openModal = () => setIsModalVisible(true);

  const closeModal = () => setIsModalVisible(false);

  const newGroup: boolean = !workout[pageIndex]?.group;

  const handleSubmit = (data: NewExerciseForm) => {
    data.exerciseProps.seriesProps.props.splice(
      data.exerciseProps.seriesProps.num,
      data.exerciseProps.seriesProps.props.length -
        data.exerciseProps.seriesProps.num
    );

    const newExercise = {
      muscle: data.exerciseProps.muscle,
      exercise: data.exerciseProps.exercise,
      observation: data.exerciseProps.observation,
      seriesProps: {
        num: data.exerciseProps.seriesProps.num,
        props: [...data.exerciseProps.seriesProps.props],
      },
    };

    const updatedWorkout = [...workout];

    console.log(updatedWorkout);

    if (updatedWorkout.length === 0) {
      updatedWorkout.push({
        group: data.group ?? "",
        exercisesProps: [newExercise],
      });
    } else {
      const group = updatedWorkout[pageIndex];
      if (group.exercisesProps.length === 0) {
        group.group = data.group ?? "";
      }
      group.exercisesProps.push(newExercise);
    }
    setWorkout(updatedWorkout);

    closeModal();
  };

  const currentPageNumber = (data: number) => {
    setPageIndex(data);

    if (data === workout.length - 1) {
      handleNewPage();
    }
  };

  const handleNewPage = () => {
    const newGroup = {
      group: "",
      exercisesProps: [],
    };
    setWorkout([...workout, newGroup]);
  };

  const handleNewWorkout = () => {
    setWorkoutName("");
    openModal();
  };

  const handleWorkoutName = () => {
    setWorkoutName(" ");
    openModal();
  };
  const handleSubmitWorkout = (data: WorkoutNameData) => {
    console.log(data);
    console.log(workout);
    closeModal();
  };
  const isDisableSubmitButton: boolean = !workout[0]?.group ? true : false;

  return (
    <Container>
      <Table
        currentPageNumber={currentPageNumber}
        nextNewPage={handleNewPage}
      />

      <Modal isVisible={isModalVisible} onClose={closeModal}>
        {workoutName ? (
          <WorkoutNameForm onSubmit={handleSubmitWorkout} />
        ) : (
          <InputForm onSubmit={handleSubmit} newGroup={newGroup} />
        )}
      </Modal>

      <footer>
        <AddButton onClick={handleNewWorkout}>
          <Plus size={20} />
        </AddButton>
        <SubmitButton
          disabled={isDisableSubmitButton}
          onClick={handleWorkoutName}
        >
          Submit
        </SubmitButton>
      </footer>
    </Container>
  );
}
