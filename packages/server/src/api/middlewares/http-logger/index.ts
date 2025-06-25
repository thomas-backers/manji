import logger from "@/modules/logging";
import pinoHttp, { type HttpLogger } from "pino-http";

const httpLogger = (): HttpLogger => {
  return pinoHttp({ logger });
};

export default httpLogger;
