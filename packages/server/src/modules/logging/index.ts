import { join } from "path";
import pino, { type Logger } from "pino";

const formatTime = (time: number): string => {
  return time.toString().padStart(2, "0");
};

const createLogger = (): Logger => {
  if (process.env.NODE_ENV! === "development") {
    return pino({
      level: process.env.LOG_LEVEL!,
      transport: {
        target: "pino-pretty",
        options: {
          colorize: true,
          translateTime: "SYS:standard",
        },
      },
    });
  }
  const now = new Date();
  const timestamp: string = [
    now.getFullYear(),
    formatTime(now.getMonth() + 1),
    formatTime(now.getDate()),
    formatTime(now.getHours()),
    formatTime(now.getMinutes()),
    formatTime(now.getSeconds()),
  ].join("_");
  return pino({
    level: process.env.LOG_LEVEL!,
    transport: {
      target: "pino/file",
      options: {
        destination: join(process.cwd(), "logs", `server_${timestamp}.log`),
        mkdir: true,
        translateTime: "SYS:standard",
      },
    },
  });
};

const logger: Logger = createLogger();

export default logger;
