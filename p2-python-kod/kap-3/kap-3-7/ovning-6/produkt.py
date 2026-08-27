class Product:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def print_info(self):
        print(self.name, self.price, "kr")
