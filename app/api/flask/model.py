from keras.models import load_model,Model
from keras.preprocessing.text import Tokenizer
import json
from keras.preprocessing.sequence import pad_sequences
from keras.preprocessing.text import tokenizer_from_json
import pickle

# Load Keras model
lstm = load_model('app/api/flask/sentimentmodel.h5')
# lstm = load_model('Copy of sentimentmodel.h5')
# lstm = load_model('sentimentmodel.h5')


tokenizer=Tokenizer()
with open('app/api/flask/tokenizer.pkl', 'rb') as tokenizer_file:
# with open('tokenizer.pkl', 'rb') as tokenizer_file:
    tokenizer = pickle.load(tokenizer_file)

