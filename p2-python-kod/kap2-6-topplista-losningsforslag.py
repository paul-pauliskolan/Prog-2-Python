# Losningsforslag kap 2.6 - Topplista
#
# Kort plan:
# Input:
# - Menyval fran anvandaren
# - Spelarens namn
# - Spelarens poang
#
# Bearbetning:
# - Upprepa menyn tills anvandaren valjer att avsluta
# - Lagg till resultat i en lista
# - Sortera resultat efter poang
# - Visa hela topplistan eller bara topp 3
#
# Output:
# - Meny
# - Felmeddelanden
# - Topplista
#
# Datastruktur:
# - En lista med dictionaries
# - Varje dictionary har nycklarna "name" och "points"
#
# Funktioner:
# - print_menu()
# - add_score(scores)
# - sorted_scores(scores)
# - show_scores(scores)
# - show_top_three(scores)


def print_menu():
    print("\nMeny")
    print("1. Lagg till resultat")
    print("2. Visa hela topplistan")
    print("3. Visa topp 3")
    print("4. Avsluta")


def add_score(scores):
    name = input("Namn: ").strip()

    if name == "":
        print("Namnet far inte vara tomt.")
        return

    try:
        points = int(input("Poang: "))
    except ValueError:
        print("Poang maste vara ett heltal.")
        return

    scores.append({
        "name": name,
        "points": points
    })

    print("Resultatet har lagts till.")


def sorted_scores(scores):
    return sorted(scores, key=lambda score: score["points"], reverse=True)


def show_scores(scores):
    if len(scores) == 0:
        print("Topplistan ar tom.")
        return

    print("\nTopplista")

    for position, score in enumerate(sorted_scores(scores), start=1):
        print(f"{position}. {score['name']}: {score['points']} poang")


def show_top_three(scores):
    if len(scores) == 0:
        print("Topplistan ar tom.")
        return

    print("\nTopp 3")

    top_three = sorted_scores(scores)[:3]

    for position, score in enumerate(top_three, start=1):
        print(f"{position}. {score['name']}: {score['points']} poang")


def main():
    scores = []

    while True:
        print_menu()
        choice = input("Valj ett alternativ: ")

        if choice == "1":
            add_score(scores)
        elif choice == "2":
            show_scores(scores)
        elif choice == "3":
            show_top_three(scores)
        elif choice == "4":
            print("Programmet avslutas.")
            break
        else:
            print("Fel val, forsok igen.")


main()


# Testfall att prova:
# 1. Lagg till Anna 120, Erik 95 och Sara 150.
#    Kontrollera att Sara visas overst i topplistan.
#
# 2. Skriv abc som poang.
#    Programmet ska visa ett felmeddelande och fortsatta.
#
# 3. Visa topplistan innan du har lagt till nagot.
#    Programmet ska skriva att topplistan ar tom.
#
# 4. Lagg till tva spelare med samma poang.
#    Bada resultaten ska finnas kvar i listan.
