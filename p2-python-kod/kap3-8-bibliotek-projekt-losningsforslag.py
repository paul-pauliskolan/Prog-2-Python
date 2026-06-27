# Losningsforslag kap 3.7 - Objektorienterat projekt


class Book:
    def __init__(self, title, author):
        self._title = title
        self._author = author
        self._available = True

    def borrow(self):
        if self._available:
            self._available = False
            return True
        return False

    def return_book(self):
        self._available = True

    def get_title(self):
        return self._title

    def __str__(self):
        status = "Tillganglig" if self._available else "Utlanad"
        return f"{self._title} av {self._author} - {status}"


class Member:
    def __init__(self, name):
        self._name = name
        self._borrowed_books = []

    def borrow_book(self, book):
        if book.borrow():
            self._borrowed_books.append(book)
            print(f"{self._name} lanade {book.get_title()}.")
        else:
            print(f"{book.get_title()} ar redan utlanad.")

    def return_book(self, book):
        if book in self._borrowed_books:
            book.return_book()
            self._borrowed_books.remove(book)
            print(f"{self._name} lamnade tillbaka {book.get_title()}.")
        else:
            print(f"{self._name} har inte {book.get_title()}.")

    def list_books(self):
        if not self._borrowed_books:
            print(f"{self._name} har inga bocker.")
        else:
            print(f"{self._name} har lanat:")
            for book in self._borrowed_books:
                print(f"- {book}")

    def get_name(self):
        return self._name


class Library:
    def __init__(self):
        self._books = []
        self._members = []

    def add_book(self, title, author):
        book = Book(title, author)
        self._books.append(book)

    def register_member(self, name):
        member = Member(name)
        self._members.append(member)

    def find_book(self, title):
        for book in self._books:
            if book.get_title() == title:
                return book
        return None

    def find_member(self, name):
        for member in self._members:
            if member.get_name() == name:
                return member
        return None

    def list_books(self):
        print("Bocker i biblioteket:")
        for book in self._books:
            print(f"- {book}")


library = Library()

library.add_book("Bröderna Lejonhjärta", "Astrid Lindgren")
library.add_book("Sagan om ringen", "J.R.R. Tolkien")
library.register_member("Oskar")

book = library.find_book("Bröderna Lejonhjärta")
member = library.find_member("Oskar")

if book is not None and member is not None:
    member.borrow_book(book)

member.list_books()
library.list_books()

if book is not None and member is not None:
    member.return_book(book)

library.list_books()
