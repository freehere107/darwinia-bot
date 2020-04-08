import Command from "./cmds";

const IS_COMMAND: RegExp = /^\\\S+.*/;
const COMMAND_REGEX: RegExp = /^\\(\S+)(\s+)+/;

/**
 * Parse message into fixed format
 */
export class Message {
    public context: string;
    public command: Command;

    constructor(msg: string) {
        if (IS_COMMAND.test(msg) === null) {
            return null;
        }
        this.parse(msg);
    }

    /**
     * parse msg stream into command and contenxt
     * @param msg string
     */
    private parse(msg: string) {
        const res = msg.match(COMMAND_REGEX);
        this.command = new Command(res[1]);
        this.context = res[2];
    }
}
