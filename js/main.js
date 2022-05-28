const gridContainer = document.querySelector(".grid-container");

function createGrid(xCells, yCells) {
  const cellsNumber = xCells * yCells;

  gridContainer.style.width = `calc(var(--cell-size) * ${xCells})`;

  for (let i = 0; i < cellsNumber; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.append((i + 1).toString());
    gridContainer.append(cell);
    cell.addEventListener("click", function () {
      this.classList.add("clicked");
    });
  }
}

const playButton = document.getElementById("play");

playButton.addEventListener("click", function () {
  let difficult = document.getElementById("difficult").value;

  gridContainer.innerHTML = ("")

  if (difficult === "medium") {
    createGrid(9, 9);
  } else if (difficult === "hard") {
    createGrid(7, 7);
  } else if (difficult === "easy") {
    createGrid(10, 10);
  }
});

createGrid(10, 10);