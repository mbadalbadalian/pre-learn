import '../styles/Home.css';
import * as constants from "../utils/constants";
import logo from "../assets/logo.png"


function AboutUs({ setCurrentPageTab }) {
  return (
    <div class = "main">
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
            <li><a onClick={() => {setCurrentPageTab(constants.PAGES.ABOUTUS);}}>About Us</a></li>
          </ul>
        </div>
      </div>
      
      <div class="container">
        <h1>
            Here is the team:
        </h1>
        <ul>
          <li>Team Member 1</li>
          <li>Team Member 2</li>
        </ul>
        <input value="Insert Course"></input>

        <button onClick={() => {
          setCurrentPageTab(constants.PAGES.QUESTIONS);
        }}> Submit</button>

      </div>
    </div>
    
  );
}

export default AboutUs;
