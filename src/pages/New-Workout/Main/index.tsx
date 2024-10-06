// import { useContext, useState } from "react";
import { ExerciseForm, NewExerciseForm } from "../components/ExerciseForm";
import {
  AddButton,
  Container,
  CreateNewWorkoutButton,
  SubmitButton,
} from "./styles";
import { Table } from "../../../components/Table";
import { Modal } from "../../../components/Modal";

import { useContext, useEffect, useState } from "react";
import { NameForm } from "../components/NameForm";
import { RegisterWorkoutContext } from "../../../contexts/workoutContext";
import { Workouts } from "../../../@types";
import { BiPlus } from "react-icons/bi";

export function NewWorkout() {
  const {
    workout,
    setWorkout,
    workoutIndex,
    workouts,
    pageIndex,
    setPageIndex,
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

  const handleSubmit = (data: NewExerciseForm) => {
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

  const currentPageNumber = (data: number) => {
    setPageIndex(data);
    if (data === workout.length - 1) {
      handleNewPage();
    }
  };

  useEffect(() => {
    setNewGroupName(!workout[pageIndex]?.group);
  }, [pageIndex, workout]);

  const handleNewPage = () => {
    const currentGroup = workout[pageIndex]?.group || "";
    console.log(workout[pageIndex]?.group, currentGroup);
    const newGroup = {
      group: currentGroup,
      exercisesProps: [],
    };
    setWorkout([...workout, newGroup]);
  };

  const handleNewWorkout = () => {
    setIsEdited(false);
    newGroupName
      ? setNameRequiredToEdit("group")
      : setNameRequiredToEdit(undefined);
    openModal();
  };

  const handleWorkoutName = () => {
    if (workouts[workoutIndex].name) setIsEdited(true);
    setNameRequiredToEdit("workout");
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
    console.log(newWorkout);
    setWorkout([]);
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

  const renderModalField = () => {
    switch (nameRequiredToEdit) {
      case "workout":
        return (
          <NameForm
            onSubmit={handleSubmitWorkout}
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
            onSubmit={handleSubmit}
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
            currentPageNumber={currentPageNumber}
            nextNewPage={handleNewPage}
            isEditable={true}
            OnEditExercise={OnEditExercise}
            OnEditGroupName={OnEditGroupName}
          />

          <Modal isVisible={isModalVisible} onClose={closeModal}>
            {renderModalField()}
          </Modal>
          <footer>
            <AddButton onClick={handleNewWorkout}>
              <BiPlus size={32} />
            </AddButton>
            <SubmitButton
              disabled={isDisableSubmitButton}
              onClick={handleWorkoutName}
            >
              Salvar
            </SubmitButton>
          </footer>
        </>
      ) : (
        <CreateNewWorkoutButton onClick={handleNewPage}>
          Clique aqui para criar um novo treino
        </CreateNewWorkoutButton>
      )}
    </Container>
  );
}
