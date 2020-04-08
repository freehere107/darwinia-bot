"""
share methods for bots
"""
import re

def has_command(msg):
    """Check if message contains command"""
    return re.match(r"\\\d+\s+.+", msg) is None
