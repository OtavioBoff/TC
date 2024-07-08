import { Plus, Printer } from "phosphor-react";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <table>
        <caption>Treino</caption>
        <thead>
          <tr>
            <th>Exercícios</th>
            <th>Observações</th>
            <th>Séries</th>
            <th>Repetições</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input list="exercises" id="exercicies" name="exercicies" />
              <datalist id="exercises">
                <option value="Chocolate"></option>
                <option value="Coco"></option>
                <option value="Menta"></option>
                <option value="Morango"></option>
                <option value="Baunilha"></option>
              </datalist>
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
          </tr>
        </tbody>
      </table>
      <footer>
        <button type="submit" id="add">
          <Plus size={32} />
          Add
          <div></div>
        </button>
        <button type="submit" id="save">
          <Printer size={32} />
          Save
          <div></div>
        </button>
      </footer>
    </Container>
  );
}
