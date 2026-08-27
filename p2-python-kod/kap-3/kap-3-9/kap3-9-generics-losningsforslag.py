# Losningsforslag kap 3.8 - Generiska klasser och metoder

from typing import Generic, TypeVar


T = TypeVar("T")


def last(values: list[T]) -> T:
    return values[-1]


class Pair(Generic[T]):
    def __init__(self, first: T, second: T):
        self._first = first
        self._second = second

    def get_first(self) -> T:
        return self._first

    def get_second(self) -> T:
        return self._second


class Register(Generic[T]):
    def __init__(self):
        self._items: list[T] = []

    def add(self, item: T) -> None:
        self._items.append(item)

    def all_items(self) -> list[T]:
        return self._items


class Student:
    def __init__(self, name: str):
        self._name = name

    def get_name(self) -> str:
        return self._name

    def __str__(self) -> str:
        return self._name


names = ["Anna", "Erik", "Sara"]
scores = [10, 20, 30]

print(last(names))
print(last(scores))

name_pair = Pair("Anna", "Erik")
score_pair = Pair(10, 20)

print(name_pair.get_first(), name_pair.get_second())
print(score_pair.get_first(), score_pair.get_second())

student_register = Register[Student]()
student_register.add(Student("Anna"))
student_register.add(Student("Erik"))

for student in student_register.all_items():
    print(student)

# Generisk kod blir tydligare nar samma logik ska fungera
# for flera typer, till exempel listor, par eller register.
