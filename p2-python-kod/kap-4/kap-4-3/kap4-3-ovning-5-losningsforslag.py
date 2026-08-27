def print_menu():
    """Skriver ut bankprogrammets meny."""
    print("1. Visa saldo")
    print("2. Sätt in pengar")
    print("3. Ta ut pengar")
    print("4. Avsluta")


def read_amount():
    """Läser ett giltigt belopp från användaren."""
    try:
        return float(input("Belopp: "))
    except ValueError:
        print("Beloppet måste vara ett tal.")
        return None


def deposit(balance, amount):
    """Returnerar saldot efter en giltig insättning."""
    if amount > 0:
        return balance + amount
    print("Beloppet måste vara positivt.")
    return balance


def withdraw(balance, amount):
    """Returnerar saldot efter ett giltigt uttag."""
    if 0 < amount <= balance:
        return balance - amount
    print("Uttaget kan inte genomföras.")
    return balance


def main():
    """Styr bankprogrammets meny och saldo."""
    balance = 0

    while True:
        print_menu()
        choice = input("Val: ")

        if choice == "1":
            print("Saldo:", balance)
        elif choice == "2":
            amount = read_amount()
            if amount is not None:
                balance = deposit(balance, amount)
        elif choice == "3":
            amount = read_amount()
            if amount is not None:
                balance = withdraw(balance, amount)
        elif choice == "4":
            break
        else:
            print("Ogiltigt val.")


main()
