#################################################################################################################
#Libraries 
import openai, math
import pandas as pd 
import numpy as np

#################################################################################################################
#Secondary Functions 

def generateResponse(conceptsInputs):
    # Get user input
    question = "What are some key concepts I need to know about "+conceptsInputs[0]+"?"
    questionNumTokens = math.ceil(len(question)/4)

    # Use the OpenAI API to query ChatGPT
    response = openai.Completion.create(engine="text-davinci-002", prompt=(question), max_tokens=4097-questionNumTokens, n = 1, stop=None, temperature=0.5)
    response = response["choices"][0]["text"]
    return response

#################################################################################################################
#Main Functions 

def GenerateAllResponses(listOfConceptsInputs):
    #api_key
    openai.api_key = "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"
    listOfResponses = []
    for conceptInput in listOfConceptsInputs:
        response = generateResponse(conceptInput)
        listOfResponses.append(response)
    columnList = ['Questions','Answers']
    zero_data = np.zeros(shape=(len(listOfConceptsInputs),len(columnList)))
    allResponses_DF = pd.DataFrame(zero_data, columns = ['Questions','Answers'])
    allResponses_DF['Questions'] = listOfConceptsInputs
    print("hi")
    allResponses_DF['Answers'] = listOfResponses
    print(listOfResponses)
    return allResponses_DF

        

#################################################################################################################
#Inputs

listOfConceptsInputs = ['Waves','Signals','Fourier Analysis']

#################################################################################################################
#Main Code

allResponses_DF = GenerateAllResponses(listOfConceptsInputs)