import requests


def fetch_users():
    url = "https://randomuser.me/api/?results=3"
    response = requests.get(url, timeout=10)
    response.raise_for_status()
    return response.json()["results"]


def save_users(users):
    with open("anvandare.txt", "w") as file:
        for user in users:
            first_name = user["name"]["first"]
            last_name = user["name"]["last"]
            email = user["email"]
            row = first_name + " " + last_name + ": " + email
            print(row)
            file.write(row + "\n")


try:
    users = fetch_users()
    save_users(users)
except requests.exceptions.RequestException as error:
    print("Kunde inte hämta användare:", error)
except (KeyError, TypeError) as error:
    print("API-svaret hade oväntat innehåll:", error)
