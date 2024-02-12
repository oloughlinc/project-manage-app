import pickle
import pandas as pd
from sklearn.linear_model import LinearRegression
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

work_map = {
    "Extra Small": 1,
    "Small": 2,
    "Medium": 3,
    "Large": 5,
    "Extra Large": 8
}

@app.route('/api/predict', methods=['POST'])
def predict():
    with open('model_r2_86.pkl', 'rb') as file:
        model = pickle.load(file)
    
    data = request.get_json()
    print(data)
    df = pd.DataFrame({'budget': data['budget'], 'teamSize': data['teamSize'], 'workload': work_map[data['workload']] }, index=[0])
    
    predict = model.predict(df)
    result = predict.tolist()
    result = round(result[0])
    
    return jsonify({'predicted_values': result})

if __name__ == '__main__':
    app.run(debug=True)