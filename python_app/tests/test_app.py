import pytest

from app import reverse_text


def test_reverse_text_basic():
    assert reverse_text("abc") == "cba"


def test_reverse_text_empty():
    assert reverse_text("") == ""


def test_reverse_text_none_raises():
    with pytest.raises(TypeError):
        reverse_text(None)
