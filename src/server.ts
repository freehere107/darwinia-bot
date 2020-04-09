import "graphql-import-node";
import { ApolloServer } from 'apollo-server';
import { IGrammer } from "./grammer";
import * as GrammerSchema from "./graphql/schema.gql";
import { Command, ParentQuery, ICommandArgs } from "./cmd";
import IConfig from "./cfg";

/**
 * @class GrammerServer - Port bot commands to granphql
 */
export default class GrammerServer {
    private port: number;
    private grammer: IGrammer;

    constructor(config: IConfig, grammer: IGrammer) {
        this.port = config.port;
        this.grammer = grammer;
    }

    /**
     * @event - start grammer server
     */
    public start(): void {
        const server = new ApolloServer({
            typeDefs: GrammerSchema,
            resolvers: {
                Query: {
                    answer: (
                        parent: ParentQuery,
                        args: ICommandArgs
                    ) => new Command(
                        parent, args
                    ).parse(this.grammer)
                }
            }
        });

        server.listen(this.port).then(() => {
            console.log(`🚀 Server ready at ${this.port}`);
        });
    }
}
