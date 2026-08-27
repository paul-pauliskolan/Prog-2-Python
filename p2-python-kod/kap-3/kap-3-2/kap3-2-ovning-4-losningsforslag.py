class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author
        self.is_borrowed = False

    def borrow(self):
        self.is_borrowed = True

    def print_info(self):
        if self.is_borrowed:
            status = "utlånad"
        else:
            status = "ledig"

        print(self.title, "av", self.author, "-", status)


book1 = Book("1984", "George Orwell")
book2 = Book("The Martian", "Andy Weir")

book1.borrow()

book1.print_info()
book2.print_info()
