def dela(a, b):
    if b == 0:
        raise ValueError("Division med noll är inte tillåten")
    return a / b

# Exempel: anropa funktionen och skriv ut resultat eller fel
def kör_exempel():
    par = [(10, 2), (5, 0), (7, 3)]
    for a, b in par:
        try:
            resultat = dela(a, b)
        except ValueError as e:
            print(f"Fel vid beräkning {a}/{b}: {e}")
        else:
            print(f"{a} / {b} = {resultat}")


kör_exempel()