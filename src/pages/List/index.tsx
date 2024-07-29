import { ExerciseList } from "../../components/ExerciseList";
import { Container } from "./styles";

export function List() {
  return (
    <Container>
      <ExerciseList print={true} exerciseGroup="peitoral" />
      <ExerciseList print={true} exerciseGroup="perna" />
    </Container>
  );
}
