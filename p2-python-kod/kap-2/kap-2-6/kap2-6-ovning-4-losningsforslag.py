def get_approved(results, limit):
    approved = []

    for result in results:
        if result[1] >= limit:
            approved.append(result)

    return approved


results = [
    ("Anna", 120),
    ("Erik", 95),
    ("Sara", 150),
    ("Omar", 100)
]

approved_results = get_approved(results, 100)

for name, points in approved_results:
    print(name, ":", points)
