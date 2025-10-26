import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
	res.json({ message: "users" });
});

router.get("/:id", (req, res) => {
	res.json({ message: "got user" });
});

router.put("/", (req, res) => {
	res.json({ message: "updated  habbit" }).status(201);
});

router.delete("/:id", (req, res) => {
	res.json({ message: "deleted habbit" });
});

export default router;
