import '../styles/Home.css';
import * as constants from "../utils/constants";

function Home({ setCurrentPageTab, course }) {
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
        <form action="" class="search-bar">
          <input type="search" name="search" pattern=".*\S.*" required></input>
          <button class="search-btn" type="submit">
            <span>Search</span>
          </button>
        </form>
        <input defaultValue="Insert Course" onChange={(e) => { course = e.target.value }}></input>

        <button onClick={() => {
          setCurrentPageTab(constants.PAGES.QUESTIONS);
        }}> Submit</button>

      </div>
    </div>
    
  );
}

export default Home;
