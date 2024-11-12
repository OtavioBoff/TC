import { ExerciseForm, NewExerciseForm } from "../components/ExerciseForm";
import { Container, CreateNewWorkoutButton, SubmitButton } from "./styles";
import { Table } from "../../../components/Table";
import { Modal } from "../../../components/Modal";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { NameForm } from "../components/NameForm";
import { RegisterWorkoutContext } from "../../../contexts/workoutContext";
import {
  ExercisesProps,
  Workout,
  ExerciseBack,
  GroupBack,
  WorkoutBack,
  Group,
} from "../../../@types";
import { RegisterUserContext } from "../../../contexts/userContext";

export function NewWorkout() {
  const {
    group,
    setGroup,
    workoutsIndex,
    workout,
    pageIndex,
    setPageIndex,
    setIsEditingWorkout,
    isEditingWorkout,
  } = useContext(RegisterWorkoutContext);
  const { user } = useContext(RegisterUserContext);

  const isDisableSubmitButton: boolean = !group[0]?.exercisesProps[0]
    ? true
    : false;

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
    if (currentPageNumber === group.length - 1) {
      handleNewPage();
    }
  };

  useEffect(() => {
    setNewGroupName(!group[pageIndex]?.group);
  }, [pageIndex, group]);

  const handleNewPage = () => {
    const hasEmptyPage = group.some((page) => page.exercisesProps.length === 0);
    if (hasEmptyPage) return;

    const newWorkoutGroup: Group = {
      group: "Novo Grupamento",
      exercisesProps: [],
    };
    setGroup([...group, newWorkoutGroup]);
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
    if (workout.length > 0 && workout[workoutsIndex]?.name) setIsEdited(true);
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

    const updatedGroup = [...group];

    if (updatedGroup.length === 0) {
      updatedGroup.push({
        group: group[pageIndex].group,
        exercisesProps: [newExercise],
      });
    } else {
      const currentGroup = updatedGroup[pageIndex];

      if (isEdited) {
        currentGroup.exercisesProps = currentGroup.exercisesProps.map(
          (exercise: ExercisesProps, index: number) =>
            index !== numberOfExerciseToEdit ? exercise : newExercise
        );
        setIsEdited(false);
      } else {
        currentGroup.exercisesProps.push(newExercise);
      }
    }

    setGroup(updatedGroup);

    closeModal();
  };

  const convertWorkoutToBackFormat = (
    workoutToBack: Workout,
    userId: number
  ): WorkoutBack => {
    const groups: GroupBack[] = workoutToBack.group.map((groupItem) => ({
      id: groupItem.id,
      name: groupItem.group,
      exercises: groupItem.exercisesProps.map((exerciseItem) => ({
        id: exerciseItem.id,
        muscle: exerciseItem.muscle,
        exercise: exerciseItem.exercise,
        observation: exerciseItem.observation,
        series: exerciseItem.seriesProps.props.map((seriesItem) => ({
          id: seriesItem.id,
          reps: seriesItem.reps,
          weight: seriesItem.weight,
          exerciseId: exerciseItem.id,
          exercise: {} as ExerciseBack,
        })),
        groupId: groupItem.id,
        group: {} as GroupBack,
      })),
      workoutId: 0,
      workout: {} as WorkoutBack,
    }));

    const name = workoutToBack.name;

    return {
      id: 0,
      name,
      groups,
      userId,
    };
  };

  const handleSubmit = async (name: string) => {
    const data: Workout = { name, group, id: 0 };
    console.log(data);
    const payload: WorkoutBack = convertWorkoutToBackFormat(data, user.id);
    console.log("payload", payload);
    try {
      if (isEditingWorkout) {
        const response = await axios.patch(
          `http://localhost:4000/workouts/${workout[workoutsIndex].id}`,
          payload
        );
        console.log("Workout updated successfully:", response.data);
      } else {
        const response = await axios.post(
          "http://localhost:4000/workouts",
          payload
        );
        console.log("Workout created successfully:", response.data);
      }
      setGroup([]);
      setPageIndex(0);
      closeModal();
    } catch (error) {
      console.error("Error creating workout:", error);
    }
  };

  const OnEditExercise = (exerciseNumber: number) => {
    setIsEdited(true);
    setNumberOfExerciseToEdit(exerciseNumber);
    setNameRequiredToEdit(undefined);
    openModal();
  };

  const OnEditGroupName = () => {
    setIsEdited(true);
    setNameRequiredToEdit("group");
    openModal();
  };

  const OnGroupNameChange = (name: string) => {
    const updatedGroup = group.map((workoutItem, index) => {
      if (index === pageIndex) {
        return { ...workoutItem, group: name };
      }
      return workoutItem;
    });
    setGroup(updatedGroup);
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
      {!(group.length === 0) ? (
        <>
          <Table
            group={group}
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
          CRIAR UM NOVO TREINO
        </CreateNewWorkoutButton>
      )}
    </Container>
  );
}
