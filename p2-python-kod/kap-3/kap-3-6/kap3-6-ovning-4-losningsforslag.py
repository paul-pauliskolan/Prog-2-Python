class Instrument:
    def play(self):
        print("Instrumentet spelar.")


class Guitar(Instrument):
    def play(self):
        print("Gitarren spelar ett ackord.")


class Piano(Instrument):
    def play(self):
        print("Pianot spelar en melodi.")


class Drum(Instrument):
    def play(self):
        print("Trumman spelar en rytm.")


instruments = [Guitar(), Piano(), Drum()]
for instrument in instruments:
    instrument.play()
