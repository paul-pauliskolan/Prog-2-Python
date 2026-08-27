# UML: Store --> Product : has, Store --> Customer : has,
# Customer --> Product : owns (kundvagn)
class Product:
    def __init__(self, name, price):
        self._name = name
        self._price = price

    def get_price(self):
        return self._price


class Customer:
    def __init__(self, name):
        self._name = name
        self._cart = []

    def add_to_cart(self, product):
        self._cart.append(product)

    def calculate_total(self):
        total = 0
        for product in self._cart:
            total = total + product.get_price()
        return total


class Store:
    def __init__(self, name):
        self._name = name
        self._products = []
        self._customers = []

    def add_product(self, product):
        self._products.append(product)

    def add_customer(self, customer):
        self._customers.append(customer)


store = Store("Kodbutiken")
customer = Customer("Maja")
product = Product("Tangentbord", 399)
store.add_product(product)
store.add_customer(customer)
customer.add_to_cart(product)
print("Totalt:", customer.calculate_total(), "kr")
