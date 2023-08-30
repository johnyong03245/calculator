// basic calculator
let currentInput = '';

function appendNumber(num) {
  currentInput += num;
  updateResult();
}

function appendOperator(operator) {
  if (currentInput !== '') {
    currentInput += operator;
    updateResult();
  }
}

function clearResult() {
  currentInput = '';
  updateResult();
}

function calculateResult() {
  try {
    const result = eval(currentInput);
    currentInput = result.toString();
    updateResult();
  } catch (error) {
    currentInput = 'Error';
    updateResult();
  }
}

function updateResult() {
  document.getElementById('result').value = currentInput;
}


// Event listener for keyboard input
document.addEventListener('keydown', function(event) {
  const key = event.key;

  if (/[0-9]/.test(key)) {
    appendNumber(key);
  } else if (['+', '-', '*', '/'].includes(key)) {
    appendOperator(key);
  } else if (key === 'Enter') {
    calculateResult();
  } else if (key === 'Escape') {
    clearResult();
  } else if (key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
    updateResult();
  }
});
