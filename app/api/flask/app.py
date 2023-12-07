from flask import Flask, request, jsonify, Response
from getComments import get_Comment_try
from LSTM import get_Comment_Analysis_LSTM, get_Comment_Analysis_pagination_part_2_LSTM
from GRU import get_Comment_Analysis_GRU, get_Comment_Analysis_pagination_GRU, get_Comment_Analysis_pagination_part_2_GRU
import numpy as np
from predict import predict_text_LSTM, predict_text_endpoint
from test import data
from roberta import get_Comment_Analysis_Rob, get_Comment_Analysis_pagination_Rob
from RNN import get_Comment_Analysis_RNN, get_Comment_Analysis_pagination_RNN
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# Global variable to store data

model = "LSTM"


@app.route("/test", methods=['GET'])
def test_endpoint():
    youtubeLink = request.args.get('youtubeLink')
    comment = request.args.get('comment')
    model = request.args.get('model')
    pageNumber = request.args.get('pageNumber')
    return jsonify({'youtubeLink': youtubeLink,
                    "comment": comment,
                    "model": model,
                    "pageNumber": pageNumber,
                    "data": data})
    # return data


@app.route('/get_comments', methods=['GET'])
def get_comments():
    return get_Comment_try()


@app.route('/get_comments_analysis', methods=['GET'])
def get_comments_Analysis():
    global model
    model = request.args.get('model')
    pageNumber = request.args.get('pageNumber')
    print(model)
    # return get_Comment_Analysis_pagination_LSTM(pageNumber)
    if (model == "LSTM"):
        return get_Comment_Analysis_LSTM()
    if (model == "RNN"):
        return get_Comment_Analysis_RNN()
    if (model == "Roberta"):
        return get_Comment_Analysis_Rob()
    else:
        return get_Comment_Analysis_GRU()


@app.route('/get_comments_analysis_pagination', methods=['GET'])
def get_comments_Analysis_pagination():
    pageNumber = request.args.get('pageNumber')
    if (model == "LSTM"):
        return get_Comment_Analysis_pagination_part_2_LSTM(pageNumber)
    if (model == "RNN"):
        return get_Comment_Analysis_pagination_RNN(pageNumber)
    if (model == "Roberta"):
        return get_Comment_Analysis_pagination_Rob(pageNumber)
    else:
        return get_Comment_Analysis_pagination_part_2_GRU(pageNumber)

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
