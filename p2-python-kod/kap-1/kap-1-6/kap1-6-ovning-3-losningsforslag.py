while True:
    try:
        number = int(input("Skriv ett heltal: "))
        print("Du skrev:", number)
        break
    except ValueError:
        print("Fel inmatning, försök igen.")
