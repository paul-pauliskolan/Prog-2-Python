class Bil:
    def __init__(self, modell, kilometer):
        self.modell = modell
        self.kilometer = kilometer

    def kor(self, stracka):
        self.kilometer = self.kilometer + stracka

    def visa_info(self):
        print(self.modell, "har gått", self.kilometer, "kilometer.")


bil1 = Bil("Volvo", 12500)
bil1.kor(50)
bil1.kor(125)
bil1.visa_info()
