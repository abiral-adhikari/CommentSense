from keras.models import Model
from keras.preprocessing.text import Tokenizer
from model import lstm,tokenizer,tokenizer_RNN,rnn
from keras.preprocessing.sequence import pad_sequences
from preprocessing import clean_LSTM,clean_RNN
from flask import request,jsonify,Response
from preprocessing import detect_langs,detect


def predict_text_LSTM(text):
    text=clean_LSTM(text)
    sequence=tokenizer.texts_to_sequences([text])
    padded_sequences = pad_sequences(sequence,padding='post',maxlen=50)
    prediction=lstm.predict(padded_sequences)
    prediction=prediction.tolist()
    return prediction

def predict_text_RNN(text):
    text=clean_RNN(text)
    # sequence=tokenizer_RNN.texts_to_sequences([text])
    # padded_sequences = pad_sequences(sequence,padding='post',maxlen=50)
    # prediction=rnn.predict(padded_sequences)
    # prediction=prediction.tolist()
    # return prediction
    return text
    
def predict_text_endpoint():
    data = request.get_json()
    text = data.get('text', '')
    result = predict_text_LSTM(text)
    return jsonify(result[0])

def predict_text_endpoint_RNN():
    data = request.get_json()
    text = data.get('text', '')
    result = predict_text_RNN(text)
    return jsonify(result[0])



def textprediction(text):
    print(text)
    try:
        if detect(text) !='en' or detect_langs(text)[0].prob<0.8:
            print("error1")
            return jsonify({"error":"Language is not english"})
        sent=clean_LSTM(text)
        if sent is None or sent =="":
            raise jsonify({"error":"Not a proper comment found  upon cleaning"})
        
        lstmout= predict_text_LSTM(text)
        rnnout=predict_text_RNN(text)
        output={'lstm':lstmout[0],'rnn':rnnout[0]}
        result=jsonify(output)
        print(result)
        return result
    
    except ValueError as e:
        print(str(e))
        response = {"error": str(e)}
        return response
