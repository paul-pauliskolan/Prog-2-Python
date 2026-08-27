import requests

url = "https://official-joke-api.appspot.com/random_joke"

try:
    response = requests.get(url, timeout=10)
    response.raise_for_status()
    data = response.json()

    print("Typ:", data["type"])
    print("Fråga:", data["setup"])
    print("Svar:", data["punchline"])
except requests.exceptions.RequestException as error:
    print("Kunde inte hämta skämtet:", error)
