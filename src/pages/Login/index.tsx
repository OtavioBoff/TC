import { Container } from "./styles";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <Container>
      <form action="">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <Link to="/login" title="Login">
          <button type="submit">Login</button>
        </Link>
      </form>
      <Link to="/register" title="Register">
        <button>
          <span>Register</span>
        </button>
      </Link>
      <Link to="/" title="home">
        <button>
          <span>Guess</span>
        </button>
      </Link>
    </Container>
  );
}
