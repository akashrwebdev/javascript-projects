const contactForm = document.getElementById("contactForm");
const response = document.getElementById("response");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    response.textContent = "Please fill in all fields.";
    response.style.color = "red";
    return;
  }

  response.textContent = "Message sent successfully!";
  response.style.color = "green";

  console.log({
    name,
    email,
    message,
  });

  contactForm.reset();
});
