def get_valid_number(message):
    while True:
        try:
            return int(input(message))
        except ValueError:
            print("Du måste skriva ett heltal.")


def linear_search(numbers, target):
    for index in range(len(numbers)):
        if numbers[index] == target:
            return index

    return -1


def main():
    numbers = []

    for count in range(5):
        number = get_valid_number("Skriv ett tal: ")
        numbers.append(number)

    sorted_numbers = sorted(numbers)
    print("Sorterad lista:", sorted_numbers)

    target = get_valid_number("Vilket tal vill du söka efter? ")
    index = linear_search(sorted_numbers, target)

    if index == -1:
        print("Talet finns inte i listan.")
    else:
        print("Talet finns på index", index)


main()
