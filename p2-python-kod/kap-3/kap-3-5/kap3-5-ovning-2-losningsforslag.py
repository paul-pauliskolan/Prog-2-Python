# UML: Student | -name: string, -points: int | +addPoints(amount), +printInfo()
class Student:
    def __init__(self, name, points):
        self._name = name
        self._points = points

    def add_points(self, amount):
        self._points = self._points + amount

    def print_info(self):
        print(self._name, self._points)


student = Student("Anna", 10)
student.add_points(5)
student.print_info()
