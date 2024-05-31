const display = document.getElementById("display");

function appendValue(input) {
  if (display.value == "Error" || display.value == "NaN") {
    display.value = "";
  }
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
