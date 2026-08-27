def print_menu():
    print("1. Lägg till ord")
    print("2. Skriv ut alla ord")
    print("3. Avsluta")


def print_words(words):
    if len(words) == 0:
        print("Listan är tom.")
    else:
        for word in words:
            print(word)


def main():
    words = []

    while True:
        print_menu()
        choice = input("Välj ett alternativ: ")

        if choice == "1":
            word = input("Skriv ett ord: ")
            words.append(word)
        elif choice == "2":
            print_words(words)
        elif choice == "3":
            print("Programmet avslutas.")
            break
        else:
            print("Ogiltigt val.")


main()
