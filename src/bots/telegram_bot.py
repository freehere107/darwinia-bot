#!/usr/bin/env python
# -*- coding: utf-8 -*-
# This program is dedicated to the public domain under the CC0 license.

"""
Darwinia telegram bot
"""
import json
import importlib

from telegram.ext import Updater, CommandHandler

bots = importlib.import_module("lib")


# Define a few command handlers. These usually take the two arguments update
# and context. Error handlers also receive the raised TelegramError
# object in error.
def help_cmd(update, context):
    """show help"""
    update.message.reply_text(bots.answer("help", update.message.text))


def book(update, context):
    """resp the link of darwinia book"""
    update.message.reply_text(bots.answer("book", update.message.text))


def docs(update, context):
    """resp the link of darwinia book"""
    update.message.reply_text(bots.answer("docs", update.message.text))


def more(update, context):
    """resp the link of darwinia book"""
    update.message.reply_text(bots.answer("more", update.message.text))


def faucet(update, context):
    """resp the link of darwinia book"""
    update.message.reply_text(bots.answer("faucet", update.message.text))


def main():
    """Run bot."""
    # Loads json config
    with open("config.json", "r") as configFile:
        config = json.loads(configFile.read())

    if config is None:
        print("can not find config file")
        return

    # Create the Updater and pass it your bot's token.
    # Make sure to set use_context=True to use the new context based callbacks
    # Post version 12 this will no longer be necessary
    updater = Updater(
        config["plugins"]["telegram_bot_token"],
        use_context=True
    )

    # Get the dispatcher to register handlers
    dp = updater.dispatcher

    # on different commands - answer in Telegram
    dp.add_handler(CommandHandler("help", help_cmd))
    dp.add_handler(CommandHandler("book", book))
    dp.add_handler(CommandHandler("docs", docs))
    dp.add_handler(CommandHandler("more", more))
    dp.add_handler(CommandHandler("faucet", more))

    # Start the Bot
    updater.start_polling()
    print("telegram-bot is online now")

    # Block until you press Ctrl-C or the process receives SIGINT, SIGTERM or
    # SIGABRT. This should be used most of the time, since start_polling() is
    # non-blocking and will stop the bot gracefully.
    updater.idle()


if __name__ == '__main__':
    main()
