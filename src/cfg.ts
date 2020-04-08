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
 * program config
 * @param port number - grammer server port
 * @param bots IBots - bot choices
 * @param faucetSeed string - the seed of faucet account
 */
export default interface IConfig {
    port: number;
    bots: IBots,
    faucetSeed: string;
}
