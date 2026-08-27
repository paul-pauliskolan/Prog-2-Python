# Losningsforslag kap 3.2 - Person
#
# Uppgiftens ordning:
# 1. Skriv klassen Person.
# 2. Lagg till konstruktorn __init__(self, name, age).
# 3. Spara name och age som attribut med self.
# 4. Skapa metoden say_hello().
# 5. Skapa tva objekt med olika namn och alder.
# 6. Kor say_hello() pa bada objekten.
# 7. Andra aldern pa ett objekt och kor metoden igen.


class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def say_hello(self):
        print(f"Hej, jag heter {self.name} och ar {self.age} ar.")


person1 = Person("Anna", 17)
person2 = Person("Erik", 18)

print("Forsta utskriften:")
person1.say_hello()
person2.say_hello()

print("\nAndra Annas alder:")
person1.age = 18
person1.say_hello()

print("\nErik ar oforandrad:")
person2.say_hello()
