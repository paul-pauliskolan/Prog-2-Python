from produkt import Product
from kundvagn import Cart

cart = Cart()
cart.add_product(Product("Mus", 249))
cart.add_product(Product("Tangentbord", 499))
cart.add_product(Product("Skärm", 1999))

cart.print_products()
print("Totalt:", cart.calculate_total(), "kr")
