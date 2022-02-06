import { Router } from "express";
/****************************** Import Routes  ******************************/
import user from "./task";
/******************************* Initializing *********************************/
const router = Router();
/************************************ Routes **********************************/
router.use("/tasks", user);
/************************************ Exports **********************************/
export default router;
