import { Request, Response } from "express";
import { OAuth2Client } from "google-auth-library";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// export const createUser = async (req: Request, res: Response) => {
//   const { name, email } = req.body;
//   try {
//     const newUser = await prisma.user.create({ data: { name, email } });
//     res.status(201).json(newUser);
//   } catch (error) {
//     console.error("Error:", error); // Adicione este log
//     res.status(400).json({ error: "Error creating user" });
//   }
// };

const client = new OAuth2Client(
  "973083932552-tvpp83h5vcjo30ursb8m1so2q9ct6eel.apps.googleusercontent.com"
);

export const authGoogle = async (req: Request, res: Response) => {
  const { token } = req.body;

  try {
    // Verificação do token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience:
        "973083932552-tvpp83h5vcjo30ursb8m1so2q9ct6eel.apps.googleusercontent.com",
    });

    const payload = ticket.getPayload();

    if (!payload) {
      res.status(400).json({ error: "Token inválido ou expirado" });
      return;
    }

    // Verifique se o usuário já existe no banco
    let user = await prisma.user.findUnique({
      where: { email: payload.email },
    });

    // Crie o usuário se não existir
    if (!user) {
      user = await prisma.user.create({
        data: {
          name: payload.name || "Usuário Sem Nome",
          email: payload.email || "email@desconhecido.com",
          picture: payload.picture || "",
        },
      });
    }

    res.status(200).json({ message: "Login bem-sucedido", user });
  } catch (error) {
    console.error("Erro na autenticação:", error);
    res.status(401).json({ error: "Erro ao autenticar com o Google" });
  }
};
