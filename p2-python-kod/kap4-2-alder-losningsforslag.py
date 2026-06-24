# Losningsforslag kap 4.2 - Try/except och felsokning

CURRENT_YEAR = 2026


try:
    age = int(input("Hur gammal ar du? "))

    if age < 0:
        print("Alder kan inte vara negativ.")
    else:
        birth_year = CURRENT_YEAR - age
        print(f"Du ar fodd ungefar ar {birth_year}.")

except ValueError:
    print("Fel: du maste skriva ett heltal.")
