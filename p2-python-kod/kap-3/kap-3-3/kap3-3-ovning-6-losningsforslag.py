class Bok:
    def __init__(self, titel):
        self.titel = titel
        self.ar_utlanad = False

    def lana_ut(self):
        if self.ar_utlanad:
            print("Boken är redan utlånad.")
        else:
            self.ar_utlanad = True
            print("Boken har lånats ut.")

    def lamna_tillbaka(self):
        if self.ar_utlanad:
            self.ar_utlanad = False
            print("Boken har lämnats tillbaka.")
        else:
            print("Boken finns redan inne.")

    def visa_info(self):
        if self.ar_utlanad:
            status = "utlånad"
        else:
            status = "inne"

        print(self.titel, "-", status)


def hitta_bok(bocker, soktitel):
    for bok in bocker:
        if bok.titel.lower() == soktitel.lower():
            return bok

    return None


def visa_meny():
    print("1. Visa alla böcker")
    print("2. Låna en bok")
    print("3. Lämna tillbaka en bok")
    print("4. Avsluta")


def main():
    bocker = [
        Bok("1984"),
        Bok("The Martian"),
        Bok("Python från början")
    ]

    while True:
        visa_meny()
        val = input("Välj ett alternativ: ")

        if val == "1":
            for bok in bocker:
                bok.visa_info()
        elif val == "2":
            soktitel = input("Vilken bok vill du låna? ")
            bok = hitta_bok(bocker, soktitel)

            if bok is None:
                print("Boken finns inte.")
            else:
                bok.lana_ut()
        elif val == "3":
            soktitel = input("Vilken bok vill du lämna tillbaka? ")
            bok = hitta_bok(bocker, soktitel)

            if bok is None:
                print("Boken finns inte.")
            else:
                bok.lamna_tillbaka()
        elif val == "4":
            print("Programmet avslutas.")
            break
        else:
            print("Ogiltigt val.")


main()
