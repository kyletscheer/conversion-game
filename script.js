// Constants
const PROGRESS_KEY = "convertquest_progress";
const HISTORY_KEY = "convertquest_history";
const SELECTED_CONVERSIONS_KEY = "convertquest_selections";

// Game state
let gameState = {
  mode: "practice",
  selectedConversions: [],
  currentQuestion: null,
  questionsLog: [],
  timer: null,
  timeRemaining: 60,
  startTime: null,
  showFeedback: true, // NEW state for feedback toggle
};

// Initialize
function init() {
  loadProgress();
  loadSelectedConversions();
  selectMode(gameState.mode);
  renderCategories();
  updateSelectedCount();
}

function loadSelectedConversions() {
  try {
    const savedSelections = JSON.parse(
      localStorage.getItem(SELECTED_CONVERSIONS_KEY)
    );
    if (Array.isArray(savedSelections) && savedSelections.length > 0) {
      gameState.selectedConversions = savedSelections;
    }
  } catch (e) {
    console.error("Could not load selected conversions:", e);
  }
}

function saveSelectedConversions() {
  localStorage.setItem(
    SELECTED_CONVERSIONS_KEY,
    JSON.stringify(gameState.selectedConversions)
  );
}

function selectMode(mode) {
  gameState.mode = mode;

  // Timer setup visibility
  document
    .getElementById("timer-setup")
    .classList.toggle("hidden", mode !== "timed");

  document
    .getElementById("timer-card")
    .classList.toggle("hidden", mode !== "timed");

  // Visual toggle logic
  const timedBtn = document.getElementById("mode-timed-btn");
  const practiceBtn = document.getElementById("mode-practice-btn");

  const inactiveClasses = "flex-1 py-1.5 px-3 rounded-md text-gray-500 text-xs font-medium hover:bg-gray-50 transition-colors";
  const activeClasses = "flex-1 py-1.5 px-3 rounded-md bg-white text-indigo-600 text-xs font-bold shadow-sm ring-1 ring-gray-200";

  if (mode === "timed") {
    timedBtn.className = activeClasses;
    practiceBtn.className = inactiveClasses;
  } else {
    practiceBtn.className = activeClasses;
    timedBtn.className = inactiveClasses;
  }

  updateSelectedCount();
}

// NEW: Toggle for In-Game Feedback
function toggleFeedbackDisplay() {
  gameState.showFeedback = !gameState.showFeedback;
  const btn = document.getElementById("feedback-toggle-btn");
  const banner = document.getElementById("feedback-banner");
  
  // Visual update for the button
  if (gameState.showFeedback) {
    btn.classList.remove("text-gray-400");
    btn.classList.add("text-indigo-600", "bg-indigo-50");
    btn.innerHTML = `<span>👁️</span> <span class="hidden md:inline">Hide Previous Answer</span>`;
    // If there is currently a message in the banner, show it
    if (banner.innerHTML !== "") banner.classList.remove("hidden");
  } else {
    btn.classList.remove("text-indigo-600", "bg-indigo-50");
    btn.classList.add("text-gray-400");
    btn.innerHTML = `<span>👁️‍🗨️</span> <span class="hidden md:inline">Show Previous Answer</span>`;
    banner.classList.add("hidden");
  }
}

function renderCategories() {
  const container = document.getElementById("category-container");
  container.innerHTML = "";

  Object.keys(conversions).forEach((key) => {
    const cat = conversions[key];
    const btn = document.createElement("button");
    btn.className = `category-chip bg-${cat.color}-100 hover:bg-${cat.color}-200 px-4 py-3 rounded-xl font-semibold text-${cat.color}-700 border-2 border-transparent transition-all`;
    btn.innerHTML = `${cat.emoji} ${cat.name}`;
    btn.onclick = () => toggleCategory(key, btn);
    container.appendChild(btn);
  });
  
  if(gameState.selectedConversions.length > 0) {
      const [catKey] = gameState.selectedConversions[0].split('.');
      const initialCatButton = container.querySelector(`[onclick*="toggleCategory('${catKey}'"]`);
      if(initialCatButton) {
          initialCatButton.classList.add("border-purple-500");
          renderConversionList(catKey);
          document.getElementById("conversion-selection").classList.remove("hidden");
      }
  }
}

function toggleCategory(categoryKey, btn) {
  const isSelected = btn.classList.contains("border-purple-500");

  document
    .querySelectorAll(".category-chip")
    .forEach((b) => b.classList.remove("border-purple-500"));

  if (isSelected) {
    document.getElementById("conversion-selection").classList.add("hidden");
    document.getElementById("conversion-list").innerHTML = "";
  } else {
    btn.classList.add("border-purple-500");
    renderConversionList(categoryKey);
    document.getElementById("conversion-selection").classList.remove("hidden");
  }
  updateSelectedCount();
}

function renderConversionList(categoryKey) {
  const container = document.getElementById("conversion-list");
  container.innerHTML = "";

  const catConversions = conversions[categoryKey].conversions;
  const catColor = conversions[categoryKey].color;

  Object.keys(catConversions).forEach((convKey) => {
    const fullKey = `${categoryKey}.${convKey}`;
    const conv = catConversions[convKey];
    const isSelected = gameState.selectedConversions.includes(fullKey);

    const div = document.createElement("div");

    let classes = `conversion-item px-4 py-3 rounded-xl cursor-pointer font-semibold border-2 border-${catColor}-200 text-${catColor}-800 transition-all`;

    if (isSelected) {
      classes = `conversion-item selected bg-gradient-to-br from-purple-500 to-indigo-600 text-white border-transparent px-4 py-3 rounded-xl cursor-pointer font-semibold`;
    } else {
      classes += ` hover:bg-${catColor}-100`;
    }

    div.className = classes;
    div.textContent = conv.name;

    div.onclick = () => toggleConversion(fullKey, div, categoryKey, catColor);
    container.appendChild(div);
  });
}

function toggleConversion(fullKey, div, categoryKey, catColor) {
  const index = gameState.selectedConversions.indexOf(fullKey);

  if (index > -1) {
    gameState.selectedConversions.splice(index, 1);
    div.classList.remove("selected", "bg-gradient-to-br", "from-purple-500", "to-indigo-600", "text-white", "border-transparent");
    div.classList.add(`border-2`, `border-${catColor}-200`, `text-${catColor}-800`, `hover:bg-${catColor}-100`);
  } else {
    gameState.selectedConversions.push(fullKey);
    div.classList.add("selected", "bg-gradient-to-br", "from-purple-500", "to-indigo-600", "text-white", "border-transparent");
    div.classList.remove(`border-2`, `border-${catColor}-200`, `text-${catColor}-800`, `hover:bg-${catColor}-100`);
  }

  updateSelectedCount();
  saveSelectedConversions();
}

document.getElementById("timer-input").addEventListener("keydown", function (e) {
  const key = e.key;
  if (key === "Backspace" || key === "Tab" || key === "Delete" || key.startsWith("Arrow") || e.metaKey || e.ctrlKey) return;
  if (!/[0-9]/.test(key)) e.preventDefault();
});

function filterNumberInput(input) {
  let value = input.value.replace(/[^0-9.-]/g, "");
  const parts = value.split(".");
  if (parts.length > 2) value = parts[0] + "." + parts.slice(1).join("");
  if (value.includes("-")) value = "-" + value.replace(/-/g, "");
  input.value = value;
}

function renderSelectedConversionsSummary() {
  const container = document.getElementById("selected-conversions-list");
  const count = gameState.selectedConversions.length;
  const countTextEl = document.getElementById("conversion-count-text");

  countTextEl.textContent = count;
  countTextEl.classList.toggle("text-purple-600", count > 0);

  if (count === 0) {
    container.innerHTML = `<p class="text-sm text-gray-500 italic text-center py-2">Select conversion types above to begin.</p>`;
    return;
  }

  const names = gameState.selectedConversions.map((fullKey) => {
    const [catKey, convKey] = fullKey.split(".");
    if (conversions[catKey] && conversions[catKey].conversions[convKey]) {
      return conversions[catKey].conversions[convKey].name;
    }
    return "Unknown";
  });

  let html = `<div class="flex flex-wrap gap-2 justify-center p-3 border border-gray-200 bg-gray-50 rounded-lg max-h-40 overflow-y-auto">`;
  names.forEach((name) => {
    html += `<span class="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded-full">${name}</span>`;
  });
  html += `</div>`;

  container.innerHTML = html;
}

function updateSelectedCount() {
  const startBtn = document.getElementById("start-btn");
  const count = gameState.selectedConversions.length;
  const isReady = count > 0 && gameState.mode !== null;

  startBtn.disabled = !isReady;
  startBtn.classList.toggle("opacity-50", !isReady);
  startBtn.classList.toggle("cursor-not-allowed", !isReady);
  
  renderSelectedConversionsSummary();
}

function startGame() {
  if (document.getElementById("start-btn").disabled) {
    alert("Please select a game mode and at least one conversion!");
    return;
  }

  gameState.questionsLog = [];
  gameState.startTime = Date.now();

  if (gameState.mode === "timed") {
    gameState.timeRemaining = parseInt(document.getElementById("timer-input").value) || 60;
    startTimer();
  }

  document.getElementById("welcome-screen").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");
  document.getElementById("answer-input").focus();

  // Reset Feedback UI
  document.getElementById("feedback-banner").innerHTML = "";
  document.getElementById("feedback-banner").classList.add("hidden");

  generateQuestion();
}

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
  const randomKey = gameState.selectedConversions[Math.floor(Math.random() * gameState.selectedConversions.length)];
  const [catKey, convKey] = randomKey.split(".");
  const conv = conversions[catKey].conversions[convKey];
  const [fromUnit, toUnit] = conv.name.split("→");
  const [min, max] = conv.range;
  const value = Math.floor(Math.random() * (max - min + 1)) + min;

  let answer;
  if (conv.special) {
    switch (conv.special) {
      case "cToF": answer = (value * 9) / 5 + 32; break;
      case "fToC": answer = ((value - 32) * 5) / 9; break;
      case "cToK": answer = value + 273.15; break;
      case "kToC": answer = value - 273.15; break;
    }
  } else {
    answer = value * conv.factor;
  }

  gameState.currentQuestion = {
    fullKey: randomKey, 
    text: `${value} ${fromUnit.trim()} = ? ${toUnit.trim()}`,    answer: answer,
    formula: conv.formula,
    userAnswer: null,
  };

  document.getElementById("question-text").textContent = gameState.currentQuestion.text;
  document.getElementById("formula-text").textContent = gameState.currentQuestion.formula;
  document.getElementById("answer-input").value = "";
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
  const error = Math.abs((userAnswer - correctAns) / (correctAns === 0 ? 1 : correctAns));
  const accuracy = Math.max(0, 100 - error * 100);

  displayFeedback(accuracy.toFixed(2), correctAns.toFixed(2));

  // FIX: Added 'fullKey' here so detail logs work correctly
  const [catKey, convKey] = gameState.currentQuestion.fullKey.split("."); 

  gameState.questionsLog.push({
    question: gameState.currentQuestion.text,
    userAnswer: userAnswer.toFixed(2),
    correctAnswer: correctAns.toFixed(2),
    accuracy: accuracy.toFixed(2),
    category: catKey,
    fullKey: gameState.currentQuestion.fullKey // CRITICAL FIX
  });

  updateStats();
  generateQuestion();
  input.focus();
}

function displayFeedback(accuracy, correctAnswer) {
  const banner = document.getElementById("feedback-banner");
  
  const question = gameState.currentQuestion.text;
  const userAnswer = parseFloat(document.getElementById("answer-input").value).toFixed(2);
  const acc = parseFloat(accuracy);

  let statusEmoji = "";
  let bgColor = "";
  let statusText = "";

  if (acc >= 95) {
    statusEmoji = "✅";
    statusText = "EXCELLENT";
    bgColor = "bg-emerald-100 text-emerald-700";
  } else if (acc >= 80) {
    statusEmoji = "👍";
    statusText = "GOOD EFFORT";
    bgColor = "bg-yellow-100 text-yellow-700";
  } else {
    statusEmoji = "❌";
    statusText = "INCORRECT";
    bgColor = "bg-red-100 text-red-700";
  }

  const message = `
    <div class="flex justify-between items-center mb-1 border-b pb-1 border-black/10">
      <span class="font-bold text-sm flex items-center gap-1">${statusEmoji} ${statusText}</span>
      <span class="text-base font-extrabold">${acc.toFixed(1)}%</span>
    </div>
    <div class="text-xs space-y-0.5 text-left opacity-90">
      <div class="flex justify-between"><span>Previous:</span> <span>${question}</span></div>
      <div class="flex justify-between"><span>You:</span> <span class="font-mono font-bold">${userAnswer}</span></div>
      <div class="flex justify-between"><span>Correct:</span> <span class="font-mono font-bold">${correctAnswer}</span></div>
    </div>
  `;

  banner.className = `p-3 rounded-xl mb-4 ${bgColor} animate-fade-in shadow-sm`;
  banner.innerHTML = message;
  
  // Respect the Toggle state
  if (gameState.showFeedback) {
    banner.classList.remove("hidden");
  } else {
    banner.classList.add("hidden");
  }
}

function updateStats() {
  document.getElementById("question-count").textContent = gameState.questionsLog.length;
  const avgAcc = gameState.questionsLog.reduce((sum, q) => sum + parseFloat(q.accuracy), 0) / gameState.questionsLog.length;
  document.getElementById("avg-accuracy").textContent = avgAcc.toFixed(1) + "%";
}

function startTimer() {
  // Get the total time set by the user for percentage calculation
  const totalTime = parseInt(document.getElementById("timer-input").value) || 60;
  const timerBarEl = document.getElementById("timer-bar"); // Cache the element

  // Initial setup
  document.getElementById("timer-display").textContent = gameState.timeRemaining;
  if (timerBarEl) timerBarEl.style.width = "100%";

  gameState.timer = setInterval(() => {
    gameState.timeRemaining--;
    document.getElementById("timer-display").textContent = gameState.timeRemaining;

    // --- NEW TIMER BAR LOGIC ---
    const percentage = (gameState.timeRemaining / totalTime) * 100;
    if (timerBarEl) timerBarEl.style.width = `${percentage}%`;
    // ---------------------------

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
  document.getElementById("final-count").textContent = gameState.questionsLog.length;
  const avgAcc = gameState.questionsLog.length > 0 ? gameState.questionsLog.reduce((sum, q) => sum + parseFloat(q.accuracy), 0) / gameState.questionsLog.length : 0;
  document.getElementById("final-accuracy").textContent = avgAcc.toFixed(1) + "%";

  if (gameState.mode === "timed") {
    const timeTaken = parseInt(document.getElementById("timer-input").value) - gameState.timeRemaining;
    document.getElementById("time-taken").textContent = timeTaken + "s";
    document.getElementById("time-taken-card").classList.remove("hidden");
  }

  const container = document.getElementById("results-table-container");
  let html = '<div class="overflow-x-auto"><table class="w-full text-left text-sm"><thead><tr class="border-b-2">';
  html += '<th class="p-2">Question</th><th class="p-2">Your Answer</th><th class="p-2">Correct</th><th class="p-2">Accuracy</th></tr></thead><tbody>';

  gameState.questionsLog.forEach((q) => {
    const acc = parseFloat(q.accuracy);
    let bgClass = "bg-red-100";
    if (acc >= 98) bgClass = "bg-cyan-100";
    else if (acc >= 95) bgClass = "bg-green-100";
    else if (acc >= 90) bgClass = "bg-yellow-100";
    else if (acc >= 80) bgClass = "bg-orange-100";
    html += `<tr class="border-b"><td class="p-2">${q.question}</td><td class="p-2">${q.userAnswer}</td><td class="p-2">${q.correctAnswer}</td><td class="p-2 ${bgClass} font-semibold">${q.accuracy}%</td></tr>`;
  });
  html += "</tbody></table></div>";
  container.innerHTML = html;
}

function resetGame() {
  gameState = {
    mode: gameState.mode || "practice",
    selectedConversions: gameState.selectedConversions,
    currentQuestion: null,
    questionsLog: [],
    timer: null,
    timeRemaining: 60,
    startTime: null,
    showFeedback: gameState.showFeedback
  };

  document.getElementById("results-screen").classList.add("hidden");
  document.getElementById("welcome-screen").classList.remove("hidden");
  renderCategories();
  updateSelectedCount();
}

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
  } catch { return []; }
}

function saveProgress() {
  // 1. Get current Global Progress
  const currentProgress = getProgress();
  const totalQuestionsAnswered = gameState.questionsLog.length;

  const gameAccuracy = gameState.questionsLog.length > 0 
    ? gameState.questionsLog.reduce((sum, q) => sum + parseFloat(q.accuracy), 0) / gameState.questionsLog.length 
    : 0;

  // 2. Prepare History Entry
  const newHistoryEntry = {
    id: Date.now(),
    date: new Date().toLocaleString(),
    mode: gameState.mode,
    questions: totalQuestionsAnswered,
    accuracy: gameAccuracy.toFixed(1),
    log: gameState.questionsLog,
  };

  const history = getHistory();
  history.unshift(newHistoryEntry);
  if (history.length > 20) history.pop();
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));

  // 3. Update Global Aggregated Stats
  currentProgress.totalGames = (currentProgress.totalGames || 0) + 1;
  currentProgress.totalQuestions = (currentProgress.totalQuestions || 0) + totalQuestionsAnswered;
  currentProgress.totalAccuracySum = (currentProgress.totalAccuracySum || 0) + gameAccuracy;

  // 4. NEW: Update Per-Conversion Global Stats
  if (!currentProgress.stats) currentProgress.stats = {};

  gameState.questionsLog.forEach(q => {
      // q.fullKey is e.g. "weight.kgToLb"
      if (!q.fullKey) return;
      
      if (!currentProgress.stats[q.fullKey]) {
          currentProgress.stats[q.fullKey] = { count: 0, accuracySum: 0 };
      }
      currentProgress.stats[q.fullKey].count += 1;
      currentProgress.stats[q.fullKey].accuracySum += parseFloat(q.accuracy);
  });

  localStorage.setItem(PROGRESS_KEY, JSON.stringify(currentProgress));
}

function showHistory() {
  document.getElementById("welcome-screen").classList.add("hidden");
  document.getElementById("results-screen").classList.add("hidden");
  document.getElementById("game-screen").classList.add("hidden");
  document.getElementById("history-detail-screen").classList.add("hidden");
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
  
  // Render Global Stats Top Bar
  document.getElementById("hist-total-games").textContent = progress.totalGames || 0;
  document.getElementById("hist-total-questions").textContent = progress.totalQuestions || 0;
  let overallAvg = 0;
  if (progress.totalGames > 0) {
    overallAvg = (progress.totalAccuracySum / progress.totalGames).toFixed(1);
  }
  document.getElementById("hist-avg-accuracy").textContent = overallAvg + "%";

  // NEW: Render Global Stats Breakdown (Accuracy by Type)
  const statsContainer = document.getElementById("hist-global-stats-container");
  if (progress.stats && Object.keys(progress.stats).length > 0) {
      document.getElementById("global-stats-section").classList.remove("hidden");
      let statsHtml = '<div class="grid grid-cols-1 md:grid-cols-2 gap-3">';
      
      // Group by category for cleaner display
      const groupedStats = {};
      Object.keys(progress.stats).forEach(fullKey => {
          const [catKey, convKey] = fullKey.split('.');
          const catName = conversions[catKey] ? conversions[catKey].name : catKey;
          const convName = (conversions[catKey] && conversions[catKey].conversions[convKey]) 
                           ? conversions[catKey].conversions[convKey].name 
                           : convKey;
          
          if (!groupedStats[catName]) groupedStats[catName] = [];
          groupedStats[catName].push({
              name: convName,
              data: progress.stats[fullKey]
          });
      });

      Object.keys(groupedStats).forEach(catName => {
          statsHtml += `<div class="bg-gray-50 p-3 rounded-lg border border-gray-100">`;
          statsHtml += `<h4 class="font-bold text-gray-700 text-sm mb-2 border-b pb-1">${catName}</h4>`;
          statsHtml += `<div class="space-y-1">`;
          groupedStats[catName].forEach(item => {
              const avg = (item.data.accuracySum / item.data.count).toFixed(1);
              let colorClass = "text-gray-600";
              if(avg >= 95) colorClass = "text-emerald-600 font-bold";
              else if(avg < 80) colorClass = "text-red-500";

              statsHtml += `<div class="flex justify-between text-xs">
                  <span>${item.name}</span>
                  <span class="${colorClass}">${avg}% <span class="text-gray-400 font-normal">(${item.data.count})</span></span>
              </div>`;
          });
          statsHtml += `</div></div>`;
      });
      statsHtml += '</div>';
      statsContainer.innerHTML = statsHtml;
  } else {
      document.getElementById("global-stats-section").classList.add("hidden");
  }

  // Render Recent Logs
  const container = document.getElementById("history-log-container");
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
                      game.mode === "timed" ? "bg-orange-200 text-orange-800" : "bg-green-200 text-green-800"
                    }">${game.mode === "timed" ? "Timed" : "Practice"}</span>
                </div>
                <p class="text-gray-700 mb-3">Answered <span class="font-bold">${game.questions}</span> questions with <span class="font-bold ${accColor}">${game.accuracy}%</span> accuracy.</p>
                <button onclick="viewHistoryDetails(${game.id})" class="text-indigo-600 hover:text-indigo-800 font-semibold text-sm flex items-center gap-1">View Details →</button>
            </div>
        `;
    container.innerHTML += html;
  });
}

function viewHistoryDetails(gameId) {
  const history = getHistory();
  const game = history.find(g => g.id === gameId);
  if (!game) { alert("Error: Game log not found."); return; }

  document.getElementById("history-screen").classList.add("hidden");
  document.getElementById("history-detail-screen").classList.remove("hidden");

  renderHistoryDetails(game);
}

function renderHistoryDetails(game) {
  document.getElementById("detail-date").textContent = game.date;
  document.getElementById("detail-mode").textContent = game.mode === "timed" ? "Timed" : "Practice";
  document.getElementById("detail-final-accuracy").textContent = game.accuracy + "%";
  document.getElementById("detail-final-count").textContent = game.questions;

  const categorySummary = {};
  if (game.log) {
    game.log.forEach(q => {
      // FIX: Ensure we have data even if fullKey was missing in old logs
      if(!q.fullKey || !q.category) return;

      const catName = conversions[q.category] ? conversions[q.category].name : "Unknown";
      const fullConvName = conversions[q.category].conversions[q.fullKey.split('.')[1]].name;
      
      if (!categorySummary[catName]) categorySummary[catName] = { total: 0, sumAccuracy: 0, conversions: {} };
      categorySummary[catName].total++;
      categorySummary[catName].sumAccuracy += parseFloat(q.accuracy);

      if (!categorySummary[catName].conversions[fullConvName]) categorySummary[catName].conversions[fullConvName] = { total: 0, sumAccuracy: 0 };
      categorySummary[catName].conversions[fullConvName].total++;
      categorySummary[catName].conversions[fullConvName].sumAccuracy += parseFloat(q.accuracy);
    });
  }

  const summaryContainer = document.getElementById("detail-summary-container");
  let summaryHtml = '<div class="space-y-3">';
  if(Object.keys(categorySummary).length === 0) {
      summaryHtml = "<p class='text-gray-500 italic text-sm'>No detailed stats available for this game.</p>";
  } else {
      Object.keys(categorySummary).forEach(catName => {
        const summary = categorySummary[catName];
        const avgAcc = (summary.sumAccuracy / summary.total).toFixed(1);

        summaryHtml += `
          <div class="p-3 bg-blue-50 rounded-lg shadow-sm border border-blue-100">
            <div class="flex justify-between items-center border-b border-blue-200 pb-1 mb-2">
                <span class="font-bold text-blue-800 text-sm">${catName}</span>
                <span class="text-xs text-blue-700">${summary.total} Qs | <span class="font-extrabold">${avgAcc}%</span></span>
            </div>
            <div class="space-y-1">
        `;

        Object.keys(summary.conversions).forEach(convName => {
            const convSummary = summary.conversions[convName];
            const convAvgAcc = (convSummary.sumAccuracy / convSummary.total).toFixed(1);
            summaryHtml += `
                <div class="flex justify-between text-xs text-gray-700">
                    <span class="pl-2">${convName}</span>
                    <span>${convAvgAcc}%</span>
                </div>
            `;
        });
        summaryHtml += '</div></div>';
      });
  }
  summaryHtml += '</div>';
  summaryContainer.innerHTML = summaryHtml;

  const tableContainer = document.getElementById("detail-table-container");
  if (!game.log || game.log.length === 0) {
    tableContainer.innerHTML = "<p class='text-gray-500 italic'>No question log available.</p>";
    return;
  }

  let html = '<div class="overflow-x-auto"><table class="w-full text-left text-sm"><thead><tr class="border-b-2">';
  html += '<th class="p-2">Question</th><th class="p-2">You</th><th class="p-2">Correct</th><th class="p-2">Acc.</th></tr></thead><tbody>';

  game.log.forEach((q) => {
    const acc = parseFloat(q.accuracy);
    let bgClass = "bg-red-50";
    if (acc >= 95) bgClass = "bg-green-50";
    else if (acc >= 80) bgClass = "bg-yellow-50";

    html += `<tr class="border-b ${bgClass}"><td class="p-2">${q.question}</td><td class="p-2">${q.userAnswer}</td><td class="p-2">${q.correctAnswer}</td><td class="p-2 font-semibold">${q.accuracy}%</td></tr>`;
  });
  html += "</tbody></table></div>";
  tableContainer.innerHTML = html;
}

function hideHistoryDetails() {
  document.getElementById("history-detail-screen").classList.add("hidden");
  document.getElementById("history-screen").classList.remove("hidden");
}

function resetHistory() {
  if (confirm("Clear ALL history and stats? Undonable.")) {
    localStorage.removeItem(PROGRESS_KEY);
    localStorage.removeItem(HISTORY_KEY);
    renderHistory();
  }
}

function getProgress() {
  try { return JSON.parse(localStorage.getItem("convertquest_progress")) || {}; } catch { return {}; }
}

function loadProgress() {
  const progress = getProgress();
  if (progress.totalGames) console.log(`Loaded stats for ${progress.totalGames} games.`);
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
  document.body.style.overflow = "hidden";
}

function closeAboutModal() {
  document.getElementById("about-modal").style.display = "none";
  document.body.style.overflow = "";
}
init();