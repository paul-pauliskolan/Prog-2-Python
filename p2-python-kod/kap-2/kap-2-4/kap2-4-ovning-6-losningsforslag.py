def print_menu():
    print("1. Lägg till eller ändra poäng")
    print("2. Visa alla poäng")
    print("3. Sök efter användare")
    print("4. Avsluta")


def print_scores(scores):
    if scores == {}:
        print("Registret är tomt.")
    else:
        for username, score in scores.items():
            print(username, ":", score)


def main():
    scores = {}

    while True:
        print_menu()
        choice = input("Välj ett alternativ: ")

        if choice == "1":
            username = input("Användarnamn: ")

            try:
                score = int(input("Poäng: "))
                scores[username] = score
            except ValueError:
                print("Poängen måste vara ett heltal.")
        elif choice == "2":
            print_scores(scores)
        elif choice == "3":
            username = input("Vilken användare söker du? ")
            result = scores.get(username, "Användaren finns inte.")
            print(result)
        elif choice == "4":
            print("Programmet avslutas.")
            break
        else:
            print("Ogiltigt val.")


main()
