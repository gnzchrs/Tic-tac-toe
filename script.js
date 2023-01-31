const board = document.getElementById("board");
const cells = board.getElementsByClassName("cell");
let turn = "x";

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function() {
    if (this.innerHTML !== "") return;
    this.innerHTML = turn;
    this.classList.add(turn);
    turn = turn === "x" ? "o" : "x";
  });
}
