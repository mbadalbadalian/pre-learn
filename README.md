# PreLearn
<img src="./src/assets/homepage.png" alt="PreLearn Homepage" width="500"/>

## Inspiration
Our team had a focus on the following challenges: Most Innovative Use of Machine Learning, Artificial Intelligence, or Internet of Things Best Education Hack Best Visual Design Hack

Finding combinations of these challenges resulted us in brainstorming well-designed machine learning applications that promotes learning or revolutionizes education. Through our discussion, we all experienced a common scenario in our courses where you must have a perfect understanding of the prerequisite material in order to succeed in that course. More often than not, most students do forget a lot of required key concepts in between study terms. PreLearn is intended to tackle this problem.

## What it does
PreLearn accepts a course code or course name as input from the user, and it fetches relevant concepts from the course directory website. The PreLearn webpage will ask the user a series of questions to understand their familiarity with these concepts. This will give the system an idea on what areas this student might need to improve to succeed in the course. When the fundamental concepts are retrieved, a machine learning model trained on sentimental analysis determines the best learning videos to review those concepts. This will be determined by sorting the top videos of a list by the number of determined positive responses in the comments using the machine learning algorithm. The final result will show the user their readiness score and display the best learning videos and descriptions for concepts requiring further improvement.

## How we built it
The web scraper tool is built in JavaScript to extract the key concepts of an inputted course. Sentimental analysis was applied on the model to obtain the true labels, later used to verify the model itself. The text was processed and encoded to make the algorithm more efficient. The values were classified using the Gaussian naive base model and was verified by producing a confusion matrix to create a high accuracy score. The PreLearn webpage is built in React along with HTML, CSS, and JavaScript to gather the input course, and display videos based on the user's understanding of core concepts that was gathered and sorted by the ML algorithm.

## Challenges we ran into
Our team mainly has experience in mobile app dev, but we wanted this competition to be a learning experience. Our learning curve on JavaScript and React was slow, but we allocated our roles early to become knowledgeable in the different technologies we had to use. A lot of time was poured into the design iterations and how we would use our tools to deliver an end result that fulfills the challenges. We had trouble with implementing web scraping on McMaster's Course Calendar website. The end result was not what we expected when using a variety of javaScript functions, namely Puppeteer, JSDOM, and Axios.

## Accomplishments that we're proud of
Since we were each assigned a role in each stage of the project, we were most proud of our dedication towards completing our part. With the goal of combining the project stages to form an ultimate education tool, we all pushed beyond our boundaries to try to become experts in our role and our tools. Although we felt we were a little short on time, we felt that we had accomplished a lot during our design and development processes.

## What we learned
On top of all the new technologies we had to be familiar with, our cooperation levels skyrocketed. We rarely ran into internal group conflict and learned to strive forward towards our goal. We also learned just how much fun a competitive learning environment can be with the right time and resources provided.

## What's next for PreLearn
There were a number of extra features planned for PreLearn, such as implementing chatGPT to generate descriptions or summaries for each video for each concept. We also planned on displaying useful information to the student about course details, course ratings, professor ratings, and course difficulty. We originally planned to extract this information through the web scraper tool, but due to the issues, we will prioritize this first step in functionality moving forward.
