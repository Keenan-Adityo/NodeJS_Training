import { info } from "console";
import { lookup } from "dns";

function callback(error, ip) {
    info(ip);
}

lookup("www.google.com", callback)
// hal 81