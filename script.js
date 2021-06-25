const lights_on = document.querySelector(".btn1");
const lights_off = document.querySelector(".btn2");
const circles = document.querySelectorAll("#circle");
const slider = document.querySelector("#myRange");
const intense = document.querySelector("#intense");

lights_off.addEventListener("click", () => {
  circles.forEach((circle) => {
    circle.classList.remove("animate-1", "animate-2", "animate-3", "animate-4", "animate-5");
    circle.classList.add("dim");
  });
  title.classList.add("dim");
});

lights_on.addEventListener("click", () => {
  circles.forEach((circle) => {
    circle.classList.add("animate-1");
  });
  title.classList.remove("dim");
});

slider.oninput = function() {
  const duration = this.value;
  switch (duration) {
    case "1":
      circles.forEach((circle) => {
        circle.classList.remove("animate-1", "animate-2", "animate-3", "animate-4", "animate-5");
        circle.classList.add("animate-1");
      });
      intense.innerText = "1";
      break;
    case "2":
      circles.forEach((circle) => {
        circle.classList.remove("animate-1", "animate-2", "animate-3", "animate-4", "animate-5");
        circle.classList.add("animate-2");
      });
      intense.innerText = "2";
      break;
    case "3":
      circles.forEach((circle) => {
        circle.classList.remove("animate-1", "animate-2", "animate-3", "animate-4", "animate-5");
        circle.classList.add("animate-3");
      });
      intense.innerText = "3";
      break;
    case "4":
      circles.forEach((circle) => {
        circle.classList.remove("animate-1", "animate-2", "animate-3", "animate-4", "animate-5");
        circle.classList.add("animate-4");
      });
      intense.innerText = "4";
      break;
    case "5":
      circles.forEach((circle) => {
        circle.classList.remove("animate-1", "animate-2", "animate-3", "animate-4", "animate-5");
        circle.classList.add("animate-5");
      });
      intense.innerText = "5";
      break;
  }
};
