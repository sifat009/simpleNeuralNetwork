const X_MAX = Y_MAX = 500;
const body = document.getElementsByTagName('body')[0];
let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");;
svg.setAttributeNS(null, 'width',  X_MAX);
svg.setAttributeNS(null, 'height', Y_MAX);

// Generating random numbers

function randomNumberBetween(min, max) {
    return Math.random() * (max-min) + min;
}

let randomPoints = Array(100).fill(null).map(_ => ({
    x : randomNumberBetween(0, X_MAX),
    y : randomNumberBetween(0, Y_MAX)
}));


// Plot circle on screen

function paintCircle(x, y, radius, strokeWidth, fill) {
    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttributeNS(null, 'cx', x);
    circle.setAttributeNS(null, 'cy', y);
    circle.setAttributeNS(null, 'r', radius);
    circle.setAttributeNS(null, 'stroke-width', strokeWidth);
    circle.setAttributeNS(null, 'fill', fill);
    
    return circle;
}

randomPoints.map(point => svg.appendChild(point.x > point.y ?
                             paintCircle(point.x, point.y, 4, 4, 'blue') :
                             paintCircle(point.x, point.y, 4, 4, 'green')) );

// Plot line on screen

function drawLine(x1, y1, x2, y2, strokeWidth = 5) {
    let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttributeNS(null, 'x1', x1);
    line.setAttributeNS(null, 'y1', y1);
    line.setAttributeNS(null, 'x2', x2);
    line.setAttributeNS(null, 'y2', y2);
    line.setAttributeNS(null, 'stroke', 'red');
    line.setAttributeNS(null, 'stroke-width', strokeWidth);
    return line;
}

svg.appendChild(drawLine(0, 0, X_MAX, Y_MAX));
body.appendChild(svg);


