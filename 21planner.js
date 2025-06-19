// Initialize the planner data
let plannerData = [];

// Load the planner from local storage
function loadPlanner() {
  const storedData = localStorage.getItem('plannerData');
  if (storedData) {
    plannerData = JSON.parse(storedData);
  }
}

// Save the planner to local storage
function savePlanner() {
  localStorage.setItem('plannerData', JSON.stringify(plannerData));
}

// Create the planner
function createPlanner() {
  const plannerContainer = document.getElementById('planner-container');

  for (let i = 0; i < 21; i++) {
    const day = i + 1;
    const dayDiv = document.createElement('div');
    dayDiv.classList.add('day');

    const label = document.createElement('label');
    label.innerHTML = `<input type="checkbox" onchange="updateTracker(${i})"> Day ${day}`;

    const textarea = document.createElement('textarea');
    textarea.placeholder = 'Enter your plan for the day...';
    textarea.addEventListener('input', function() {
      plannerData[i] = this.value;
      savePlanner();
    });

    if (plannerData[i]) {
      textarea.value = plannerData[i];
    }

    dayDiv.appendChild(label);
    dayDiv.appendChild(textarea);
    plannerContainer.appendChild(dayDiv);
  }
}

// Update the progress tracker
function updateTracker(dayIndex) {
  const trackerContainer = document.getElementById('tracker-container');
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let score = 0;

  checkboxes.forEach((checkbox, index) => {
    if (index <= dayIndex) {
      checkbox.disabled = true;
      score += 100;
    } else {
      checkbox.disabled = false;
    }
  });

  const scoreText = document.getElementById('score');
  scoreText.textContent = `Score: ${score}`;

  // Save the score to local storage
  localStorage.setItem('score', score);
}

// Load the score from local storage
function loadScore() {
  const storedScore = localStorage.getItem('score');
  if (storedScore) {
    const scoreText = document.getElementById('score');
    scoreText.textContent = `Score: ${storedScore}`;
  }
}

// Load the planner and score when the page loads
window.addEventListener('load', function() {
  loadPlanner();
  createPlanner();
  loadScore();
});
