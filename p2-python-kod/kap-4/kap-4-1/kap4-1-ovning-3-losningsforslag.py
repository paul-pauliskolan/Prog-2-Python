def show_file(filename):
    with open(filename, "r") as file:
        content = file.read()
    print(content)


with open("meddelande.txt", "w") as file:
    file.write("Detta meddelande läses från en fil.")

show_file("meddelande.txt")
