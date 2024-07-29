import { CaretLeft, CaretRight } from "phosphor-react";
import { Container, Middle } from "../Main/styles";
import { Tabel } from "../Table";

export function CreateTraining() {
  function handleAddTableRow() {}
  return (
    <Container>
      <button className="arrows">
        <CaretLeft size={32} />
      </button>
      <Middle>
        <Tabel />
        <footer>
          <button type="submit" id="add" onClick={handleAddTableRow}>
            Adicionar
          </button>
          <button type="submit" id="save">
            Salvar
          </button>
        </footer>
      </Middle>
      <button className="arrows">
        <CaretRight size={32} />
      </button>
    </Container>
  );
}
