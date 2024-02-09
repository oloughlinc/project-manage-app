import requests
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/predict', methods=['POST'])

def predict_completion_time():
    data = 'data/projects.json'
    # Extract project attributes from request
    budget = data.get('budget')
    teamSize = data.get('teamSize')
    workload = data.get('workload')

    # Make HTTP request to estimate completion time
    response = requests.post('http://localhost:3000/estimateCompletion', json={'attribute1': budget, 'attribute2': teamSize, 'attribute3': workload})
    prediction = response.json()['completionTime']
    return jsonify({'prediction': prediction})

if __name__ == '__main__':
    app.run(debug=True)

