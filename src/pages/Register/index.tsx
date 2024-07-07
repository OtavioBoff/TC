import { Container } from "./styles";
import { Link } from "react-router-dom";

export function Register() {
  return (
    <Container>
      <form action="">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Senha" />
        <Link to="/login" title="Login">
          <button type="submit">Register</button>
        </Link>
      </form>
      <Link to="/login" title="Login">
        <button>
          <span>Login</span>
        </button>
      </Link>
    </Container>
  );
}
