import * as constants from "../utils/constants";
import * as questionsHandler from "../utils/questionsHandler";

function Questions({ setCurrentPageTab, currentQuestion, setCurrentQuestion, course }) {
  function nextQuestion(score) {
    questionsHandler.setQuestionScore(currentQuestion, score);

    if (currentQuestion + 1 === constants.TOPICS.length) {
      setCurrentPageTab(constants.PAGES.RESULTS);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  return (
    <div>
      <h1>
        Question {currentQuestion + 1}
      </h1>
      {questionsHandler.getQuestions(course)[currentQuestion]}
      <p>
        <button onClick={() => {
          nextQuestion(1)
        }}> 1</button>

        <button onClick={() => {
          nextQuestion(2)
        }}> 2</button>

        <button onClick={() => {
          nextQuestion(3)
        }}> 3</button>

        <button onClick={() => {
          nextQuestion(4)
        }}> 4</button>
      </p>
    </div>
  );
}

export default Questions;
