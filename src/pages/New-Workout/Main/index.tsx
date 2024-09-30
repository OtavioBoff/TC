// import { useContext, useState } from "react";
import { InputForm, NewExerciseForm } from "../components/InputForm";
import { AddButton, Container, SubmitButton } from "./styles";
import { Table } from "../../../components/Table";
import { Modal } from "../../../components/Modal";

import { useContext, useState } from "react";
import { WorkoutNameForm } from "../components/WorkNameForm";
import { RegisterWorkoutContext } from "../../../contexts/workoutContext";
import { Workouts } from "../../../@types";
import { BiPlus } from "react-icons/bi";

export function NewWorkout() {
  const { workout, setWorkout, workouts, pageIndex, setPageIndex } = useContext(
    RegisterWorkoutContext
  );

  const [workoutName, setWorkoutName] = useState("");

  const newGroup: boolean = !workout[pageIndex]?.group;

  const isDisableSubmitButton: boolean = !workout[0]?.group ? true : false;

  const [isEdited, setIsEdited] = useState(false);

  const [numberOfExerciseToEdit, setNumberOfExerciseToEdit] = useState(0);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => setIsModalVisible(true);

  const closeModal = () => setIsModalVisible(false);

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

      if (isEdited) {
        group.exercisesProps = group.exercisesProps.map((exercise, index) => {
          return index !== numberOfExerciseToEdit ? exercise : newExercise;
        });
        setIsEdited(false);
      } else {
        group.exercisesProps.push(newExercise);
      }
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

  const handleSubmitWorkout = ({ name }: Workouts) => {
    const numberOfWorkouts = workout.reduce(
      (max: number, _, index, workouts) => {
        return workouts[index].group != "" ? max + 1 : max;
      },
      0
    );
    workout.splice(numberOfWorkouts, workout.length - numberOfWorkouts);
    const newWorkout: Workouts = { name: name, workout: workout };
    workouts.push(newWorkout);
    console.log(workouts);
    setWorkout([]);
    closeModal();
  };

  const onEditExercise = (exerciseNumber: number) => {
    setIsEdited(true);
    setNumberOfExerciseToEdit(exerciseNumber);
    openModal();
  };

  return (
    <Container>
      <Table
        currentPageNumber={currentPageNumber}
        nextNewPage={handleNewPage}
        isEditable={true}
        OnEditExercise={onEditExercise}
      />

      <Modal isVisible={isModalVisible} onClose={closeModal}>
        {workoutName ? (
          <WorkoutNameForm onSubmit={handleSubmitWorkout} />
        ) : (
          <InputForm
            onSubmit={handleSubmit}
            newGroup={newGroup}
            toEdit={isEdited}
            numberOfExerciseToEdit={numberOfExerciseToEdit}
          />
        )}
      </Modal>

      <footer>
        <AddButton onClick={handleNewWorkout}>
          <BiPlus size={20} />
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
