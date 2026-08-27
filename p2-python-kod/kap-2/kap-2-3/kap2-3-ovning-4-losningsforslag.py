def binary_search(numbers, target):
    low = 0
    high = len(numbers) - 1

    while low <= high:
        middle = (low + high) // 2

        if numbers[middle] == target:
            return middle
        elif numbers[middle] < target:
            low = middle + 1
        else:
            high = middle - 1

    return -1


numbers = [12, 3, 15, 6, 9]
sorted_numbers = sorted(numbers)

print("Sorterad lista:", sorted_numbers)
print(binary_search(sorted_numbers, 3))
print(binary_search(sorted_numbers, 15))
print(binary_search(sorted_numbers, 8))
