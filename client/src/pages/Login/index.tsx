import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RegisterUserContext } from "../../contexts/userContext";

export function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(RegisterUserContext);
  setUser(null);
  const handleLoginSuccess = (response: CredentialResponse) => {
    fetch("http://localhost:4000/auth/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: response.credential }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Login bem-sucedido:", data);
        navigate("/");
        setUser(data.user);
      })
      .catch((err) => console.error("Erro no login:", err));
  };

  return (
    <Container>
      <h1>Bem vindo!</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={() => console.error("Erro no login")}
        />
        <span>Atualmente o unico meio de login é pelo Google.</span>
      </div>
    </Container>
  );
}
