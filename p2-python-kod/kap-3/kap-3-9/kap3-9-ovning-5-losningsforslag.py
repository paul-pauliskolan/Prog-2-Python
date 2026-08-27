from typing import Generic, TypeVar

T = TypeVar("T")


class Pair(Generic[T]):
    def __init__(self, first: T, second: T):
        self._first = first
        self._second = second

    def get_first(self) -> T:
        return self._first

    def get_second(self) -> T:
        return self._second

    def contains(self, value: T) -> bool:
        return value == self._first or value == self._second


def print_pair(pair: Pair[T]) -> None:
    print(pair.get_first(), pair.get_second())


name_pair: Pair[str] = Pair("Anna", "Erik")
score_pair: Pair[int] = Pair(10, 20)

print_pair(name_pair)
print_pair(score_pair)
print(name_pair.contains("Anna"))
print(score_pair.contains(30))
