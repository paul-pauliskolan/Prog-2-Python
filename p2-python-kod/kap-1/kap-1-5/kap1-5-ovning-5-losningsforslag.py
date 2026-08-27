def sum_even_numbers(limit):
    total = 0

    for number in range(1, limit + 1):
        if number % 2 == 0:
            total += number

    return total


def main():
    limit = int(input("Summera jämna tal till och med: "))
    result = sum_even_numbers(limit)
    print("Summan är:", result)


main()
