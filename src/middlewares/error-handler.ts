import { Request, Response, NextFunction } from "express";
import { INTERNAL_SERVER_ERROR } from "../constants/response-status";
import CustomError from "../util/custom-error";
import { NODE_ENV } from "../configs/env";

export default (
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = error.statusCode || INTERNAL_SERVER_ERROR;
  let message = error.message;
  let data = error.data;

  // log 500 errors
  if (statusCode >= INTERNAL_SERVER_ERROR) {
    console.log(error);
  }

  // in testing and production only chnage the message and date of 500 state errors
  if (
    statusCode >= INTERNAL_SERVER_ERROR &&
    (NODE_ENV == "production" || NODE_ENV == "test")
  ) {
    message = "Internal server error!";
    data = "No data available";
  }

  res.status(statusCode).json({ message: message, data: data });
};
