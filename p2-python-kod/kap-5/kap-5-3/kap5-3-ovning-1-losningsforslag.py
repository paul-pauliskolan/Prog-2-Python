import requests

url = "https://official-joke-api.appspot.com/random_joke"

try:
    response = requests.get(url, timeout=10)
    print("Statuskod:", response.status_code)

    if response.status_code == 200:
        print("Anropet lyckades.")
    else:
        print("Anropet misslyckades:", response.status_code)
except requests.exceptions.RequestException as error:
    print("Kunde inte kontakta API:et:", error)
