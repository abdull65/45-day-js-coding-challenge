const quizQuestion = [
  {
    id: 1,
    question: "What is my name?",
    answer: "Abdullahi",
  },
  {
    id: 2,
    question: "what is 10 + 5",
    answer: 15,
  },
];
const userAnsArr = [];

quizQuestion.forEach((question) => {
  const quizContent = document.querySelector(".quizContent");
  const questionsUl = document.querySelector(".questionsUl");
  const questionLi = document.createElement("li");
  const userAns = document.createElement("input");
  questionLi.innerHTML = question.question;
  questionLi.append(userAns);
  questionsUl.appendChild(questionLi);
  userAns.addEventListener("input", () => {
    userAnsArr[question.id] = userAns.value;
    const isCorrect = quizQuestion.some((quiz) => {
      return parseInt(userAnsArr[quiz.id]) == quiz.answer;
    });
    if (isCorrect) {
      console.log("correct");
    } else {
      console.log("wrong");
    }
  });
});
