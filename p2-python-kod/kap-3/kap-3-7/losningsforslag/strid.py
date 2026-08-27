def attack(attacker, defender, damage):
    print(f"{attacker.name} attackerar {defender.name}.")
    defender.take_damage(damage)
    print(f"{defender.name} tar {damage} skada.")


def print_result(player1, player2):
    if player1.is_alive() and player2.is_alive():
        print("Bada spelarna ar kvar i striden.")
    elif player1.is_alive():
        print(f"{player1.name} vann.")
    elif player2.is_alive():
        print(f"{player2.name} vann.")
    else:
        print("Ingen spelare ar kvar.")
