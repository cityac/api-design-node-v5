import { Router } from "express";

const router = Router();

router.post("/register", (req, res) => {
	res.status(201).json({ message: "user signed in" });
});

router.post("/login", (req, res) => {
	res.status(201).json({ message: "user loggged in" });
});

export default router;
