class Bok:
    def __init__(self, titel, forfattare):
        self.titel = titel
        self.forfattare = forfattare

    def skriv_ut_info(self):
        print(self.titel, "av", self.forfattare)


bok1 = Bok("Project Hail Mary", "Andy Weir")
bok2 = Bok("Python från början", "Anna Andersson")
bok3 = Bok("Databaser", "Erik Eriksson")

bok1.skriv_ut_info()
bok2.skriv_ut_info()
bok3.skriv_ut_info()
