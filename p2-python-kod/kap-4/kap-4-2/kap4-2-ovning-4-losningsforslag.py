def read_age():
    while True:
        try:
            age = int(input("Ålder: "))

            if 0 <= age <= 120:
                return age

            print("Åldern måste vara mellan 0 och 120.")
        except ValueError:
            print("Åldern måste vara ett heltal.")


age = read_age()
print("Giltig ålder:", age)
