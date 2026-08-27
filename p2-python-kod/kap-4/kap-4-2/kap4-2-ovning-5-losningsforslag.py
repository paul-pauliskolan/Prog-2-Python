def sum_numbers(filename):
    try:
        with open(filename, "r") as file:
            rows = file.read().splitlines()

        total = 0
        for row in rows:
            total = total + int(row)

        print("Summa:", total)
    except FileNotFoundError:
        print("Filen hittades inte.")
    except ValueError:
        print("Filen innehåller en rad som inte är ett heltal.")


sum_numbers(input("Filnamn: "))
