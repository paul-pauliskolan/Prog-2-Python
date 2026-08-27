def calculate(first, operator, second):
    if operator == "+":
        return first + second
    if operator == "-":
        return first - second
    if operator == "*":
        return first * second
    if operator == "/":
        return first / second

    return None


while True:
    print("Skriv q som första tal för att avsluta.")
    first_text = input("Första talet: ")

    if first_text.lower() == "q":
        break

    try:
        first = float(first_text)
        operator = input("Räknesätt: ")
        second = float(input("Andra talet: "))
        result = calculate(first, operator, second)

        if result is None:
            print("Ogiltigt räknesätt.")
        else:
            print("Resultat:", result)
    except ValueError:
        print("Båda värdena måste vara tal.")
    except ZeroDivisionError:
        print("Du kan inte dividera med noll.")
