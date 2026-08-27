import requests

name = input("Pokémon: ").lower()
url = "https://pokeapi.co/api/v2/pokemon/" + name

try:
    response = requests.get(url, timeout=10)

    if response.status_code == 404:
        print("Ingen Pokémon med det namnet hittades.")
    else:
        response.raise_for_status()
        data = response.json()
        print("Namn:", data["name"])
        print("Längd:", data["height"])
        print("Vikt:", data["weight"])
except requests.exceptions.RequestException as error:
    print("Kunde inte hämta data:", error)
