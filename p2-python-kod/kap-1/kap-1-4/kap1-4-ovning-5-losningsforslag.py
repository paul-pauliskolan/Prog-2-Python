def get_access(is_blocked):
    if not is_blocked:
        return "Åtkomst tillåten"
    else:
        return "Åtkomst nekad"


print(get_access(False))
print(get_access(True))
