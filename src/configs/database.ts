import path from "path";
import * as fs from "fs";

const dataDir = path.join(__dirname, "../data/");
const taskFilePath = path.join(__dirname, "../data/task.json");

// if the file is delete or corrupted it create a new one and initialize
export default function initDataBase() {
  const defaultData = JSON.stringify({
    tasks: [],
  });

  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
  }

  if (!fs.existsSync(taskFilePath)) {
    fs.appendFileSync(taskFilePath, defaultData, "utf8");
  } else {
    let data = JSON.parse(fs.readFileSync(taskFilePath, "utf8"));
    if (!data.tasks) {
      fs.writeFileSync(taskFilePath, defaultData, "utf8");
    }
  }
}
