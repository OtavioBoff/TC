import { useState } from "react";
import { InputForm, NewExerciseForm } from "../../components/InputForm";
import { Workout } from "../../../../@types/styles";
import { AddButton, Container, RemoveButton } from "./styles";
import { Tabel } from "../../../../components/Table";
import { Plus, Trash } from "phosphor-react";
import { Modal } from "../../components/Modal";

export function CreateTraining() {
  const [workout, setWorkout] = useState<Workout[]>([
    {
      group: "",
      exercisesProps: [
        {
          muscle: "",
          exercise: "",
          observation: "",
          seriesProps: {
            num: 0,
            props: [
              {
                reps: 0,
                weight: 0,
              },
            ],
          },
        },
      ],
    },
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);
  const handleSubmit = (data: NewExerciseForm) => {
    const seriesProps = data.exerciseProps.seriesProps;
    seriesProps.props.splice(
      seriesProps.num,
      seriesProps.props.length - seriesProps.num
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

    setWorkout((prevWorkouts) =>
      prevWorkouts.map((group, index) => {
        if (index === pageNumber) {
          return {
            ...group,
            exercisesProps: [...group.exercisesProps, newExercise],
          };
        } else {
          return group;
        }
      })
    );
    console.log(data);
    console.log(newExercise);
  };

  const currentPageNumber = (data: number) => {
    setPageNumber(() => data);
  };
  const handleNewPage = () => {
    const newGroup = {
      group: "",
      exercisesProps: [
        {
          muscle: "",
          exercise: "",
          observation: "",
          seriesProps: {
            num: 0,
            props: [
              {
                reps: 0,
                weight: 0,
              },
            ],
          },
        },
      ],
    };
    setWorkout((state) => [...state, newGroup]);
  };

  return (
    <Container>
      <Tabel
        workout={workout}
        currentPageNumber={currentPageNumber}
        newWorkout={true}
        nextNewPage={handleNewPage}
      />

      <Modal isVisible={isModalVisible} onClose={closeModal}>
        <InputForm onSubmit={handleSubmit} />
      </Modal>

      <footer>
        <AddButton onClick={openModal}>
          <Plus size={20} />
        </AddButton>
        <RemoveButton>
          <Trash size={20} />
        </RemoveButton>
      </footer>
    </Container>
  );
}
