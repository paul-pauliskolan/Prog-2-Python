try:
    number = int(input("Skriv ett heltal: "))

    if number == 0:
        print("Du kan inte dela med 0.")
    else:
        print(100 / number)
except ValueError:
    print("Du måste skriva ett heltal.")
