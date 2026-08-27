class Animal:
    def speak(self):
        print("Djuret låter.")


class Dog(Animal):
    def speak(self):
        print("Hunden säger voff.")


class Cat(Animal):
    def speak(self):
        print("Katten säger mjau.")


Animal().speak()
Dog().speak()
Cat().speak()
