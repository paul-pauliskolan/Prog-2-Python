class Car:
    def __init__(self, brand, year):
        self.brand = brand
        self.year = year

    def honk(self):
        print(f"{self.brand} från {self.year} tutar!")
    
    def change_year(self, new_year):
        self.year = new_year

car1 = Car("Volvo", 2020)
car1.honk()

print(f"Före ändring: {car1.brand} från {car1.year}")

car1.change_year(2023)

print(f"Efter ändring: {car1.brand} från {car1.year}")