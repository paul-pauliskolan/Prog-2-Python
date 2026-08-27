def calculate_average(results):
    if results == []:
        return 0

    total = 0
    for result in results:
        total = total + result["points"]

    return total / len(results)


def find_best_result(results):
    if results == []:
        return {}

    best_result = results[0]

    for result in results:
        if result["points"] > best_result["points"]:
            best_result = result

    return best_result


results = [
    {"name": "Anna", "points": 120},
    {"name": "Erik", "points": 95},
    {"name": "Sara", "points": 150},
    {"name": "Omar", "points": 110}
]

for result in results:
    print(result["name"], ":", result["points"])

print("Medelvärde:", calculate_average(results))

best_result = find_best_result(results)
if best_result == {}:
    print("Det finns inga resultat.")
else:
    print("Högst poäng:", best_result["name"], best_result["points"])
