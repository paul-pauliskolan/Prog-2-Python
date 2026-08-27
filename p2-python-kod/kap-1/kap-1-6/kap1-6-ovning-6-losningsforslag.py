def print_menu():
    print("1. Addera")
    print("2. Dividera")
    print("3. Avsluta")


def calculate(choice):
    try:
        number_1 = int(input("Första talet: "))
        number_2 = int(input("Andra talet: "))

        if choice == "1":
            return number_1 + number_2
        elif number_2 == 0:
            return "Du kan inte dela med 0."
        else:
            return number_1 / number_2
    except ValueError:
        return "Du måste skriva heltal."


def main():
    while True:
        print_menu()
        choice = input("Välj alternativ: ")

        if choice == "1" or choice == "2":
            result = calculate(choice)
            print("Resultat:", result)
        elif choice == "3":
            print("Programmet avslutas.")
            break
        else:
            print("Ogiltigt val.")


main()
