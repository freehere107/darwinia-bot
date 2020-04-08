export type ParentQuery = any;

export interface ICommandArgs {
    ident: string;
    message: string;
}

/**
 * Basic command class
 */
export class Command {
    // Identity of a command
    public ident: string;
    public message: string;
    public parent: ParentQuery;

    constructor(parent: ParentQuery, args: ICommandArgs) {
        this.parent = parent;
        this.ident = args.ident;
        this.message = args.message;
    }

    /**
     * @param msg string
     */
    public parse(): string {
        return this.message;
    }
}
