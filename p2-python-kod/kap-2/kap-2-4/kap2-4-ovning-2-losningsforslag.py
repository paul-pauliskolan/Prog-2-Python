person = {
    "name": "Anna",
    "age": 25,
    "city": "Stockholm"
}

print("Före ändringar:", person)

person["age"] = 26
person["email"] = "anna@example.com"
del person["city"]

print("Efter ändringar:", person)
