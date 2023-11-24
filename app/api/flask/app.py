from flask import Flask,request,jsonify,Response
from getComments import get_Comment_try
from LSTM import get_Comment_Analysis_LSTM
import numpy as np
from predict import predict_text_LSTM,predict_text_endpoint
from test import data
from RNN import get_Comment_Analysis_RNN
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

@app.route("/test",methods=['GET'])
def test_endpoint():
    youtubeLink = request.args.get('youtubeLink')
    comment = request.args.get('comment')
    model = request.args.get('model')
    
    return jsonify({'youtubeLink': youtubeLink,
                    "comment": comment,
                    "model": model,
                    "data":data})
    # return data
    
@app.route('/get_comments', methods=['GET'])
def get_comments():
   return get_Comment_try()

@app.route('/get_comments_analysis', methods=['GET'])
def get_comments_Analysis():
    model = request.args.get('model')
    print(model)
    if(model=="LSTM"):
        return get_Comment_Analysis_LSTM()
    else:
        return get_Comment_Analysis_RNN()

    # return get_Comment_Analysis()
# @app.route('/get_comments_analysisss', methods=['GET'])
# def get_comments_Analysissss():

    # return get_Comment_Analysissss()
    # return get_Comment_Analysis()
    
@app.route('/predict/text', methods=['GET'])
def predict_endpoint():
    return predict_text_endpoint()

@app.route('/')
def home_endpoint():
    return "Welcome"

@app.route('/flask')
def homes_endpoint():
    return "Welcome"

# To run a development server not production server 
if __name__ == '_main_':
    app.run(debug=True)

