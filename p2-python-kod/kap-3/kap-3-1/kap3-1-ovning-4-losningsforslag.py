class Konto:
    def __init__(self, agare, saldo):
        self.agare = agare
        self.saldo = saldo

    def satt_in(self, belopp):
        if belopp > 0:
            self.saldo = self.saldo + belopp
        else:
            print("Beloppet måste vara större än 0.")

    def skriv_ut_info(self):
        print("Ägare:", self.agare)
        print("Saldo:", self.saldo)


konto1 = Konto("Sara", 500)
konto1.satt_in(200)
konto1.satt_in(0)
konto1.satt_in(-50)
konto1.skriv_ut_info()
