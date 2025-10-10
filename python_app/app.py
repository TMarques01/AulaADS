"""Small application module with a function to reverse strings and a CLI."""
from typing import List


def reverse_text(s: str) -> str:
    """Return the reversed string of s. Handles None by raising TypeError."""
    if s is None:
        raise TypeError("s must be a string")
    return s[::-1]


def main(argv: List[str] | None = None) -> int:
    """Simple CLI entrypoint. Takes the first arg and prints reversed text.

    Returns 0 on success, 2 on usage error.
    """
    import sys

    if argv is None:
        argv = sys.argv[1:]

    if not argv:
        print("Usage: app.py <text>")
        return 2

    text = argv[0]
    print(reverse_text(text))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
