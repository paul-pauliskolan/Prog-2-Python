def linear_search(names, target):
    for index in range(len(names)):
        if names[index] == target:
            return index

    return -1


names = ["Anna", "Bo", "Sara"]

print(linear_search(names, "Anna"))
print(linear_search(names, "Sara"))
print(linear_search(names, "Oskar"))
