FILENAME = "anteckningar.txt"


def add_note(note):
    with open(FILENAME, "a") as file:
        file.write(note + "\n")


def show_notes():
    with open(FILENAME, "r") as file:
        print(file.read())


def clear_notes():
    with open(FILENAME, "w") as file:
        file.write("")


while True:
    print("1. Lägg till anteckning")
    print("2. Visa anteckningar")
    print("3. Töm filen")
    print("4. Avsluta")
    choice = input("Val: ")

    if choice == "1":
        add_note(input("Anteckning: "))
    elif choice == "2":
        show_notes()
    elif choice == "3":
        clear_notes()
    elif choice == "4":
        break
    else:
        print("Ogiltigt val.")
