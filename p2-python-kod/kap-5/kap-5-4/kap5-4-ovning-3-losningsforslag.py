import tkinter as tk


def double_number():
    try:
        number = float(number_entry.get())
        result_label.config(text="Resultat: " + str(number * 2))
    except ValueError:
        result_label.config(text="Du måste skriva ett tal.")


root = tk.Tk()
root.title("Dubbla ett tal")

tk.Label(root, text="Skriv ett tal:").pack()
number_entry = tk.Entry(root)
number_entry.pack()
tk.Button(root, text="Dubbla", command=double_number).pack()
result_label = tk.Label(root, text="")
result_label.pack()

root.mainloop()
