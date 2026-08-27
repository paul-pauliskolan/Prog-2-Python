def can_log_in(correct_username, correct_password):
    if correct_username and correct_password:
        return True
    else:
        return False


print(can_log_in(True, True))
print(can_log_in(True, False))
print(can_log_in(False, True))
print(can_log_in(False, False))
