let point1 = null;
let point2 = null;

function setup() {
  createCanvas(1024, 1024);
}



function draw() {
  // background(220);

  // Draw the first point if it exists
  if (point1 !== null && localStorage.isAdmin == 'true') {
    fill(255, 0, 0);
    ellipse(point1.x, point1.y, 10, 10);
  }

  // Draw the second point if it exists
  if (point2 !== null && localStorage.isAdmin == 'true') {
    fill(0, 0, 255);
    ellipse(point2.x, point2.y, 10, 10);

    // Draw a line between the two points
    stroke(200, 212, 28);
    line(point1.x, point1.y, point2.x, point2.y);
  }
}

function mouseClicked() {
  // On mouse click, set the first point if it's not set yet
  if (point1 === null && localStorage.isAdmin == 'true') {
    point1 = createVector(mouseX, mouseY);
    console.log(mouseX, mouseY);
  } else if (point2 === null && localStorage.isAdmin == 'true') {
    // Set the second point if the first point is already set
    point2 = createVector(mouseX, mouseY);
    console.log(mouseX, mouseY);
  } else if (localStorage.isAdmin == 'true') {
    // If both points are already set, reset them on the next click
    point1 = null;
    point2 = null;
  }
}
