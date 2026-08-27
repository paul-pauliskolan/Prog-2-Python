import requests


def hamta_vader():
    url = "https://api.open-meteo.com/v1/forecast"
    parametrar = {
        "latitude": 55.6050,
        "longitude": 13.0038,
        "current": "temperature_2m,wind_speed_10m",
    }

    try:
        response = requests.get(url, params=parametrar, timeout=10)

        if response.status_code != 200:
            print(f"Kunde inte hämta vädret. Statuskod: {response.status_code}")
            return

        data = response.json()
        aktuellt = data["current"]
        enheter = data["current_units"]

        temperatur = aktuellt["temperature_2m"]
        vindhastighet = aktuellt["wind_speed_10m"]

        print("Aktuellt väder i Malmö:")
        print(f"Temperatur: {temperatur} {enheter['temperature_2m']}")
        print(f"Vindhastighet: {vindhastighet} {enheter['wind_speed_10m']}")
    except requests.exceptions.RequestException as error:
        print(f"Kunde inte kontakta vädertjänsten: {error}")
    except (KeyError, ValueError) as error:
        print(f"API-svaret hade ett oväntat format: {error}")


if __name__ == "__main__":
    hamta_vader()
