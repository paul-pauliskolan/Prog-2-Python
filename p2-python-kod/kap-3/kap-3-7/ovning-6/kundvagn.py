class Cart:
    def __init__(self):
        self.products = []

    def add_product(self, product):
        self.products.append(product)

    def print_products(self):
        for product in self.products:
            product.print_info()

    def calculate_total(self):
        total = 0
        for product in self.products:
            total = total + product.price
        return total
