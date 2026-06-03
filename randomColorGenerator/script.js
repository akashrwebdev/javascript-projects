const button = document.querySelector(".btn");
const display = document.querySelector(".display");
const hashNumber = document.querySelector("h2");

button.addEventListener("click", () => {
  const alphaNumeric = "0123456789ABCDEF".split("");

  let generatedColor = "";

  const length = 6;

  for (let i = 0; i < length; i++) {
    let hashCode = Math.floor(Math.random() * alphaNumeric.length);
    generatedColor += alphaNumeric[hashCode];
  }

  display.style.backgroundColor = `#${generatedColor}`;
  hashNumber.innerText = `#${generatedColor}`;
});
