import { body, param, query } from "express-validator";

/************************************ Get **********************************/
const getTasks = () => {
  return [search()];
};

function search() {
  return query("search").if(query("search").exists()).isString();
}

/************************************ Create **********************************/
const createTask = () => {
  return [cTaskTitle(), cTaskDescription()];
};

function cTaskTitle() {
  return body("title").exists({ checkNull: true, checkFalsy: true }).isString();
}

function cTaskDescription() {
  return body("description")
    .exists({ checkNull: true, checkFalsy: true })
    .isString();
}

/************************************ Update **********************************/
const updateTask = () => {
  return [uTaskid(), uTaskTitle(), uTaskDescription()];
};

function uTaskid() {
  return param("id").exists().isString();
}

function uTaskTitle() {
  return body("title").if(query("title").exists()).isString();
}

function uTaskDescription() {
  return body("description").if(query("description").exists()).isString();
}

/************************************ Delete **********************************/
const deleteTask = () => {
  return [dTaskid()];
};

function dTaskid() {
  return param("id").exists().isString();
}

export default {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
