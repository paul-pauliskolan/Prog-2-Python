def create_book():
    book = {
        "title": "Python från början",
        "author": "Anna Andersson",
        "year": 2024,
    }

    return book


def get_person():
    return ("Erik", 17)


def print_dictionary(dictionary):
    for key, value in dictionary.items():
        print(f"{key}: {value}")


def score_menu():
    scores = {}

    while True:
        print("\nMeny")
        print("1. Lägg till användare och poäng")
        print("2. Skriv ut alla poäng")
        print("3. Avsluta")

        choice = input("Välj alternativ: ")

        if choice == "1":
            username = input("Användarnamn: ")
            score = int(input("Poäng: "))
            scores[username] = score
        elif choice == "2":
            if scores:
                print_dictionary(scores)
            else:
                print("Det finns inga poäng ännu.")
        elif choice == "3":
            print("Programmet avslutas.")
            break
        else:
            print("Ogiltigt val.")


def main():
    print("1. Dictionary för en bok")
    book = create_book()
    print_dictionary(book)

    print("\n2. Funktion som returnerar en tuple")
    name, age = get_person()
    print(f"Namn: {name}")
    print(f"Ålder: {age}")

    print("\n3. Meny med dictionary")
    score_menu()


main()
