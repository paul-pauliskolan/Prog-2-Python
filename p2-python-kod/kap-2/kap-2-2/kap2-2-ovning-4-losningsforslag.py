def count_large_numbers(numbers):
    count = 0

    for number in numbers:
        if number > 10:
            count += 1

    return count


print(count_large_numbers([4, 12, 7, 20]))
print(count_large_numbers([1, 2, 3]))
print(count_large_numbers([11, 12, 13]))
