def grade_feedback(grade):
    if grade >= 90:
        return "Excellent"
    elif grade >= 75:
        return "Good"
    elif grade >= 60:
        return "Pass"
    else:
        return "Fail"

# Exempel: fråga användaren om poäng och skriv ut feedback (utan undantagshantering)
score = int(input("Skriv in poäng (0-100): "))
print("Resultat:", grade_feedback(score))