# Losningsforslag kap 3.5 - Bankapplikation med klasser


class Account:
    def __init__(self, account_number, balance):
        self._account_number = account_number
        self._balance = balance

    def deposit(self, amount):
        if amount > 0:
            self._balance += amount

    def withdraw(self, amount):
        if 0 < amount <= self._balance:
            self._balance -= amount
            return True
        return False

    def get_balance(self):
        return self._balance


class Customer:
    def __init__(self, name, customer_id):
        self._name = name
        self._customer_id = customer_id
        self._accounts = []

    def add_account(self, account):
        self._accounts.append(account)

    def get_accounts(self):
        return self._accounts

    def get_name(self):
        return self._name


class Bank:
    def __init__(self, name):
        self._name = name
        self._customers = []

    def add_customer(self, customer):
        self._customers.append(customer)

    def find_customer(self, name):
        for customer in self._customers:
            if customer.get_name() == name:
                return customer
        return None


bank = Bank("Skolbanken")
customer = Customer("Erik", "C001")
account = Account("1001", 500)

account.deposit(200)
account.withdraw(100)

customer.add_account(account)
bank.add_customer(customer)

found_customer = bank.find_customer("Erik")

if found_customer is not None:
    print("Kund hittad:", found_customer.get_name())
    for customer_account in found_customer.get_accounts():
        print("Saldo:", customer_account.get_balance())
else:
    print("Kunden hittades inte.")
