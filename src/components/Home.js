import '../styles/Home.css';
import * as constants from "../utils/constants";

function Home({ setCurrentPageTab, setCurrentCourse }) {
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
        <form action="" class="search-bar">
          <input onChange={(e) => { setCurrentCourse(e.target.value) }} name="search" pattern=".*\S.*" required></input>
          <button class="search-btn" type="submit" onClick={() => {
          setCurrentPageTab(constants.PAGES.QUESTIONS);}}>
            <span>Search</span>
          </button>
        </form>
      </div>
      <div class="techs">

        
      </div>
    </div>
    
  );
}

export default Home;
