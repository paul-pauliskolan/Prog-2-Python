import tkinter as tk

clicks = 0


def increase():
    global clicks
    clicks = clicks + 1
    counter_label.config(text="Klick: " + str(clicks))


def reset():
    global clicks
    clicks = 0
    counter_label.config(text="Klick: 0")


root = tk.Tk()
root.title("Klickräknare")

counter_label = tk.Label(root, text="Klick: 0")
counter_label.pack()
tk.Button(root, text="Öka", command=increase).pack()
tk.Button(root, text="Nollställ", command=reset).pack()

root.mainloop()
