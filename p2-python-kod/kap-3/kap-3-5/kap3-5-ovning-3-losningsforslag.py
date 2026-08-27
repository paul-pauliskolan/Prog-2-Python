# UML-relation: Team --> Player : has
class Player:
    def __init__(self, name):
        self._name = name

    def print_info(self):
        print(self._name)


class Team:
    def __init__(self, name):
        self._name = name
        self._players = []

    def add_player(self, player):
        self._players.append(player)

    def print_players(self):
        for player in self._players:
            player.print_info()


team = Team("Tigrarna")
team.add_player(Player("Sara"))
team.add_player(Player("Omar"))
team.print_players()
