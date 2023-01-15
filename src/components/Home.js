import '../styles/Home.css';
import * as constants from "../utils/constants";
import robot from "../assets/robot.png"
import computer from "../assets/computer.png"
import chart from "../assets/chart.png"

function Home({ setCurrentPageTab, setCurrentCourse, setCurrentQuestion }) {
  constants.TOPICS.forEach(topic => {
      topic.score = 0;
      topic.videos = [];
      topic.comments = [];
  });
  setCurrentQuestion(0);

  return (
    <div class = "main">
      <div class="container">
        <h1>
          Make you sure you know everything that is needed to know for your course!
        </h1>
        <ul>
          <li>Acts a refresher to fundamental concepts required for the course</li>
          <li>Presenting topics you need to know for the course by looking at prerequisites</li>
          <li>Information about the course, course ratings, professor ratings, course difficulty</li>
        </ul>
        <h2>
          Enter your course code below!
        </h2>
        <div class="searchBarBtn">
          <form action="" class="search-bar">
            <input onChange={(e) => { setCurrentCourse(e.target.value) }} name="search" pattern=".*\S.*" required></input>
            <button class="search-btn" type="submit" onClick={() => {
            setCurrentPageTab(constants.PAGES.QUESTIONS);}}>
              <span>Search</span>
            </button>
          </form>
        </div>
        
      </div>
      <div class="techs">
            <div class="column">
                <div class="techImg">
                  <img src={computer} alt = "Computer Icon" width = "100"></img>
                </div>
              <h2>
                Fetch relevant concepts from course directory
              </h2>
              Using the course code from user input, PreLearn fetches and extracts the course data to find relevant fundamental concepts.
            </div>
            <div class="column">
              <div class="techImg">
                <img src={robot} alt = "Robot Icon" width = "100"></img>
              </div>
              <h2>
                ML sorts the learning videos by most positively reviewed
              </h2>
              Trained on Sentiment Analysis, the algorithm uses the Gaussian naive base model to sort the videos by the most positive comments for each concept.
            </div>
            <div class="column">
              <div class="techImg">
              <img src={chart} alt = "Chart Icon" width = "80"></img>
              </div>


              <h2>
                Displays a score based on their understanding
              </h2>
              With the final score result, the user can determine their readiness for the course, and be presented with the best learning videos for concepts requiring further improvement.
            </div>
        
      </div>
    </div>
    
  );
}

export default Home;
