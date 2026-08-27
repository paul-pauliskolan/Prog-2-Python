class Person:
    def __init__(self, name):
        self.name = name

    def introduce(self):
        print(f"Jag heter {self.name}.")

class Student(Person):
    def __init__(self, name, school):
        super().__init__(name)
        self.school = school

    def introduce(self):
        super().introduce()
        print(f"Jag går på {self.school}.")