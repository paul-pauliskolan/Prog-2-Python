filename = input("Filnamn: ")

try:
    with open(filename, "r") as file:
        print(file.read())
except FileNotFoundError:
    print("Filen", filename, "hittades inte.")
