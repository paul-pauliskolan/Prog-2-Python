class Konto:
    def __init__(self, agare, saldo):
        self.agare = agare
        self.saldo = saldo

    def satt_in(self, belopp):
        if belopp > 0:
            self.saldo = self.saldo + belopp
            return True

        print("Beloppet måste vara större än 0.")
        return False

    def ta_ut(self, belopp):
        if belopp <= 0:
            print("Beloppet måste vara större än 0.")
            return False

        if belopp > self.saldo:
            print("Det finns inte tillräckligt med pengar.")
            return False

        self.saldo = self.saldo - belopp
        return True

    def overfor(self, mottagare, belopp):
        if self.ta_ut(belopp):
            mottagare.satt_in(belopp)

    def visa_saldo(self):
        print(self.agare, ":", self.saldo, "kr")


konto1 = Konto("Anna", 1000)
konto2 = Konto("Erik", 500)

konto1.satt_in(200)
konto1.ta_ut(100)
konto1.ta_ut(5000)
konto1.overfor(konto2, 300)
konto1.overfor(konto2, -50)

konto1.visa_saldo()
konto2.visa_saldo()
