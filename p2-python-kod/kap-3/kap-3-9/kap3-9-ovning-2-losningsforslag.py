from typing import TypeVar

T = TypeVar("T")


def find_index(value: T, values: list[T]) -> int:
    for index in range(len(values)):
        if values[index] == value:
            return index
    return -1


print(find_index("Bo", ["Anna", "Bo", "Cia"]))
print(find_index(30, [10, 20, 30]))
print(find_index(8, [1, 2, 3]))
