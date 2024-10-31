import { ExerciseForm, NewExerciseForm } from "../components/ExerciseForm";
import { Container, CreateNewWorkoutButton, SubmitButton } from "./styles";
import { Table } from "../../../components/Table";
import { Modal } from "../../../components/Modal";

import { useContext, useEffect, useState } from "react";
import { NameForm } from "../components/NameForm";
import { RegisterWorkoutContext } from "../../../contexts/workoutContext";
import { Workouts } from "../../../@types";

export function NewWorkout() {
  const {
    workout,
    setWorkout,
    workoutsIndex,
    workouts,
    setWorkouts,
    pageIndex,
    setPageIndex,
    setIsEditingWorkout,
    isEditingWorkout,
  } = useContext(RegisterWorkoutContext);

  const isDisableSubmitButton: boolean = !workout[0]?.group ? true : false;

  const [newGroupName, setNewGroupName] = useState(false);

  const [nameRequiredToEdit, setNameRequiredToEdit] = useState<
    "workout" | "group" | undefined
  >(undefined);

  const [isEdited, setIsEdited] = useState(false);

  const [numberOfExerciseToEdit, setNumberOfExerciseToEdit] = useState(0);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => setIsModalVisible(true);

  const closeModal = () => setIsModalVisible(false);

  const OnPageNumberChange = (currentPageNumber: number) => {
    setPageIndex(currentPageNumber);
    if (currentPageNumber === workout.length - 1) {
      handleNewPage();
    }
  };

  useEffect(() => {
    setNewGroupName(!workout[pageIndex]?.group);
  }, [pageIndex, workout]);

  const handleNewPage = () => {
    const hasEmptyPage = workout.some((page) => page.group.trim() === "");
    if (hasEmptyPage) return;

    const newGroup = {
      group: "",
      exercisesProps: [],
    };
    setWorkout([...workout, newGroup]);
  };

  const handleNewWorkout = () => {
    setIsEditingWorkout(false);
    handleNewPage();
  };

  const handleNewExercise = () => {
    setIsEdited(false);
    newGroupName
      ? setNameRequiredToEdit("group")
      : setNameRequiredToEdit(undefined);
    openModal();
  };

  const handleWorkoutName = () => {
    if (workouts[workoutsIndex].name) setIsEdited(true);
    setNameRequiredToEdit("workout");
    openModal();
  };

  const handleSubmitExercise = (data: NewExerciseForm) => {
    data.exerciseProps.seriesProps.props.splice(
      data.exerciseProps.seriesProps.num,
      data.exerciseProps.seriesProps.props.length -
        data.exerciseProps.seriesProps.num
    );

    const newExercise = {
      id: data.exerciseProps.id,
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
        group: workout[pageIndex].group,
        exercisesProps: [newExercise],
      });
    } else {
      const group = updatedWorkout[pageIndex];

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

  const handleSubmit = ({ name }: Workouts) => {
    const numberOfWorkouts = workout.reduce(
      (max: number, _, index, workouts) => {
        return workouts[index].group != "" ? max + 1 : max;
      },
      0
    );
    workout.splice(numberOfWorkouts, workout.length - numberOfWorkouts);
    const newWorkout: Workouts = { name: name, workout: workout };
    const updatedWorkouts = isEditingWorkout
      ? workouts.map((w, index) => (index === workoutsIndex ? newWorkout : w))
      : [...workouts, newWorkout];
    setWorkouts(updatedWorkouts);
    setWorkout([]);
    setPageIndex(0);
    closeModal();
  };

  const OnEditExercise = (exerciseNumber: number) => {
    setIsEdited(true);
    setNumberOfExerciseToEdit(exerciseNumber);
    openModal();
  };

  const OnEditGroupName = () => {
    setIsEdited(true);
    setNameRequiredToEdit("group");
    openModal();
  };

  const OnGroupNameChange = ({ name }: Workouts) => {
    const updatedWorkout = workout.map((workoutItem, index) => {
      if (index === pageIndex) {
        return { ...workoutItem, group: name };
      }
      return workoutItem;
    });
    setWorkout(updatedWorkout);
    closeModal();
  };

  const renderModalField = () => {
    switch (nameRequiredToEdit) {
      case "workout":
        return (
          <NameForm
            onSubmit={handleSubmit}
            toEdit={isEdited}
            nameRequiredTo={nameRequiredToEdit}
          />
        );

      case "group":
        return (
          <NameForm
            onSubmit={OnGroupNameChange}
            toEdit={isEdited}
            nameRequiredTo={nameRequiredToEdit}
          />
        );

      default:
        return (
          <ExerciseForm
            onSubmit={handleSubmitExercise}
            toEdit={isEdited}
            numberOfExerciseToEdit={numberOfExerciseToEdit}
          />
        );
    }
  };

  return (
    <Container>
      {!(workout.length === 0) ? (
        <>
          <Table
            workout={workout}
            workoutPageIndex={pageIndex}
            onPageNumberChange={OnPageNumberChange}
            OnNextPageIsNew={handleNewPage}
            isEditable={true}
            OnEditExercise={OnEditExercise}
            OnEditGroupName={OnEditGroupName}
            OnNewExercise={handleNewExercise}
          />

          <Modal isVisible={isModalVisible} onClose={closeModal}>
            {renderModalField()}
          </Modal>
          <footer>
            <SubmitButton
              disabled={isDisableSubmitButton}
              onClick={handleWorkoutName}
            >
              Salvar
            </SubmitButton>
          </footer>
        </>
      ) : (
        <CreateNewWorkoutButton onClick={handleNewWorkout}>
          Clique aqui para criar um novo treino
        </CreateNewWorkoutButton>
      )}
    </Container>
  );
}
