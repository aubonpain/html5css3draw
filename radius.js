/**
 * Created by Abishek on 11/3/2015.
 */
var setRadius = function (newRadius) {
    if (newRadius < minRadius) {
        newRadius = minRadius;
    } else if (newRadius > maxRadius) {
        newRadius = maxRadius;
    }
    radius = newRadius;
    radiusElement.innerHTML = radius;
    context.lineWidth = radius * 2;
};

var increaseRadius = function () {
    var currentRadius = parseInt(document.getElementById("radiusValue").innerText);
    setRadius(currentRadius + 2);
};

var decreaseRadius = function () {
    var currentRadius = parseInt(document.getElementById("radiusValue").innerText);
    setRadius(currentRadius - 2);
};



var minRadius = 0.5,
    maxRadius = 100,
    defaultRadius = 20,
    radiusElement = document.getElementById("radiusValue"),
    decreaseRadiusElement = document.getElementById("decreaseRadius"),
    increaseRadiusElement = document.getElementById("increaseRadius");