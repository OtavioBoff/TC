// import { Container } from "./styles";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { Container } from "./styles";
// import { useGoogleLogin } from "@react-oauth/google";
// import { FcGoogle } from "react-icons/fc";

export function Login() {
  // const login = useGoogleLogin({
  //   onSuccess: (tokenResponse) => console.log(tokenResponse),
  //   onError: () => console.error("Login falhou"),
  // });

  const handleLoginSuccess = (response: CredentialResponse) => {
    // Envie o token para o back-end
    fetch("http://localhost:4000/auth/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: response.credential }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Login bem-sucedido:", data);
      })
      .catch((err) => console.error("Erro no login:", err));
  };

  return (
    <Container>
      <h1>Entrar</h1>
      {/* <GoogleButton onClick={() => login()}>
        <FcGoogle size={24} />
        Fazer login com o Google
      </GoogleButton> */}
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={() => console.error("Erro no login")}
      />
    </Container>
  );
}
// export function Login() {

//   return (
//     <Container>
//       <h1>Entrar</h1>
//     </Container>
//   );
// }
