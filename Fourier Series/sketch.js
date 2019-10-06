let angle = 0;
let values = [];
let index = 1; // nth term of fourier series
var button1;
var button2;

function setup() {
  createCanvas(windowWidth, 350);
}

function decrease() {
  if (index > 0) {
    index--;
    while (values.length != 0) {
      values.pop();
    }
  }
}

function increase(){
  index++;
  while (values.length != 0) {
    values.pop();
  }
}

function draw() {
  background(0);
  translate(200, 195);
  let x = 0;
  let y = 0;
  for (let i = 0; i < index; i++) {
    let lastx = x;
    let lasty = y;
    n = i * 2 + 1;
    let r = 70 * (4 / (n * PI));
    x += r * cos(n * angle);
    y += r * sin(n * angle);

    stroke(255, 100);
    noFill();
    ellipse(lastx, lasty, r*2);

    stroke(255);
    line(lastx, lasty, x, y);
  }
  values.unshift(y);
  line(x, y, 250, y);

  beginShape();
  noFill();
  for (let i = 0; i < values.length; i++) {
    vertex(250 + i, values[i]);
  }
  endShape();
  if (values.length > windowWidth-400) {
    values.pop();
  }

  angle += 0.04; // rotation velocity

  beginShape();
  textSize(28);
  textFont();
  fill(255);
  noStroke();
  text('n = ' + index, -96, -150);
  text('Fourier Series', 16, -150);
  endShape();
}
