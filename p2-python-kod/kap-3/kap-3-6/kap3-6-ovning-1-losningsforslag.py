class Animal:
    def breathe(self):
        print("Djuret andas.")


class Dog(Animal):
    def wag_tail(self):
        print("Hunden viftar på svansen.")


dog = Dog()
dog.breathe()
dog.wag_tail()
