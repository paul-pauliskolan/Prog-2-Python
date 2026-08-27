def get_result(points):
    if points >= 80:
        return "Väl godkänt"
    elif points >= 50:
        return "Godkänt"
    else:
        return "Inte godkänt"


print(get_result(90))
print(get_result(65))
print(get_result(40))
print(get_result(80))
print(get_result(50))
