def get_valid_number():
    while True:
        try:
            number = int(input("Skriv ett heltal: "))
            return number
        except ValueError:
            print("Fel inmatning, försök igen.")


def main():
    number_1 = get_valid_number()
    number_2 = get_valid_number()
    number_3 = get_valid_number()

    total = number_1 + number_2 + number_3
    print("Summan är:", total)


main()
