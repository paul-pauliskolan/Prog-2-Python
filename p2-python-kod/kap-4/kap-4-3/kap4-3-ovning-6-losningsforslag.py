FILENAME = "anteckningar.txt"


def print_menu():
    """Skriver ut anteckningsprogrammets meny."""
    print("1. Lägg till anteckning")
    print("2. Visa anteckningar")
    print("3. Avsluta")


def add_note(filename, note):
    """Lägger till en anteckning sist i textfilen."""
    with open(filename, "a") as file:
        file.write(note + "\n")


def show_notes(filename):
    """Skriver ut anteckningarna om filen finns."""
    try:
        with open(filename, "r") as file:
            print(file.read())
    except FileNotFoundError:
        print("Det finns inga sparade anteckningar.")


def main():
    """Styr anteckningsprogrammets meny."""
    while True:
        print_menu()
        choice = input("Val: ")

        if choice == "1":
            note = input("Anteckning: ")
            add_note(FILENAME, note)
        elif choice == "2":
            show_notes(FILENAME)
        elif choice == "3":
            break
        else:
            print("Ogiltigt val.")


main()
