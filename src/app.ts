import express from "express";
import cors from "cors";

import errorHandler from "./middlewares/error-handler";
import corsOptions from "./configs/cors";
import routes from "./routes/routes";

// init express
const app = express();

// disabling express default headers
app.disable("x-powered-by");

// init middleware
app.use(cors(corsOptions));

// init body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// adding routes and injecting dependency
app.use("/api/", routes);

// init error handling middlewares
app.use(errorHandler);

// export app
export default app;
