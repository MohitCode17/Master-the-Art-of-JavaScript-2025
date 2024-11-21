const billAmtInput = document.getElementById("bill_input");
const tipAmtInput = document.getElementById("tip_input");
const calculateBtn = document.querySelector(".calculate_tip_btn");
const tipElement = document.querySelector(".tip");

// CALCULATE TIP
const calculateTip = () => {
  if (!billAmtInput.value && !tipAmtInput.value) {
    alert("Please provide bill value and tip amount in %.");
    return;
  }

  const billValue = +billAmtInput.value;
  const tipPercentage = +tipAmtInput.value / 100;
  const totalTip = billValue * tipPercentage;

  tipElement.textContent = totalTip.toFixed(2);
};

calculateBtn.addEventListener("click", calculateTip);
