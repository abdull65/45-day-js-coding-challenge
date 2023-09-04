// Define an array of quiz questions, each with an id, question, and answer
const quizQuestion = [
  {
    id: 1,
    question: "What does HTML stand for?",
    answer: "HyperText Markup Language",
  },
  // ... (similar entries for other quiz questions)
];

// Create an empty array to store user-selected answers
const userAnsArr = [];

// Loop through the quiz questions array to set up the quiz interface
quizQuestion.forEach((question) => {
  // Get a reference to the HTML element with the class "quizContent"
  const quizContent = document.querySelector(".quizContent");

  // Get a reference to the HTML element with the class "questionsUl"
  const questionsUl = document.querySelector(".questionsUl");

  // Create a new list item element to display the question
  const questionLi = document.createElement("li");

  // Create a new input element for the user's answer
  const userAns = document.createElement("input");

  // Set the text of the list item to the current question
  questionLi.innerHTML = question.question;

  // Append the user's answer input element to the list item
  questionLi.append(userAns);

  // Append the list item to the list of questions
  questionsUl.appendChild(questionLi);

  // Add an event listener to the user's answer input
  userAns.addEventListener("input", () => {
    // Store the user's answer in the userAnsArr array at the corresponding question id
    userAnsArr[question.id] = userAns.value;

    // Check if any of the user's answers match the correct answers in the quizQuestion array
    const isCorrect = quizQuestion.some((quiz) => {
      // Compare the user's answer (as a string) to the correct answer
      return userAnsArr[quiz.id] === quiz.answer;
    });

    // Print "correct" or "wrong" to the console based on the result
    if (isCorrect) {
      console.log("correct");
    } else {
      console.log("wrong");
    }
  });
});
