from typing import TypeVar

T = TypeVar("T")


def repeat(value: T, times: int) -> list[T]:
    return [value] * times


class Student:
    def __init__(self, name: str):
        self.name = name


temperatures = repeat(18.5, 3)
names = repeat("Anna", 2)
students = repeat(Student("Sara"), 2)

print(temperatures)
print(names)
for student in students:
    print(student.name)
