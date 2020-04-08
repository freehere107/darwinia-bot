import "graphql-import-node";
import { ApolloServer } from 'apollo-server';
import * as GrammerSchema from "./graphql/schema.gql";
import { Command, ParentQuery, ICommandArgs } from "./cmd";
import IConfig from "./cfg";

/**
 * @class GrammerServer - Port bot commands to granphql
 */
export default class GrammerServer {
    private port: number;

    constructor(config: IConfig) {
        this.port = config.port;
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
                    ) => new Command(parent, args).parse()
                }
            }
        });

        server.listen(this.port).then(() => {
            console.log(`🚀 Server ready at ${this.port}`);
        });
    }
}
