const cnt = document.querySelector(".counterNumber");
const increse = document.querySelector(".add");
const reset = document.querySelector(".reset");
const decrese = document.querySelector(".sub");

let count = 0;

function update() {
  cnt.textContent = count;
}

increse.addEventListener("click", () => {
  count++;
  update();
});
decrese.addEventListener("click", () => {
  if (count > 0) {
    count--;
    update();
  }
});

reset.addEventListener("click", () => {
  count = 0;
  update();
});
