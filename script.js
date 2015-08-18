document.body.style.height = "700px";
var body = document.querySelector("body");
var tile = document.querySelectorAll("div");
var gColor = "white";


//newBox
function newBox() {
  for (var i = 0; i <= 1253; i++) {
    var tile = document.createElement("div");
    tile.style.height = "2%";
    tile.style.width = "2%";
    tile.style.border = "solid 2px black";
    tile.style.float = "left";
    tile.style.padding = "2px";
    body.appendChild(tile);

  }
}
newBox();

//addColor

function addColor() {
  var tile = document.querySelectorAll("div");
  for (var i = 0; i < tile.length; i++) {
    tile[i].addEventListener("click", function() {
      this.style.backgroundColor = gColor;
    })
  }
}

addColor();

//colorPalette

function colorPalette() {
  var paletteColors = ["#ff5722", "#9e9e9e", "#607d8b", "#000000", "#885159", "#645188", "#886451", "#528881", "#343d46", "#4f5b66", "#65737e", "#a7adba", "#b2e5e5", "#86becb", "#1aa3a3", "#0b5e56","#eb6841","#ffffff"]
  for (var i = 0; i <= 17; i++) {
    var tile2 = document.createElement("div");
    // tile2.classList.add("cp");
    tile2.style.height = "8%";
    tile2.style.width = "5%";
    tile2.style.border = "solid 2px black";
    tile2.style.display = "inline-block";
    tile2.style.marginTop = "10px";
    tile2.style.backgroundColor = paletteColors[i];
    tile2.addEventListener("click", function() {
      gColor = this.style.backgroundColor; //this referring to parent object
    })
    body.appendChild(tile2);
  }
}
colorPalette();
