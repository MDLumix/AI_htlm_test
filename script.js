const welcomeButton = document.querySelector("#welcome-button");
const message = document.querySelector("#message");

welcomeButton.addEventListener("click", () => {
  message.textContent = "Hello! Your external JavaScript is working.";
});
