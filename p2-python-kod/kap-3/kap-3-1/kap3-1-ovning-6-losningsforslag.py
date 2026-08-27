class Produkt:
    def __init__(self, namn, pris):
        self.namn = namn
        self.pris = pris

    def skriv_ut_info(self):
        print(self.namn, ":", self.pris, "kr")


def skriv_ut_meny():
    print("1. Lägg till produkt")
    print("2. Visa alla produkter")
    print("3. Avsluta")


def lagg_till_produkt(produkter):
    namn = input("Produktens namn: ")

    try:
        pris = float(input("Produktens pris: "))
        produkt = Produkt(namn, pris)
        produkter.append(produkt)
    except ValueError:
        print("Priset måste vara ett tal.")


def visa_produkter(produkter):
    if produkter == []:
        print("Det finns inga produkter.")
    else:
        for produkt in produkter:
            produkt.skriv_ut_info()


def main():
    produkter = []

    while True:
        skriv_ut_meny()
        val = input("Välj ett alternativ: ")

        if val == "1":
            lagg_till_produkt(produkter)
        elif val == "2":
            visa_produkter(produkter)
        elif val == "3":
            print("Programmet avslutas.")
            break
        else:
            print("Ogiltigt val.")


main()
