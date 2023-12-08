import json
from flask import jsonify, request
from pytube import YouTube
from flask import jsonify
from googleapiclient.discovery import build
import pandas as pd
import numpy as np
from test import data
from getComments import getComments, getCertainComments
import re
from keras.models import Model
from keras.preprocessing.text import Tokenizer
from model import lstm, tokenizer_LSTM, tokenizer_RNN, rnn, gru
from keras.preprocessing.sequence import pad_sequences
from preprocessing import clean_LSTM, clean_RNN
from flask import request, jsonify, Response
import json
from preprocessing import removeemoji, filter_english_comments, preprocessing_RNN
from getComments import commentlist
from roberta import preprocess_Roberta, tokenizer_Roberta, model_Roberta
from scipy.special import softmax


def single_comment_analysis():
    comment = request.args.get('text')
    initComment = comment
    print(f"comment {comment}")
    if comment is None:
        return jsonify({"error": "Failed to retrieve Text"}), 500
    comment = removeemoji(comment)
    print(f"emoji {comment}")
    comment = filter_english_comments(comment)
    print(f"filter {comment}")

    comment = preprocessing_RNN(comment)
    if not comment or comment == "" or comment == ".":
        return jsonify({"error": "Text is not in english Language"}), 500
    else:
        sequence = tokenizer_LSTM.texts_to_sequences([comment])
        padded_sequences = pad_sequences(
            sequence, maxlen=50)
        prediction_LSTM = lstm.predict(padded_sequences)
        result1_LSTM = prediction_LSTM.tolist()
        result_LSTM = result1_LSTM[0]

        prediction_GRU = gru.predict(padded_sequences)
        result1_GRU = prediction_GRU.tolist()
        result_GRU = result1_GRU[0]

        sequence_RNN = tokenizer_RNN.texts_to_sequences([comment])
        padded_sequences_RNN = pad_sequences(sequence_RNN, maxlen=100)
        prediction_RNN = rnn.predict(padded_sequences_RNN)
        prediction_RNN = prediction_RNN.tolist()
        result_RNN = prediction_RNN[0]

        comment_rob = preprocess_Roberta(initComment)
        if not comment_rob or comment_rob == "" or comment_rob == ".":
            return jsonify({"error": "Text is not in english Language"}), 500
        else:
            encoded_input = tokenizer_Roberta(comment, return_tensors='tf')
            output = model_Roberta(encoded_input)
            scores = output[0][0].numpy()
            scores = softmax(scores)
            type = np.argmax(np.array(scores))
            type = 0 if type == 0 else 4 if type == 2 else 2
            return jsonify({'comment': initComment,
                            "LSTM": {'negative_score': round(
                                result_LSTM[0]*100, 2), 'neutral_score': round(result_LSTM[1]*100, 2), 'positive_score': round(result_LSTM[2]*100, 2)},
                            "GRU": {'negative_score': round(
                                result_GRU[0]*100, 2), 'neutral_score': round(result_GRU[1]*100, 2), 'positive_score': round(result_GRU[2]*100, 2)},
                            "RNN": {'negative_score': round(
                                result_RNN[0]*100, 2), 'neutral_score': round(result_RNN[1]*100, 2), 'positive_score': round(result_RNN[2]*100, 2)},
                            "Roberta": {
                                "type": type, 'negative_score': round(
                                    scores[0]*100, 2), 'neutral_score': round(scores[1]*100, 2), 'positive_score': round(scores[2]*100, 2)
                            }
                            })
