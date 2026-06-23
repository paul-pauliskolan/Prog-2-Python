# Losningsforslag kap 3.3 - Metoder som andrar objekt
#
# Kort plan:
# - Klassen Car ska ha attributen brand och year.
# - honk() ska lasa attributen och skriva ut information.
# - change_year(new_year) ska bara andra year om new_year ar storre an 0.
# - is_old() ska returnera True om bilen ar aldre an 20 ar.
# - Programmet ska testas med tva olika bilobjekt.


class Car:
    def __init__(self, brand, year):
        self.brand = brand
        self.year = year

    def honk(self):
        print(f"{self.brand} fran {self.year} tutar!")

    def change_year(self, new_year):
        if new_year > 0:
            self.year = new_year
        else:
            print("Artalet maste vara storre an 0.")

    def is_old(self):
        return 2026 - self.year > 20


car1 = Car("Volvo", 2020)
car2 = Car("Toyota", 2001)

car1.honk()
car2.honk()

print("Ar car1 gammal?", car1.is_old())
print("Ar car2 gammal?", car2.is_old())

car1.change_year(2023)
car1.honk()

car2.change_year(-5)
car2.honk()


# Testfall att prova:
# 1. car1 = Car("Volvo", 2020)
#    car1.is_old() ska returnera False.
#
# 2. car2 = Car("Toyota", 2001)
#    car2.is_old() ska returnera True.
#
# 3. car1.change_year(2023)
#    car1.year ska andras till 2023.
#
# 4. car2.change_year(-5)
#    car2.year ska inte andras.
