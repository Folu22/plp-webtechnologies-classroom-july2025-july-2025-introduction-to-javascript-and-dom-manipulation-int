// =====================================================
// Part 1: Basics - Variables, Conditionals
// =====================================================
// Check if student is old enough for admission
document.getElementById("checkAgeBtn").addEventListener("click", function () {
  let age = document.getElementById("ageInput").value;
  let result = "";

  if (age >= 18) {
    result = "✅ Eligible for university admission.";
  } else if (age > 0) {
    result = "⚠️ Too young for admission.";
  } else {
    result = "⚠️ Please enter a valid age.";
  }

  document.getElementById("ageResult").textContent = result;
});

// =====================================================
// Part 2: Functions - Reusability
// =====================================================
// Function 1: Calculate total marks
function calculateTotal(a, b) {
  return a + b;
}

// Function 2: Format feedback
function formatMessage(message) {
  return `*** ${message.toUpperCase()} ***`;
}

// Event listener using the functions
document.getElementById("calcTotalBtn").addEventListener("click", function () {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);

  let total = calculateTotal(num1, num2);
  document.getElementById("totalResult").textContent = formatMessage(
    "Your total score is " + total
  );
});

// =====================================================
// Part 3: Loops - Repetition
// =====================================================
// Example 1: Countdown using for loop
document.getElementById("countdownBtn").addEventListener("click", function () {
  let countdownList = document.getElementById("countdownList");
  countdownList.innerHTML = "";

  for (let i = 5; i >= 0; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    countdownList.appendChild(li);
  }
});

// Example 2: Subjects list using forEach loop
document.getElementById("listSubjectsBtn").addEventListener("click", function () {
  let subjects = ["Mathematics", "English", "Physics", "Computer Science"];
  let subjectList = document.getElementById("subjectList");
  subjectList.innerHTML = "";

  subjects.forEach(function (subject) {
    let li = document.createElement("li");
    li.textContent = subject;
    subjectList.appendChild(li);
  });
});

// =====================================================
// Part 4: DOM Manipulation - Make portal interactive
// =====================================================
// Toggle welcome note
document.getElementById("toggleBtn").addEventListener("click", function () {
  let message = document.getElementById("toggleMessage");
  message.classList.toggle("hidden");
});

// Change background theme
document.getElementById("changeColorBtn").addEventListener("click", function () {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightyellow"
      ? "white"
      : "lightyellow";
});

// Add new study task dynamically
document.getElementById("addTaskBtn").addEventListener("click", function () {
  let newTask = document.createElement("li");
  newTask.textContent =
    "New Study Task " + (document.querySelectorAll("#taskList li").length + 1);
  document.getElementById("taskList").appendChild(newTask);
});
