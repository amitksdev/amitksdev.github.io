const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const joinForm = document.querySelector(".join-form");
const formNote = document.getElementById("form-note");

if (joinForm && formNote) {
  joinForm.addEventListener("submit", () => {
    formNote.textContent = "You are subscribed. Next build drop lands this Friday.";
  });
}
