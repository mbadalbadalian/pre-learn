import { useState } from "react";
import * as constants from "./utils/constants";
import Home from "./components/Home";
import Questions from "./components/Questions";
import Results from "./components/Results";
import AboutUs from "./components/AboutUs";
import './styles/App.css';

function App() {
  const [currentPageTab, setCurrentPageTab] = useState(
    constants.PAGES.HOME
  );
  const [currentQuestion, setCurrentQuestion] = useState(
    0
  );

  return (
    <div>
      {currentPageTab === constants.PAGES.HOME && (
        <Home setCurrentPageTab={setCurrentPageTab}/>
      )}
      
      {currentPageTab === constants.PAGES.QUESTIONS && (
        <Questions setCurrentPageTab={setCurrentPageTab} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}/>
      )}
      
      {currentPageTab === constants.PAGES.RESULTS && (
        <Results currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}/>
      )}

      {currentPageTab === constants.PAGES.ABOUTUS && (
        <AboutUs setCurrentPageTab={setCurrentPageTab}/>
      )}
    </div>
  );
}

export default App;
