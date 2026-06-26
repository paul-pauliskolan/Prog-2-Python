def get_valid_number():
    while True:
        try:
            number = int(input("Skriv ett heltal: "))

            if number < 0:
                print("Talet får inte vara negativt. Försök igen.")
            else:
                return number
        except ValueError:
            print("Fel inmatning. Du måste skriva ett heltal.")


def main():
    number = get_valid_number()
    print(f"{number} gånger två är {number * 2}.")


main()
