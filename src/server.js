import app from "./app.js";
import config from "./config/config.js";
import { checkDatabaseConnection } from "./lib/db.js";

const PORT = config.port;

if (checkDatabaseConnection()) {
  app.listen(PORT, () => {
    console.log(`Server running on  http://localhost:${PORT}`);
  });
} else {
  console.error("Failed to connect to database:", error.message);
  process.exit(1);
}
