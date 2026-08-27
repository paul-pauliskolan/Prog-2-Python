# UML-relation: Teacher --> Employee : inherits
class Employee:
    def __init__(self, name):
        self._name = name

    def print_info(self):
        print("Anställd:", self._name)


class Teacher(Employee):
    def __init__(self, name, subject):
        super().__init__(name)
        self._subject = subject

    def print_info(self):
        print("Lärare:", self._name, "Ämne:", self._subject)


teacher = Teacher("Erik", "Programmering")
teacher.print_info()
