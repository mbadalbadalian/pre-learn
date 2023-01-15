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
        <Home setCurrentPageTab={setCurrentPageTab} setCurrentCourse={setCurrentCourse} setCurrentQuestion={setCurrentQuestion}/>
      )}
      
      {currentPageTab === constants.PAGES.QUESTIONS && (
        <Questions setCurrentPageTab={setCurrentPageTab} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} currentCourse={currentCourse}/>
      )}
      
      {currentPageTab === constants.PAGES.RESULTS && (
        <Results setCurrentPageTab={setCurrentPageTab} />
      )}

      {currentPageTab === constants.PAGES.ABOUTUS && (
        <AboutUs setCurrentPageTab={setCurrentPageTab} setCurrentQuestion={setCurrentQuestion}/>
      )}
      <div class = "footer">
        <div class = "footer-menu">
          <ul>
            <li><a onClick={() => {setCurrentPageTab(constants.PAGES.HOME);}}>Home</a></li>
            <li><a onClick={() => {setCurrentPageTab(constants.PAGES.ABOUTUS);}}>About Us</a></li>
          </ul>
          <p>
            1280 Main St W, Hamilton, ON L8S 4L8
          </p>
          <p>
            © 2023 PreLearn. All rights reserved.
          </p>
          
        </div>
      </div>
      
    </div>
  );
}

export default App;
