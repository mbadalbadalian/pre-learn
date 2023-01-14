import * as constants from "../utils/constants";

function Questions({ setCurrentPageTab, currentQuestion, setCurrentQuestion }) {
  function nextQuestion() {
    if (currentQuestion + 1 === constants.QUESTIONS.length) {
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
      {constants.QUESTIONS[currentQuestion]}
      <p>
        <button onClick={() => {
        }}> 1</button>
        <button onClick={() => {
          nextQuestion()
        }}> 2</button><button onClick={() => {
          nextQuestion()
        }}> 3</button><button onClick={() => {
          nextQuestion()
        }}> 4</button><button onClick={() => {
          nextQuestion()
        }}> 5</button>
      </p>
    </div>
  );
}

export default Questions;
