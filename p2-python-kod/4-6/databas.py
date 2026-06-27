import sqlite3

DB_FIL = "bibliotek.db"

def skapa_databas():
    conn = None
    try:
        conn = sqlite3.connect(DB_FIL)
        cursor = conn.cursor()
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS bocker (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                titel TEXT NOT NULL,
                forfattare TEXT NOT NULL
            )
        """)
        conn.commit()
    except sqlite3.Error as e:
        print("Fel vid skapande av databas:", e)
    finally:
        if conn:
            conn.close()

def lagg_till_bok(titel, forfattare):
    if not titel.strip() or not forfattare.strip():
        print("Titel och författare måste fyllas i.")
        return

    conn = None
    try:
        conn = sqlite3.connect(DB_FIL)
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO bocker (titel, forfattare) VALUES (?, ?)",
            (titel.strip(), forfattare.strip())
        )
        conn.commit()
        print("Bok tillagd!")
    except sqlite3.Error as e:
        print("Kunde inte lägga till bok:", e)
    finally:
        if conn:
            conn.close()

def sok_bok(nyckelord):
    nyckelord = nyckelord.strip()

    if not nyckelord:
        print("Skriv ett sökord.")
        return

    conn = None
    try:
        conn = sqlite3.connect(DB_FIL)
        cursor = conn.cursor()
        cursor.execute(
            "SELECT * FROM bocker WHERE titel LIKE ? OR forfattare LIKE ?",
            ("%" + nyckelord + "%", "%" + nyckelord + "%")
        )
        resultat = cursor.fetchall()

        for bok in resultat:
            print(f"{bok[0]}. {bok[1]} - {bok[2]}")

        if not resultat:
            print("Inga träffar.")
    except sqlite3.Error as e:
        print("Sökning misslyckades:", e)
    finally:
        if conn:
            conn.close()

def visa_alla_bocker():
    conn = None
    try:
        conn = sqlite3.connect(DB_FIL)
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM bocker")
        resultat = cursor.fetchall()

        for bok in resultat:
            print(f"{bok[0]}. {bok[1]} - {bok[2]}")

        if not resultat:
            print("Inga böcker finns än.")
    except sqlite3.Error as e:
        print("Kunde inte hämta böcker:", e)
    finally:
        if conn:
            conn.close()
