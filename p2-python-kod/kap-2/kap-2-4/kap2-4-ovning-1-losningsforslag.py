book = {
    "title": "Python från början",
    "author": "Anna Andersson",
    "year": 2024
}

print("Titel:", book["title"])
print("Författare:", book["author"])
print("År:", book["year"])
print("ISBN:", book.get("isbn", "Inget ISBN finns"))
