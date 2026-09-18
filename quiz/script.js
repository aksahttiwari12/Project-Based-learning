import { quizData } from "./data.js";
let currentQuestionIndex = 0;
let score = 0;

function loadquestion() {
    const currentquestion = quizData[currentQuestionIndex];
    document.getElementById("question").textContent = currentquestion.question;
    document.querySelector('label[for="option1"]').textContent = currentquestion.a;
    document.querySelector('label[for="option2"]').textContent = currentquestion.b;
    document.querySelector('label[for="option3"]').textContent = currentquestion.c;
    document.querySelector('label[for="option4"]').textContent = currentquestion.d;
}

loadquestion();

document.getElementById("Submit").addEventListener("click", function () {
    let ans = document.querySelector('input[name="answer"]:checked');
    const currentQuestion = quizData[currentQuestionIndex];
    if (!ans) {
        document.getElementById("result").textContent = "Please select an option";
    }
    else if (ans.value == currentQuestion.correct) {
        document.getElementById("result").textContent = "Correct!";
        score++;
        currentQuestionIndex++;
    }
    else {
        document.getElementById("result").textContent = "Wrong!";
        currentQuestionIndex++;
    }
    if(currentQuestionIndex < quizData.length){
        loadquestion();
    }
    else{
        document.getElementById("result").textContent = `Your score is ${score} out of ${quizData.length}`;
    }
})

document.querySelectorAll('input[name="answer"]').forEach((input) => {
  input.checked = false;
});

