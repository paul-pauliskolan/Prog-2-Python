# Losningsforslag kap 3.1 - Ova: tank objekt
#
# Uppgift:
# Skapa en ide for ett program som hanterar elever i en skola.
#
# Pseudokod:
#
# Klass: Elev
#
# Egenskaper:
# - namn
# - klassnamn
# - alder
#
# Metoder:
# - skriv_ut_info()
#   Skriver ut elevens namn, klass och alder.
#
# - byt_klass(ny_klass)
#   Andrar vilken klass eleven gar i.
#
# - fyll_ar()
#   Okar elevens alder med 1.
#
# Kodrepresentation:
# Klassen Elev blir mallen.
# Varje elevobjekt blir en egen instans av klassen.


class Elev:
    def __init__(self, namn, klassnamn, alder):
        self.namn = namn
        self.klassnamn = klassnamn
        self.alder = alder

    def skriv_ut_info(self):
        print(f"{self.namn}, {self.alder} ar, gar i {self.klassnamn}.")

    def byt_klass(self, ny_klass):
        self.klassnamn = ny_klass

    def fyll_ar(self):
        self.alder = self.alder + 1


def main():
    elev1 = Elev("Sara", "TE23A", 17)
    elev2 = Elev("Erik", "TE23B", 18)

    print("Elever fran borjan:")
    elev1.skriv_ut_info()
    elev2.skriv_ut_info()

    print("\nSara byter klass och fyller ar:")
    elev1.byt_klass("TE23B")
    elev1.fyll_ar()
    elev1.skriv_ut_info()


main()
