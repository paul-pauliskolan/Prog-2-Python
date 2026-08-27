def greet_names():
    names = ["Anna", "Erik", "Sara", "Oskar", "Maja"]

    for name in names:
        print(f"Hej {name}!")


def calculate_average(numbers):
    return sum(numbers) / len(numbers)


def word_menu():
    words = []

    while True:
        print("\nMeny")
        print("1. Lagg till ord")
        print("2. Skriv ut listan")
        print("3. Avsluta")

        choice = input("Valj ett alternativ: ")

        if choice == "1":
            word = input("Skriv ett ord: ")
            words.append(word)
        elif choice == "2":
            print("Ord i listan:")
            for word in words:
                print(word)
        elif choice == "3":
            print("Programmet avslutas.")
            break
        else:
            print("Fel val, forsok igen.")


def main():
    greet_names()

    numbers = [4, 8, 12, 16, 20]
    average = calculate_average(numbers)
    print(f"\nMedelvardet ar {average:.2f}")

    word_menu()


main()
