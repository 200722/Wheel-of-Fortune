const labels = [1, 2, 3, 4, 5, 6, 7, 8];
const labelsStr = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
];

function createwheel() {
  // Arrow, spin and container elements
  let arrow = document.createElement("span");
  {
    arrow.className = "arrow";
    document.body.appendChild(arrow);
  }

  let spin = document.createElement("button");
  {
    spin.id = "spin";
    spin.innerHTML = "Spin";
    spin.addEventListener("click", function () {
      const number = Math.ceil(Math.random() * 1000);
      {
        container.style.transform = "rotate(" + number + "deg)";
        number += Math.ceil(Math.random() * 1000);
      }
    });
    document.body.appendChild(spin);
  }

  let container = document.createElement("div");
  {
    container.className = "container";

    for (let i = 0; i < labels.length; i++) {
      let wheel = document.createElement("div");
      const num = `${labels[i]}`;
      wheel.id = num;
      wheel.className = `${labelsStr[i]}`; // labelsStr[i].toString();
      wheel.innerHTML = num;
      container.appendChild(wheel);
    }
    document.body.appendChild(container);
  }
}

window.onload = createwheel();

// let container = document.querySelector('.container');
// let btn = document.getElementById('spin');
// let number = Math.ceil(Math.random() * 1000);

// btn.onclick = function () {
//   container.style.transform = 'rotate(' + number + 'deg)';
//   number += Math.ceil(Math.random() * 1000);
// };
