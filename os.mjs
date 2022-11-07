import { info, table } from "console";
import os from "os";

console.info(os.platform());
info(os.arch());
info(os.cpus());
info(os.uptime());
info(os.totalmem());
info(os.freemem());
table(os.networkInterfaces());