import requests
from flask import Flask, request, jsonify
import pickle
import pandas as pd
import numpy as np
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from flask_cors import CORS, cross_origin

print('loading model...')
with open("trained_model.pkl", 'rb') as f:
    model = pickle.load(f)
    
print('model loaded!')


print('server starting')

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

#@app.route('/estimateCompletion', methods=['POST'])
@app.get('/test')
def test():
    return jsonify(11)

@app.post('/api/predict')
def predict_completion_time():
    data = request.get_json()
    print(data)
    # Extract project attributes from request
    #budget = data.get('budget')
    #teamSize = data.get('teamSize')
    #workload = data.get('workload')

    # Make HTTP request to estimate completion time
    # response = requests.post('http://localhost:3000/estimateCompletion', json={'attribute1': budget, 'attribute2': teamSize, 'attribute3': workload})
    # prediction = response.json()['completionTime']
    return jsonify({'prediction': 22})

if __name__ == '__main__':
    app.run(debug=True)



