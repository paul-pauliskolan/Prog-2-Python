def find_book(books, target_title):
    for book in books:
        if book["title"] == target_title:
            return book

    return {}


def print_book(book):
    if book == {}:
        print("Boken hittades inte.")
    else:
        for key, value in book.items():
            print(key, ":", value)


books = [
    {"title": "Python", "author": "Anna", "year": 2024},
    {"title": "Webben", "author": "Erik", "year": 2023},
    {"title": "Databaser", "author": "Sara", "year": 2025}
]

print_book(find_book(books, "Python"))
print_book(find_book(books, "Databaser"))
print_book(find_book(books, "Java"))
