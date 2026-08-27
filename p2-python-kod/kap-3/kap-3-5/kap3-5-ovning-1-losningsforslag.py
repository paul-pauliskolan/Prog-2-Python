# UML: Dog har -name: string, -age: int, +bark() och +haveBirthday().
class Dog:
    def __init__(self, name, age):
        self._name = name
        self._age = age

    def bark(self):
        print("Voff!")

    def have_birthday(self):
        self._age = self._age + 1


dog = Dog("Fido", 3)
dog.bark()
dog.have_birthday()
