secret_number = 7
guess = 0

while guess != secret_number:
    guess = int(input("Gissa det hemliga talet: "))

    if guess != secret_number:
        print("Försök igen")

print("Rätt gissat!")
