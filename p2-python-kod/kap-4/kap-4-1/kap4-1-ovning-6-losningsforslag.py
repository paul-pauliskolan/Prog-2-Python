class Result:
    def __init__(self, name, points):
        self.name = name
        self.points = points


def save_results(results):
    with open("resultat.txt", "w") as file:
        for result in results:
            file.write(result.name + ": " + str(result.points) + "\n")


def add_result(result):
    with open("resultat.txt", "a") as file:
        file.write(result.name + ": " + str(result.points) + "\n")


def show_results():
    with open("resultat.txt", "r") as file:
        print(file.read())


results = [Result("Anna", 120), Result("Erik", 95), Result("Sara", 150)]
save_results(results)
add_result(Result("Omar", 110))
show_results()
