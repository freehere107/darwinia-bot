/**
 * Basic command class
 */
export default class Command {
    // Identity of a command
    public ident: string;

    constructor(ident: string) {
        this.ident = ident;
    }

    /**
     * @param msg string
     */
    public parse(msg: string): string {
        return msg;
    }
}
