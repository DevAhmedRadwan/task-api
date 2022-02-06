import { PORT } from "./configs/env";

// import express app
import app from "./app";

// start server
app.listen(PORT, function () {
  console.log(`App listening on http://[::]:${PORT}`);
});
