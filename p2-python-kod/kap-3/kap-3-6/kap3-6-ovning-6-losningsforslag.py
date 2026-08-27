class Employee:
    def __init__(self, name):
        self.name = name

    def calculate_salary(self):
        return 0


class MonthlyEmployee(Employee):
    def __init__(self, name, monthly_salary):
        super().__init__(name)
        self.monthly_salary = monthly_salary

    def calculate_salary(self):
        return self.monthly_salary


class HourlyEmployee(Employee):
    def __init__(self, name, hourly_pay, hours):
        super().__init__(name)
        self.hourly_pay = hourly_pay
        self.hours = hours

    def calculate_salary(self):
        return self.hourly_pay * self.hours


employees = [
    MonthlyEmployee("Anna", 32000),
    HourlyEmployee("Erik", 180, 120),
    MonthlyEmployee("Sara", 35000)
]

total = 0
for employee in employees:
    salary = employee.calculate_salary()
    print(employee.name, salary, "kr")
    total = total + salary

print("Total lönekostnad:", total, "kr")
