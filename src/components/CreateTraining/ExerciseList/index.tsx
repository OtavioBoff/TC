import { Container } from "./styles";
import { MuscleList } from "./MuscleList";
interface ExerciseGroupListProps {
  print?: boolean;
  exerciseGroup: "peitoral" | "perna";
}

export function ExerciseList({
  print = false,
  exerciseGroup,
}: ExerciseGroupListProps) {
  MuscleList();
  let exercises: string[] = [];

  switch (exerciseGroup) {
    case "peitoral":
      exercises = [
        "supino",
        "crucifixo",
        "supino inclinado",
        "supino declinado",
      ];
      break;
    case "perna":
      exercises = ["agachamento", "legpress", "panturrilha"];
      break;
    default:
      break;
  }
  if (print == true)
    return (
      <Container>
        <h2>Exercícios de {exerciseGroup}</h2>
        <ul>
          {exercises.map((exercise, index) => (
            <li key={index}>
              {exercise}
              <button></button>
            </li>
          ))}
        </ul>
      </Container>
    );
}
