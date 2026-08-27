def print_menu():
    print("1. Lägg till resultat")
    print("2. Visa hela topplistan")
    print("3. Visa de tre bästa")
    print("4. Sök efter spelare")
    print("5. Avsluta")


def add_result(results):
    name = input("Namn: ")

    try:
        points = int(input("Poäng: "))
        results.append({"name": name, "points": points})
    except ValueError:
        print("Poängen måste vara ett heltal.")


def print_high_scores(results, number_of_results):
    if results == []:
        print("Topplistan är tom.")
        return

    sorted_results = sorted(
        results,
        key=lambda result: result["points"],
        reverse=True
    )

    if number_of_results > len(sorted_results):
        number_of_results = len(sorted_results)

    for index in range(number_of_results):
        result = sorted_results[index]
        print(index + 1, result["name"], result["points"])


def find_player(results, target_name):
    for result in results:
        if result["name"].lower() == target_name.lower():
            return result

    return {}


def main():
    results = []

    while True:
        print_menu()
        choice = input("Välj ett alternativ: ")

        if choice == "1":
            add_result(results)
        elif choice == "2":
            print_high_scores(results, len(results))
        elif choice == "3":
            print_high_scores(results, 3)
        elif choice == "4":
            target_name = input("Vilken spelare söker du? ")
            result = find_player(results, target_name)

            if result == {}:
                print("Spelaren finns inte.")
            else:
                print(result["name"], ":", result["points"])
        elif choice == "5":
            print("Programmet avslutas.")
            break
        else:
            print("Ogiltigt val.")


main()
