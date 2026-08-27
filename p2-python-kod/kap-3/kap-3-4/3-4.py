class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self._balance = balance  # privat attribut

    def deposit(self, amount):
        if amount > 0:
            self._balance += amount

    def withdraw(self, amount):
        if 0 < amount <= self._balance:
            self._balance -= amount

    def get_balance(self):
        return self._balance

account = BankAccount("Emma", 1000)

account.deposit(500)
account.withdraw(200)

print(account.get_balance())