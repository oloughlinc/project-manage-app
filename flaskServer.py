import pickle
import pandas as pd
from sklearn.linear_model import LinearRegression
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/predict', methods=['POST'])
def predict():
    with open('trained_model.pkl', 'rb') as file:
        model = pickle.load(file)
    
    data = request.get_json()
    print(data)
    df = pd.DataFrame({'budget': data['budget'], 'teamSize': data['teamSize'], 'workload': data['workload'] }, index=[0])
    
    predict = model.predict(df)
    result = predict.tolist()
    result = round(result[0])
    
    return jsonify({'predicted_values': result})

if __name__ == '__main__':
    app.run(debug=True)