class Bok:
    def __init__(self, titel, forfattare):
        self.titel = titel
        self.forfattare = forfattare

    def skriv_ut_info(self):
        print(f"{self.titel} av {self.forfattare}")

bok1 = Bok("Bröderna Lejonhjärta", "Astrid Lindgren")
bok2 = Bok("Cirkeln", "Mats Strandberg och Sara Bergmark Elfgren")

bok1.skriv_ut_info()
bok2.skriv_ut_info()