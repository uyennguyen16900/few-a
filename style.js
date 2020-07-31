let colorInput = document.querySelector('#colorInput');
// let c = document.getElementById("canvas");
// let ctx = c.getContext("2d");
let myElement = document.querySelector("#box");

colorInput.addEventListener('input', () => {
  let color = colorInput.value;
  document.getElementById('hex').innerHTML = color;
  // ctx.fillStyle = color;
  // ctx.fillRect(0,0,50,100);
  myElement.style.backgroundColor = color;
});


let widthInput = document.querySelector('#widthInput');
widthInput.addEventListener('input', () => {
  document.getElementById('width').innerHTML = "<p>" + widthInput.value + "px</p>";
  // ctx.canvas.width = widthInput.value;
  myElement.style.width = widthInput.value + "px";
});

let heightInput = document.querySelector('#heightInput');
heightInput.addEventListener('input', () => {
  document.getElementById('height').innerHTML = "<p>" + heightInput.value + "px</p>";
  // ctx.canvas.height = heightInput.value;
  myElement.style.height = heightInput.value + "px";
});
