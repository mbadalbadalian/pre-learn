#################################################################################################################
#Libraries 
import numpy as np
import pandas as pd 
import matplotlib.pyplot as plt

import os, pickle, nltk, re, string

# Import functions for data preprocessing & data preparation
from sklearn.preprocessing import LabelEncoder
from sklearn.utils import resample
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import GaussianNB
from sklearn.model_selection import train_test_split
from nltk.sentiment.vader import SentimentIntensityAnalyzer
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer, LancasterStemmer
from nltk.stem.snowball import SnowballStemmer
from nltk.corpus import stopwords, wordnet
from string import punctuation

nltk.download('stopwords')
nltk.download('vader_lexicon')
nltk.download('omw-1.4')

#################################################################################################################
#Secondary Functions 

def text_processing(text):   
    # convert text into lowercase
    text = text.lower()

    # remove new line characters in text
    text = re.sub(r'\n',' ', text)
    
    # remove punctuations from text
    text = re.sub('[%s]' % re.escape(punctuation), "", text)
    
    # remove references and hashtags from text
    text = re.sub("^a-zA-Z0-9$,.", "", text)
    
    # remove multiple spaces from text
    text = re.sub(r'\s+', ' ', text, flags=re.I)
    
    # remove special characters from text
    text = re.sub(r'\W', ' ', text)

    return text

#Drops unimportant columns from data
def cleanData(dataFile):
    data = pd.read_csv(dataFile)
    data1 = data.drop(['Unnamed: 0','Likes','Time','user','UserLink'],axis=1)
    return data1

def processText(data):
    data_copy = data.copy()
    for i in range(len(data_copy.Comment)):
        data_copy.Comment[i] = text_processing(data_copy.Comment[i])
    return data_copy

#Create processed_data
def processData(data_copy):
    processed_data = {
        'Sentence':data_copy.Comment,
    }

    processed_data = pd.DataFrame(processed_data)
    return processed_data

#Create corpus:
def createCorpus(data):
    #corpus contains just the sentences from final_data
    corpus = []
    for sentence in data['Sentence']:
        corpus.append(sentence)
    return corpus

#Vectorizes corpus
def vectorizeCorpus(corpus):
    cv = CountVectorizer(max_features=1500)
    X = cv.fit_transform(corpus).toarray()
    return X

def calculateScores(testingDataFile, videoLink, y_pred):
    numNegativeComments = np.count_nonzero(y_pred[0] == 0)
    numNeutralComments = np.count_nonzero(y_pred[0] == 1)
    numPositiveComments = np.count_nonzero(y_pred[0] == 2)
    numTotalComments = len(y_pred[0])

    commentScores_DF = pd.DataFrame()
    commentScores_DF.columns = ['Filename','Video_Link','Negative_Score','Neutral_Score','Positive_Score']
    commentScores_DF['Filename'] = testingDataFile
    commentScores_DF['Video_Link'] = videoLink
    commentScores_DF['Negative_Score'] = numNegativeComments/numTotalComments
    commentScores_DF['Neutral_Score'] = numNeutralComments/numTotalComments
    commentScores_DF['Positive_Score'] = numPositiveComments/numTotalComments
    return commentScores_DF

#################################################################################################################
#Main Functions 

def CalcCommentScores(testingDataFile, videoLink):
    #Drops unimportant columns from data
    classifier = pickle.load(open('commentsClassifier.pkl', 'rb'))
    data1 = cleanData(testingDataFile)

    #Processes comments
    data_copy = processText(data1)

    #Create processed_data
    processed_data = processData(data_copy)
    
    #corpus contains just the sentences
    corpus = createCorpus(processed_data)
    
    #Vectorizes corpus
    X = vectorizeCorpus(corpus)

    #Classify comments
    y_pred = classifier.predict(X)

    #Calculate scores
    commentScores_DF = calculateScores(testingDataFile, videoLink, y_pred)

    return commentScores_DF

def CalculateAllCommentScores(listOfTestingDataFiles, listofVideoLinks):
    i = 0
    for testingDataFile in listOfTestingDataFiles:
        videoLink = listofVideoLinks
        allCommentScores_DF = pd.DataFrame()
        allCommentScores_DF.columns = ['Filename','Video_Link','Negative_Score','Neutral_Score','Positive_Score']
        commentScores_DF = CalcCommentScores(testingDataFile, videoLink)
        allCommentScores_DF.append(commentScores_DF)
        allCommentScores_DF.sort_values(by=['Positive_Score', 'Neutral_Score'])
        return allCommentScores_DF

#################################################################################################################
#Inputs

testingDataFile = ['comments.csv']
listofVideoLinks = ['www.test.com']

#################################################################################################################
#Main Code

commentScores_DF = CalcCommentScores(testingDataFile)