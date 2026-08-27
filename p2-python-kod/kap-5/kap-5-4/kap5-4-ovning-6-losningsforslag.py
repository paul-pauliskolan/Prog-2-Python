import tkinter as tk
import requests


def fetch_weather():
    url = (
        "https://api.open-meteo.com/v1/forecast"
        "?latitude=55.6059&longitude=13.0007"
        "&current=temperature_2m,wind_speed_10m"
    )

    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        current = response.json()["current"]
        temperature = current["temperature_2m"]
        wind_speed = current["wind_speed_10m"]
        result_label.config(
            text="Temperatur: " + str(temperature) + " °C\n"
            "Vind: " + str(wind_speed) + " km/h"
        )
    except requests.exceptions.RequestException:
        result_label.config(text="Kunde inte hämta vädret.")
    except (KeyError, TypeError):
        result_label.config(text="API-svaret hade oväntat innehåll.")


root = tk.Tk()
root.title("Väder i Malmö")

tk.Button(root, text="Hämta väder", command=fetch_weather).pack()
result_label = tk.Label(root, text="Tryck på knappen.")
result_label.pack()

root.mainloop()
