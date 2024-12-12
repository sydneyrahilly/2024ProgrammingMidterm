let CircleSize, space, circlePositions, rows, cpr;

function setup() {
  createCanvas(400, 400);
  CircleSize = 25;
  space = width / 10; // space between circles
  rows = 10; // number of rows
  cpr = 10; // number of circles per row
  
  // begin array for circle positions
  circlePositions = [];
  
  // populate the array with circle positions
  for (let i = 0; i < rows; i++) {
    let rowPositions = [];
    for (let j = 0; j < cpr; j++) {
      rowPositions.push({ x: j * space + space / 2, y: i * space + space / 2 });
    }
    circlePositions.push(rowPositions);
  }
}

function draw() {
  background(135, 20, 97);
  
  // loop through the circle positions and draw circles
  for (let i = 0; i < circlePositions.length; i++) {
    let randomShade = random(100, 255);
    stroke(0);
    strokeWeight(1);
    fill(randomShade, 20, 97);
    
    for (let j = 0; j < circlePositions[i].length; j++) {
      let pos = circlePositions[i][j];
      circle(pos.x, pos.y, CircleSize);
    }
  }
  
  // display my name :D
  textAlign(CENTER, CENTER);
  textSize(64);
  stroke(0);
  strokeWeight(4);
  fill(246, 245, 247);
  text("SYDNEY", width / 2, height / 2);
}
