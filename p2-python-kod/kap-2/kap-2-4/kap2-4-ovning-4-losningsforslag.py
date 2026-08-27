def get_user():
    return ("Erik", 17)


user = get_user()
name, age = user

print("Namn:", name)
print("Ålder:", age)
print("Första värdet:", user[0])
