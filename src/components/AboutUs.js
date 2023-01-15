import '../styles/Home.css';
import * as constants from "../utils/constants";
import glen from "../assets/glen.jpg"
import az from "../assets/az.jpg"
import matt from "../assets/matt.jpg"
import sanju from "../assets/sanju.jpg"


function AboutUs({ setCurrentPageTab }) {
  return (
    <div class = "main">
        <div class="pencil">
            <h1>
                    From students, by students
            </h1>
            <p>
                We're a small team of aspiring engineers focused on empowering students to take a step further in their education.
                As students ourselves, we've worked hard to build a tool that aims to help our fellow comrades organize their learning material, create better study plans, and get the most out of their educational experiences.
            </p>
            <div class="biography">
                <div class="bioImg">
                    <img src = {glen} alt = "Glen Picture" width = "50"></img>
                </div>
                <div class="bioText">
                    Biography in progress..
                </div>
                <div class="bioImg">
                    <img src = {az} alt = "Azriel Picture" width = "50"></img>
                </div>
                <div class="bioText">
                    Biography in progress..
                </div>
                <div class="bioImg">
                    <img src = {matt} alt = "Matt Picture" width = "50"></img>
                </div>
                <div class="bioText">
                    Biography in progress..
                </div>
                <div class="bioImg">
                    <img src = {sanju} alt = "Sanjula Picture" width = "50"></img>
                </div>
                <div class="bioText">
                    Biography in progress..
                </div>
            </div>
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
