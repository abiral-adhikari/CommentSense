import json
from flask import jsonify, request
from pytube import YouTube
import os
from flask import jsonify
from googleapiclient.discovery import build
from predict import predict_text
import pandas as pd
import numpy as np
import requests


apiKey = os.environ.get("YOUTUBEAPI")

def get_videoid(url):
    try:
        ytobject = YouTube(url)
        print(ytobject.title)
        return ytobject.video_id
    except Exception as e:
        print(f"Error: {str(e)}")

              
youtube=build("youtube","v3",developerKey="AIzaSyCT7XGku7WgM36gSkAdIqaEKnyIxT4GqJo")

def getComments(videoid,pagecountStart,pagecountRange):
    commentlist=[]
    pagetoken=None
    pagecount=pagecountStart
    while True:
        comment_request = youtube.commentThreads().list(
            part='snippet' ,          
            videoId=videoid,           
            textFormat='plainText',
            maxResults=10000,           
            pageToken=pagetoken
        )
        result=comment_request.execute()
        for item in result['items']:
            commentlist.append(item['snippet']['topLevelComment']['snippet']['textDisplay'])
        if 'nextPageToken' in result and pagecount<(pagecountStart+pagecountRange):
            pagetoken=result['nextPageToken']
            pagecount+=1
            print(pagecount)
        else :
            break
    return commentlist

def get_Comment():
    try:
        
        # video_url = request.args.get('url')
        video_url = "https://www.youtube.com/watch?v=HhjHYkPQ8F0"
        
        if not video_url:
            return jsonify({"error": "Video URL is required"}), 400
        
        video_id =YouTube(video_url).video_id
        comments = getComments(video_id, 0, 1)  
        return jsonify({"comments": comments})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


def get_Comment_Analysis():
    df_predict = pd.DataFrame(columns=['comment',"type" ,'negative_score', 'neutral_score', 'positive_score'])
    try:
        # video_url = request.args.get('url')
        youtubeLink = request.args.get('youtubeLink')
        video_url = youtubeLink
        # video_url = "https://www.youtube.com/watch?v=HhjHYkPQ8F0"

        if not video_url:
            return jsonify({"error": "Video URL is required"}), 400

        video_id = YouTube(video_url).video_id
        comments = getComments(video_id, 0, 1)
        comments=comments[:100]
        # Check if comments is None
        if comments is None:
            return jsonify({"error": "Failed to retrieve comments"}), 500
        # comments=["i love you"]
        for comment in comments:
            # comment="I hadfgfgdfgte you"
            result1 = predict_text(comment)
            result=result1[0]
            type=np.argmax(np.array(result))
            type=0 if type==0 else 4 if type==2 else 2
            new_row = {'comment': comment, "type":type,'negative_score': round(result[0]*100, 2), 'neutral_score': round(result[1]*100, 2), 'positive_score': round(result[2]*100, 2)}
            
            df_predict.loc[len(df_predict)] = new_row

        # Convert DataFrame to JSON
        json_result = df_predict.to_json(orient='records')

        # Load JSON string back to Python object and return as JSON
        return jsonify({"comments": json.loads(json_result)})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    