import { Plus, Printer } from "phosphor-react";
import { Container } from "././styles";
import { Training } from "../Training";

export function CreateTraining() {
  return (
    <Container>
      <Training />
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
