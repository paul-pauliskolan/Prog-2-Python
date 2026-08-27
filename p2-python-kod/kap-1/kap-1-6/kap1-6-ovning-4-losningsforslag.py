while True:
    try:
        age = int(input("Skriv din ålder: "))

        if age < 0:
            print("Åldern får inte vara negativ. Försök igen.")
        else:
            print("Giltig ålder:", age)
            break
    except ValueError:
        print("Du måste skriva ett heltal. Försök igen.")
