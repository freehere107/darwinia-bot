import fs from "fs";
import config from "../../config.json";
import * as yml from "js-yaml";
import { GrammerServer } from "../../src";

(async () => {
    const grammer = yml.safeLoad(fs.readFileSync("./grammer.yml", "utf8"));
    const server = new GrammerServer(config, grammer);
    server.start();
})();
