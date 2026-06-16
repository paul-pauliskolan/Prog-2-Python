class Bok:
    def __init__(self, titel, forfattare):
        self.titel = titel
        self.forfattare = forfattare

    def skriv_ut_info(self):
        print(f"{self.titel} av {self.forfattare}")

bok1 = Bok("Project Hail Mary", "Andy Weir")
bok2 = Bok("Surely You're Joking, Mr. Feynman!", "Richard P. Feynman")

bok1.skriv_ut_info()
bok2.skriv_ut_info()
