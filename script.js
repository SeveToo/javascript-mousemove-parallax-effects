const pos = document.documentElement;
const h2 = document.querySelectorAll("h2");
const circle = document.querySelector(".circle");
const box = document.querySelectorAll(".box");

pos.addEventListener("mousemove", (e) => {
  pos.style.setProperty("--x", e.clientX + "px");
  pos.style.setProperty("--y", e.clientY + "px");
});

console.log(circle);
h2[1].onmouseover = () => {
  box[1].style.clipPath = `circle(250px at var(--x) var(--y))`;
};
h2[1].onmouseout = () => {
  box[1].style.clipPath = `circle(150px at var(--x) var(--y))`;
};
