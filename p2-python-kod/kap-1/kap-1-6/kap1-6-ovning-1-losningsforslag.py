try:
    number = int(input("Skriv ett heltal: "))
    print(number * 2)
except ValueError:
    print("Du måste skriva ett heltal.")
