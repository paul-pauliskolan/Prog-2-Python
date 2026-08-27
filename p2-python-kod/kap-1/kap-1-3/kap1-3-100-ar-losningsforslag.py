from datetime import date


def get_name():
    return input("Vad heter du? ")


def get_age():
    return int(input("Hur gammal är du? "))


def calculate_year_turns_100(age):
    current_year = date.today().year
    years_left = 100 - age
    return current_year + years_left


def print_message(name, year):
    print(f"Hej {name}!")
    print(f"Du fyller 100 år under år {year}.")


def main():
    name = get_name()
    age = get_age()
    year = calculate_year_turns_100(age)
    print_message(name, year)


main()
