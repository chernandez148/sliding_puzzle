let rows = 15;
let col = 15;

let currTile;
let otherTile; //black tile

let turns = 0;

window.onload = () => {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < col; c++) {
      // img id
      let tile = document.createElement("img");
      tile.src = "./img/blank.jpg";

      //Drag Functionallity
      tile.addEventListener("dragstart", dragStart);
      tile.addEventListener("dragover", dragOver);
      tile.addEventListener("dragenter", dragEnter);
      tile.addEventListener("dragleave", dragLeave);
      tile.addEventListener("drop", dragDrop);
      tile.addEventListener("dragend", dragEnd);

      document.getElementById("board").append(tile);
    }
  }

  //pieces
  let pieces = [];
  for (let i = 1; i <= rows * col; i++) {
    pieces.push(i.toString());
  }
  pieces.reverse();
  for (let i = 0; i < pieces.length; i++) {
    let j = Math.floor(Math.random() * pieces.length);

    let tmp = pieces[i];
    pieces[i] = pieces[j];
    pieces[j] = tmp;
  }

  for (let i = 0; i < pieces.length; i++) {
    let tile = document.createElement("img");
    tile.src = "./img/image_part_" + pieces[i] + ".jpg";

    //Drag Functionallity
    tile.addEventListener("dragstart", dragStart);
    tile.addEventListener("dragover", dragOver);
    tile.addEventListener("dragenter", dragEnter);
    tile.addEventListener("dragleave", dragLeave);
    tile.addEventListener("drop", dragDrop);
    tile.addEventListener("dragend", dragEnd);

    document.getElementById("pieces").append(tile);
  }

  function dragStart() {
    currTile = this;
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter(e) {
    e.preventDefault();
  }

  function dragLeave(e) {
    e.preventDefault();
  }

  function dragDrop() {
    otherTile = this;
  }

  function dragEnd() {
    if (currTile.src.includes("black")) {
      return;
    }
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;

    turns += 1;
    document.getElementById("turns").innerText = turns;
  }
};
