import api from "@/api";
import { useIo } from "@/io";
import "dotenv/config";
import { createServer, type Server as HttpServer } from "http";

const PORT: number = parseInt(process.env.PORT!);
const httpServer: HttpServer = createServer(api);
useIo(httpServer, api);
httpServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
