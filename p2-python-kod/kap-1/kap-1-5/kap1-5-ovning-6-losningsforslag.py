def can_enter(age, has_ticket):
    if age >= 18 and has_ticket:
        return True
    else:
        return False


def main():
    approved_visitors = 0

    while True:
        age = int(input("Ålder (0 för att avsluta): "))

        if age == 0:
            break

        has_ticket = input("Har biljett? (ja/nej): ") == "ja"

        if can_enter(age, has_ticket):
            print("Besökaren får gå in.")
            approved_visitors += 1
        else:
            print("Besökaren får inte gå in.")

    print("Antal godkända besökare:", approved_visitors)


main()
