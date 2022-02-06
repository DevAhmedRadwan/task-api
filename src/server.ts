import { PORT } from "./configs/env";

// init DataBase. aka files
import initDataBase from "./configs/database";
initDataBase();

// import express app
import app from "./app";

// start server
app.listen(PORT, function () {
  console.log(`App listening on http://[::]:${PORT}`);
});
