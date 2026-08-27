# Losningsforslag kap 3.4 - Inkapslade attribut


class Student:
    def __init__(self, name, grade):
        # Publikt attribut: kan lasas direkt.
        self.name = name

        # Internt attribut: ska andras via set_grade().
        self._grade = 0
        self.set_grade(grade)

    def set_grade(self, grade):
        # Godkann bara betyg mellan 0 och 100.
        if 0 <= grade <= 100:
            self._grade = grade
        else:
            print("Betyget maste vara mellan 0 och 100.")

    def get_grade(self):
        # Las betyget via en metod.
        return self._grade


student = Student("Anna", 75)

print(student.name)
print(student.get_grade())

student.set_grade(90)
print(student.get_grade())

student.set_grade(120)
print(student.get_grade())

student.set_grade(-5)
print(student.get_grade())
