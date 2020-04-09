"""
share methods for bots
"""
import re
import requests as r


def answer(ident, message):
    """fetch answer from grammer server"""

    query = '{answer(ident: "%s", message: "%s")}' % (ident, message)
    res = r.post(
        url='http://localhost:1439/graphql',
        json={'query': query}
    )

    return res.json()['data']['answer']


def has_command(msg):
    """Check if message contains command"""
    return re.match(r"\\\d+\s+.+", msg) is None
