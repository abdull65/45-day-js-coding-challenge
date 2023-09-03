const quizQuestion = [
  {
    id: 1,
    question: "What does HTML stand for?",
    answer: "HyperText Markup Language",
  },
  {
    id: 2,
    question: "Which HTML tag is used for creating a hyperlink?",
    answer: "<a>",
  },
  {
    id: 3,
    question: "What is the purpose of the &lt;img&gt; tag in HTML?",
    answer: "To display images on a web page",
  },
  {
    id: 4,
    question: "Which HTML tag is used for creating an ordered list?",
    answer: "<ol>",
  },
  {
    id: 5,
    question: "What does the &lt;br&gt; tag do in HTML?",
    answer: "It creates a line break or newline within text.",
  },
  {
    id: 6,
    question: "What is the HTML tag used for creating a table?",
    answer: "<table>",
  },
  {
    id: 7,
    question:
      "Which HTML tag is used for defining the structure of an HTML document?",
    answer: "<html>",
  },
  {
    id: 8,
    question: "What is the purpose of the &lt;head&gt; element in HTML?",
    answer: "To contain meta-information about the document",
  },
  {
    id: 9,
    question:
      "Which HTML tag is used for creating a list item in an unordered list?",
    answer: "<li>",
  },
  {
    id: 10,
    question: "What is the HTML tag used for creating a line break?",
    answer: "<br>",
  },
  {
    id: 11,
    question: "What is the purpose of the &lt;div&gt; element in HTML?",
    answer: "To group and style content",
  },
  {
    id: 12,
    question:
      "Which HTML tag is used for defining the main content of a document?",
    answer: "<main>",
  },
  {
    id: 13,
    question: "What does the &lt;p&gt; tag stand for in HTML?",
    answer: "Paragraph",
  },
  {
    id: 14,
    question: "Which HTML tag is used for creating a form?",
    answer: "<form>",
  },
  {
    id: 15,
    question: "What is the purpose of the &lt;input&gt; element in HTML forms?",
    answer: "To collect user input",
  },
  // You now have a total of 15 HTML-related questions and answers.
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
