import { Container } from "./styles";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <Container>
      <form action="">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <Link to="/login" title="Entrar">
          <button type="submit">Entrar</button>
        </Link>
      </form>
      <Link to="/register" title="Registrar">
        <button>
          <span>Registrar</span>
        </button>
      </Link>
      <Link to="/" title="home">
        <button>
          <span>Convidado</span>
        </button>
      </Link>
    </Container>
  );
}
