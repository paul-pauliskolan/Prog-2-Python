class Produkt:
    def __init__(self, namn, pris):
        self.namn = namn
        self.pris = pris

    def andra_pris(self, nytt_pris):
        if nytt_pris > 0:
            self.pris = nytt_pris
        else:
            print("Priset måste vara större än 0.")

    def visa_info(self):
        print(self.namn, ":", self.pris, "kr")


produkt = Produkt("Ryggsäck", 450)
produkt.andra_pris(399)
produkt.visa_info()
produkt.andra_pris(0)
produkt.andra_pris(-100)
produkt.visa_info()
