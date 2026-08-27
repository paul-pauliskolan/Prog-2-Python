class Kontakt:
    def __init__(self, namn, telefon):
        self.namn = namn
        self.telefon = telefon

    def visa_info(self):
        print(self.namn, ":", self.telefon)


def hitta_kontakt(kontakter, soknamn):
    for kontakt in kontakter:
        if kontakt.namn.lower() == soknamn.lower():
            return kontakt

    return None


kontakter = [
    Kontakt("Anna", "070-111 11 11"),
    Kontakt("Erik", "070-222 22 22"),
    Kontakt("Sara", "070-333 33 33"),
    Kontakt("Omar", "070-444 44 44")
]

soknamn = input("Vem söker du? ")
hittad_kontakt = hitta_kontakt(kontakter, soknamn)

if hittad_kontakt is None:
    print("Kontakten finns inte.")
else:
    hittad_kontakt.visa_info()
