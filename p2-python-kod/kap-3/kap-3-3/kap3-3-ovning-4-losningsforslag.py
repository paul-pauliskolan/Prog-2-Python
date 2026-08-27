class Spelare:
    def __init__(self, namn, liv):
        self.namn = namn
        self.liv = liv

    def ta_skada(self, skada):
        if skada <= 0:
            print("Skadan måste vara större än 0.")
        elif skada >= self.liv:
            self.liv = 0
        else:
            self.liv = self.liv - skada

    def ar_vid_liv(self):
        return self.liv > 0

    def visa_status(self):
        print(self.namn, "har", self.liv, "liv.")


spelare = Spelare("Nova", 100)
spelare.ta_skada(30)
spelare.visa_status()
print("Vid liv:", spelare.ar_vid_liv())

spelare.ta_skada(100)
spelare.visa_status()
print("Vid liv:", spelare.ar_vid_liv())

spelare.ta_skada(-10)
