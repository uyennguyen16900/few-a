let colorInput = document.querySelector('#colorInput');
let c = document.getElementById("canvas");
let ctx = c.getContext("2d");

colorInput.addEventListener('input', () => {
  let color = colorInput.value;
  document.getElementById('hex').innerHTML = color;
  ctx.fillStyle = color;
  ctx.fillRect(0,0,50,100);
});

let widthInput = document.querySelector('#widthInput');
widthInput.addEventListener('input', () => {
  document.getElementById('width').innerHTML = widthInput.value;
  ctx.canvas.width = widthInput.value;
});

let heightInput = document.querySelector('#heightInput');
heightInput.addEventListener('input', () => {
  document.getElementById('height').innerHTML = heightInput.value;
  ctx.canvas.height = heightInput.value;
});
