from spelare import Player
import strid

player1 = Player("Nova", 100)
player2 = Player("Atlas", 100)
strid.attack(player1, player2, 30)
strid.attack(player2, player1, 20)
strid.print_result(player1, player2)
