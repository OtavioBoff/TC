// import Test from "../../test";
import { Container } from "./styles";
// import { Link } from "react-router-dom";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

export function Login() {
  const handleLoginSuccess = (response: CredentialResponse) => {
    console.log(response);
    // Acesse response.credential para obter o token
  };

  const handleLoginFailure = () => {
    console.error("Login falhou");
  };
  return (
    <Container>
      <h1>Entrar</h1>
      {/* <form action="">
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
      </Link> */}
      {/* <Test /> */}
      {/* <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginFailure}
      /> */}
    </Container>
  );
}
