# Linjär sökning
def linear_search(lst, target):
    for i in range(len(lst)):
        if lst[i] == target:
            return i

    return -1

names = ["Anna", "Bo", "Sara"]
print(linear_search(names, "Bo"))  # 1

#Binär sökning

def binary_search(lst, target):
    low = 0
    high = len(lst) - 1

    while low <= high:
        mid = (low + high) // 2

        if lst[mid] == target:
            return mid
        elif lst[mid] < target:
            low = mid + 1
        else:
            high = mid - 1

    return -1

# Binär sökning

numbers = [3, 6, 9, 12, 15]
print(binary_search(numbers, 12))  # 3

# Inbyggd sortering
numbers = [5, 3, 9, 1]
numbers.sort()  # Ändrar listan direkt
print(numbers)  # [1, 3, 5, 9]

names = ["Zara", "Adam", "Lilly"]
sorted_names = sorted(names)  # Skapar ny lista
print(sorted_names)

#bubble sort
def bubble_sort(lst):
    for i in range(len(lst)):
        for j in range(0, len(lst) - i - 1):
            if lst[j] > lst[j + 1]:
                lst[j], lst[j + 1] = lst[j + 1], lst[j]

    return lst

print(bubble_sort([9, 3, 7, 1]))  # [1, 3, 7, 9]
