import express from "express";
import employedController from "../controllers/employeds.js";

const router = express.Router();

router.get("/", employedController.getItems);
router.get("/:id", employedController.getItem);
router.post("/", employedController.createItem);
router.patch("/:id", employedController.updateItem);
router.delete("/:id", employedController.deleteItem);

export default router;