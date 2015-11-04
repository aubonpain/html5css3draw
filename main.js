var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var dragging = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// context.lineWidth = radius * 2;

var drawLine = function (event) {
    if (dragging) {
        context.lineTo(event.clientX, event.clientY);
        context.stroke();
        context.beginPath();
        context.arc(event.clientX, event.clientY, radius, 0, Math.PI*2);
        context.fill();
        context.beginPath();
        context.moveTo(event.clientX, event.clientY);
    }
};


var clearCanvas = function (event) {
    context.clearRect(0, 0, canvas.width, canvas.height);
};

var startDrawing = function (e) {
    dragging = true;
    setRadius(radiusElement.innerHTML);
    drawLine(e);
};

var stopDrawing = function () {
    dragging = false;
    context.beginPath();
};

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', drawLine);
canvas.addEventListener('mouseup', stopDrawing);
