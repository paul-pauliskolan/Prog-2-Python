# Losningsforslag kap 4.1 - Lasa och skriva till filer


FILE_NAME = "anteckningar.txt"


def add_note(note):
    with open(FILE_NAME, "a", encoding="utf-8") as file:
        file.write(note + "\n")


def show_notes():
    with open(FILE_NAME, "r", encoding="utf-8") as file:
        content = file.read()

    if content == "":
        print("Det finns inga anteckningar.")
    else:
        print("Anteckningar:")
        print(content)


add_note("Kom ihag att testa fillage a.")
add_note("Lasa filen med fillage r.")

show_notes()
