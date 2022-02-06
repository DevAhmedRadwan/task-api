import { Router } from "express";
import taskController from "../controllers/task";
import taskValidator from "../middlewares/validator/task";
import validatorErrorCatcher from "../middlewares/validator/validator-error-catcher";

/******************************* Initializing *********************************/
const router = Router();

/************************************ Routes **********************************/
// GET => fetch the tasks, search if search key is provided
router.get(
  "",
  taskValidator.getTasks(),
  validatorErrorCatcher,
  taskController.get
);

// POST => create a new task
router.post(
  "",
  taskValidator.createTask(),
  validatorErrorCatcher,
  taskController.create
);

// PUT => edit task title, description
router.put(
  "/:id",
  taskValidator.updateTask(),
  validatorErrorCatcher,
  taskController.update
);

// DELETE => delete task by id
router.delete(
  "/:id",
  taskValidator.deleteTask(),
  validatorErrorCatcher,
  taskController.remove
);

/************************************ Export **********************************/
export default router;
