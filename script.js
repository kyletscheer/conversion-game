const timerElement = document.getElementById('timer');
const questionElement = document.getElementById('question');
const answerInput = document.getElementById('answer');
const answeredElement = document.getElementById('answered');
const submitButton = document.getElementById('submitBtn');
const startButton = document.getElementById('startBtn');
const stopButton = document.getElementById('stopBtn');
const inputContainer = document.getElementById('inputContainer');
const resultsContainer = document.getElementById('results');
const resultsTableBody = document.getElementById('resultsTableBody');
const darkModeToggle = document.getElementById('darkModeToggle');
const timerInputSection = document.getElementById('timerInputSection');
const selectedConversionsList = document.getElementById('selectedConversionsList');
const conversionSelection = document.getElementById('conversionSelection');
const scoreboard = document.getElementById('scoreboard');


let timeRemaining = 60;
let TimerInputValue = 60;
let questionsAnswered = 0;
let questionsLog = []; // To store details of each question
let currentConversion = {};
let selectedConversions = [];
let timer;

function generateQuestion() {
    if (selectedConversions.length === 0) {
        questionElement.textContent = "No conversions selected!";
        return;
    }

    // Flatten selected conversions to access their corresponding options
    const flatConversions = selectedConversions.map((key) => {
        for (const categoryKey in conversions) {
            if (conversions[categoryKey].options[key]) {
                return conversions[categoryKey].options[key];
            }
        }
    }).filter(Boolean); // Remove undefined values if any

    if (flatConversions.length === 0) {
        questionElement.textContent = "Invalid selections!";
        return;
    }

    // Select a random conversion from the valid options
    const randomConversion = flatConversions[Math.floor(Math.random() * flatConversions.length)];
    currentConversion = randomConversion.generate();
    questionElement.textContent = currentConversion.question;
}

function updateSelectedConversionsDisplay() {
    // Clear the existing list
    selectedConversionsList.innerHTML = '';

    // Display all selected conversions
    selectedConversions.forEach((key) => {
        // Find the conversion name
        let conversionName = '';
        for (const categoryKey in conversions) {
            if (conversions[categoryKey].options[key]) {
                conversionName = conversions[categoryKey].options[key].name;
                break;
            }
        }

        if (conversionName) {
            const conversionDiv = document.createElement('div');
            conversionDiv.className = 'selected-conversion';
            conversionDiv.textContent = conversionName;
            selectedConversionsList.appendChild(conversionDiv);
        }
    });
}

function startGame() {
    selectedConversions = getSelectedConversions();
    if (selectedConversions.length === 0) {
        alert("Please select at least one conversion!");
        return;
    }

    const timerInput = parseInt(document.getElementById('timerInput').value) || 10;
    if (timerInput < 10) {
        alert("Minimum time allowed is 10 seconds.");
        return;
    }

    questionsAnswered = 0;
    timeRemaining = timerInput;
    timerInputValue = timerInput;
    timerElement.textContent = timeRemaining;
    questionsLog = [];
    resultsContainer.style.display = 'none';
    startButton.style.display = 'none';
    timerInputSection.style.display = 'none';
    conversionSelection.style.display = 'none';
    answerInput.value = '';
    answerInput.disabled = false;
    inputContainer.style.display = 'block';
    scoreboard.style.display = 'block';
    submitButton.disabled = false;
    submitButton.style.display = 'block';
    stopButton.style.display = 'block';

    generateQuestion();

    timer = setInterval(() => {
        timeRemaining--;
        timerElement.textContent = timeRemaining;

        if (timeRemaining <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

const conversionOptionsContainer = document.getElementById('conversionOptions');

function populateConversionOptions() {
    const conversionOptionsContainer = document.getElementById('conversionOptionsContainer');
    conversionOptionsContainer.innerHTML = ''; // Clear any existing content

    // Create tabs container
    const tabsContainer = document.createElement('div');
    tabsContainer.className = 'tabs-container';

    // Create content container
    const contentContainer = document.createElement('div');
    contentContainer.className = 'content-container';

    // Iterate through each category in the conversions object
    Object.keys(conversions).forEach((categoryKey, index) => {
        const category = conversions[categoryKey];

        // Create a tab button
        const tabButton = document.createElement('button');
        tabButton.className = 'tab-button';
        tabButton.textContent = category.name;
        tabButton.dataset.target = categoryKey;

        // Set the first tab as active by default
        if (index === 0) {
            tabButton.classList.add('active');
        }

        // Tab click event to switch content
        tabButton.addEventListener('click', () => {
            document.querySelectorAll('.tab-button').forEach((btn) => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach((content) => content.classList.remove('active'));

            tabButton.classList.add('active');
            document.querySelector(`.tab-content[data-category="${categoryKey}"]`).classList.add('active');
        });

        tabsContainer.appendChild(tabButton);

        // Create the content for the tab
        const content = document.createElement('div');
        content.className = 'tab-content';
        content.dataset.category = categoryKey;

        // Set the first content as active by default
        if (index === 0) {
            content.classList.add('active');
        }

        // Populate options for the category
        Object.keys(category.options).forEach((optionKey) => {
            const option = category.options[optionKey];

            const optionBox = document.createElement('div');
            optionBox.className = 'option-box';
            optionBox.textContent = option.name;
            optionBox.dataset.value = optionKey;

            optionBox.addEventListener('click', () => {
                const selectedIndex = selectedConversions.indexOf(optionKey);

                if (selectedIndex === -1) {
                    // Add to selected conversions
                    selectedConversions.push(optionKey);
                } else {
                    // Remove from selected conversions
                    selectedConversions.splice(selectedIndex, 1);
                }

                optionBox.classList.toggle('selected');
                updateSelectedConversionsDisplay();
            });

            content.appendChild(optionBox);
        });

        contentContainer.appendChild(content);
    });

    // Append tabs and content to the main container
    conversionOptionsContainer.appendChild(tabsContainer);
    conversionOptionsContainer.appendChild(contentContainer);
}


function getSelectedConversions() {
    const selected = [];
    const selectedBoxes = document.querySelectorAll('.option-box.selected');
    selectedBoxes.forEach((box) => {
        selected.push(box.dataset.value);
    });
    return selected;
}

populateConversionOptions();

function checkAnswer() {
    const userAnswer = parseFloat(answerInput.value);
    if (isNaN(userAnswer)) return;

    const error = Math.abs((userAnswer - currentConversion.answer) / currentConversion.answer);
    const accuracy = Math.max(0, 100 - error * 100); // Calculate accuracy percentage

    // Log the question details with an explanation
    const explanation = `Correct Answer: ${currentConversion.answer.toFixed(2)} (${currentConversion.question})`;
    questionsLog.push({
        question: currentConversion.question,
        userAnswer: userAnswer.toFixed(2),
        correctAnswer: currentConversion.answer.toFixed(2),
        accuracy: accuracy.toFixed(2),
        explanation: explanation, // Add the explanation here
    });

    questionsAnswered++;
    answeredElement.textContent = questionsAnswered;

    answerInput.value = '';
    generateQuestion();
}

function endGame() {
    submitButton.disabled = true;
    answerInput.disabled = true;
    inputContainer.style.display = 'none';
    submitButton.style.display = 'none';
    stopButton.style.display = 'none';
    timerInputSection.style.display = 'block';
    conversionSelection.style.display = 'block';
    startButton.style.display = 'block';
    timerInput.style.display = 'block';
    displayResults();
}

// The function to reset (refresh) the page
function resetGame() {
    location.reload();  // Refreshes the page
}

function stopGame() {
    // Show a message indicating the game was stopped early and display the remaining time
    const resultsContainer = document.getElementById('early_stop');
    resultsContainer.innerHTML = `
        <p><strong>Game stopped early!</strong></p>
        <p>You stopped the game with ${timeRemaining} seconds left out of the ${timerInputValue} seconds.</p>
        <p>See your results below:</p>
    `;
    // Add the Reset button to the results container
    const resetButtonHTML = `
    <button class="btn btn-secondary" id="reset-game" onclick="resetGame()">Reset Game</button>
`;
    resultsContainer.innerHTML += resetButtonHTML;

    // Stop the timer
    clearInterval(timer);

    endGame();
}

function displayResults() {
    resultsTableBody.innerHTML = '';
    let totalAccuracy = 0;
    let conversionAccuracies = {};

    questionsLog.forEach((entry, index) => {
        const accuracyClass = entry.accuracy >= 98 ? 'accuracy-diamond' :
            entry.accuracy >= 95 ? 'accuracy-platinum' :
                entry.accuracy >= 90 ? 'accuracy-gold' :
                    entry.accuracy >= 80 ? 'accuracy-silver' :
                        'accuracy-none';
        const row = `
    <tr>
        <td>${index + 1}</td>
        <td>${entry.question}</td>
        <td>${entry.userAnswer}</td>
        <td>${entry.correctAnswer}</td>
        <td class="${accuracyClass}">${entry.accuracy}%</td>
    </tr>
`;
        resultsTableBody.innerHTML += row;
        totalAccuracy += parseFloat(entry.accuracy);

        // Extract conversion type from the question
        const match = entry.question.match(/(\S+) = .* (\S+)/);
        if (match) {
            const conversionType = `${match[1]} → ${match[2]}`; // Example: "mph → knots"

            if (!conversionAccuracies[conversionType]) {
                conversionAccuracies[conversionType] = { total: 0, count: 0 };
            }
            conversionAccuracies[conversionType].total += parseFloat(entry.accuracy);
            conversionAccuracies[conversionType].count += 1;
        }
    });

    const overallAccuracy = (totalAccuracy / questionsLog.length).toFixed(2);
    const accuracyRow = `
<tr>
    <td colspan="4"><strong>Overall Accuracy</strong></td>
    <td><strong>${overallAccuracy}%</strong></td>
</tr>
`;
    resultsTableBody.innerHTML += accuracyRow;

    // Display accuracy per conversion type
    for (const [conversionType, data] of Object.entries(conversionAccuracies)) {
        const avgAccuracy = (data.total / data.count).toFixed(2);
        const accuracyClass = avgAccuracy >= 98 ? 'accuracy-diamond' :
            avgAccuracy >= 95 ? 'accuracy-platinum' :
                avgAccuracy >= 90 ? 'accuracy-gold' :
                    avgAccuracy >= 80 ? 'accuracy-silver' :
                        'accuracy-none';
        resultsTableBody.innerHTML += `
        <tr>
            <td colspan="4">${conversionType} Accuracy</td>
            <td class="${accuracyClass}">${avgAccuracy}%</td>
        </tr>
        `;
    }

    resultsContainer.style.display = 'block';
}

// Submit answer when user presses "enter" keyboard button
answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});

startButton.addEventListener('click', startGame);
submitButton.addEventListener('click', checkAnswer);