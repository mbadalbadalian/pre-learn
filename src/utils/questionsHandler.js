import * as constants from "./constants";

let total = 0;

export function getQuestions(course) {
    //Get topics from course
    const topics = constants.TOPICS;

    total = 4 * topics.length;

    return topics.map((topic) => {
        return "How comfortable are you with " + topic.name + "?";
    });
}

export function setQuestionScore(index, score) {
    constants.TOPICS[index].score = score;
}

export function getScore() {
    total = 4 * constants.TOPICS.length;

    let sum=0;
    constants.TOPICS.forEach((topic) => {
        sum += topic.score;
    })

    return sum + "/" + total;
}