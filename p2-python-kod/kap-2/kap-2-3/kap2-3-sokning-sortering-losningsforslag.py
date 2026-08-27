"""
Lösningsförslag till kap 2.3 - Sökning och sortering

Öva själv:
1. Använd .sort() för att sortera en lista med användarnamn.
2. Använd sorted() för att skapa en sorterad kopia utan att ändra originallistan.
3. Skapa ett program som frågar efter 5 tal, sorterar dem och söker efter ett valfritt tal.

Obs:
I det här kapitlet ska du känna till hur linjär sökning, binär sökning och bubble sort
fungerar i princip. Du behöver inte kunna skriva egna sök- eller sorteringsalgoritmer
från grunden. I egna Pythonprogram använder du oftast inbyggda verktyg.
"""


def sort_usernames_with_sort():
    usernames = ["zara", "adam", "lilly", "bo"]

    print("1. sort() ändrar originalet")
    print("Före sort():", usernames)

    usernames.sort()

    print("Efter sort():", usernames)


def create_sorted_copy_with_sorted():
    usernames = ["zara", "adam", "lilly", "bo"]

    print("\n2. sorted() skapar en ny sorterad lista")
    print("Original före sorted():", usernames)

    sorted_usernames = sorted(usernames)

    print("Sorterad kopia:", sorted_usernames)
    print("Original efter sorted():", usernames)


def read_five_numbers():
    numbers = []

    for i in range(5):
        number = int(input(f"Skriv tal {i + 1}: "))
        numbers.append(number)

    return numbers


def sort_and_search_numbers():
    print("\n3. Sortera fem tal och sök efter ett tal")

    numbers = read_five_numbers()
    sorted_numbers = sorted(numbers)

    print("Original:", numbers)
    print("Sorterad lista:", sorted_numbers)

    target = int(input("Vilket tal vill du söka efter? "))

    if target in sorted_numbers:
        index = sorted_numbers.index(target)
        print(f"{target} finns i den sorterade listan på index {index}.")
    else:
        print(f"{target} finns inte i listan.")


def main():
    sort_usernames_with_sort()
    create_sorted_copy_with_sorted()
    sort_and_search_numbers()


main()
