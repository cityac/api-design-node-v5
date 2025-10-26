import express from "express";
import authRoutes from "./routes/authRoutes.ts";
import habitRoutes from "./routes/habitRoutes.ts";
import userRoutes from "./routes/userRoutes.ts";

const app = express();

app.use("/api/auth", authRoutes);
app.use("/api/habbits", habitRoutes);
app.use("/api/user", userRoutes);

app.get("/health", (req, res) => {
	res.json({ message: "hello" }).status(200);
});

app.post("/cake", (req, res) => {
	res.send("ok").status(200);
});

app.get("/cake/:name/:id", (req, res) => {
	res.json({ id: req.params.id }).status(200);
});

export { app };
export default app;
