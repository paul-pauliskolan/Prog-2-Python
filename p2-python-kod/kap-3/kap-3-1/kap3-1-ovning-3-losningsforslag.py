class Spelare:
    def __init__(self, namn, poang):
        self.namn = namn
        self.poang = poang

    def lagg_till_poang(self, antal):
        self.poang = self.poang + antal

    def skriv_ut_info(self):
        print(self.namn, "har", self.poang, "poäng.")


spelare1 = Spelare("Alex", 0)
spelare1.lagg_till_poang(10)
spelare1.lagg_till_poang(25)
spelare1.skriv_ut_info()
