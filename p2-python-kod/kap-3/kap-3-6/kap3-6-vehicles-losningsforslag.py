# Losningsforslag kap 3.6 - Arv och polymorfism


class Vehicle:
    def __init__(self, brand):
        self._brand = brand

    def drive(self):
        print(f"{self._brand} kor.")


class Car(Vehicle):
    def __init__(self, brand):
        super().__init__(brand)

    def drive(self):
        print(f"Bilen {self._brand} kor pa vagen.")


class Bike(Vehicle):
    def __init__(self, brand):
        super().__init__(brand)

    def drive(self):
        print(f"Cykeln {self._brand} trampar fram.")


vehicles = [
    Car("Volvo"),
    Bike("Crescent"),
    Car("Saab"),
    Bike("Monark"),
]

for vehicle in vehicles:
    vehicle.drive()
