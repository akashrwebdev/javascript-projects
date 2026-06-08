let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();

  if (!text) return;

  tasks.push({
    id: Date.now(),
    text,
    completed: false,
  });

  input.value = "";
  save();
  renderTasks();
}

function toggleTask(id) {
  tasks = tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task,
  );

  save();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  save();
  renderTasks();
}

function clearCompleted() {
  tasks = tasks.filter((task) => !task.completed);
  save();
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  const filter = document.getElementById("filter").value;
  const search = document.getElementById("search").value.toLowerCase();

  let filtered = tasks;

  if (filter === "active") {
    filtered = filtered.filter((t) => !t.completed);
  } else if (filter === "completed") {
    filtered = filtered.filter((t) => t.completed);
  }

  if (search) {
    filtered = filtered.filter((t) => t.text.toLowerCase().includes(search));
  }

  list.innerHTML = "";

  filtered.forEach((task) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span class="${task.completed ? "completed" : ""}"
        onclick="toggleTask(${task.id})">
        ${task.text}
      </span>
      <button onclick="deleteTask(${task.id})">❌</button>
    `;

    list.appendChild(li);
  });

  updateStats();
}

function updateStats() {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  document.getElementById("stats").innerHTML = `
    Total: ${total} | Completed: ${completed} | Pending: ${pending}
  `;
}

renderTasks();
