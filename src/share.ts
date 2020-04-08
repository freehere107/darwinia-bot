/* this file is prepared to migrate to darwinia.js */

import chalk from "chalk";

export enum Logger {
    Error,
    Event,
    Info,
    Trace,
    Warn,
}

export enum LoggerEnv {
    All,
    Error,
    Info,
    None,
    Trace,
}

// Env condition
export function isBrowser(): boolean {
    return (window === undefined);
}

// Logs
export function loggerEnv(): LoggerEnv {
    const label: string = isBrowser() ?
        (window as any).LOGGER :
        process.env.LOGGER;

    switch (label.toLowerCase()) {
        case "error":
            return LoggerEnv.Error;
        case "info":
            return LoggerEnv.Info;
        case "trace":
            return LoggerEnv.Trace;
        default:
            return LoggerEnv.All;
    }
}

export function shouldOutputLog(label: Logger): boolean {
    const env: LoggerEnv = loggerEnv();

    if ((env === LoggerEnv.Info &&
        label !== Logger.Info &&
        label !== Logger.Error
    ) || (env === LoggerEnv.Error &&
        label !== Logger.Error
        ) || env === LoggerEnv.None) {
        return false;
    }

    return true;
}

export function log(s: any, logger?: Logger) {
    const l = chalk.dim("[ ");
    const r = chalk.dim(" ]:");

    switch (logger) {
        case Logger.Error:
            console.error(`${l + chalk.red("error") + r} ${s}`);
        case Logger.Event:
            break;
        case Logger.Warn:
            console.log(`${l + chalk.yellow("warn") + r} ${s}`);
            break;
        default:
            console.log(chalk.dim(`[ ${chalk.cyan.dim("info")} ]: ${s}`));
            break;
    }
}

log.prototype.wait = (): void => {
    console.log("wait");
}
