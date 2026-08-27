def hamta_namn_och_alder():
    namn = input("Vad heter du? ")
    alder = int(input("Hur gammal är du? "))
    return namn, alder

def berakna_100_arsdag(namn, alder):
    from datetime import datetime
    nuvarande_ar = datetime.now().year
    fyller_100_ar = nuvarande_ar + (100 - alder)
    return f"{namn}, du fyller 100 år år {fyller_100_ar}."

def main():
    namn = None
    alder = None

    while True:
        print("1. Ange namn och ålder")
        print("2. Beräkna när du fyller 100 år")
        print("3. Avsluta")

        val = input("Välj ett alternativ: ")

        if val == "1":
            namn, alder = hamta_namn_och_alder()
        elif val == "2":
            if namn is None or alder is None:
                print("Du måste först ange namn och ålder.")
            else:
                print(berakna_100_arsdag(namn, alder))
        elif val == "3":
            break
        else:
            print("Ogiltigt val.")

main()