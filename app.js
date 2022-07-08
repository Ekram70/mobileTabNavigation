const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

listItems.forEach((item, idx) => {
  item.addEventListener("click", () => {
    hideAll(contents, "show");
    hideAll(listItems, "active");

    contents[idx].classList.add("show");
    item.classList.add("active");
  });
});

function hideAll(parent, className) {
  parent.forEach((child) => child.classList.remove(`${className}`));
}
