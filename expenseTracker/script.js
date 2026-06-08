let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
let type = "income";

function setType(selected) {
  type = selected;

  document.getElementById("incomeBtn").classList.remove("active");
  document.getElementById("expenseBtn").classList.remove("active");

  document.getElementById(selected + "Btn").classList.add("active");
}

function save() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

function addTransaction() {
  const text = document.getElementById("text").value;
  const amount = +document.getElementById("amount").value;

  if (!text || !amount) return;

  transactions.push({
    id: Date.now(),
    text,
    amount: type === "expense" ? -amount : amount,
  });

  document.getElementById("text").value = "";
  document.getElementById("amount").value = "";

  save();
  render();
}

function deleteTransaction(id) {
  transactions = transactions.filter((t) => t.id !== id);
  save();
  render();
}

function render() {
  const list = document.getElementById("list");

  let income = 0;
  let expense = 0;
  let balance = 0;

  list.innerHTML = "";

  transactions.forEach((t) => {
    balance += t.amount;

    if (t.amount > 0) income += t.amount;
    else expense += Math.abs(t.amount);

    const li = document.createElement("li");

    li.innerHTML = `
      <span>${t.text}</span>
      <span>
        ${t.amount}
        <button onclick="deleteTransaction(${t.id})">❌</button>
      </span>
    `;

    list.appendChild(li);
  });

  document.getElementById("balance").innerText = "Balance: ₹" + balance;
  document.getElementById("income").innerText = "Income: ₹" + income;
  document.getElementById("expense").innerText = "Expense: ₹" + expense;
}


render();
setType("income");
