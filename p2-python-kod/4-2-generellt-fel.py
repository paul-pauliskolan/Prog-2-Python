try:
    tal = int(input("Skriv ett tal att dividera 10 med: "))
    resultat = 10 / tal
    print(f"Resultatet blir {resultat}")
except ZeroDivisionError:
    print("Du kan inte dividera med noll!")