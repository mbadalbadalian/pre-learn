#################################################################################################################
#Libraries 
import openai, math
import pandas as pd 

#################################################################################################################
#Secondary Functions 

def generateResponse(conceptInput):
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
    allResponses_DF = pd.DataFrame()
    allResponses_DF.columns = ['Questions','Answers']
    allResponses_DF['Questions'] = listOfConceptsInputs
    allResponses_DF['Answers'] = listOfResponses
    return allResponses_DF

        

#################################################################################################################
#Inputs

listOfConceptsInputs = ['Waves','Signals','Fourier Analysis']
