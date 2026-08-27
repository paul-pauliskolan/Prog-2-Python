def is_day_off(day):
    if day == "lördag" or day == "söndag":
        return True
    else:
        return False


print(is_day_off("lördag"))
print(is_day_off("söndag"))
print(is_day_off("måndag"))
