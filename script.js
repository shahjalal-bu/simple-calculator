const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");

const equalbutton = document.querySelector("[data-equals]");
const deletebutton = document.querySelector("[data-delete]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

function getHistory() {
  return previousOperandTextElement.innerText;
}
function printHistory(num) {
  return (previousOperandTextElement.innerText = num);
}

function getOutput() {
  return currentOperandTextElement.innerText;
}

//comma separated number achieve system

function formatNumber(num) {
  let n = Number(num);
  let value = n.toLocaleString("en");
  return value;
}

function printOutput(num) {
  if (num == "") {
    currentOperandTextElement.innerText = num;
  } else {
    currentOperandTextElement.innerText = formatNumber(num);
  }
}
function normalNumber(num) {
  return Number(num.replace(/,/g, ""));
}
let history;
numberButtons.forEach(function (item) {
  item.addEventListener("click", function (e) {
    history = getHistory();
    history = history + this.innerText;
    printHistory(history);
  });
});

operationButtons.forEach(function (item) {
  item.addEventListener("click", function (e) {
    if (this.innerText == "AC") {
      printHistory("");
      printOutput("");
    } else if (this.innerText == "DEL") {
      history = getHistory();
      history = history.substr(0, history.length - 1);
      printHistory(history);
      printOutput("");
    } else if (this.innerText == "=") {
      history = getHistory();
      let result = eval(history);
      printOutput(result);
      printHistory(history);
    }

    //operator(+,-,*,/)
    else {
      history = getHistory();
      let output = getOutput();
      if (output) {
        history = normalNumber(output) + this.innerText;
        printHistory(history);
      } else if (isNaN(history[history.length - 1])) 
      
      {
        history = history.substr(0, history.length - 1) + this.innerText;
        printHistory(history)
      }
      
      
      else {
        history = history + this.innerText;
        printHistory(history);
      }
    }
  });
});
