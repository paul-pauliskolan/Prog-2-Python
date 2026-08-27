import tkinter as tk


def show_greeting():
    name = name_entry.get()
    result_label.config(text="Hej, " + name + "!")


root = tk.Tk()
root.title("Hälsning")

tk.Label(root, text="Vad heter du?").pack()
name_entry = tk.Entry(root)
name_entry.pack()
tk.Button(root, text="Säg hej", command=show_greeting).pack()
result_label = tk.Label(root, text="")
result_label.pack()

root.mainloop()
