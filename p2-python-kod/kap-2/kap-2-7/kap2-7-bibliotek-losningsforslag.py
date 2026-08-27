# Losningsforslag kap 2.7 - Bibliotekskatalog
#
# Kort plan:
# Input:
# - Menyval
# - Titel, forfattare och ar for en bok
# - Sokord vid sokning
#
# Bearbetning:
# - Upprepa menyn tills anvandaren valjer att avsluta
# - Lagg till bocker som dictionaries i en lista
# - Sok i titel eller forfattare
# - Sortera katalogen efter titel
#
# Output:
# - Meny
# - Bekraftelser och felmeddelanden
# - Sokresultat
# - Hela katalogen i alfabetisk ordning
#
# Datastruktur:
# - En lista med dictionaries
# - Varje dictionary har nycklarna "title", "author" och "year"
#
# Funktioner:
# - print_menu()
# - add_book(catalog)
# - search_books(catalog)
# - print_book(book)
# - print_catalog(catalog)


def print_menu():
    print("\nBibliotekskatalog")
    print("1. Lagg till bok")
    print("2. Sok bok")
    print("3. Visa alla bocker")
    print("4. Avsluta")


def add_book(catalog):
    title = input("Titel: ").strip()
    author = input("Forfattare: ").strip()
    year = input("Ar: ").strip()

    if title == "" or author == "" or year == "":
        print("Titel, forfattare och ar maste fyllas i.")
        return

    book = {
        "title": title,
        "author": author,
        "year": year
    }

    catalog.append(book)
    print("Boken har lagts till.")


def search_books(catalog):
    query = input("Sok titel eller forfattare: ").strip().lower()

    if query == "":
        print("Sokordet far inte vara tomt.")
        return

    found = []

    for book in catalog:
        title = book["title"].lower()
        author = book["author"].lower()

        if query in title or query in author:
            found.append(book)

    if len(found) == 0:
        print("Ingen bok matchade sokningen.")
        return

    print("\nSokresultat")

    for book in found:
        print_book(book)


def print_book(book):
    print(f"{book['title']} av {book['author']} ({book['year']})")


def print_catalog(catalog):
    if len(catalog) == 0:
        print("Katalogen ar tom.")
        return

    sorted_books = sorted(catalog, key=lambda book: book["title"].lower())

    print("\nAlla bocker")

    for book in sorted_books:
        print_book(book)


def main():
    catalog = []

    while True:
        print_menu()
        choice = input("Valj ett alternativ: ")

        if choice == "1":
            add_book(catalog)
        elif choice == "2":
            search_books(catalog)
        elif choice == "3":
            print_catalog(catalog)
        elif choice == "4":
            print("Programmet avslutas.")
            break
        else:
            print("Ogiltigt val, forsok igen.")


main()


# Testfall att prova:
# 1. Lagg till "1984" av "George Orwell" fran "1949".
#    Lagg till "Broderna Lejonhjarta" av "Astrid Lindgren" fran "1973".
#    Visa alla bocker och kontrollera att de visas i alfabetisk ordning.
#
# 2. Lagg till "Broderna Lejonhjarta" av "Astrid Lindgren" fran "1973".
#    Sok efter "astrid" och kontrollera att boken hittas.
#
# 3. Sok efter ett ord som inte finns, till exempel "python".
#    Programmet ska skriva att ingen bok matchade sokningen.
#
# 4. Visa katalogen innan du har lagt till nagon bok.
#    Programmet ska skriva att katalogen ar tom.
