import { log } from "../src/share";

(() => {
    log("this is info log");
    log.wait("this is wait log");
    log.warn("this is warn log");
    log.err("this is error log");
    log.ex("print error and exit");
})();
