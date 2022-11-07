import { info } from "console";

function sayHello(name) {
    debugger;
    return 'hello ${name}';
}

const firstName = "Ken";

info(sayHello(firstName));