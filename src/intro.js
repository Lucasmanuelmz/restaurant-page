function createInitSection() {
  let title = document.createElement("div");
  title.classList.add("title");
  let h1 = document.createElement("h1");
  h1.textContent = `Welcome to "Taste of the Valley"!`;
  title.appendChild(h1);

  return title;
}

export default createInitSection;
