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
                <div class="row">
                    <div class="bioImg">
                        <img src = {glen} class="inset" alt = "Glen Picture" width = "100"></img>
                    </div>
                    <div class="bioText">
                        <h2>
                            Glen Tsui
                        </h2>
                        Glen Tsui is a Computer Engineering student from McMaster University. The PreLearn project was first created from the group's brainstorming at Deltahacks IX.
                        Over the course of 24 hours, the PreLearn tool was born.
                    </div>
                </div>
                <div class="row">
                    <div class="bioImg">
                        <img src = {az} class="inset" alt = "Azriel Picture" width = "100"></img>
                    </div>
                    <div class="bioText">
                        <h2>
                            Azriel Gingoyon
                        </h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
                <div class="row">
                    <div class="bioImg">
                        <img src = {sanju} class="inset" alt = "Sanjula Picture" width = "100"></img>
                    </div>
                    <div class="bioText">
                        <h2>
                            Sanjula Ganepola
                        </h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
                <div class="row">
                    <div class="bioImg">
                        <img src = {matt} class="inset" alt = "Matthew Picture" width = "100"></img>
                    </div>
                    <div class="bioText">
                        <h2>
                            Matthew Badal-Badalian
                        </h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  );
}

export default AboutUs;
