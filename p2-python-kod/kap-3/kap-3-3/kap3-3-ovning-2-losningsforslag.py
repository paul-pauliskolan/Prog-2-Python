class Lampa:
    def __init__(self):
        self.ar_tand = False

    def tand(self):
        self.ar_tand = True

    def slack(self):
        self.ar_tand = False

    def visa_status(self):
        if self.ar_tand:
            print("Lampan är tänd.")
        else:
            print("Lampan är släckt.")


lampa = Lampa()
lampa.visa_status()
lampa.tand()
lampa.visa_status()
lampa.slack()
lampa.visa_status()
