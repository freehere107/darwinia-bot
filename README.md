# Darwinia Bot

## Arch

Darwinia Bot service contains one server and several bot clients, for example, the current design is:

+ Grammer Server
  + Telegram Bot Client
  + WeChat Bot Client
  
Both Telegram Bot and Wechat bot share one Darwinia grammer!

## Commands

Usage: Input `/KEY \<arguments\>` into dialogue box.

| Key      | Description                           | Usage                             |
|----------|---------------------------------------|-----------------------------------|
| `help`   | Show Bot helps                        | `/help`                           |
| `docs`   | Print the link of `darwinia-docs`     | `/docs`                           |
| `book`   | Print the link of `the-darwinia-book` | `/book`                           |
| `more`   | Show the experiment features          | `/more`                           |
| `faucet` | Request Darwinia for some Rings       | `/faucet <your-darwinia-address>` |

Note: Don't be overhead to darwinia bots, they're real lives, there must be more to life than this.


## Grammer

All bot interacting based on the chat stream, Grammer Server will listen to the context of every messages,
Once they start with `/` or any other prefix specfied in bot clients, the bot clients will send the context
to Grammer Server, then the server will parse the context bot clients sent to it and do stuffs whatevery we
require!

The Grammer system should keep updating, we are expected to all of your contributes!
