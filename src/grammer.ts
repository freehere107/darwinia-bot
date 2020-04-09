/**
 * fault grammers
 * @param succeed string - the succeed grammer, contains ${hash} to replace
 * @param interval string - response when req account has requested fault in current interval
 * @param supply string - the current supply of today has run out, wait for next day
 * @param address string - wrong address alert
 */
export interface IFaucetGrammers {
    succeed: string;
    interval: string;
    supply: string;
    address: string;
}

export interface IGrammer {
    help: string;
    docs: string;
    book: string;
    more: string;
    faucet: IFaucetGrammers;
}
