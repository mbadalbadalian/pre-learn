import * as constants from "../utils/constants";
import * as questionsHandler from "../utils/questionsHandler";
import '../styles/Questions.css';

function Questions({ setCurrentPageTab, currentQuestion, setCurrentQuestion, course }) {
  function nextQuestion() {
    if (currentQuestion + 1 === constants.TOPICS.length) {
      setCurrentPageTab(constants.PAGES.RESULTS);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  return (
    <div class = "wrapper">
      <h1>
        Question {currentQuestion + 1}
      </h1>
      <div class = "question">
        {questionsHandler.getQuestions(course)[currentQuestion]}
      </div>
     
      <p>
        <button onClick={() => {
          nextQuestion()
        }}> 1</button><button onClick={() => {
          nextQuestion()
        }}> 2</button><button onClick={() => {
          nextQuestion()
        }}> 3</button><button onClick={() => {
          nextQuestion()
        }}> 4</button>
      </p>
    </div>
  );
}

export default Questions;
