#Du kan använda listor som argument till funktioner:
def print_list(lst):
    for item in lst:
        print(item)

print_list(["car", "bike", "bus"])

#Du kan också returnera en lista från en funktion:

def even_numbers(n):
    result = []

    for i in range(n):
        if i % 2 == 0:
            result.append(i)

    return result

print(even_numbers(10))  # [0, 2, 4, 6, 8]