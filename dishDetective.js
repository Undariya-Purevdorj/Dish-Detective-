let userQuestion = 0;
let userScore = 0;
let userTime = 15;
let timer;
let shuffledUserQuestions = [];

// All the quiz elements
const startButtonUser = document.getElementById("startButton");
const quizContentUser = document.getElementById("quizContent");
const questionUser = document.getElementById("question");
const optionLeftSide = document.getElementById("leftSide");
const optionRightSide = document.getElementById("rightSide");
const feedbackUser = document.getElementById("popUp");
const summaryUser = document.getElementById("summary");
const finalScoreUser = document.getElementById("userScore");
const hintButtonUser = document.getElementById("hintButton");
const timeLeftUser = document.getElementById("remainingTime");
const tryAgainUser = document.getElementById("tryAgain");

// This is the event listener for when the "Start" button is clicked
startButtonUser.onclick = () => {
    startButtonUser.style.display = "none";
    quizContentUser.style.display = "block";
    timeLeftUser.parentElement.style.display = "block"; // Show timer when quiz starts
    myFunction1();
};

// This initializes the quiz setup by resetting score and question index
function myFunction1() {
    userQuestion = 0;
    userScore = 0;
    summaryUser.style.display = "none";
    fetch('/api/questions')
        .then(response => response.json())
        .then(data => {
            shuffledUserQuestions = data;
            myFunction2();
        })
        .catch(error => console.error('Error fetching questions:', error));
}

// This display the current question and options
function myFunction2() {
    const q = shuffledUserQuestions[userQuestion];
    feedbackUser.style.display = "none";
    optionRightSide.innerHTML = "";
    optionLeftSide.innerHTML = "";

    if (q.image) {
        questionUser.innerHTML = `${q.question}<br><img src="${q.image}" alt="Dish Image">`;
    } else {
        questionUser.innerHTML = q.question;
    }

    // Hint appears for the first two questions only
    if (userQuestion < 2) {
        hintButtonUser.style.display = "block";
        hintButtonUser.onclick = () => alert("Think carefully! Historical context? Name? Origins?...");
    } else {
        hintButtonUser.style.display = "none";
    }

    // This shuffles and displays options as buttons
    const shuffledOptions = shuffle([...q.options]);
    shuffledOptions.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => myFunction3(option, q.correct);
        if (index % 2 === 0) {
            optionLeftSide.appendChild(button);
        } else {
            optionRightSide.appendChild(button);
        }
    });

    // This resets and starts the timer
    userTime = 15;
    timeLeftUser.textContent = userTime;
    clearInterval(timer);
    timer = setInterval(() => {
        userTime--;
        timeLeftUser.textContent = userTime;
        if (userTime <= 0) {
            clearInterval(timer);
            myFunction4(false, q.correct);
        }
    }, 1000);
}

// This validates the selected answer and handles feedback
function myFunction3(selected, correct) {
    clearInterval(timer);
    const isCorrect = selected === correct; // Validate locally
    if (isCorrect) {
        userScore++;
        myFunction4(true, correct);
    } else {
        myFunction4(false, correct);
    }
}

// This shows feedback based on answer (whether correc or not)
function myFunction4(isCorrect, correct) {
    feedbackUser.style.display = "block";
    optionLeftSide.innerHTML = "";
    optionRightSide.innerHTML = "";
    hintButtonUser.style.display = "none";

    if (isCorrect) {
        feedbackUser.textContent = userQuestion < 2 ? "Yummy!" : "Correct!";
        feedbackUser.className = "correct";
    } else {
        feedbackUser.textContent = userQuestion < 2 ? "Oh dang..." : "Incorrect";
        feedbackUser.className = "incorrect";
        feedbackUser.innerHTML += `<br>Correct answer: ${correct}`;
    }

    setTimeout(() => {
        userQuestion++;
        if (userQuestion < shuffledUserQuestions.length) {
            myFunction2();
        } else {
            myFunction6();
        }
    }, 2000);
}

// This displays the final score and summary after all questions are answered
function myFunction6() {
    questionUser.innerHTML = "";
    optionLeftSide.innerHTML = "";
    optionRightSide.innerHTML = "";
    feedbackUser.style.display = "none";
    summaryUser.style.display = "block";
    // Hide timer at the end
    timeLeftUser.parentElement.style.display = "none"; 
    finalScoreUser.textContent = `You answered ${userScore} out of ${shuffledUserQuestions.length} correctly! ${userScore >= shuffledUserQuestions.length / 2 ? "Well done!" : "Better Luck Next Time~"}`;
}

// This is the event listener for when the "Try Again" button is clicked
tryAgainUser.onclick = () => {
    startButtonUser.style.display = "block";
    quizContentUser.style.display = "none";
    // Hide timer when quiz restarts
    timeLeftUser.parentElement.style.display = "none"; 
    myFunction1();
};

// This is to shuffle an array (to randomize question options)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

