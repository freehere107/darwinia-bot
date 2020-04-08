/**
 * Bot choices
 * @param telegram boolean - if run telegram bot
 * @param wechat boolean - if run wechat bot
 */
interface IBots {
    wechat: boolean;
    telegram: boolean;
}

/**
 * Faucet
 * @param amount number - amount faucet sent every request
 */
interface IFaucet {
    amount: number;
    interval: number;
}

/**
 * Command config sets
 * @param faucet IFaucet - faucet configs
 */
interface ICommands {
    faucet: IFaucet;
}

/**
 * program config
 * @param bots IBots - bot choices
 * @param port number - grammer server port
 * @param node string - darwinia node address
 * @param commands ICommands - command configs
 * @param faucetSeed string - the seed of faucet account
 */
export default interface IConfig {
    bots: IBots;
    port: number;
    node: string;
    commands: ICommands;
    faucetSeed: string;
}
