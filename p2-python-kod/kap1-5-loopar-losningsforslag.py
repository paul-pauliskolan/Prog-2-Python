def print_numbers_divisible_by_three():
    print("Tal mellan 1 och 20 som är delbara med 3:")

    for number in range(1, 21):
        if number % 3 == 0:
            print(number)


def guess_number():
    correct_number = 7
    guess = None

    while guess != correct_number:
        guess = int(input("Gissa talet: "))

        if guess != correct_number:
            print("Fel, försök igen.")

    print("Rätt gissat!")


def print_menu():
    print("\nMeny")
    print("1. Skriv ett namn")
    print("2. Räkna upp till ett tal")
    print("3. Avsluta")


def write_name():
    name = input("Skriv ett namn: ")
    print(f"Hej {name}!")


def count_to_number():
    limit = int(input("Räkna upp till: "))

    for number in range(1, limit + 1):
        print(number)


def run_menu():
    while True:
        print_menu()
        choice = input("Välj alternativ: ")

        if choice == "1":
            write_name()
        elif choice == "2":
            count_to_number()
        elif choice == "3":
            print("Programmet avslutas.")
            break
        else:
            print("Ogiltigt val.")


def main():
    print_numbers_divisible_by_three()

    print("\nGissningsspel")
    guess_number()

    run_menu()


main()
