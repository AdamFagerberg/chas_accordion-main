// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
const section1Element = document.getElementById("section1");
section1Element.addEventListener("click", toggle);

const section2Element = document.getElementById("section2");
section2Element.addEventListener("click", toggle);

const section3Element = document.getElementById("section3");
section3Element.addEventListener("click", toggle);

const accordionEl = document.querySelector(".accordion");

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  data.forEach((post) => {
    const postEl = document.createElement("div");
    const postElDesc = document.createElement("div");
    const arrow = document.createElement("div");
    postEl.setAttribute("class", "title");
    postEl.setAttribute("id", "section" + `${post.id}`);
    postElDesc.setAttribute("class", "description");
    postEl.innerHTML = `${post.title}`;
    postElDesc.innerHTML = `<p>${post.body}</p>`;
    arrow.setAttribute("class", "arrow");
    arrow.innerHTML = "^";

    postEl.appendChild(arrow);
    accordionEl.appendChild(postEl);
    accordionEl.appendChild(postElDesc);

    postEl.addEventListener("click", toggle);
  });
}

getPosts();
