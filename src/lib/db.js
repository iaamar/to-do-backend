import { PrismaClient } from "@prisma/client";
import config from "../config/config.js";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: config.databaseUrl,
    },
  },
});

export const checkDatabaseConnection = async () => {
  try {
    await prisma.$executeRaw`SELECT 1`;
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Failed to connect to database:", error.message);
    process.exit(1); // Exit process if database connection fails
  }
};

export default prisma;
