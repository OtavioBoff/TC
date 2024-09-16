import { useContext, useState } from "react";
import { InputForm, NewExerciseForm } from "../components/InputForm";
import { AddButton, Container, SubmitButton } from "./styles";
import { Table } from "../../../components/Table";
import { Plus } from "phosphor-react";
import { Modal } from "../components/Modal";
import { RegisterContext } from "../../../contexts/context";

export function NewWorkout() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  const { workout, setWorkout } = useContext(RegisterContext);

  const openModal = () => setIsModalVisible(true);

  const closeModal = () => setIsModalVisible(false);

  const newGroup: boolean = !workout[pageNumber]?.group;

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
      const group = updatedWorkout[pageNumber];
      if (group.exercisesProps.length === 0) {
        group.group = data.group ?? "";
      }
      group.exercisesProps.push(newExercise);
    }
    setWorkout(updatedWorkout);

    closeModal();
  };

  const currentPageNumber = (data: number) => {
    setPageNumber(data);

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

  const handleSubmitWorkout = () => {
    console.log(workout);
  };

  return (
    <Container>
      <Table
        currentPageNumber={currentPageNumber}
        nextNewPage={handleNewPage}
      />

      <Modal isVisible={isModalVisible} onClose={closeModal}>
        <InputForm onSubmit={handleSubmit} newGroup={newGroup} />
      </Modal>

      <footer>
        <AddButton onClick={openModal}>
          <Plus size={20} />
        </AddButton>
        <SubmitButton onClick={handleSubmitWorkout}>Submit</SubmitButton>
      </footer>
    </Container>
  );
}
