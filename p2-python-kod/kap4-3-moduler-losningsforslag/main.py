from spelare import Player
import strid


player = Player("Oskar", 20)
opponent = Player("Erik", 15)

player.print_status()
opponent.print_status()

strid.attack(player, opponent, 6)
strid.attack(opponent, player, 4)

player.print_status()
opponent.print_status()

strid.print_result(player, opponent)
