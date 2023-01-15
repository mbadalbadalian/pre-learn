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
                    <img src = {az} alt = "Azriel Picture" width = "150"></img>
                </div>
                <div class="bioText">
                    <h2>
                        Azriel Gingoyon
                    </h2>
                    Azriel is currently completing his fifth and final year of his undergraduate Mechatronics Engineering program having accumulated many experiences and skills in robotics, embedded systems, programming, circuits, and CAD (Computer Aided Design).                    </div>
            </div>
                <div class="row">
                    <div class="bioImg">
                        <img src = {glen} alt = "Glen Picture" width = "150"></img>
                    </div>
                    <div class="bioText">
                        <h2>
                            Glen Tsui
                        </h2>
                        Glen Tsui is a Computer Engineering student from McMaster University. When he isn't studying or working, he would enjoy going out for walks, playing the piano, and participating in hackathons. The PreLearn project was first created from the group's brainstorming at Deltahacks IX.
                        Over the course of 24 hours, the PreLearn tool was born. Glen is proud of the progress made and the valuable experience gained from this competition. Most importantly, the world is one step further in making education more accessible and equitable for all students.
                    </div>
                </div>
                
                <div class="row">
                    <div class="bioImg">
                        <img src = {matt} alt = "Matthew Picture" width = "150"></img>
                    </div>
                    <div class="bioText">
                        <h2>
                            Matthew Badal-Badalian
                        </h2>
                        As a 5th year undergraduate student at McMaster Electrical Engineering, I am currently developing foundations in electronic circuits, electromagnetics, communication theory, signal processing, power systems and machine learning. I aspire to earn a Master in Data Science so that I can work towards becoming a Data Engineer.
                    </div>
                </div>
                <div class="row">
                    <div class="bioImg">
                        <img src = {sanju} alt = "Sanjula Picture" width = "150"></img>
                    </div>
                    <div class="bioText">
                        <h2>
                            Sanjula Ganepola
                        </h2>
                        I am currently a fourth-year student at McMaster University studying Software Engineering and Management. I have experience using Java, Python, C, SQL, and I have explored areas including object-oriented design, data structures, database design, software requirements, security, and testing.
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  );
}

export default AboutUs;
