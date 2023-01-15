import '../styles/Home.css';
import * as constants from "../utils/constants";

function AboutUs({ setCurrentPageTab }) {
  return (
    <div class = "main">
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
