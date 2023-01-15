import { useState } from "react";
import * as constants from "./utils/constants";
import Home from "./components/Home";
import Questions from "./components/Questions";
import Results from "./components/Results";
import AboutUs from "./components/AboutUs";
import './styles/App.css';
import logo from "./assets/logo.png"

function App() {
  const [currentCourse, setCurrentCourse] = useState(
    undefined
  );
  const [currentPageTab, setCurrentPageTab] = useState(
    constants.PAGES.HOME
  );
  const [currentQuestion, setCurrentQuestion] = useState(
    0
  );

  return (
    <div>
      <div class = "header">
        <div class="logo">
          <a onClick={() => {setCurrentPageTab(constants.PAGES.HOME);}}>
            <h1>
              <img src = {logo} alt = "PreLearn Logo" width = "50"></img>
              PreLearn
            </h1>
          </a>
        </div>
        <div class = "main-menu">
          <ul>
          <li><a onClick={() => {setCurrentPageTab(constants.PAGES.HOME);}}>Home</a></li>
            <li><a onClick={() => {setCurrentPageTab(constants.PAGES.ABOUTUS);}}>About Us</a></li>
          </ul>
        </div>
      </div>
      {currentPageTab === constants.PAGES.HOME && (
        <Home setCurrentPageTab={setCurrentPageTab} setCurrentCourse={setCurrentCourse}/>
      )}
      
      {currentPageTab === constants.PAGES.QUESTIONS && (
        <Questions setCurrentPageTab={setCurrentPageTab} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} currentCourse={currentCourse}/>
      )}
      
      {currentPageTab === constants.PAGES.RESULTS && (
        <Results setCurrentPageTab={setCurrentPageTab} currentCourse={currentCourse}/>
      )}

      {currentPageTab === constants.PAGES.ABOUTUS && (
        <AboutUs setCurrentPageTab={setCurrentPageTab}/>
      )}
    </div>
  );
}

export default App;
