import tkinter as tk


def berakna_resultat(tal, operation):
    if operation == "Kvadrera talet":
        return tal * tal
    if operation == "Dubbla talet":
        return tal * 2
    if operation == "Kontrollera jämnt eller udda":
        if tal % 2 == 0:
            return "jämnt"
        return "udda"

    raise ValueError("Okänd beräkning")


def visa_resultat():
    try:
        tal = int(tal_entry.get())
        operation = vald_operation.get()
        resultat = berakna_resultat(tal, operation)
        meddelande = f"Resultat: {resultat}"
        resultat_label.config(text=meddelande, fg="black")

        if spara_i_historik.get():
            historik_listbox.insert(
                tk.END,
                f"{tal}: {operation} -> {resultat}",
            )
    except ValueError:
        resultat_label.config(
            text="Skriv ett heltal i textfältet.",
            fg="red",
        )


def rensa_historik():
    historik_listbox.delete(0, tk.END)


rot = tk.Tk()
rot.title("Talbearbetaren")
rot.geometry("430x420")

tk.Label(rot, text="Skriv ett heltal:").pack(pady=(15, 4))

tal_entry = tk.Entry(rot)
tal_entry.pack()

tk.Label(rot, text="Välj beräkning:").pack(pady=(15, 4))

vald_operation = tk.StringVar(value="Kvadrera talet")
operationer = [
    "Kvadrera talet",
    "Dubbla talet",
    "Kontrollera jämnt eller udda",
]
tk.OptionMenu(rot, vald_operation, *operationer).pack()

spara_i_historik = tk.BooleanVar(value=True)
tk.Checkbutton(
    rot,
    text="Spara resultatet i historiken",
    variable=spara_i_historik,
).pack(pady=10)

tk.Button(rot, text="Beräkna", command=visa_resultat).pack()

resultat_label = tk.Label(rot, text="")
resultat_label.pack(pady=10)

tk.Label(rot, text="Historik:").pack()
historik_listbox = tk.Listbox(rot, width=48, height=7)
historik_listbox.pack(pady=4)

tk.Button(rot, text="Rensa historik", command=rensa_historik).pack()

tal_entry.focus()
rot.mainloop()
