import { Container } from "./styles";
import { Link } from "react-router-dom";

export function Register() {
  return (
    <Container>
      <form action="">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Senha" />
        <Link to="/login" title="Registrar">
          <button type="submit">Registrar</button>
        </Link>
      </form>
      <Link to="/login" title="Entrar">
        <button>
          <span>Entrar</span>
        </button>
      </Link>
    </Container>
  );
}
