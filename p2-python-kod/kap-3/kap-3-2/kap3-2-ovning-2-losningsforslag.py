class Spelkaraktar:
    def __init__(self, namn, liv):
        self.namn = namn
        self.liv = liv

    def visa_status(self):
        print(self.namn, "har", self.liv, "liv.")


spelare1 = Spelkaraktar("Nova", 100)
spelare2 = Spelkaraktar("Atlas", 80)

spelare1.visa_status()
spelare2.visa_status()

spelare1.liv = 60

spelare1.visa_status()
spelare2.visa_status()
