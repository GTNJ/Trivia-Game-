const QUESTIONS_PER_GAME = 10;
const TIME_PER_QUESTION = 10;

const triviaTopics = {
  "General Knowledge": {
    description: "A mix of famous facts, geography, and everyday knowledge.",
    questions: [
      { question: "Which planet is known as the Red Planet?", answers: ["Mars", "Venus", "Jupiter", "Mercury"], correctAnswer: "Mars" },
      { question: "How many continents are there on Earth?", answers: ["5", "6", "7", "8"], correctAnswer: "7" },
      { question: "What is the capital city of Australia?", answers: ["Sydney", "Canberra", "Melbourne", "Perth"], correctAnswer: "Canberra" },
      { question: "Which ocean is the largest?", answers: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], correctAnswer: "Pacific Ocean" },
      { question: "What gas do plants absorb from the atmosphere?", answers: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"], correctAnswer: "Carbon Dioxide" },
      { question: "How many days are there in a leap year?", answers: ["364", "365", "366", "367"], correctAnswer: "366" },
      { question: "Which instrument measures temperature?", answers: ["Barometer", "Thermometer", "Altimeter", "Compass"], correctAnswer: "Thermometer" },
      { question: "Which country gifted the Statue of Liberty to the United States?", answers: ["France", "Canada", "Italy", "Spain"], correctAnswer: "France" },
      { question: "Which language has the most native speakers worldwide?", answers: ["English", "Spanish", "Hindi", "Mandarin Chinese"], correctAnswer: "Mandarin Chinese" },
      { question: "Which metal is liquid at room temperature?", answers: ["Silver", "Mercury", "Iron", "Aluminum"], correctAnswer: "Mercury" },
    ],
  },
  Science: {
    description: "Physics, biology, chemistry, and a little space.",
    questions: [
      { question: "What is the chemical symbol for gold?", answers: ["Ag", "Au", "Gd", "Go"], correctAnswer: "Au" },
      { question: "What part of the cell contains genetic material?", answers: ["Nucleus", "Membrane", "Ribosome", "Vacuole"], correctAnswer: "Nucleus" },
      { question: "What force keeps planets in orbit around the sun?", answers: ["Magnetism", "Friction", "Gravity", "Pressure"], correctAnswer: "Gravity" },
      { question: "Which blood type is known as the universal donor?", answers: ["AB+", "O-", "A+", "B-"], correctAnswer: "O-" },
      { question: "What is the hardest natural substance on Earth?", answers: ["Quartz", "Diamond", "Granite", "Titanium"], correctAnswer: "Diamond" },
      { question: "How many bones does an adult human typically have?", answers: ["206", "186", "226", "196"], correctAnswer: "206" },
      { question: "What is H2O more commonly called?", answers: ["Salt", "Hydrogen Peroxide", "Water", "Oxygen"], correctAnswer: "Water" },
      { question: "Which planet has the most moons currently known?", answers: ["Jupiter", "Saturn", "Neptune", "Uranus"], correctAnswer: "Saturn" },
      { question: "What kind of energy is stored in food?", answers: ["Electrical", "Chemical", "Nuclear", "Solar"], correctAnswer: "Chemical" },
      { question: "What is the speed of light closest to?", answers: ["300,000 km/s", "30,000 km/s", "3,000 km/s", "3,000,000 km/s"], correctAnswer: "300,000 km/s" },
    ],
  },
  Math: {
    description: "Quick arithmetic, patterns, and number sense.",
    questions: [
      { question: "What is 12 x 8?", answers: ["88", "92", "96", "108"], correctAnswer: "96" },
      { question: "What is the square root of 144?", answers: ["10", "11", "12", "13"], correctAnswer: "12" },
      { question: "What is 15% of 200?", answers: ["20", "25", "30", "35"], correctAnswer: "30" },
      { question: "What is the value of pi rounded to two decimal places?", answers: ["3.12", "3.14", "3.16", "3.18"], correctAnswer: "3.14" },
      { question: "Which number is prime?", answers: ["21", "27", "29", "33"], correctAnswer: "29" },
      { question: "What is 9 squared?", answers: ["18", "72", "81", "99"], correctAnswer: "81" },
      { question: "What is 7/8 written as a decimal?", answers: ["0.75", "0.8", "0.875", "0.95"], correctAnswer: "0.875" },
      { question: "If a triangle has angles of 50 and 60 degrees, what is the third angle?", answers: ["60", "70", "80", "90"], correctAnswer: "70" },
      { question: "What is 1001 minus 457?", answers: ["534", "544", "554", "564"], correctAnswer: "544" },
      { question: "How many sides does a hexagon have?", answers: ["5", "6", "7", "8"], correctAnswer: "6" },
    ],
  },
  History: {
    description: "Big events, world leaders, and famous turning points.",
    questions: [
      { question: "Who was the first President of the United States?", answers: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"], correctAnswer: "George Washington" },
      { question: "In which year did World War II end?", answers: ["1943", "1945", "1948", "1950"], correctAnswer: "1945" },
      { question: "Which ancient civilization built Machu Picchu?", answers: ["Maya", "Roman", "Inca", "Aztec"], correctAnswer: "Inca" },
      { question: "Who discovered penicillin?", answers: ["Alexander Fleming", "Isaac Newton", "Louis Pasteur", "Marie Curie"], correctAnswer: "Alexander Fleming" },
      { question: "The Berlin Wall fell in which year?", answers: ["1987", "1989", "1991", "1993"], correctAnswer: "1989" },
      { question: "Which empire was ruled by Julius Caesar?", answers: ["Ottoman Empire", "Roman Republic", "British Empire", "Mongol Empire"], correctAnswer: "Roman Republic" },
      { question: "Who was known as the Maid of Orleans?", answers: ["Cleopatra", "Joan of Arc", "Queen Victoria", "Catherine the Great"], correctAnswer: "Joan of Arc" },
      { question: "Which ship sank on its maiden voyage in 1912?", answers: ["Britannic", "Lusitania", "Titanic", "Bismarck"], correctAnswer: "Titanic" },
      { question: "Which country was the first to give women the right to vote nationwide?", answers: ["United Kingdom", "New Zealand", "United States", "Canada"], correctAnswer: "New Zealand" },
      { question: "What was the name of the trade route linking China with the Mediterranean?", answers: ["Amber Road", "Spice Path", "Silk Road", "Royal Way"], correctAnswer: "Silk Road" },
    ],
  },
  Entertainment: {
    description: "Movies, music, streaming hits, and pop culture classics.",
    questions: [
      { question: "Which movie features the quote, 'I'll be back'?", answers: ["Predator", "The Terminator", "RoboCop", "Die Hard"], correctAnswer: "The Terminator" },
      { question: "Who sang the hit song 'Rolling in the Deep'?", answers: ["Adele", "Beyonce", "Taylor Swift", "Sia"], correctAnswer: "Adele" },
      { question: "What is the name of the fictional African country in Black Panther?", answers: ["Genosha", "Wakanda", "Zamunda", "Latveria"], correctAnswer: "Wakanda" },
      { question: "Which streaming series features Wednesday Addams at Nevermore Academy?", answers: ["Stranger Things", "Wednesday", "Riverdale", "The Chilling Adventures of Sabrina"], correctAnswer: "Wednesday" },
      { question: "Who directed the movie Inception?", answers: ["Denis Villeneuve", "Christopher Nolan", "Steven Spielberg", "James Cameron"], correctAnswer: "Christopher Nolan" },
      { question: "Which artist is known as the King of Pop?", answers: ["Prince", "Elvis Presley", "Michael Jackson", "Bruno Mars"], correctAnswer: "Michael Jackson" },
      { question: "What is the highest-grossing film of James Cameron's career?", answers: ["Titanic", "Avatar", "Aliens", "The Abyss"], correctAnswer: "Avatar" },
      { question: "Which instrument does Lizzo famously play on stage?", answers: ["Violin", "Flute", "Cello", "Trumpet"], correctAnswer: "Flute" },
      { question: "Which animated film centers on the Madrigal family?", answers: ["Coco", "Moana", "Encanto", "Frozen"], correctAnswer: "Encanto" },
      { question: "Which band recorded 'Bohemian Rhapsody'?", answers: ["Queen", "The Beatles", "Led Zeppelin", "The Rolling Stones"], correctAnswer: "Queen" },
    ],
  },
  Technology: {
    description: "Modern tech, computing basics, and internet culture.",
    questions: [
      { question: "What does HTML stand for?", answers: ["HyperText Markdown Language", "HyperText Markup Language", "Home Tool Markup Language", "Hyperlink and Text Management Language"], correctAnswer: "HyperText Markup Language" },
      { question: "Which company created the iPhone?", answers: ["Apple", "Samsung", "Google", "Nokia"], correctAnswer: "Apple" },
      { question: "What does CPU stand for?", answers: ["Central Process Unit", "Central Processing Unit", "Computer Primary Unit", "Central Program Utility"], correctAnswer: "Central Processing Unit" },
      { question: "Which protocol is commonly used to load web pages securely?", answers: ["FTP", "SMTP", "HTTPS", "SSH"], correctAnswer: "HTTPS" },
      { question: "Which language runs natively in web browsers?", answers: ["Python", "C#", "Java", "JavaScript"], correctAnswer: "JavaScript" },
      { question: "Which storage is usually faster?", answers: ["HDD", "SSD", "Tape Drive", "DVD"], correctAnswer: "SSD" },
      { question: "What is the binary value of decimal 2?", answers: ["10", "11", "01", "100"], correctAnswer: "10" },
      { question: "Which social platform is known for short posts called tweets?", answers: ["LinkedIn", "Instagram", "X", "Reddit"], correctAnswer: "X" },
      { question: "Which company develops the Windows operating system?", answers: ["Intel", "Microsoft", "Adobe", "Oracle"], correctAnswer: "Microsoft" },
      { question: "What does Wi-Fi primarily provide?", answers: ["Wireless internet networking", "Battery charging", "File compression", "Screen brightness"], correctAnswer: "Wireless internet networking" },
    ],
  },
};

const ui = {};
const state = {
  selectedTopic: "",
  currentQuestions: [],
  currentQuestionIndex: 0,
  score: 0,
  countdown: TIME_PER_QUESTION,
  timerId: null,
  advanceTimeoutId: null,
  hasAnsweredCurrentQuestion: false,
};

function shuffle(items) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy;
}

function showScreen(screen) {
  [ui.startScreen, ui.gameScreen, ui.resultScreen].forEach((element) => {
    element.classList.toggle("active", element === screen);
  });
}

function clearTimers() {
  window.clearInterval(state.timerId);
  window.clearTimeout(state.advanceTimeoutId);
  state.timerId = null;
  state.advanceTimeoutId = null;
}

function playEffect(kind) {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;

  if (!AudioContextClass) {
    return;
  }

  if (!playEffect.audioContext) {
    playEffect.audioContext = new AudioContextClass();
  }

  const audioContext = playEffect.audioContext;
  const now = audioContext.currentTime;
  const gain = audioContext.createGain();
  gain.connect(audioContext.destination);
  gain.gain.setValueAtTime(0.001, now);
  gain.gain.exponentialRampToValueAtTime(0.08, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

  const frequencies = kind === "correct" ? [523.25, 659.25] : [196.0, 130.81];

  frequencies.forEach((frequency) => {
    const oscillator = audioContext.createOscillator();
    oscillator.type = kind === "correct" ? "triangle" : "sawtooth";
    oscillator.frequency.setValueAtTime(frequency, now);
    oscillator.connect(gain);
    oscillator.start(now);
    oscillator.stop(now + 0.28);
  });
}

function flashCard(kind) {
  ui.gameCard.classList.remove("celebrate", "shake");
  void ui.gameCard.offsetWidth;
  ui.gameCard.classList.add(kind === "correct" ? "celebrate" : "shake");
}

function setFeedback(message, kind = "") {
  ui.feedback.textContent = message;
  ui.feedback.className = "feedback";

  if (kind) {
    ui.feedback.classList.add(kind);
    flashCard(kind);
    playEffect(kind);
  }
}

function renderTopics() {
  ui.topicList.innerHTML = "";

  Object.entries(triviaTopics).forEach(([name, config]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "topic-button";
    button.innerHTML = `<strong>${name}</strong><span>${config.description}</span>`;
    button.addEventListener("click", () => startGame(name));
    ui.topicList.appendChild(button);
  });
}

function startGame(topic) {
  clearTimers();
  state.selectedTopic = topic;
  state.currentQuestions = shuffle(triviaTopics[topic].questions).slice(0, QUESTIONS_PER_GAME);
  state.currentQuestionIndex = 0;
  state.score = 0;
  state.hasAnsweredCurrentQuestion = false;
  ui.topicName.textContent = topic;
  ui.scoreDisplay.textContent = "0";
  showScreen(ui.gameScreen);
  showQuestion();
}

function updateTimerDisplay(secondsLeft) {
  const clamped = Math.max(0, secondsLeft);
  const progress = (clamped / TIME_PER_QUESTION) * 100;
  ui.timerText.textContent = `${clamped}s`;
  ui.timerBar.style.width = `${progress}%`;
  ui.timerBar.style.background = clamped <= 3
    ? "linear-gradient(90deg, #c53030, #f6ad55)"
    : "linear-gradient(90deg, #244c5a, #dd6b20)";
}

function startTimer() {
  state.countdown = TIME_PER_QUESTION;
  updateTimerDisplay(state.countdown);

  state.timerId = window.setInterval(() => {
    state.countdown -= 1;
    updateTimerDisplay(state.countdown);

    if (state.countdown <= 0) {
      window.clearInterval(state.timerId);
      state.timerId = null;
      handleTimeout();
    }
  }, 1000);
}

function renderQuestion(question) {
  ui.questionCount.textContent = `${state.currentQuestionIndex + 1} / ${QUESTIONS_PER_GAME}`;
  ui.questionText.textContent = question.question;
  ui.answerButtons.innerHTML = "";

  shuffle(question.answers).forEach((answer) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.textContent = answer;
    button.addEventListener("click", () => handleAnswer(answer));
    ui.answerButtons.appendChild(button);
  });
}

function showQuestion() {
  clearTimers();
  state.hasAnsweredCurrentQuestion = false;
  setFeedback("");
  renderQuestion(state.currentQuestions[state.currentQuestionIndex]);
  startTimer();
}

function lockAnswers(correctAnswer, chosenAnswer) {
  [...ui.answerButtons.querySelectorAll("button")].forEach((button) => {
    button.disabled = true;

    if (button.textContent === correctAnswer) {
      button.classList.add("correct");
    } else if (chosenAnswer && button.textContent === chosenAnswer) {
      button.classList.add("wrong");
    }
  });
}

function moveToNextQuestion() {
  state.currentQuestionIndex += 1;

  if (state.currentQuestionIndex >= QUESTIONS_PER_GAME) {
    endGame();
    return;
  }

  showQuestion();
}

function handleAnswer(selectedAnswer) {
  if (state.hasAnsweredCurrentQuestion) {
    return;
  }

  state.hasAnsweredCurrentQuestion = true;
  clearTimers();

  const currentQuestion = state.currentQuestions[state.currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  if (isCorrect) {
    state.score += 1;
    ui.scoreDisplay.textContent = String(state.score);
    setFeedback("Correct! +1 point.", "correct");
  } else {
    setFeedback(`Not quite. The correct answer was ${currentQuestion.correctAnswer}.`, "wrong");
  }

  lockAnswers(currentQuestion.correctAnswer, selectedAnswer);
  state.advanceTimeoutId = window.setTimeout(moveToNextQuestion, 1400);
}

function handleTimeout() {
  if (state.hasAnsweredCurrentQuestion) {
    return;
  }

  state.hasAnsweredCurrentQuestion = true;
  const currentQuestion = state.currentQuestions[state.currentQuestionIndex];
  setFeedback(`Time's up! The correct answer was ${currentQuestion.correctAnswer}.`, "wrong");
  lockAnswers(currentQuestion.correctAnswer);
  state.advanceTimeoutId = window.setTimeout(moveToNextQuestion, 1600);
}

function endGame() {
  clearTimers();
  ui.finalScore.textContent = `${state.score} / ${QUESTIONS_PER_GAME}`;

  if (state.score === QUESTIONS_PER_GAME) {
    ui.resultMessage.textContent = `Perfect score in ${state.selectedTopic}. That was a clean sweep.`;
  } else if (state.score >= 7) {
    ui.resultMessage.textContent = `Strong run in ${state.selectedTopic}. You really know your stuff.`;
  } else if (state.score >= 4) {
    ui.resultMessage.textContent = `Nice effort in ${state.selectedTopic}. One more round could top that score.`;
  } else {
    ui.resultMessage.textContent = `That round was tricky, but you can jump right back into ${state.selectedTopic}.`;
  }

  showScreen(ui.resultScreen);
}

function initializeGame() {
  ui.gameCard = document.getElementById("game-card");
  ui.startScreen = document.getElementById("start-screen");
  ui.gameScreen = document.getElementById("game-screen");
  ui.resultScreen = document.getElementById("result-screen");
  ui.topicList = document.getElementById("topic-list");
  ui.topicName = document.getElementById("topic-name");
  ui.questionCount = document.getElementById("question-count");
  ui.scoreDisplay = document.getElementById("score");
  ui.timerText = document.getElementById("timer-text");
  ui.timerBar = document.getElementById("timer-bar");
  ui.questionText = document.getElementById("question-text");
  ui.answerButtons = document.getElementById("answer-buttons");
  ui.feedback = document.getElementById("feedback");
  ui.resultMessage = document.getElementById("result-message");
  ui.finalScore = document.getElementById("final-score");
  ui.playAgainButton = document.getElementById("play-again");
  ui.replayTopicButton = document.getElementById("replay-topic");

  renderTopics();

  ui.playAgainButton.addEventListener("click", () => {
    clearTimers();
    showScreen(ui.startScreen);
  });

  ui.replayTopicButton.addEventListener("click", () => {
    if (state.selectedTopic) {
      startGame(state.selectedTopic);
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeGame);
} else {
  initializeGame();
}
