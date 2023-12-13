// Отримуємо елементи з DOM
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

// Додаємо подію "input" до інпута
nameInput.addEventListener('input', function () {
  const inputValue = nameInput.value.trim();

  if (inputValue === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = inputValue;
  }
});
