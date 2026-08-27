def print_menu():
    print("1. Lägg till resultat")
    print("2. Visa sammanställning")
    print("3. Avsluta")


def calculate_average(numbers):
    return sum(numbers) / len(numbers)


def print_summary(results):
    if len(results) == 0:
        print("Det finns inga resultat.")
    else:
        print("Resultat:")
        for result in results:
            print(result)

        print("Medelvärde:", calculate_average(results))
        print("Största resultat:", max(results))


def main():
    results = []

    while True:
        print_menu()
        choice = input("Välj ett alternativ: ")

        if choice == "1":
            try:
                result = int(input("Skriv ett resultat: "))
                results.append(result)
            except ValueError:
                print("Du måste skriva ett heltal.")
        elif choice == "2":
            print_summary(results)
        elif choice == "3":
            print("Programmet avslutas.")
            break
        else:
            print("Ogiltigt val.")


main()
