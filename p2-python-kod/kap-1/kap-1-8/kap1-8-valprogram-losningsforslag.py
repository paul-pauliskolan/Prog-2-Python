def hamta_namn():
    return input("Vad heter du? ")


def hamta_alder():
    while True:
        try:
            alder = int(input("Hur gammal är du? "))

            if alder < 0:
                print("Åldern får inte vara negativ. Försök igen.")
            else:
                return alder
        except ValueError:
            print("Du måste skriva ett heltal. Försök igen.")


def berakna_ar_for_100(alder):
    nuvarande_ar = 2026
    return nuvarande_ar + (100 - alder)


def main():
    namn = ""
    alder = 0

    while True:
        print("1. Ange namn och ålder")
        print("2. Beräkna när du fyller 100 år")
        print("3. Avsluta")

        val = input("Välj ett alternativ: ")

        if val == "1":
            namn = hamta_namn()
            alder = hamta_alder()
        elif val == "2":
            if namn == "":
                print("Du måste först ange namn och ålder.")
            else:
                ar_for_100 = berakna_ar_for_100(alder)
                print(namn, "fyller 100 år under år", ar_for_100)
        elif val == "3":
            print("Programmet avslutas.")
            break
        else:
            print("Ogiltigt val.")


main()
