def is_adult(age):
    if age >= 18:
        return True
    else:
        return False

user_age = int(input("Enter your age: "))
if is_adult(user_age):
    print("You are an adult.")
else:
    print("You are not an adult.")
