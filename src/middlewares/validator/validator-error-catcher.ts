import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { UNPROCESSABLE_ENTITY } from "../../constants/response-status";
import CustomError from "../../util/custom-error";

export default function validatorErrorCatcher(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    next(
      new CustomError(UNPROCESSABLE_ENTITY, "validation failed", errors.array())
    );
  }
  next();
}
