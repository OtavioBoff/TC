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
              <input type="text" placeholder="Nome do exercíco" />
            </td>
            <td>
              <input type="text" placeholder="obs:" />
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
