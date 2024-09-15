import { Container } from "./styles";
import { Tabel } from "../../../../../components/Table";
import { workoutTest } from "../../../../../components/Table/workoutTest";

export function DisplayWorkout() {
  return (
    <Container>
      <Tabel workout={workoutTest} />
    </Container>
  );
}
