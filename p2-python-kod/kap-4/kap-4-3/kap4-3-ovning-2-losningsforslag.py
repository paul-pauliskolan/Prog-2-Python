class GamePlayer:
    def __init__(self, player_name, health_points):
        self.player_name = player_name
        self.health_points = health_points

    def print_status(self):
        print(self.player_name, "har", self.health_points, "liv.")


first_player = GamePlayer("Nova", 100)
first_player.print_status()
