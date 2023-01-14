import * as constants from "../utils/constants";

function Home({ setCurrentPageTab }) {
  return (
    <div>
      <h1>
        PreLearn?
      </h1>
      <ul>
        Acts a refresher to fundamental concepts required for the course
        Presenting topics you need to know for the course by looking at prerequisites
        Information about the course, course ratings, professor ratings, course difficulty
      </ul>
      <input value="Insert Course"></input>

      <button onClick={() => {
        setCurrentPageTab(constants.PAGES.QUESTIONS);
      }}> Submit</button>

    </div>
  );
}

export default Home;
