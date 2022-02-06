import { Request, Response, NextFunction } from "express";
import { OK, CREATED } from "../constants/response-status";
import taskService from "../services/task";

async function get(req: Request, res: Response, next: NextFunction) {
  type ReqQuery = { id?: string; search?: string };
  try {
    let { id, search }: ReqQuery = req.query;
    let tasks = taskService.get(id, search);
    res.status(OK).send({ message: "tasks retrieved", data: tasks });
  } catch (error: any) {
    next(error);
  }
}

async function create(req: Request, res: Response, next: NextFunction) {
  type ReqBody = { title: string; description: string };
  try {
    let { title, description }: ReqBody = req.body;
    let task = taskService.create({ title, description });
    res.status(CREATED).send({ message: "task created", data: task });
  } catch (error: any) {
    next(error);
  }
}

async function update(req: Request, res: Response, next: NextFunction) {
  type ReqBody = { title: string; description: string };
  try {
    let { id } = req.params;
    let { title, description }: ReqBody = req.body;
    let task = taskService.update(id, { title, description });
    res.status(OK).send({ message: "task updated", data: task });
  } catch (error: any) {
    next(error);
  }
}

async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    let { id } = req.params;
    let task = taskService.remove(id);
    res.status(OK).send({ message: "task deleted", data: task });
  } catch (error: any) {
    next(error);
  }
}

export default {
  get,
  create,
  update,
  remove,
};
