class Temperatur:
    def __init__(self, grader):
        self.grader = grader

    def visa(self):
        print(self.grader, "grader")

    def ar_frysgrader(self):
        return self.grader <= 0


temperaturer = [Temperatur(12), Temperatur(0), Temperatur(-8)]

for temperatur in temperaturer:
    temperatur.visa()
    print("Frysgrader:", temperatur.ar_frysgrader())
