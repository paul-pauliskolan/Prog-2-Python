results = [
    ("Anna", 120),
    ("Erik", 95),
    ("Sara", 150),
    ("Omar", 120)
]

results.sort(key=lambda x: x[1], reverse=True)

for name, points in results:
    print(name, ":", points)
