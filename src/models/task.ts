import { v4 as uuid } from "uuid";
import ITaskModel from "../types/task";
import CustomError from "../util/custom-error";
import { INTERNAL_SERVER_ERROR } from "../constants/response-status";

let dbTasks: ITaskModel[] = [
  {
    id: "1",
    title: "Learn React",
    description: "Learn how to use react in building web app",
  },
  {
    id: "2",
    title: "Learn Node",
    description: "Learn how to use node in building server",
  },
  {
    id: "3",
    title: "Learn Array Manipulation",
    description: "Learn how to manipulate arrays in javascript",
  },
];

function find(search: string | undefined): ITaskModel[] {
  try {
    // the returned tasks
    let tasks = dbTasks;

    // if there is a search string
    if (search) {
      // find all tasks that has title or description that match this search
      tasks =
        dbTasks.filter((t: ITaskModel) => {
          return t.title == search || t.description == search;
        }) || [];
    }

    // return all tasks
    return tasks;
  } catch (err) {
    throw new CustomError(INTERNAL_SERVER_ERROR, "model error", err);
  }
}

export function create(task: ITaskModel): ITaskModel {
  try {
    // create the new task
    const newTask = { id: uuid(), ...task };

    // add the new task to dbTasks
    dbTasks.push(newTask);

    // return the new task
    return newTask;
  } catch (err) {
    throw new CustomError(INTERNAL_SERVER_ERROR, "model error", err);
  }
}

export function update(id: string, task: ITaskModel): ITaskModel {
  try {
    // find the index of the task we want to update
    const index = dbTasks.findIndex((t: ITaskModel) => t.id === id);

    // update the task with the new data
    if (task.title) dbTasks[index].title = task.title;
    if (task.description) dbTasks[index].description = task.description;

    // return the updated task
    return dbTasks[index];
  } catch (err) {
    throw new CustomError(INTERNAL_SERVER_ERROR, "model error", err);
  }
}

export function remove(id: String): ITaskModel | null {
  try {
    // get the task we want to delete
    const deletedTask = dbTasks.find((t: ITaskModel) => t.id === id);

    // remove the task from the data
    dbTasks = dbTasks.filter((t: ITaskModel) => t.id !== id);

    // return the deleted task
    return deletedTask || null;
  } catch (err) {
    throw new CustomError(INTERNAL_SERVER_ERROR, "model error", err);
  }
}

export default {
  find,
  create,
  update,
  remove,
};
