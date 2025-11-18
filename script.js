// Conversion data with formulas
const conversions = {
  length: {
    name: "Length",
    emoji: "📏",
    color: "blue",
    conversions: {
      milesToKm: {
        name: "Miles → Kilometers",
        formula: "km = miles × 1.60934",
        factor: 1.60934,
        range: [1, 100],
      },
      kmToMiles: {
        name: "Kilometers → Miles",
        formula: "miles = km ÷ 1.60934",
        factor: 1 / 1.60934,
        range: [1, 100],
      },
      inchesToCm: {
        name: "Inches → Centimeters",
        formula: "cm = inches × 2.54",
        factor: 2.54,
        range: [1, 100],
      },
      cmToInches: {
        name: "Centimeters → Inches",
        formula: "inches = cm ÷ 2.54",
        factor: 1 / 2.54,
        range: [1, 250],
      },
      feetToMeters: {
        name: "Feet → Meters",
        formula: "meters = feet ÷ 3.28084",
        factor: 1 / 3.28084,
        range: [1, 300],
      },
      metersToFeet: {
        name: "Meters → Feet",
        formula: "feet = meters × 3.28084",
        factor: 3.28084,
        range: [1, 100],
      },
    },
  },
  temperature: {
    name: "Temperature",
    emoji: "🌡️",
    color: "red",
    conversions: {
      cToF: {
        name: "Celsius → Fahrenheit",
        formula: "°F = (°C × 9/5) + 32",
        special: "cToF",
        range: [-50, 50],
      },
      fToC: {
        name: "Fahrenheit → Celsius",
        formula: "°C = (°F - 32) × 5/9",
        special: "fToC",
        range: [-30, 150],
      },
      cToK: {
        name: "Celsius → Kelvin",
        formula: "K = °C + 273.15",
        special: "cToK",
        range: [-50, 50],
      },
      kToC: {
        name: "Kelvin → Celsius",
        formula: "°C = K - 273.15",
        special: "kToC",
        range: [1, 400],
      },
    },
  },
  mass: {
    name: "Mass",
    emoji: "⚖️",
    color: "purple",
    conversions: {
      poundsToKg: {
        name: "Pounds → Kilograms",
        formula: "kg = lbs × 0.453592",
        factor: 0.453592,
        range: [1, 300],
      },
      kgToPounds: {
        name: "Kilograms → Pounds",
        formula: "lbs = kg ÷ 0.453592",
        factor: 1 / 0.453592,
        range: [1, 200],
      },
      ouncesToGrams: {
        name: "Ounces → Grams",
        formula: "g = oz × 28.3495",
        factor: 28.3495,
        range: [1, 200],
      },
      gramsToOunces: {
        name: "Grams → Ounces",
        formula: "oz = g ÷ 28.3495",
        factor: 1 / 28.3495,
        range: [1, 500],
      },
    },
  },
  volume: {
    name: "Volume",
    emoji: "🧪",
    color: "green",
    conversions: {
      gallonsToLiters: {
        name: "Gallons → Liters",
        formula: "L = gal × 3.78541",
        factor: 3.78541,
        range: [1, 50],
      },
      litersToGallons: {
        name: "Liters → Gallons",
        formula: "gal = L ÷ 3.78541",
        factor: 1 / 3.78541,
        range: [1, 200],
      },
      flOzToMl: {
        name: "Fluid Ounces → Milliliters",
        formula: "mL = fl oz × 29.5735",
        factor: 29.5735,
        range: [1, 50],
      },
      mlToFlOz: {
        name: "Milliliters → Fluid Ounces",
        formula: "fl oz = mL ÷ 29.5735",
        factor: 1 / 29.5735,
        range: [1, 500],
      },
    },
  },
  speed: {
    name: "Speed",
    emoji: "🚗",
    color: "yellow",
    conversions: {
      mphToKph: {
        name: "MPH → KPH",
        formula: "kph = mph × 1.60934",
        factor: 1.60934,
        range: [1, 120],
      },
      kphToMph: {
        name: "KPH → MPH",
        formula: "mph = kph ÷ 1.60934",
        factor: 1 / 1.60934,
        range: [1, 200],
      },
    },
  },
  time: {
    name: "Time",
    emoji: "⏰",
    color: "indigo",
    conversions: {
      hoursToMinutes: {
        name: "Hours → Minutes",
        formula: "min = hours × 60",
        factor: 60,
        range: [1, 24],
      },
      minutesToHours: {
        name: "Minutes → Hours",
        formula: "hours = min ÷ 60",
        factor: 1 / 60,
        range: [1, 1440],
      },
      daysToHours: {
        name: "Days → Hours",
        formula: "hours = days × 24",
        factor: 24,
        range: [1, 365],
      },
      hoursToDays: {
        name: "Hours → Days",
        formula: "days = hours ÷ 24",
        factor: 1 / 24,
        range: [1, 720],
      },
    },
  },
  area: {
    name: "Area",
    emoji: "📐",
    color: "pink",
    conversions: {
      sqFtToSqM: {
        name: "Square Feet → Square Meters",
        formula: "sq m = sq ft × 0.092903",
        factor: 0.092903,
        range: [1, 1000],
      },
      sqMToSqFt: {
        name: "Square Meters → Square Feet",
        formula: "sq ft = sq m ÷ 0.092903",
        factor: 1 / 0.092903,
        range: [1, 500],
      },
      acresToSqM: {
        name: "Acres → Square Meters",
        formula: "sq m = acres × 4046.86",
        factor: 4046.86,
        range: [1, 100],
      },
      sqMToAcres: {
        name: "Square Meters → Acres",
        formula: "acres = sq m ÷ 4046.86",
        factor: 1 / 4046.86,
        range: [1, 5000],
      },
    },
  },
  nautical: {
    name: "Nautical",
    emoji: "⚓",
    color: "cyan",
    conversions: {
      nmToKm: {
        name: "Nautical Miles → Kilometers",
        formula: "km = nm × 1.852",
        factor: 1.852,
        range: [1, 500],
      },
      kmToNm: {
        name: "Kilometers → Nautical Miles",
        formula: "nm = km ÷ 1.852",
        factor: 1 / 1.852,
        range: [1, 500],
      },
      nmToMiles: {
        name: "Nautical Miles → Miles",
        formula: "miles = nm × 1.15078",
        factor: 1.15078,
        range: [1, 50],
      },
      milesToNm: {
        name: "Miles → Nautical Miles",
        formula: "nm = miles ÷ 1.15078",
        factor: 1 / 1.15078,
        range: [1, 50],
      },
      knotsToMph: {
        name: "Knots → MPH",
        formula: "mph = knots × 1.15078",
        factor: 1.15078,
        range: [1, 80],
      },
      mphToKnots: {
        name: "MPH → Knots",
        formula: "knots = mph ÷ 1.15078",
        factor: 1 / 1.15078,
        range: [1, 120],
      },
    },
  },
  angle: {
    name: "Angle",
    emoji: "📐",
    color: "indigo",
    conversions: {
      degToRad: {
        name: "Degrees → Radians",
        formula: "radians = degrees × (π / 180)",
        factor: Math.PI / 180,
        range: [1, 360],
      },
      radToDeg: {
        name: "Radians → Degrees",
        formula: "degrees = radians × (180 / π)",
        factor: 180 / Math.PI,
        range: [0.1, 6.28],
      }, // 2*PI approx
      degToGrad: {
        name: "Degrees → Gradians",
        formula: "gradians = degrees × (10 / 9)",
        factor: 10 / 9,
        range: [1, 360],
      },
      gradToDeg: {
        name: "Gradians → Degrees",
        formula: "degrees = gradians × (9 / 10)",
        factor: 9 / 10,
        range: [1, 400],
      },
    },
  },
  data: {
    name: "Data Storage",
    emoji: "💾",
    color: "cyan",
    conversions: {
      bytesToKB: {
        name: "Bytes → Kilobytes",
        formula: "Kilobytes = Bytes ÷ 1024",
        factor: 1 / 1024,
        range: [1024, 1048576],
      }, // 1KB to 1MB in bytes
      kbToMB: {
        name: "Kilobytes → Megabytes",
        formula: "Megabytes = Kilobytes ÷ 1024",
        factor: 1 / 1024,
        range: [1024, 1048576],
      }, // 1MB to 1GB in KB
      mbToGB: {
        name: "Megabytes → Gigabytes",
        formula: "Gigabytes = Megabytes ÷ 1024",
        factor: 1 / 1024,
        range: [1024, 1048576],
      }, // 1GB to 1TB in MB
      bitsToBytes: {
        name: "Bits → Bytes",
        formula: "Bytes = Bits ÷ 8",
        factor: 1 / 8,
        range: [8, 80000],
      },
      bytesToBits: {
        name: "Bytes → Bits",
        formula: "Bits = Bytes × 8",
        factor: 8,
        range: [1, 10000],
      },
    },
  },
  power: {
    name: "Power",
    emoji: "🔋",
    color: "lime",
    conversions: {
      wattsToHp: {
        name: "Watts → Horsepower",
        formula: "Horsepower = Watts ÷ 745.7",
        factor: 1 / 745.7,
        range: [100, 100000],
      },
      hpToWatts: {
        name: "Horsepower → Watts",
        formula: "Watts = Horsepower × 745.7",
        factor: 745.7,
        range: [1, 200],
      },
      wattsToKw: {
        name: "Watts → Kilowatts",
        formula: "Kilowatts = Watts ÷ 1000",
        factor: 1 / 1000,
        range: [100, 50000],
      },
      kwToWatts: {
        name: "Kilowatts → Watts",
        formula: "Watts = Kilowatts × 1000",
        factor: 1000,
        range: [0.1, 50],
      },
      btuPerHrToWatts: {
        name: "BTU/hr → Watts",
        formula: "Watts = BTU/hr × 0.293071",
        factor: 0.293071,
        range: [1000, 100000],
      },
    },
  },
};

// Add these new constants for storage
const PROGRESS_KEY = "convertquest_progress";
const HISTORY_KEY = "convertquest_history";
// Game state
let gameState = {
  mode: null,
  selectedConversions: [],
  currentQuestion: null,
  questionsLog: [],
  timer: null,
  timeRemaining: 60,
  startTime: null,
};

// Initialize
function init() {
  loadProgress();
  renderCategories();
}

function selectMode(mode) {
  gameState.mode = mode;
  document
    .getElementById("timer-setup")
    .classList.toggle("hidden", mode !== "timed");
  if (mode === "timed") {
    document.getElementById("timer-card").classList.remove("hidden");
  }
}

function renderCategories() {
  const container = document.getElementById("category-container");
  container.innerHTML = "";

  Object.keys(conversions).forEach((key) => {
    const cat = conversions[key];
    const btn = document.createElement("button");
    btn.className = `category-chip bg-${cat.color}-100 hover:bg-${cat.color}-200 px-4 py-3 rounded-xl font-semibold text-${cat.color}-700 border-2 border-transparent`;
    btn.innerHTML = `${cat.emoji} ${cat.name}`;
    btn.onclick = () => toggleCategory(key, btn);
    container.appendChild(btn);
  });
}

function toggleCategory(categoryKey, btn) {
  const isSelected = btn.classList.contains("border-purple-500");

  // Deselect all categories first (single-selection behavior)
  document
    .querySelectorAll(".category-chip")
    .forEach((b) => b.classList.remove("border-purple-500"));

  if (isSelected) {
    // Hide the conversion list if deselected
    document.getElementById("conversion-selection").classList.add("hidden");
    document.getElementById("conversion-list").innerHTML = "";
    return;
  }

  // Select the current category
  btn.classList.add("border-purple-500");

  // Render the list of ALL conversions in that category (but only display selection status)
  renderConversionList(categoryKey);
  document.getElementById("conversion-selection").classList.remove("hidden");
  updateSelectedCount();
}

function renderConversionList(categoryKey) {
  const container = document.getElementById("conversion-list");
  container.innerHTML = "";

  // Get the conversions for the selected category
  const catConversions = conversions[categoryKey].conversions;
  const catColor = conversions[categoryKey].color;

  Object.keys(catConversions).forEach((convKey) => {
    const fullKey = `${categoryKey}.${convKey}`;
    const conv = catConversions[convKey];
    const isSelected = gameState.selectedConversions.includes(fullKey);

    const div = document.createElement("div");

    // Use an unselected class by default, and apply the 'selected' class if it's already in the game state
    let classes = `conversion-item px-4 py-3 rounded-xl cursor-pointer font-semibold border-2 border-${catColor}-200 text-${catColor}-800`;

    if (isSelected) {
      classes = `conversion-item selected bg-gradient-to-br from-purple-500 to-indigo-600 text-white border-transparent px-4 py-3 rounded-xl cursor-pointer font-semibold`;
    } else {
      classes += ` hover:bg-${catColor}-100`;
    }

    div.className = classes;
    div.textContent = conv.name;

    // The toggleConversion function now needs to manage the selection status and the visual class
    div.onclick = () => toggleConversion(fullKey, div, categoryKey, catColor);
    container.appendChild(div);
  });
}
function toggleConversion(fullKey, div, categoryKey, catColor) {
  const index = gameState.selectedConversions.indexOf(fullKey);

  if (index > -1) {
    // Deselect
    gameState.selectedConversions.splice(index, 1);
    div.classList.remove(
      "selected",
      "bg-gradient-to-br",
      "from-purple-500",
      "to-indigo-600",
      "text-white",
      "border-transparent"
    );
    div.classList.add(
      `border-2`,
      `border-${catColor}-200`,
      `text-${catColor}-800`,
      `hover:bg-${catColor}-100`
    );
  } else {
    // Select
    gameState.selectedConversions.push(fullKey);
    div.classList.add(
      "selected",
      "bg-gradient-to-br",
      "from-purple-500",
      "to-indigo-600",
      "text-white",
      "border-transparent"
    );
    div.classList.remove(
      `border-2`,
      `border-${catColor}-200`,
      `text-${catColor}-800`,
      `hover:bg-${catColor}-100`
    );
  }

  updateSelectedCount();
}

function updateSelectedCount() {
  const countEl = document.getElementById("selected-count");
  const startBtn = document.getElementById("start-btn");
  const count = gameState.selectedConversions.length;

  countEl.querySelector("span").textContent = count;
  countEl.classList.toggle("hidden", count === 0);
  startBtn.classList.toggle("hidden", count === 0 || !gameState.mode);
}

function startGame() {
  if (gameState.selectedConversions.length === 0) {
    alert("Please select at least one conversion!");
    return;
  }

  gameState.questionsLog = [];
  gameState.startTime = Date.now();

  if (gameState.mode === "timed") {
    gameState.timeRemaining =
      parseInt(document.getElementById("timer-input").value) || 60;
    startTimer();
  }

  document.getElementById("welcome-screen").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");
  document.getElementById("answer-input").focus();

  generateQuestion();
}

// Add this new function to your <> block
function toggleFormula() {
  const container = document.getElementById("formula-text-container");
  const btn = document.getElementById("formula-toggle-btn");

  container.classList.toggle("hidden");

  if (container.classList.contains("hidden")) {
    btn.textContent = "Show Formula";
  } else {
    btn.textContent = "Hide Formula";
  }
}

function generateQuestion() {
  const randomKey =
    gameState.selectedConversions[
      Math.floor(Math.random() * gameState.selectedConversions.length)
    ];
  const [catKey, convKey] = randomKey.split(".");
  const conv = conversions[catKey].conversions[convKey];

  const [min, max] = conv.range;
  const value = Math.floor(Math.random() * (max - min + 1)) + min;

  let answer;
  if (conv.special) {
    switch (conv.special) {
      case "cToF":
        answer = (value * 9) / 5 + 32;
        break;
      case "fToC":
        answer = ((value - 32) * 5) / 9;
        break;
      case "cToK":
        answer = value + 273.15;
        break;
      case "kToC":
        answer = value - 273.15;
        break;
    }
  } else {
    answer = value * conv.factor;
  }

  gameState.currentQuestion = {
    fullKey: randomKey, // NEW: Save the key here
    text: conv.name.replace("→", `${value} =`),
    answer: answer,
    formula: conv.formula,
    userAnswer: null,
  };

  document.getElementById("question-text").textContent =
    gameState.currentQuestion.text;
  document.getElementById("formula-text").textContent =
    gameState.currentQuestion.formula;
  document.getElementById("answer-input").value = "";

  // NEW: Hide formula hint for the new question
  document.getElementById("formula-text-container").classList.add("hidden");
  document.getElementById("formula-toggle-btn").textContent = "Show Formula";
}

function submitAnswer() {
  const input = document.getElementById("answer-input");
  const userAnswer = parseFloat(input.value);

  if (isNaN(userAnswer)) {
    input.classList.add("animate-shake");
    setTimeout(() => input.classList.remove("animate-shake"), 300);
    return;
  }

  const correctAns = gameState.currentQuestion.answer;
  // Calculate error based on the correct answer, protecting against division by zero for answers close to 0
  const error = Math.abs(
    (userAnswer - correctAns) / (correctAns === 0 ? 1 : correctAns)
  );
  const accuracy = Math.max(0, 100 - error * 100);

  // Display feedback immediately
  displayFeedback(accuracy.toFixed(2), correctAns.toFixed(2));

  // Log the question details including the category key
  const [catKey, convKey] = gameState.currentQuestion.fullKey.split("."); // Requires a change in generateQuestion (see below)

  gameState.questionsLog.push({
    question: gameState.currentQuestion.text,
    userAnswer: userAnswer.toFixed(2),
    correctAnswer: correctAns.toFixed(2),
    accuracy: accuracy.toFixed(2),
    category: catKey, // NEW: Save category for history grouping
  });

  updateStats();
  generateQuestion();
  input.focus();
}

// Function to display feedback banner
function displayFeedback(accuracy, correctAnswer) {
  const banner = document.getElementById("feedback-banner");
  let message = "";
  let bgColor = "";
  const acc = parseFloat(accuracy);

  if (acc >= 95) {
    message = `✅ Excellent! Accuracy: ${acc.toFixed(1)}%`;
    bgColor = "bg-emerald-100 text-emerald-700";
  } else if (acc >= 80) {
    message = `👍 Good effort. Accuracy: ${acc.toFixed(1)}%.`;
    bgColor = "bg-yellow-100 text-yellow-700";
  } else {
    message = `❌ Try again! Correct answer was ${correctAnswer}. Accuracy: ${acc.toFixed(
      1
    )}%.`;
    bgColor = "bg-red-100 text-red-700";
  }

  banner.className = `p-4 rounded-xl mb-4 text-center font-bold text-lg ${bgColor} animate-fade-in`;
  banner.textContent = message;
  banner.classList.remove("hidden");
  console.log("Displaying feedback banner");
}

function updateStats() {
  document.getElementById("question-count").textContent =
    gameState.questionsLog.length;

  const avgAcc =
    gameState.questionsLog.reduce((sum, q) => sum + parseFloat(q.accuracy), 0) /
    gameState.questionsLog.length;
  document.getElementById("avg-accuracy").textContent = avgAcc.toFixed(1) + "%";
}

function startTimer() {
  document.getElementById("timer-display").textContent =
    gameState.timeRemaining;

  gameState.timer = setInterval(() => {
    gameState.timeRemaining--;
    document.getElementById("timer-display").textContent =
      gameState.timeRemaining;

    if (gameState.timeRemaining <= 0) {
      clearInterval(gameState.timer);
      endGame();
    }
  }, 1000);
}

function endGame() {
  if (gameState.timer) clearInterval(gameState.timer);

  document.getElementById("game-screen").classList.add("hidden");
  document.getElementById("results-screen").classList.remove("hidden");

  displayResults();
  saveProgress();
}

function displayResults() {
  document.getElementById("final-count").textContent =
    gameState.questionsLog.length;

  const avgAcc =
    gameState.questionsLog.length > 0
      ? gameState.questionsLog.reduce(
          (sum, q) => sum + parseFloat(q.accuracy),
          0
        ) / gameState.questionsLog.length
      : 0;
  document.getElementById("final-accuracy").textContent =
    avgAcc.toFixed(1) + "%";

  if (gameState.mode === "timed") {
    const timeTaken =
      parseInt(document.getElementById("timer-input").value) -
      gameState.timeRemaining;
    document.getElementById("time-taken").textContent = timeTaken + "s";
    document.getElementById("time-taken-card").classList.remove("hidden");
  }

  const container = document.getElementById("results-table-container");
  let html =
    '<div class="overflow-x-auto"><table class="w-full text-left"><thead><tr class="border-b-2">';
  html +=
    '<th class="p-3">Question</th><th class="p-3">Your Answer</th><th class="p-3">Correct</th><th class="p-3">Accuracy</th></tr></thead><tbody>';

  gameState.questionsLog.forEach((q, i) => {
    const acc = parseFloat(q.accuracy);
    let bgClass = "bg-red-100";
    if (acc >= 98) bgClass = "bg-cyan-100";
    else if (acc >= 95) bgClass = "bg-green-100";
    else if (acc >= 90) bgClass = "bg-yellow-100";
    else if (acc >= 80) bgClass = "bg-orange-100";

    html += `<tr class="border-b"><td class="p-3">${q.question}</td><td class="p-3">${q.userAnswer}</td><td class="p-3">${q.correctAnswer}</td><td class="p-3 ${bgClass} font-semibold">${q.accuracy}%</td></tr>`;
  });

  html += "</tbody></table></div>";
  container.innerHTML = html;
}

function resetGame() {
  gameState = {
    mode: null,
    selectedConversions: [],
    currentQuestion: null,
    questionsLog: [],
    timer: null,
    timeRemaining: 60,
    startTime: null,
  };

  document.getElementById("results-screen").classList.add("hidden");
  document.getElementById("welcome-screen").classList.remove("hidden");
  document.getElementById("timer-card").classList.add("hidden");

  renderCategories();
  updateSelectedCount();
}

// Helper to retrieve history array
function getHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
  } catch {
    return [];
  }
}

function saveProgress() {
  // 1. Update Global Stats
  const currentProgress = getProgress();
  const totalQuestionsAnswered = gameState.questionsLog.length;

  // Calculate accuracy for the completed game
  const gameAccuracy =
    gameState.questionsLog.length > 0
      ? gameState.questionsLog.reduce(
          (sum, q) => sum + parseFloat(q.accuracy),
          0
        ) / gameState.questionsLog.length
      : 0;

  // 2. Prepare History Entry
  const newHistoryEntry = {
    id: Date.now(),
    date: new Date().toLocaleString(),
    mode: gameState.mode,
    questions: totalQuestionsAnswered,
    accuracy: gameAccuracy.toFixed(1),
  };

  const history = getHistory();
  history.unshift(newHistoryEntry); // Add to the beginning
  // Keep only the last 10 games in history
  if (history.length > 10) history.pop();

  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));

  // 3. Update Global Aggregated Stats
  currentProgress.totalGames = (currentProgress.totalGames || 0) + 1;
  currentProgress.totalQuestions =
    (currentProgress.totalQuestions || 0) + totalQuestionsAnswered;
  currentProgress.totalAccuracySum =
    (currentProgress.totalAccuracySum || 0) + gameAccuracy;

  localStorage.setItem(PROGRESS_KEY, JSON.stringify(currentProgress));
}

// Add History Page Navigation and Render Functions:

function showHistory() {
  document.getElementById("welcome-screen").classList.add("hidden");
  document.getElementById("results-screen").classList.add("hidden");
  document.getElementById("game-screen").classList.add("hidden");
  document.getElementById("history-screen").classList.remove("hidden");
  renderHistory();
}

function hideHistory() {
  document.getElementById("history-screen").classList.add("hidden");
  document.getElementById("welcome-screen").classList.remove("hidden");
}

function renderHistory() {
  const progress = getProgress();
  const history = getHistory();
  const container = document.getElementById("history-log-container");

  // Display Global Stats
  document.getElementById("hist-total-games").textContent =
    progress.totalGames || 0;
  document.getElementById("hist-total-questions").textContent =
    progress.totalQuestions || 0;

  let overallAvg = 0;
  if (progress.totalGames > 0) {
    overallAvg = (progress.totalAccuracySum / progress.totalGames).toFixed(1);
  }
  document.getElementById("hist-avg-accuracy").textContent = overallAvg + "%";

  // Display Recent Game Logs
  container.innerHTML = "";
  document.getElementById("no-history").classList.add("hidden");

  if (history.length === 0) {
    document.getElementById("no-history").classList.remove("hidden");
    return;
  }

  history.forEach((game) => {
    let accColor = "text-gray-700";
    if (parseFloat(game.accuracy) >= 95) accColor = "text-emerald-600";
    else if (parseFloat(game.accuracy) >= 90) accColor = "text-yellow-600";
    else if (parseFloat(game.accuracy) >= 80) accColor = "text-orange-600";

    const html = `
            <div class="bg-gray-50 p-4 rounded-xl shadow-sm border-l-4 border-indigo-400">
                <div class="flex justify-between items-center text-sm mb-1">
                    <span class="font-semibold">${game.date}</span>
                    <span class="px-2 py-1 text-xs rounded-full ${
                      game.mode === "timed"
                        ? "bg-orange-200 text-orange-800"
                        : "bg-green-200 text-green-800"
                    }">${game.mode === "timed" ? "Timed" : "Practice"}</span>
                </div>
                <p class="text-gray-700">Answered <span class="font-bold">${
                  game.questions
                }</span> questions with an accuracy of <span class="font-bold ${accColor}">${
      game.accuracy
    }%</span>.</p>
            </div>
        `;
    container.innerHTML += html;
  });
}

function resetHistory() {
  if (
    confirm(
      "Are you sure you want to clear ALL saved game history and statistics? This cannot be undone."
    )
  ) {
    localStorage.removeItem(PROGRESS_KEY);
    localStorage.removeItem(HISTORY_KEY);
    renderHistory();
  }
}

function getProgress() {
  try {
    return JSON.parse(localStorage.getItem("convertquest_progress")) || {};
  } catch {
    return {};
  }
}

function loadProgress() {
  const progress = getProgress();
  if (progress.totalGames) {
    console.log(
      `Welcome back! You've played ${progress.totalGames} games and answered ${progress.totalQuestions} questions.`
    );
  }
}
function renderFormulas() {
  const container = document.getElementById("formula-content");
  container.innerHTML = "";

  Object.keys(conversions).forEach((catKey) => {
    const cat = conversions[catKey];
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "mb-4";
    categoryDiv.innerHTML = `<h5 class="text-xl font-bold text-indigo-600 mb-2">${cat.emoji} ${cat.name}</h5>`;

    const list = document.createElement("ul");
    list.className = "list-disc pl-5 space-y-1 text-gray-700";

    Object.keys(cat.conversions).forEach((convKey) => {
      const conv = cat.conversions[convKey];
      const listItem = document.createElement("li");
      listItem.innerHTML = `<strong>${conv.name}:</strong> <code class="bg-gray-100 p-1 rounded text-sm">${conv.formula}</code>`;
      list.appendChild(listItem);
    });

    categoryDiv.appendChild(list);
    container.appendChild(categoryDiv);
  });
}

function openAboutModal() {
  renderFormulas();
  document.getElementById("about-modal").style.display = "flex";
  document.body.style.overflow = "hidden"; // Prevent background scrolling
}

function closeAboutModal() {
  document.getElementById("about-modal").style.display = "none";
  document.body.style.overflow = ""; // Restore background scrolling
}
// Initialize on load
init();
