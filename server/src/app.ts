import express from "express";
import cors from "cors";
import workoutRoutes from "./routes/workoutRoutes";
import notificationRoutes from "./routes/notificationRoutes";
import userRoutes from "./routes/userRoutes";

const app = express();

app.use(cors());
app.use(express.json());

// app.use("/", (_, res) => {
//   res.send("è os guri do grêmio ⚗️");
// });

app.use(workoutRoutes);
app.use(notificationRoutes);
app.use(userRoutes);

export default app;
