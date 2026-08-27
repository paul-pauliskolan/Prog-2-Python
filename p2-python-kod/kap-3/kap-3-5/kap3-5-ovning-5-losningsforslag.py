# UML-relationer: Library --> Book : has, Library --> Member : has
class Book:
    def __init__(self, title):
        self._title = title

    def print_info(self):
        print("Bok:", self._title)


class Member:
    def __init__(self, name):
        self._name = name

    def print_info(self):
        print("Medlem:", self._name)


class Library:
    def __init__(self, name):
        self._name = name
        self._books = []
        self._members = []

    def add_book(self, book):
        self._books.append(book)

    def add_member(self, member):
        self._members.append(member)

    def print_contents(self):
        print(self._name)
        for book in self._books:
            book.print_info()
        for member in self._members:
            member.print_info()


library = Library("Stadsbiblioteket")
library.add_book(Book("1984"))
library.add_member(Member("Anna"))
library.print_contents()
