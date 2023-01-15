import * as constants from "./constants";

export function getQuestions(course) {
    //Get topics from course
    const topics = constants.TOPICS;
    
    return topics.map((topic) => {
        return "How comfortable are you with " + topic + "?";
    });
}