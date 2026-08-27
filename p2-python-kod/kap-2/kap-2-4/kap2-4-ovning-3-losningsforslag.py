def print_dictionary(dictionary):
    for key, value in dictionary.items():
        print(key, ":", value)


person = {"name": "Anna", "age": 25}
scores = {"alex": 10, "sam": 15}
empty_dictionary = {}

print_dictionary(person)
print_dictionary(scores)
print_dictionary(empty_dictionary)
