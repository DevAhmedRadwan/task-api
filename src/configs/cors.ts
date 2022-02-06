import { CorsOptions } from "cors";
import { ORIGINS_WHITELIST } from "./env";

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || ORIGINS_WHITELIST.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("cors error: " + origin + " not allowed"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Origin", "Content-Type", "Accept"],
};

export default corsOptions;
