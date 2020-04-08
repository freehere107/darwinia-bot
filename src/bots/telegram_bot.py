"""
telegram bot implementation
"""
from time import sleep

import telegram
from telegram.error import NetworkError, Unauthorized

from bots import has_command

UPDATE_ID = None

def main():
    """Run the bot."""
    global UPDATE_ID

    # Telegram Bot Authorization Token
    bot = telegram.Bot('TOKEN')

    # get the first pending update_id, this is so we can skip over it in case
    # we get an "Unauthorized" exception.
    try:
        update_id = bot.get_updates()[0].update_id
    except IndexError:
        update_id = None
    except Unauthorized:
        UPDATE_ID += 1

    while True:
        try:
            echo(bot)
        except NetworkError:
            sleep(1)
        except Unauthorized:
            # The user has removed or blocked the bot.
            update_id += 1


def echo(bot):
    """Echo the message the user sent."""
    global UPDATE_ID

    # Request updates after the last update_id
    for update in bot.get_updates(offset=UPDATE_ID, timeout=10):
        UPDATE_ID = update.update_id + 1

        # Our bot can receive updates without messages
        if update.message:
            # Reply to the message
            text = update.message.text
            if has_command(text):
                update.message.reply_text(text)


if __name__ == '__main__':
    main()
