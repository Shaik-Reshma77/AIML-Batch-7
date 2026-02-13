from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/predict", methods=["POST"])
def predict():

    data = request.json
    score = 0

    # ---------- Numeric Inputs ----------
    sleep = float(data.get("Sleep_Duration", 0))
    screen = float(data.get("Screen_Time", 0))
    bp = float(data.get("Blood_Pressure", 0))
    chol = float(data.get("Cholesterol_Level", 0))
    sugar = float(data.get("Blood_Sugar_Level", 0))
    caffeine = float(data.get("Caffeine_Intake", 0))
    alcohol = float(data.get("Alcohol_Intake", 0))
    work = float(data.get("Work_Hours", 0))

    # ---------- Text Inputs ----------
    meditation = data.get("Meditation_Practice", "")
    exercise = data.get("Exercise_Type", "")
    smoking = data.get("Smoking_Habit", "")
    occupation = data.get("Occupation", "")

    # ---------- SCORING LOGIC ----------

    # Sleep
    if sleep < 5: score += 3
    elif sleep < 7: score += 1

    # Screen Time
    if screen > 8: score += 3
    elif screen > 5: score += 1

    # Blood Pressure
    if bp > 140: score += 3
    elif bp > 120: score += 1

    # Cholesterol
    if chol > 240: score += 3
    elif chol > 200: score += 1

    # Blood Sugar
    if sugar > 126: score += 3
    elif sugar > 100: score += 1

    # Lifestyle
    if caffeine > 4: score += 2
    if alcohol > 2: score += 2
    if work > 10: score += 2

    # Habits
    if meditation == "Never": score += 2
    if exercise == "None": score += 2
    if smoking == "Yes": score += 2

    # Occupation based stress weight
    if occupation == "Student":
        score += 1
    elif occupation == "Software Engineer":
        score += 2
    elif occupation == "Doctor":
        score += 3
    elif occupation == "Unemployed":
        score += 2
    elif occupation == "Business":
        score += 2

    # ---------- STRESS CATEGORY ----------
    if score <= 5:
        stress = "Low Stress"
        probability = 25
        recommendations = [
            "Maintain healthy lifestyle habits",
            "Continue regular exercise",
            "Stay hydrated daily",
            "Maintain proper sleep schedule",
            "Practice relaxation techniques"
        ]
    elif score <= 12:
        stress = "Medium Stress"
        probability = 55
        recommendations = [
            "Improve sleep duration",
            "Reduce screen exposure",
            "Start meditation practice",
            "Limit caffeine intake",
            "Engage in physical activity regularly"
        ]
    else:
        stress = "High Stress"
        probability = 80
        recommendations = [
            "Improve sleep schedule immediately",
            "Reduce screen time significantly",
            "Practice meditation daily",
            "Increase physical activity",
            "Avoid caffeine and alcohol"
        ]

    wellness_score = max(100 - (score * 5), 40)

    return jsonify({
        "stress_level": stress,
        "probability": probability,
        "wellness_score": wellness_score,
        "Sleep_Duration": sleep,
        "Screen_Time": screen,
        "Blood_Pressure": bp,
        "Cholesterol_Level": chol,
        "Blood_Sugar_Level": sugar,
        "Occupation": occupation,
        "recommendations": recommendations
    })

if __name__ == "__main__":
    app.run(debug=True)
