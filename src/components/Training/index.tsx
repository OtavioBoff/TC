import { MuscleList } from "../MuscleList";
import { Container } from "././styles";

interface TrainingProps {
  groupWord?: string;
  muscleWord?: string;
  exerciseWord?: string;
  observationWord?: string;
  seriesWord?: string;
  repsWord?: string;
  weightWord?: string;
}

export function Training({
  groupWord = "Grupo A",
  muscleWord = "Músculo",
  exerciseWord = "Exercícios",
  observationWord = "Observações",
  seriesWord = "Séries",
  repsWord = "Repetições",
  weightWord = "Kg",
}: TrainingProps) {
  return (
    <Container>
      <table>
        <caption>{groupWord}</caption>
        <thead>
          <tr>
            <th>{muscleWord}</th>
            <th>{exerciseWord}</th>
            <th>{observationWord}</th>
            <th>{seriesWord}</th>
            <th>{repsWord}</th>
            <th>{weightWord}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input list="muscle" id="muscle" name="muscle" />
            </td>
            <td>
              <input list="exercises" id="exercicies" name="exercicies" />
            </td>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
