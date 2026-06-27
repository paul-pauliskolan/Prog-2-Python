class Player:
    def __init__(self, name, health):
        self.name = name
        self.health = health

    def take_damage(self, amount):
        self.health -= amount

        if self.health < 0:
            self.health = 0

    def is_alive(self):
        return self.health > 0

    def print_status(self):
        print(f"{self.name}: {self.health} hp")
