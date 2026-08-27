def check_entry(age, has_ticket, has_parent, is_blocked):
    if age <= 0:
        return "Ogiltig ålder."
    elif is_blocked:
        return "Du får inte gå in eftersom du är avstängd."
    elif not has_ticket:
        return "Du får inte gå in eftersom du saknar biljett."
    elif age >= 18 and has_ticket:
        return "Du får gå in."
    elif age < 18 and has_ticket and has_parent:
        return "Du får gå in tillsammans med vårdnadshavare."
    else:
        return "Du får inte gå in utan vårdnadshavare."


def main():
    age = int(input("Ålder: "))
    has_ticket = input("Har biljett? (ja/nej): ") == "ja"
    has_parent = input("Har vårdnadshavare med? (ja/nej): ") == "ja"
    is_blocked = input("Är personen avstängd? (ja/nej): ") == "ja"

    message = check_entry(age, has_ticket, has_parent, is_blocked)
    print(message)


main()
