// api/habits
import { Router } from "express";

import { z } from "zod";
import { validateBody, validateParams } from "../middleware/validation.ts";

const createHabbitSchema = z.object({
	name: z.string(),
});

const router = Router();

router.get("/", (req, res) => {
	res.json({ message: "habits" });
});

router.get("/:id", (req, res) => {
	res.json({ message: "got one habbit" });
});

router.post(
	"/",
	validateBody(createHabbitSchema),

	(req, res) => {
		res.json({ message: "created  habbit" }).status(201);
	},
);

router.delete("/:id", (req, res) => {
	res.json({ message: "deleted habbit" });
});

const completeParamsSchema = z.object({
	id: z.string().max(3),
});
router.post(
	"/:id/complete",
	validateParams(completeParamsSchema),
	(req, res) => {
		res.json({ message: "complete habit" });
	},
);

export default router;
