import tkinter as tk

FILENAME = "anteckningar.txt"


def save_note():
    note = note_entry.get()
    with open(FILENAME, "a") as file:
        file.write(note + "\n")
    result_label.config(text="Anteckningen sparades.")


def show_notes():
    try:
        with open(FILENAME, "r") as file:
            result_label.config(text=file.read())
    except FileNotFoundError:
        result_label.config(text="Det finns inga anteckningar.")


root = tk.Tk()
root.title("Anteckningar")

note_entry = tk.Entry(root)
note_entry.pack()
tk.Button(root, text="Spara anteckning", command=save_note).pack()
tk.Button(root, text="Visa anteckningar", command=show_notes).pack()
result_label = tk.Label(root, text="")
result_label.pack()

root.mainloop()
