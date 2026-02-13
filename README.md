# Predictive Analysis for Mental Health Instability Using Machine Learning Techniques
 
## Abstract
Mental health instability is a growing concern among students and working professionals.  
Early identification can help in timely intervention and prevention.  
This project focuses on predicting mental health instability using machine learning techniques based on user input data.

---

## Problem Statement
Mental health issues often remain unnoticed until they significantly affect an individual’s health and productivity.  
There is a need for an intelligent system that can analyze lifestyle and behavioral factors to predict mental health instability at an early stage.

---

## Project Description
This is a machine learning–based web application designed to predict mental health instability levels.  
Users enter lifestyle, stress, and daily habit–related inputs through a single web page form.  
The backend processes the input using a trained machine learning model and displays the predicted stress level along with visual output and health suggestions.

---

## Objectives
- To analyze user inputs related to mental health and stress  
- To build an accurate machine learning prediction system  
- To visualize prediction results using charts  
- To provide personalized health suggestions based on prediction  

---

## Machine Learning Model
- **Model Used:** Gradient Boosting based Stack Ensemble Model  
- **Technique:** Ensemble Learning  
- **Accuracy Achieved:** **94%**

The ensemble model improves prediction performance by combining multiple learners, resulting in high accuracy and reliable predictions.

---

## Technologies Used
**Frontend**
- HTML  
- CSS  
- JavaScript  

**Backend**
- Python  
- Flask  

**Machine Learning**
- Gradient Boosting  
- Stack Ensemble Model  
- Scikit-learn  
- Pandas  
- NumPy  

---

## Application Inputs and Outputs
The application uses a **single web page form** for all predictions.  
Only the input values change, and based on those values, the system dynamically predicts the mental health instability level.

### Input Features
Users provide inputs such as lifestyle habits, work pressure, sleep duration, physical activity, and stress-related parameters.

### Output Visualization
Based on the input data, the system generates:
- A **pie chart** showing stress levels:
  - Low Stress – Green  
  - Medium Stress – Orange  
  - High Stress – Red  
- Personalized **health suggestions** based on the predicted stress level

### Input–Output Documentation (PDF)
To avoid repetition and to provide clear academic documentation, all input–output scenarios  
(Low, Medium, and High stress predictions) are documented in a single PDF file.

📄 **Input_Output_Examples.pdf** (available in the `data/` folder)

This PDF includes:
- Input feature descriptions  
- Sample input values  
- Corresponding pie chart outputs  
- Health suggestions generated based on stress level  

---

## How to Run the Project
1. Clone the repository  
   ```bash
   git clone https://github.com/Shaik-Reshma77/AIML-Batch-7.git
