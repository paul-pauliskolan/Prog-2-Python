# Lösningsförslag kap 3.8, övning 1
from typing import TypeVar

T = TypeVar("T")


def last(values: list[T]) -> T:
    return values[-1]


print(last(["Anna", "Bo", "Cia"]))
print(last([10, 20, 30]))
