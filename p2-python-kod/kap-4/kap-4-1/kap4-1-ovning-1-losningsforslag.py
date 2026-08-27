with open("halsning.txt", "w") as file:
    file.write("Hej filvärlden!\n")
    file.write("Det här är den andra raden.\n")

with open("halsning.txt", "r") as file:
    content = file.read()

print(content)
