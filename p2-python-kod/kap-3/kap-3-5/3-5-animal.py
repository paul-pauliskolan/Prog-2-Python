class Animal:
    def speak(self):
        print("Djuret låter.")

class Dog(Animal):
    def speak(self):
        print("Hunden säger voff.")

animal = Animal()
dog = Dog()

animal.speak()  # Djuret låter.
dog.speak()     # Hunden säger voff.

animals = [Dog(), Animal()]

for animal in animals:
    animal.speak()

class Cat(Animal):
    def speak(self):
        print("Katten säger mjau.")

class Bird(Animal):
    def speak(self):
        print("Fågeln kvittrar.")

animals = [Dog(), Cat(), Bird()]

for animal in animals:
    animal.speak()