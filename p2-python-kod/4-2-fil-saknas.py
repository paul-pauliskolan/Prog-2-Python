try:
    with open("saknas.txt", "r") as f:
        innehåll = f.read()
except FileNotFoundError:
    print("Filen hittades inte.")