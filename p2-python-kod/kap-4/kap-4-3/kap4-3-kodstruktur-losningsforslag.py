# Losningsforslag kap 4.4 - Kodstandard och struktur


def print_menu():
    print("1. Visa saldo")
    print("2. Satt in pengar")
    print("3. Ta ut pengar")
    print("4. Avsluta")


def deposit(balance, amount):
    if amount > 0:
        return balance + amount

    print("Beloppet maste vara storre an 0.")
    return balance


def withdraw(balance, amount):
    if amount <= 0:
        print("Beloppet maste vara storre an 0.")
        return balance

    if amount > balance:
        print("Du kan inte ta ut mer pengar an du har.")
        return balance

    return balance - amount


def main():
    balance = 0

    while True:
        print_menu()
        choice = input("Val: ")

        if choice == "1":
            print(f"Saldo: {balance} kr")
        elif choice == "2":
            amount = int(input("Belopp: "))
            balance = deposit(balance, amount)
        elif choice == "3":
            amount = int(input("Belopp: "))
            balance = withdraw(balance, amount)
        elif choice == "4":
            print("Programmet avslutas.")
            break
        else:
            print("Fel val.")


main()
