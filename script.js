/*
    inspired by https://coolors.co/ hover character effect
*/
const palette = ["#bd0b82", "#ffa2be", "#e23b9e", "#7a0c55", "#f080c4"];
const nameElla = document.querySelector(".hover-name");
const letters = nameElla.textContent.split("");
nameElla.textContent = "";

letters.forEach((char) => {
  const span = document.createElement("span");
  span.textContent = char === " " ? "\u00A0" : char; 
  
  if (char.trim() !== "") {
    span.addEventListener("mouseover", () => {
      span.style.transform = "translateY(-15px)";
      const color = palette[Math.floor(Math.random() * palette.length)];
      span.style.color = color;
      setTimeout(() => {
        span.style.color = "";
        span.style.transform = "";
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

/*
    scroll reveal using intersection observer api at https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API 
                                                   & https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver
*/

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.1 }
);

document.querySelectorAll('main section:not(:first-of-type)').forEach((sec) => {
    sec.classList.add('reveal');
    revealObserver.observe(sec);
});

/*
    contact form validation using inline note and bootstrap toast at https://getbootstrap.com/docs/5.3/components/toasts/
*/
const form = document.querySelector('#contact-form');
const note = document.querySelector('#form-note');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  const firstName = form.name.value.trim().split(' ')[0] || 'friend';
  note.textContent = `Thanks, ${firstName}. I'll be in touch!`;

  const toast = new bootstrap.Toast(document.querySelector('#submit-toast'), {
    delay: 4000,
  });
  toast.show();

  form.reset();
});
