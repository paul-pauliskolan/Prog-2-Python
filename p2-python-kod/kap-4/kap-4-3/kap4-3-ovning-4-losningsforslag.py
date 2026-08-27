def print_result(name, points):
    """Skriver ut en spelares namn och poäng."""
    print(name, ":", points, "poäng")


results = [("Anna", 120), ("Erik", 95), ("Sara", 150)]

for name, points in results:
    print_result(name, points)
