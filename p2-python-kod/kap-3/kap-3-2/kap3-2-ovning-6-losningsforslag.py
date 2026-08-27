class Vara:
    def __init__(self, namn, pris, antal):
        self.namn = namn
        self.pris = pris
        self.antal = antal

    def berakna_summa(self):
        return self.pris * self.antal

    def visa_info(self):
        print(self.namn, self.antal, "st:", self.berakna_summa(), "kr")


def berakna_total(varukorg):
    total = 0

    for vara in varukorg:
        total = total + vara.berakna_summa()

    return total


varukorg = [
    Vara("Äpple", 5, 4),
    Vara("Bröd", 30, 2),
    Vara("Mjölk", 18, 1)
]

for vara in varukorg:
    vara.visa_info()

print("Totalt:", berakna_total(varukorg), "kr")

varukorg[0].antal = 6
print("Ny total:", berakna_total(varukorg), "kr")
print("Tom varukorg:", berakna_total([]), "kr")
