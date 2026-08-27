def calculate_average(numbers):
    """Returnerar medelvärdet av talen i listan."""
    return sum(numbers) / len(numbers)


def find_largest(numbers):
    """Returnerar det största talet i listan."""
    largest = numbers[0]
    for number in numbers:
        if number > largest:
            largest = number
    return largest


numbers = [12, 7, 25, 18]
print("Medelvärde:", calculate_average(numbers))
print("Störst:", find_largest(numbers))
