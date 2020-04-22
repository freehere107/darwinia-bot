<h1 align="center">
𝒹𝒶𝓇𝓌𝒾𝓃𝒾𝒶-𝒷ℴ𝓉
</h1>

[![Node.js CI][workflow-badge]][github]

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

All bot-interacting are based on the chat stream, `Grammer Server` will listen to the context which have 
specfied prefix like `/`, once the matched messages received by the bot clients, they will be sent to the
`Grammer Server`, and the server will parse them and do stuffs whatevery we required!

The Grammer system should keep updating, we are expected to all of your contributes!

## bot

### Install

    virtualenv -p python3.6 env
    . env/bin/activate
    pip install -r requirements.txt

### run
    python src/bots/telegram_bot.py


[github]: https://github.com/darwinia-network/darwinia-bot.js
[workflow-badge]: https://github.com/darwinia-network/darwinia-bot/workflows/Node.js%20CI/badge.svg
