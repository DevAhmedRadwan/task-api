import path from "path";
import * as fs from "fs";
import { v4 as uuid } from "uuid";
import ITaskModel from "../types/task";
import CustomError from "../util/custom-error";
import { INTERNAL_SERVER_ERROR } from "../constants/response-status";

const taskFilePath = path.join(__dirname, "../data/task.json");

function find(search: string | undefined): ITaskModel[] {
  try {
    // load task data
    let data = JSON.parse(fs.readFileSync(taskFilePath, "utf8"));

    // the returned tasks
    let tasks = data.tasks;

    // if there is a search string
    if (search) {
      // find all tasks that has title or description that match this search
      tasks =
        data.tasks.filter((t: ITaskModel) => {
          return t.title == search || t.description == search;
        }) || [];
    }

    // return all tasks
    return tasks;
  } catch (err) {
    throw new CustomError(INTERNAL_SERVER_ERROR, "model error", err);
  }
}

function findById(id: string | undefined): ITaskModel[] {
  try {
    // the returned tasks
    let tasks = dbTasks;

    // if there is a search string
    if (id) {
      // find all tasks that has title or description that match this search
      tasks = dbTasks.filter((t: ITaskModel) => t.id == id) || [];
    }

    // return all tasks
    return tasks;
  } catch (err) {
    throw new CustomError(INTERNAL_SERVER_ERROR, "model error", err);
  }
}

export function create(task: ITaskModel): ITaskModel {
  try {
    // load task data
    let data = JSON.parse(fs.readFileSync(taskFilePath, "utf8"));

    // create the new task
    const newTask = { id: uuid(), ...task };

    // add the new task to data
    data.tasks.push(newTask);

    // rewrite the data
    fs.writeFileSync(taskFilePath, JSON.stringify(data), "utf8");

    // return the new task
    return newTask;
  } catch (err) {
    throw new CustomError(INTERNAL_SERVER_ERROR, "model error", err);
  }
}

export function update(id: string, task: ITaskModel): ITaskModel {
  try {
    // load task data
    let data = JSON.parse(fs.readFileSync(taskFilePath, "utf8"));

    // find the index of the task we want to update
    const index = data.tasks.findIndex((t: ITaskModel) => t.id === id);

    // update the task with the new data
    if (task.title) data.tasks[index].title = task.title;
    if (task.description) data.tasks[index].description = task.description;

    // rewrite the data
    fs.writeFileSync(taskFilePath, JSON.stringify(data), "utf8");

    // return the updated task
    return data.tasks[index];
  } catch (err) {
    throw new CustomError(INTERNAL_SERVER_ERROR, "model error", err);
  }
}

export function remove(id: String) {
  try {
    // load task data
    let data = JSON.parse(fs.readFileSync(taskFilePath, "utf8"));

    // get the task we want to delete
    const deletedTask = data.tasks.find((t: ITaskModel) => t.id === id);

    // remove the task from the data
    data.tasks = data.tasks.filter((t: ITaskModel) => t.id !== id);

    // rewrite the data
    fs.writeFileSync(taskFilePath, JSON.stringify(data), "utf8");

    // return the deleted task
    return deletedTask;
  } catch (err) {
    throw new CustomError(INTERNAL_SERVER_ERROR, "model error", err);
  }
}

export default {
  find,
  findById,
  create,
  update,
  remove,
};
