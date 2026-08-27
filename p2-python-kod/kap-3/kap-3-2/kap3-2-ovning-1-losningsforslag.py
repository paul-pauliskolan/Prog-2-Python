class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def say_hello(self):
        print("Hej, jag heter", self.name, "och är", self.age, "år.")


person1 = Person("Anna", 17)
person1.say_hello()
