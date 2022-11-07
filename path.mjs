import { info } from "console";
import path from "path";

const file = "/test.html";

info(path.sep);
info(path.dirname(file));
info(path.basename(file));
info(path.extname(file));
info(path.parse(file));