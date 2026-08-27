import requests

url = "https://dog.ceo/api/breeds/list/all"

try:
    response = requests.get(url, timeout=10)
    response.raise_for_status()
    data = response.json()
    breeds = data["message"]

    print("Antal raser:", len(breeds))
    for breed in breeds:
        print(breed)
except requests.exceptions.RequestException as error:
    print("Kunde inte hämta hundraser:", error)
