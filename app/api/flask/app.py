from flask import Flask,request,jsonify,Response
from getComments import get_Comment,get_Comment_Analysis
import numpy as np
from predict import predict_text,predict_text_endpoint
from test import data
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
   return get_Comment()

@app.route('/get_comments_analysis', methods=['GET'])
def get_comments_Analysis():
   return get_Comment_Analysis()

    
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

