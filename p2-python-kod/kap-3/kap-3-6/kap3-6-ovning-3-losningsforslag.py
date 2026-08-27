class Person:
    def __init__(self, name):
        self.name = name

    def introduce(self):
        print("Jag heter", self.name)


class Student(Person):
    def __init__(self, name, school):
        super().__init__(name)
        self.school = school

    def introduce(self):
        print("Jag heter", self.name, "och går på", self.school)


student = Student("Anna", "Pauliskolan")
student.introduce()
