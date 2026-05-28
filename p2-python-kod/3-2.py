class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author

    def print_info(self):
        print(f"{self.title} av {self.author}")

book1 = Book("1984", "George Orwell")
book1.print_info()