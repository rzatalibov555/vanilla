function divOptions() {
  var width = document.getElementById("widthInput").value;
  var height = document.getElementById("heightInput").value;
  var radius = document.getElementById("radiusInput").value;
  var color = document.getElementById("divColor").value;
  var textColor = document.getElementById("textColor").value;
  var fontSize = document.getElementById("textSize").value;
  var text = document.getElementById("textInput").value;
  var div = document.getElementById("div");
  var deg = document.getElementById("deg").value;
  var palette1 = document.getElementById("palette1").value;
  var palette2 = document.getElementById("palette2").value;
  var clr1 = document.getElementById("hexClr1").value;
  var clr2 = document.getElementById("hexClr2").value;

  div.style.width = width;
  div.style.height = height;
  div.style.borderRadius = radius;
  div.style.background = color;
  div.innerHTML = text;
  div.style.color = textColor;
  div.style.display = "flex";
  div.style.justifyContent = "center";
  div.style.alignItems = "center";
  div.style.fontWeight = "500";
  div.style.fontSize = fontSize + "px";
  document.getElementById("div").style.top = "50%";
  document.getElementById("div").style.left = "50%";
  document.getElementById("div").style.transform =
    "rotate(" + rotateDeg + "deg)";

  div.style.backgroundImage =
    "linear-gradient(" + deg + "deg, " + palette1 + ", " + palette2 + ")";

  document.getElementById("getval").addEventListener("change", readURL, true);
  function readURL() {
    var file = document.getElementById("getval").files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      div.style.backgroundImage = "url(" + reader.result + ")";
      div.style.backgroundRepeat = "no-repeat";
      div.style.backgroundSize = "cover";
      div.style.backgroundPosition = "center";
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
    }
  }
}

// RESET BUTTON
function resetAll() {
  var div = document.getElementById("div");

  //   div.style.width = "0px";
  //   div.style.height = "0px";
  //   div.style.borderRadius = "0px";
  //   div.style.background = "white";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  document.getElementById("palette1").value = "#878787";
  document.getElementById("palette2").value = "#FFFFFF";
  document.getElementById("opacity").value = "100";
  document.getElementById("textSize").value = "14";
  document.getElementById("rotateDeg").value = "0";
  document.getElementById("div").style.width = "0px";
  document.getElementById("div").style.height = "0px";
  document.getElementById("textInput").value = "";
  document.getElementById("div").innerHTML = "";
  document.getElementById("widthInput").value = "";
  document.getElementById("heightInput").value = "";
  document.getElementById("radiusInput").value = "";
  document.getElementById("divColor").value = "";
  document.getElementById("textColor").value = "#FFFFFF";
  document.getElementById("hexClr1").value = "#";
  document.getElementById("hexClr2").value = "#";
  document.getElementById("deg").value = "";

  document.getElementById("div").style.opacity = "100%";
  document.getElementById("div").style.top = "50%";
  document.getElementById("div").style.left = "50%";
  document.getElementById("div").style.transform =
    "translate(-50%, -50%) rotate(0deg)";
}

let div = document.getElementById("div");
let upButton = document.getElementById("up");
let downButton = document.getElementById("down");
let leftButton = document.getElementById("left");
let rightButton = document.getElementById("right");
let center = document.getElementById("center");
let rightUp = document.getElementById("rightUp");

// Position management
center.addEventListener("click", function (e) {
  document.getElementById("div").style.top = "50%";
  document.getElementById("div").style.left = "50%";
  document.getElementById("div").style.transform =
    "translate(-50%, -50%) rotate(" + rotateDeg + "deg)";
});
rightUp.addEventListener("click", function (e) {
  let goUp = div.offsetTop;
  let goRight = div.offsetLeft;
  div.style.top = goUp - 15 + "px";
  div.style.left = goRight + 15 + "px";
});
rightDown.addEventListener("click", function (e) {
  let goUp = div.offsetTop;
  let goRight = div.offsetLeft;
  div.style.top = goUp + 15 + "px";
  div.style.left = goRight + 15 + "px";
});
leftUp.addEventListener("click", function (e) {
  let goUp = div.offsetTop;
  let goRight = div.offsetLeft;
  div.style.top = goUp - 15 + "px";
  div.style.left = goRight - 15 + "px";
});
leftDown.addEventListener("click", function (e) {
  let goUp = div.offsetTop;
  let goRight = div.offsetLeft;
  div.style.top = goUp + 15 + "px";
  div.style.left = goRight - 15 + "px";
});
upButton.addEventListener("click", function (e) {
  let goUp = div.offsetTop;
  div.style.top = goUp - 20 + "px";
});
downButton.addEventListener("click", function (e) {
  let goDown = div.offsetTop;
  div.style.top = goDown + 20 + "px";
});
leftButton.addEventListener("click", function (e) {
  let goLeft = div.offsetLeft;
  div.style.left = goLeft - 20 + "px";
});
rightButton.addEventListener("click", function (e) {
  let goRight = div.offsetLeft;
  div.style.left = goRight + 20 + "px";
});

function myFunction(select) {
  var listValue = select.options[select.selectedIndex].text;
  document.getElementById("div").style.fontFamily = listValue;
}
function rotateDiv() {
  var div = document.getElementById("div");
  var rotateDeg = document.getElementById("rotateDeg").value;

  div.style.transform = "translate(-50%, -50%) rotate(" + rotateDeg + "deg)";
}
function divOpacity() {
  var opacity = document.getElementById("opacity").value;
  div.style.opacity = opacity + "%";
}
function fontSize() {
  var fontSize = document.getElementById("textSize").value;
  div.style.fontSize = fontSize + "px";
}

// ================
var darkMode = document.getElementById("icon");

darkMode.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "img/sun.png";
  } else {
    icon.src = "img/moon.png";
  }
};

// =============================================

const canvas = document.querySelector("canvas"),
  toolBtns = document.querySelectorAll(".tool"),
  ctx = canvas.getContext("2d");

let brush = document.getElementById("brush");
let isDrawing = false,
  selectedTool = "";
brushWidth = 5;

window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
});

const startDraw = () => {
  isDrawing = true;
  ctx.beginPath();
  ctx.lineWidth = brushWidth;
};

const drawing = (e) => {
  if (!isDrawing) return;
  if (selectedTool === "brush") {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  } else {
  }
};

toolBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    brush.classList.toggle("active");
    selectedTool = btn.id;
    console.log(selectedTool);
  });
});

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => (isDrawing = false));
