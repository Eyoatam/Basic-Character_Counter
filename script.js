const TextArea = document.getElementById("message");
const RemainingCharacters = document.getElementById("remaining-characters");
const MaxChars = 500;

TextArea.addEventListener("input", () => {
  const Remaining = MaxChars - TextArea.value.length;
  const Danger = Remaining < MaxChars * 0.1 ? "red" : null;
  const Stop = Remaining < 0 ? (TextArea.readOnly = true) : null;

  RemainingCharacters.textContent = `${Remaining} Characters Remaining`;
  RemainingCharacters.style.color = Danger;
});
