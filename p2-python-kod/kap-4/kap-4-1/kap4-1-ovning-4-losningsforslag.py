def save_names(names):
    with open("namn.txt", "w") as file:
        for name in names:
            file.write(name + "\n")


names = ["Anna", "Erik", "Sara", "Omar"]
save_names(names)

with open("namn.txt", "r") as file:
    print(file.read())
