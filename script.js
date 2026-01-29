let questions = [
  {
    question: "Was bedeutet die Abkürzung HTML?",
    answer_1: "HyperText Markup Language",
    answer_2: "HighText Machine Language",
    answer_3: "Hyperlink and Text Management Language",
    answer_4: "Home Tool Markup Language",
    right_answer: 1,
  },
  {
    question: "Mit welchem HTML-Tag wird eine JavaScript-Datei eingebunden?",
    answer_1: "<java>",
    answer_2: "<js>",
    answer_3: "<script>",
    answer_4: "<link>",
    right_answer: 3,
  },
  {
    question:
      "Welche CSS-Eigenschaft wird verwendet, um die Hintergrundfarbe zu ändern?",
    answer_1: "color",
    answer_2: "background-color",
    answer_3: "bgcolor",
    answer_4: "fill-color",
    right_answer: 2,
  },
  {
    question:
      "Wie deklariert man in modernem JavaScript (ES6) eine Variable, die nicht verändert werden soll?",
    answer_1: "var",
    answer_2: "let",
    answer_3: "set",
    answer_4: "const",
    right_answer: 4,
  },
  {
    question: "Welches Zeichen wird in CSS verwendet, um eine ID auszuwählen?",
    answer_1: ".",
    answer_2: "#",
    answer_3: "*",
    answer_4: "&",
    right_answer: 2,
  },
  {
    question:
      "Wie schreibt man 'Hallo Welt' in einem Alert-Fenster in JavaScript?",
    answer_1: "msg('Hallo Welt');",
    answer_2: "console.log('Hallo Welt');",
    answer_3: "alert('Hallo Welt');",
    answer_4: "prompt('Hallo Welt');",
    right_answer: 3,
  },
  {
    question: "Welches HTML-Element ist für die größte Überschrift vorgesehen?",
    answer_1: "<h6>",
    answer_2: "<head>",
    answer_3: "<heading>",
    answer_4: "<h1>",
    right_answer: 4,
  },
  {
    question: "Wie fügt man in CSS einen Kommentar ein?",
    answer_1: "// Kommentar //",
    answer_2: "/* Kommentar */",
    answer_3: "",
    answer_4: "' Kommentar",
    right_answer: 2,
  },
  {
    question: "Was ist das Ergebnis von: console.log(typeof []);",
    answer_1: "'array'",
    answer_2: "'list'",
    answer_3: "'object'",
    answer_4: "'undefined'",
    right_answer: 3,
  },
  {
    question:
      "Welche JavaScript-Methode wird verwendet, um ein Element über seine ID im DOM zu finden?",
    answer_1: "document.getElementByClass()",
    answer_2: "document.queryID()",
    answer_3: "document.getElementById()",
    answer_4: "document.find()",
    right_answer: 3,
  },
];

let currentQuestion = 0;

function init() {
  document.getElementById("all-questions").innerHTML = questions.length;

  showQuestions();
}

function showQuestions() {
  let question = questions[currentQuestion];

  document.getElementById("question-number").innerHTML = currentQuestion + 1;
  document.getElementById("questiontext").innerHTML = question["question"];
  document.getElementById("answer_1").innerText = question["answer_1"];
  document.getElementById("answer_2").innerText = question["answer_2"];
  document.getElementById("answer_3").innerText = question["answer_3"];
  document.getElementById("answer_4").innerText = question["answer_4"];
}
Text;
function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);
  let idOfRightAnswer = `answer_${question["right_answer"]}`;

  if (selectedQuestionNumber == question["right_answer"]) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
  }
  document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById("next-button").disabled = true;
  resetAnswerButtons();
  showQuestions();
}

function resetAnswerButtons() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}
