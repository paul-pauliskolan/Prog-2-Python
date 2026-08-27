class Elev:
    def __init__(self, namn, klassnamn, alder):
        self.namn = namn
        self.klassnamn = klassnamn
        self.alder = alder

    def skriv_ut_info(self):
        print(self.namn, self.klassnamn, self.alder, "år")


def skriv_ut_elever(elever):
    for elev in elever:
        elev.skriv_ut_info()


elever = [
    Elev("Sara", "TE23A", 17),
    Elev("Erik", "TE23B", 18),
    Elev("Maja", "TE23A", 17)
]

skriv_ut_elever(elever)

elever.append(Elev("Omar", "TE23B", 18))
skriv_ut_elever(elever)

skriv_ut_elever([])
