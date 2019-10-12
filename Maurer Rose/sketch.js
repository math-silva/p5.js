let nValue = 6;  // <-- put n
let dValue = 71; // <-- put d

let n = 0;
let d = 0;
let aux = 0;
let vel = 3;
let time = 1000/vel;


function setup() {
  createCanvas(800, 400);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  noFill();
  stroke(0);
  strokeWeight(3);
  rect(0, 0, width, height);
  translate(200, 200);

  beginShape();
  stroke(0, 0, 255);
  strokeWeight(1);
  noFill()
  for (let i = 0; i < 361; i++) {
    let k = i*d;
    let r = 150 * sin(n*k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x,y);
  }
  endShape();

  beginShape();
  stroke(255, 0, 0);
  strokeWeight(3);
  noFill()
  for (let i = 0; i < 361; i++) {
    let k = i;
    let r = 150 * sin(n*k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x,y);
  }
  endShape();
  if (aux == 1) {
    noLoop();
  }
  if (n + (nValue/time) >= nValue || d + (dValue/time) >= dValue) {
    aux = 1;
    n = nValue;
    d = dValue;
  } else {
    n += nValue/time;
    d += dValue/time;
  }

  stroke(20, 20, 20);
  fill(20, 20, 20);
  strokeWeight(1);
  textSize(28);
  textAlign(CENTER);
  text('n = '+ n.toFixed(1-aux) + ', d = '+ d.toFixed(1-aux), 0, 190);

  // PREVIEW //
  textSize(20);
  text('PREVIEW', 270, -160);
  fill(20, 20, 20);
  strokeWeight(2);
  line(200, -200, 200, 200); // MIDDLE

  beginShape();
  stroke(0,0,255);
  strokeWeight(1);
  noFill()
  for (let i = 0; i < 361; i++) {
    let k = i*dValue;
    let r = 150 * sin(nValue*k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x+400,y);
  }
  endShape();

  beginShape();
  stroke(255, 0, 0);
  strokeWeight(3);
  noFill()
  for (let i = 0; i < 361; i++) {
    let k = i;
    let r = 150 * sin(nValue*k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x+400,y);
  }
  endShape();
  stroke(20, 20, 20);
  fill(20, 20, 20);
  strokeWeight(1);
  textSize(28);
  textAlign(CENTER);
  text('n = '+ nValue + ', d = '+ dValue, 400, 190);
}
