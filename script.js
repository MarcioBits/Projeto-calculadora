let currentInput = '';
const display = document.getElementById('display');

document.querySelectorAll('.buttons button').forEach(button => {
  button.addEventListener('click', () => {

    const value = button.dataset.value;
    const action = button.dataset.action;

    if (value !== undefined) {
      appendToDisplay(value);
    }

    if (action === 'clear') {
      clearDisplay();
    }

    if (action === 'equals') {
      calculateResult();
    }
  });
});

function appendToDisplay(value) {
  currentInput += value;
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  display.value = '';
}

function calculateResult() {
  try {
    const result = Function(`return ${currentInput}`)();
    display.value = result;
    currentInput = result.toString();
  } catch {
    display.value = 'Erro';
    currentInput = '';
  }
}
