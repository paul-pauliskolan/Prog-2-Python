from typing import Generic, TypeVar

T = TypeVar("T")


class Register(Generic[T]):
    def __init__(self):
        self._items: list[T] = []

    def add(self, item: T) -> None:
        self._items.append(item)

    def all_items(self) -> list[T]:
        return self._items

    def first(self) -> T:
        return self._items[0]


class Student:
    def __init__(self, name: str):
        self.name = name


class Course:
    def __init__(self, title: str):
        self.title = title


student_register: Register[Student] = Register()
course_register: Register[Course] = Register()

student_register.add(Student("Anna"))
student_register.add(Student("Erik"))
course_register.add(Course("Programmering 2"))
course_register.add(Course("Webbutveckling"))

for student in student_register.all_items():
    print(student.name)

for course in course_register.all_items():
    print(course.title)

print("Första elev:", student_register.first().name)
print("Första kurs:", course_register.first().title)
