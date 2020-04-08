const IS_COMMAND: RegExp = /^\\\S+.*/;
const COMMAND_REGEX: RegExp = /^\\(\S+)(\s+)+/;

let help = "\\hello ";

// console.log(IS_COMMAND.test(help));
console.log(help.match(COMMAND_REGEX));
// function testMsg() {
// }

console.log(process.env.LOGGER);
// console.log(window);
