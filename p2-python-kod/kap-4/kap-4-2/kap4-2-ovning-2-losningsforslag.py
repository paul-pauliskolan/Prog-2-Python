try:
    number = int(input("Dividera 100 med: "))
    print("Resultat:", 100 / number)
except ValueError:
    print("Du måste skriva ett heltal.")
except ZeroDivisionError:
    print("Du kan inte dividera med noll.")
