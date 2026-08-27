"""
Losningsforslag till kapitel 2.5 - Planera program med algoritmtank.

Filen visar ett mojligt svar pa varje del i "Ova sjalv".
Vissa delar ar textplanering, eftersom uppgiften handlar om att planera
innan man kodar. Langst ner finns ocksa ett kort menyprogram som kan koras.
"""


# 1. Plan for ett vardagsproblem
#
# Problem:
# Organisera en packlista infor en resa.
#
# Input:
# Anvandaren valjer menyval.
# Anvandaren skriver saker som ska laggas till i packlistan.
#
# Bearbetning:
# Programmet visar en meny tills anvandaren valjer att avsluta.
# Om anvandaren valjer 1 laggs en sak till i listan.
# Om anvandaren valjer 2 skrivs hela packlistan ut.
# Om anvandaren valjer 3 avslutas programmet.
#
# Output:
# Programmet visar menyn.
# Programmet visar bekraftelse nar en sak laggs till.
# Programmet visar packlistan eller ett meddelande om listan ar tom.
#
# Datastruktur:
# En lista, eftersom packlistan innehaller flera saker i ordning.
#
# Funktioner:
# print_menu()
# add_item(packing_list)
# show_items(packing_list)
# run_packing_list()


# 2. Flodesschema for en meny med tre alternativ
#
# START
#   |
#   v
# Visa meny
#   |
#   v
# Las in val
#   |
#   v
# Ar valet 1? ---- ja ----> Lagg till sak ----> Visa meny igen
#   |
#   nej
#   v
# Ar valet 2? ---- ja ----> Visa packlista ----> Visa meny igen
#   |
#   nej
#   v
# Ar valet 3? ---- ja ----> STOPP
#   |
#   nej
#   v
# Skriv "Ogiltigt val" ----> Visa meny igen


# 3. Testfall innan kodning
#
# Testfall 1:
# Startlista: []
# Input: val 1, sak "tandborste"
# Forvantat resultat: listan innehaller ["tandborste"]
#
# Testfall 2:
# Startlista: []
# Input: val 2
# Forvantat resultat: programmet skriver "Packlistan ar tom."
#
# Testfall 3:
# Startlista: ["pass", "laddare"]
# Input: val 2
# Forvantat resultat: programmet skriver ut "pass" och "laddare"
#
# Testfall 4:
# Input: val 3
# Forvantat resultat: programmet avslutas
#
# Testfall 5:
# Input: val "x"
# Forvantat resultat: programmet skriver "Ogiltigt val."


# 4. Analys av ett tidigare program
#
# Tidigare program:
# Ett program som fragade efter tre tal och raknade ut medelvardet.
#
# Input:
# Tre tal fran anvandaren.
#
# Bearbetning:
# Programmet adderar talen.
# Programmet dividerar summan med 3.
#
# Output:
# Programmet skriver ut medelvardet.
#
# Datastruktur:
# Tre variabler for talen.
# En variabel for medelvardet.
#
# Funktioner:
# get_number(prompt) laser in ett tal.
# calculate_average(n1, n2, n3) raknar ut medelvardet.
# main() styr hela programmet.


def print_menu():
    print("\nPacklista")
    print("1. Lagg till sak")
    print("2. Visa packlista")
    print("3. Avsluta")


def add_item(packing_list):
    item = input("Vad vill du lagga till? ")
    packing_list.append(item)
    print(f"{item} har lagts till.")


def show_items(packing_list):
    if len(packing_list) == 0:
        print("Packlistan ar tom.")
    else:
        print("Packlista:")
        for item in packing_list:
            print(f"- {item}")


def run_packing_list():
    packing_list = []

    while True:
        print_menu()
        choice = input("Valj alternativ: ")

        if choice == "1":
            add_item(packing_list)
        elif choice == "2":
            show_items(packing_list)
        elif choice == "3":
            print("Programmet avslutas.")
            break
        else:
            print("Ogiltigt val.")


run_packing_list()
