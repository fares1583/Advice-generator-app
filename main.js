let btn = document.querySelector(".circle");
let span = document.querySelector(".advice-id span");
let adviceText = document.querySelector(".advice-text");

async function getAdvice() {
  let fetchAdvice = await fetch("https://api.adviceslip.com/advice");

  let advice = await fetchAdvice.json();

  span.innerHTML = advice.slip.id;

  adviceText.innerHTML = `"${advice.slip.advice}"`;
}

window.addEventListener("load", getAdvice);
btn.addEventListener("click", getAdvice);
