RECEPTFIL = "recept.txt"

def lägga_till_recept():
    namn = input("Vad heter receptet? ")
    ingredienser = input("Ange ingredienser (komma-separerade): ")
    meddelande = f"{namn}|{ingredienser}\n"

    try:
        with open(RECEPTFIL, "a") as fil:
            fil.write(meddelande)
        print("Recept sparat.")
    except Exception as e:
        print(f"Något gick fel: {e}")

def visa_recept():
    try:
        with open(RECEPTFIL, "r") as fil:
            rader = fil.readlines()

        if not rader:
            print("Inga recept hittades.")
            return

        for rad in rader:
            namn, ingredienser = rad.strip().split("|")
            print(f"\nRecept: {namn}")
            print("Ingredienser:")

            for ing in ingredienser.split(","):
                print(f"- {ing.strip()}")

    except FileNotFoundError:
        print("Filen med recept finns inte ännu.")
    except Exception as e:
        print(f"Fel vid läsning: {e}")

def visa_meny():
    print("\nMeny:")
    print("1. Lägg till recept")
    print("2. Visa recept")
    print("3. Avsluta")

def main():
    while True:
        visa_meny()
        val = input("Välj ett alternativ: ")

        if val == "1":
            lägga_till_recept()
        elif val == "2":
            visa_recept()
        elif val == "3":
            print("Programmet avslutas.")
            break
        else:
            print("Ogiltigt val, försök igen.")

if __name__ == "__main__":
    main()