import tkinter as tk

root = tk.Tk()
root.title("Om mig")

tk.Label(root, text="Namn: Anna").pack()
tk.Label(root, text="Klass: TE23A").pack()
tk.Label(root, text="Hobby: Programmering").pack()

root.mainloop()
