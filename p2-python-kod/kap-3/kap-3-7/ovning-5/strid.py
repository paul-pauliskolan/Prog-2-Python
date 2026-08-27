def attack(attacker, defender, damage):
    print(attacker.name, "attackerar", defender.name)
    defender.take_damage(damage)


def print_result(player1, player2):
    player1.print_status()
    player2.print_status()
