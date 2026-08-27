def sort_by_name(results):
    return sorted(results, key=lambda x: x[0])


results = [
    ("Sara", 150),
    ("Anna", 120),
    ("Omar", 110),
    ("Erik", 95)
]

sorted_results = sort_by_name(results)

print("Ursprunglig lista:", results)
print("Sorterad lista:", sorted_results)
print("Tom lista:", sort_by_name([]))
