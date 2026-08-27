def add_log(message):
    with open("loggbok.txt", "a") as file:
        file.write(message + "\n")


add_log("Programmet startade.")
add_log("En användare loggade in.")
add_log("Programmet avslutades.")
