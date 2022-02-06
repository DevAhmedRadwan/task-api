import ITaskModel from "../types/task";
import taskModel from "../models/task";

function get(search: string | undefined): ITaskModel[] {
  if (search) {
    return taskModel.find(search);
  }
  return taskModel.find(undefined);
}

function create(task: ITaskModel): ITaskModel {
  return taskModel.create(task);
}

function update(id: string, task: ITaskModel): ITaskModel {
  return taskModel.update(id, task);
}

function remove(id: string): ITaskModel {
  return taskModel.remove(id);
}

export default {
  get,
  create,
  update,
  remove,
};
