const buttonLoad = document.querySelector(".button__load");
const buttonMore = document.querySelector(".button__more");
const wrap = document.querySelector(".wrap");
const spinner = document.querySelector(".overlay__spinner__container");
const api = "https://api.thecatapi.com/v1/images/search?limit=10";

function renderImages(response) {
  response.forEach((data) => {
    let elem = `<img class="img" src=${data.url}></img>`;
    wrap.innerHTML += elem;
  });
}

async function getImages() {
  displayElementHandler(spinner, "flex");
  try {
    const response = await fetch(api);
    const data = await response.json();
    renderImages(data);
  } catch (error) {
    console.log(error);
  }
  displayElementHandler(spinner, "none");
  displayElementHandler(buttonMore, "flex");
}

buttonLoad.addEventListener("click", () => {
  wrap.innerHTML = "";
  getImages();
});

buttonMore.addEventListener("click", () => {
  getImages();
});

function displayElementHandler(element, value) {
  element.style.display = value;
}
