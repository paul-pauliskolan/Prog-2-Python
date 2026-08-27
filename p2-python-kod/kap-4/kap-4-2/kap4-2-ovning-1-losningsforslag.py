try:
    number = int(input("Skriv ett heltal: "))
    print("Du skrev:", number)
except ValueError:
    print("Fel: Du måste skriva ett heltal.")
