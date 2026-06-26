"""
Lösningsförslag till kap 2.1 - Vad är en algoritm?

Öva själv:
1. Skriv en algoritm i textform som kontrollerar om en person får ungdomsrabatt.
2. Skriv pseudokod som beräknar medelvärdet av tre tal.
3. Skriv Pythonkod för algoritmen som kontrollerar om ett tal är jämnt eller udda.
4. Skapa minst fyra testfall till en egen algoritm.
"""


# 1. Algoritm i textform: ungdomsrabatt
#
# Indata:
# - Personens ålder.
#
# Steg:
# 1. Fråga efter personens ålder.
# 2. Om åldern är mindre än 18:
#    - Skriv "Du får ungdomsrabatt."
# 3. Annars:
#    - Skriv "Du får ingen ungdomsrabatt."
#
# Resultat:
# - Programmet talar om ifall personen får ungdomsrabatt eller inte.


# 2. Pseudokod: medelvärdet av tre tal
#
# INPUT number1
# INPUT number2
# INPUT number3
#
# average = (number1 + number2 + number3) / 3
#
# PRINT average


# 3. Pythonkod: kontrollera om ett tal är jämnt eller udda
def even_or_odd(number):
    if number % 2 == 0:
        return "Jämnt"
    else:
        return "Udda"


def run_even_or_odd_program():
    number = int(input("Skriv ett heltal: "))
    result = even_or_odd(number)
    print(result)


# 4. Egen algoritm med minst fyra testfall
#
# Egen algoritm: kontrollera ungdomsrabatt.
def youth_discount(age):
    if age < 18:
        return "Du får ungdomsrabatt."
    else:
        return "Du får ingen ungdomsrabatt."


def run_youth_discount_tests():
    test_cases = [
        # ålder, förväntat resultat
        (12, "Du får ungdomsrabatt."),
        (17, "Du får ungdomsrabatt."),
        (18, "Du får ingen ungdomsrabatt."),
        (30, "Du får ingen ungdomsrabatt."),
    ]

    for age, expected in test_cases:
        actual = youth_discount(age)

        if actual == expected:
            print(f"OK: ålder {age} gav rätt resultat.")
        else:
            print(f"FEL: ålder {age}")
            print(f"Förväntat: {expected}")
            print(f"Fick: {actual}")


def main():
    print("Del 3: Jämnt eller udda")
    run_even_or_odd_program()

    print("\nDel 4: Testfall för ungdomsrabatt")
    run_youth_discount_tests()


main()
