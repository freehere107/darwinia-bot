import config from "../config.json";
import { GrammerServer } from "../src";

(() => {
    let server = new GrammerServer(config);
    server.start();
})();
