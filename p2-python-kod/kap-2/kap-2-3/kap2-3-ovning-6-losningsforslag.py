def print_menu():
    print("1. Lägg till användarnamn")
    print("2. Visa sorterade användarnamn")
    print("3. Sök efter användarnamn")
    print("4. Avsluta")


def linear_search(usernames, target):
    for index in range(len(usernames)):
        if usernames[index] == target:
            return index

    return -1


def print_sorted_usernames(usernames):
    if len(usernames) == 0:
        print("Listan är tom.")
    else:
        sorted_usernames = sorted(usernames)
        for username in sorted_usernames:
            print(username)


def main():
    usernames = []

    while True:
        print_menu()
        choice = input("Välj ett alternativ: ")

        if choice == "1":
            username = input("Skriv ett användarnamn: ")
            usernames.append(username)
        elif choice == "2":
            print_sorted_usernames(usernames)
        elif choice == "3":
            target = input("Vilket användarnamn söker du? ")
            index = linear_search(usernames, target)

            if index == -1:
                print("Användarnamnet finns inte.")
            else:
                print("Användarnamnet finns på index", index)
        elif choice == "4":
            print("Programmet avslutas.")
            break
        else:
            print("Ogiltigt val.")


main()
