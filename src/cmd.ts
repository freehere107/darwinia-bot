import { IGrammer } from "./grammer";

export type ParentQuery = any;

/**
 * command arguments
 */
export interface ICommandArgs {
    ident: string;
    message: string;
}

/**
 * Basic command class
 */
export class Command {
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
    public parse(g: IGrammer): string {
        switch (this.ident) {
            case "docs":
                return g.docs;
            case "book":
                return g.book;
            case "more":
                return g.more;
            case "faucet":
                return g.faucet.supply;
            default:
                return g.help;
        }
    }
}
