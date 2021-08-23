const container = document.querySelector("#resources-container");
const template = document.querySelector("#item-template");
const options = Array.from(document.querySelectorAll(".options"));

let type = "Fonts";
let url = "../Assets/Resources/Fonts/fonts.json";

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    removeClass();
    type = option.textContent.trim();
    url = `../Assets/Resources/${type}/${type.toLowerCase()}.json`;
    option.classList.add("bg-gray-200", "rounded-md", "font-bold");
    fetchResource();
  });
});

function removeClass() {
  options.forEach((option) => {
    option.classList.remove("bg-gray-200", "rounded-md", "font-bold");
  });
}

async function fetchResource() {
  const response = await fetch(url, {
    headers: {
      content: "application.json",
      Accept: "application/json",
    },
  });
  const resources = await response.json();
  container.innerHTML = "";
  resources.forEach(renderResource);
}
fetchResource();
function renderResource(resource) {
  const templateClone = template.content.cloneNode(true);
  const name = templateClone.querySelector("[data-name]");
  name.textContent = resource.Title;
  const link = templateClone.querySelector("[data-link]");
  link.href = resource.Link;
  const description = templateClone.querySelector("[data-desc]");
  description.textContent = resource.Description;
  const img = templateClone.querySelector("[data-image]");
  img.src = `./Assets/Resources/${type}/${resource.Icon}`;
  container.appendChild(templateClone);
}
