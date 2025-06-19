 const display = document.getElementById('display');

    function append(value) {
      const operators = ['+', '-', '*', '/'];
      const lastChar = display.value.slice(-1);

      if (value === '.' && display.value.split(/[+\-*/]/).pop().includes('.')) return;
      if (operators.includes(value)) {
        if (display.value === '' || operators.includes(lastChar)) return;
      }

      display.value += value;
    }

    function clearDisplay() {
      display.value = '';
    }

 function clearEntry() {
  display.value = display.value.slice(0, -1);
}


    function calculate() {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    }

    function toggleTheme() {
      document.body.classList.toggle('light-mode');
    }

    function toggleKeyboard() {
      document.body.classList.toggle('stylish-keyboard');
    }

    document.addEventListener('keydown', (e) => {
      const key = e.key;
      if ("0123456789+-*/.".includes(key)) append(key);
      if (key === "Enter") calculate();
      if (key === "Backspace") display.value = display.value.slice(0, -1);
      if (key === "Escape") clearDisplay();
    });