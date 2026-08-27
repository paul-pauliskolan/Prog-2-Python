class Vehicle:
    def __init__(self, brand):
        self.brand = brand

    def drive(self):
        print(self.brand, "kör.")


class Car(Vehicle):
    def __init__(self, brand):
        super().__init__(brand)

    def drive(self):
        print("Bilen", self.brand, "kör på vägen.")


class Bike(Vehicle):
    def __init__(self, brand):
        super().__init__(brand)

    def drive(self):
        print("Cykeln", self.brand, "rullar på cykelbanan.")


class Bus(Vehicle):
    def __init__(self, brand):
        super().__init__(brand)

    def drive(self):
        print("Bussen", self.brand, "kör sin linje.")


vehicles = [Car("Volvo"), Bike("Monark"), Bus("Scania")]
for vehicle in vehicles:
    vehicle.drive()
