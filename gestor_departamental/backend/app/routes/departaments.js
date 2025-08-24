import express from "express";
import controller from "../controllers/departaments.js";
import checkOrigin from "../middleware/origin.js";

const router = express.Router();

router.get("/", controller.getItems);
router.get("/:id", controller.getItem);
router.post("/", checkOrigin, controller.createItem);
router.patch("/:id", controller.updateItem);
router.delete("/:id", controller.deleteItem);

export default router;