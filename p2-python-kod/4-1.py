with open("exempel.txt", "w") as fil:
    fil.write("Hej filvärlden!\n")
    fil.write("Denna text skrivs till filen.")

with open("exempel.txt", "a") as fil:
    fil.write("\nEn ny rad läggs till.")

with open("exempel.txt", "r") as fil:
    innehåll = fil.read()

print(innehåll)