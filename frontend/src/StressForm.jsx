import React, { useState } from "react";
import "./StressForm.css";

function StressForm() {

  const [formData, setFormData] = useState({});
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    setResult(data);
  };

  const getColor = () => {
    if (!result) return "#ccc";
    if (result.stress_level === "High Stress") return "#e53935";
    if (result.stress_level === "Medium Stress") return "#fb8c00";
    return "#2e7d32";
  };

  return (
    <div className="container">

      <h2>Stress Prediction System</h2>

      {[
        "Age","Sleep_Duration","Sleep_Quality","Screen_Time",
        "Caffeine_Intake","Alcohol_Intake","Work_Hours",
        "Blood_Pressure","Cholesterol_Level","Blood_Sugar_Level"
      ].map(field => (
        <div className="form-group" key={field}>
          <input
            type="number"
            placeholder={field.replace(/_/g," ")}
            name={field}
            onChange={handleChange}
          />
        </div>
      ))}

      <div className="form-group">
        <input type="time" name="Wake_Up_Time" onChange={handleChange}/>
      </div>

      <div className="form-group">
        <input type="time" name="Bed_Time" onChange={handleChange}/>
      </div>

      <div className="form-group">
        <select name="Gender" onChange={handleChange}>
          <option value="">Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>

      <div className="form-group">
        <select name="Occupation" onChange={handleChange}>
          <option value="">Occupation</option>
          <option>Student</option>
          <option>Software Engineer</option>
          <option>Doctor</option>
          <option>Business</option>
          <option>Unemployed</option>
        </select>
      </div>

      <div className="form-group">
        <select name="Smoking_Habit" onChange={handleChange}>
          <option value="">Smoking Habit</option>
          <option>No</option>
          <option>Occasionally</option>
          <option>Yes</option>
        </select>
      </div>

      <div className="form-group">
        <select name="Meditation_Practice" onChange={handleChange}>
          <option value="">Meditation Practice</option>
          <option>Daily</option>
          <option>Sometimes</option>
          <option>Never</option>
        </select>
      </div>

      <div className="form-group">
        <select name="Exercise_Type" onChange={handleChange}>
          <option value="">Exercise Type</option>
          <option>None</option>
          <option>Walking</option>
          <option>Gym</option>
          <option>Yoga</option>
        </select>
      </div>

      <button onClick={handleSubmit}>Predict Stress</button>

      {result && (
        <div className="result">

          <h1 style={{color: getColor()}}>
            {result.stress_level}
          </h1>

          <h3>Stress Probability: {result.probability}%</h3>

          <div className="circle"
            style={{
              background: `conic-gradient(${getColor()} ${result.probability}%, #ddd ${result.probability}% 100%)`
            }}>
            <div className="circle-inner">
              {result.probability}%
            </div>
          </div>

          <h3>Overall Wellness Score: {result.wellness_score}/100</h3>

          <div className="details">
            <p>Occupation: {result.Occupation}</p>
            <p>Sleep: {result.Sleep_Duration} hrs</p>
            <p>Screen Time: {result.Screen_Time} hrs</p>
            <p>Blood Pressure: {result.Blood_Pressure}</p>
            <p>Cholesterol: {result.Cholesterol_Level}</p>
            <p>Blood Sugar: {result.Blood_Sugar_Level}</p>
          </div>

          <div className="recommendation">
            <h3>Health Suggestions</h3>
            <ul>
              {result.recommendations.map((item, index) => (
                <li key={index}>✔ {item}</li>
              ))}
            </ul>
          </div>

        </div>
      )}

    </div>
  );
}

export default StressForm;
