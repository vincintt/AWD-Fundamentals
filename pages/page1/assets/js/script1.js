// 1. Variables: Display a greeting message
function displayGreeting() {
    const name = document.getElementById("userName").value;
    const greeting = name ? `Hello, ${name}! Welcome to the demo.` : "Please enter your name.";
    document.getElementById("greetingOutput").textContent = greeting;
  }
  
  // 2. Input/Output and 3. Conditionals: Check if a number is odd or even
  function checkOddEven() {
    const number = document.getElementById("numberInput").value;
    if (number === "") {
      document.getElementById("oddEvenOutput").textContent = "Please enter a number.";
      return;
    }
    const result = number % 2 === 0 ? "Even" : "Odd";
    document.getElementById("oddEvenOutput").textContent = `The number ${number} is ${result}.`;
  }
  
  // 3. Conditionals: Check voting eligibility
  function checkEligibility() {
    const age = document.getElementById("userAge").value;
    if (age === "") {
      document.getElementById("eligibilityOutput").textContent = "Please enter your age.";
      return;
    }
    const eligibility = age >= 18 ? "eligible" : "not eligible";
    document.getElementById("eligibilityOutput").textContent = `You are ${eligibility} to vote.`;
  }
  
  // 4. Looping: Calculate the sum of numbers up to a given number
  function calculateSum() {
    const num = document.getElementById("sumNumber").value;
    if (num === "" || num < 1) {
      document.getElementById("sumOutput").textContent = "Please enter a positive number.";
      return;
    }
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    document.getElementById("sumOutput").textContent = `The sum of numbers from 1 to ${num} is ${sum}.`;
  }
  