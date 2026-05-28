/*
    inspired by https://coolors.co/ hover character effect
*/
const palette = ["#bd0b82", "#ffa2be", "#e23b9e", "#7a0c55", "#f080c4"];
const nameElla = document.querySelector(".hover-name");
const letters = nameElla.textContent.split("");
nameElla.textContent = "";

letters.forEach((char) => {
  const span = document.createElement("span");
  span.textContent = char;
  if (char.trim() !== "") {
    span.addEventListener("mouseover", () => {
      const color = palette[Math.floor(Math.random() * palette.length)];
      span.style.color = color;
      setTimeout(() => {
        span.style.color = "";
      }, 550);
    });
  }
  nameElla.append(span);
});

/*
    using github api documentation at https://docs.github.com/rest/reference/repos#get-a-repository 
                                    & https://docs.github.com/en/rest/repos/repos
*/
const loadProjectDescriptions = async () => {
  document.querySelectorAll(".desc").forEach(async (el) => {
    try {
      const res = await fetch(
        `https://api.github.com/repos/${el.dataset.repo}`,
      );
      if (!res.ok) throw new Error(`GitHub API ${res.status}`);
      const data = await res.json();
      if (data.description) el.textContent = data.description;
    } catch (err) {
      console.warn("Could not refresh description for", el.dataset.repo, err);
    }
  });
};
loadProjectDescriptions();
