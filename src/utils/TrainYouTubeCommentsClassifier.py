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
from sklearn.metrics import confusion_matrix, accuracy_score
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

#Adds sentiments to data
def addSentiment(data1):
    #The VADER library returns 4 values such as:
    #pos: The probability of the sentiment to be positive
    #neu: The probability of the sentiment to be neutral
    #neg: The probability of the sentiment to be negative
    #compound: The normalized compound score which calculates the sum of all lexicon ratings and takes values from -1 to 1
    sentiments = SentimentIntensityAnalyzer()
    data1["Positive"] = [sentiments.polarity_scores(i)["pos"] for i in data1["Comment"]]
    data1["Negative"] = [sentiments.polarity_scores(i)["neg"] for i in data1["Comment"]]
    data1["Neutral"] = [sentiments.polarity_scores(i)["neu"] for i in data1["Comment"]]
    data1['Compound'] = [sentiments.polarity_scores(i)["compound"] for i in data1["Comment"]]
    score = data1["Compound"].values
    sentiment = []
    for i in score:
        if i >= 0.05 :
            sentiment.append('Positive')
        elif i <= -0.05 :
            sentiment.append('Negative')
        else:
            sentiment.append('Neutral')
    data1["Sentiment"] = sentiment

    #Drops unimportant columns from data1
    data2 = data1.drop(['Positive','Negative','Neutral','Compound'],axis=1)
    return data2

def processText(data):
    data_copy = data.copy()
    for i in range(len(data_copy.Comment)):
        data_copy.Comment[i] = text_processing(data_copy.Comment[i])
    return data_copy

#Replaces "positive", "negative" and "neurtal" by 2, 0 and 1
def assignSentimentValues(data_copy):
    le = LabelEncoder()
    data_copy['Sentiment'] = le.fit_transform(data_copy['Sentiment'])
    return data_copy

#Create processed_data
def processData(data_copy):
    processed_data = {
        'Sentence':data_copy.Comment,
        'Sentiment':data_copy['Sentiment']
    }

    processed_data = pd.DataFrame(processed_data)
    return processed_data

#Creates Final_data
def createFinal_data(processed_data):
    maxNumSpecificTypeofComment = max(processed_data['Sentiment'].value_counts().values.tolist())

    df_neutral = processed_data[(processed_data['Sentiment']==1)] 
    df_negative = processed_data[(processed_data['Sentiment']==0)]
    df_positive = processed_data[(processed_data['Sentiment']==2)]

    # upsample minority classes
    df_negative_upsampled = resample(df_negative, replace=True, n_samples= maxNumSpecificTypeofComment, random_state=42)  
    df_neutral_upsampled = resample(df_neutral, replace=True, n_samples= maxNumSpecificTypeofComment, random_state=42)  

    # Concatenate the upsampled dataframes with the neutral dataframe
    final_data = pd.concat([df_negative_upsampled,df_neutral_upsampled,df_positive])
    return final_data

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

def createGaussianNBModelAndGetAccuracy(X, y):
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=0)
    classifier = GaussianNB()
    classifier.fit(X_train, y_train)
    pickle.dump(classifier, open('commentsClassifier.pkl', 'wb'))
    y_pred = classifier.predict(X_test)
    cm = confusion_matrix(y_test, y_pred)
    nb_score = accuracy_score(y_test, y_pred)
    print('accuracy',nb_score)

#################################################################################################################
#Main Functions 

#Creates sentiment strenghts for each comment
def TrainModel(trainingDataFile):
    #Drops unimportant columns from data
    data1 = cleanData(trainingDataFile)
    
    #GetSentiments
    data2 = addSentiment(data1)

    #Processes comments
    data_copy = processText(data2)

    #Replaces "positive", "negative" and "neurtal" by 2, 0 and 1
    data_copy = assignSentimentValues(data_copy)

    #Create processed_data
    processed_data = processData(data_copy)
    
    #Create final_data
    final_data = createFinal_data(processed_data)

    #corpus contains just the sentences
    corpus = createCorpus(final_data)

    #Vectorizes corpus
    X = vectorizeCorpus(corpus)

    #Get y values associated with sentiment analyzer
    y = final_data.iloc[:, -1].values

    #Gaussian Naive Base model created
    createGaussianNBModelAndGetAccuracy(X, y)

#################################################################################################################
#Inputs

trainingDataFile = 'comments.csv'

#################################################################################################################
#Main Code

TrainModel(trainingDataFile)