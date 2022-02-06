export default class CustomError implements Error {
  statusCode: number;
  message: string;
  name: string;
  data: any;
  stack?: string | undefined;

  constructor(statusCode: number, message: string, data: any) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.name = "Custom Error";
  }
}
