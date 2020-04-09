import customizeType from "./json/types.json";
import IConfig from "./cfg";
import Keyring from "@polkadot/keyring";
import { log } from "./share";
import { ApiPromise, WsProvider } from "@polkadot/api";


type PoladotAPI = any;
type KeyRingPair = any;

export default class API {
    private api: PoladotAPI;
    private config: IConfig;
    private account: KeyRingPair;

    constructor(config: IConfig) {
        this.config = config;
    }

    /**
     * @async init - init polkadot api
     */
    public async init(): Promise<void> {
        this.api = await ApiPromise.create({
            types: customizeType,
            provider: new WsProvider(this.config.node),
        });

        this.account = new Keyring({
            type: "sr25519"
        }).addFromUri(this.config.faucetSeed);
    }

    /**
     * send some ring to the given account
     * @param addr string
     * @param amount number
     */
    public async transfer(addr: string, amount: number): Promise<boolean> {
        const ex = await this.api.tx.balances.transfer(addr, amount);
        ex.signAndSend(this.account, {}, async (r: any) => {
            const status = r.status;
            if (status.isInBlock) {
                log(`Included at block hash: ${status.asInBlock.toHex()}`);
                r.events && r.events.forEach(async (r: any) => {
                    log(
                        "\t" +
                            r.phase.toString() +
                            `: ${r.event.section}.${r.event.method}` +
                            r.event.data.toString(),
                    );

                    if (r.event.data[0].isModule) {
                        const doc = await this.api.registry.findMetaError(r.event.data[0].asModule);
                        const err = `${doc.name}.${doc.section} - ${doc.documentation.join(" ")}`;
                        log(err);
                    }
                });
            } else if (status.isFinalized) {
                log("tx end");
            }
        });

        return true;
    }
}
