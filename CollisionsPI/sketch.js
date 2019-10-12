let blockImg;
let block1;
let block2;
let clack;

let collisions = 0;
let digits = 6;  //################################ <-- PI DIGITS
const timeSteps = 10 ** (digits-1);

function preload() {
  blockImg = loadImage('block.png');
  clack = loadSound('clack.wav');
}

function setup() {
  createCanvas(windowWidth, 200);
  block1 = new Block(100, 20, 1, 0, 0);
  const m2 = block1.m * pow(100, digits-1);
  block2 = new Block(200, 100, m2, -1/timeSteps, 20);
}

function draw() {
  background(255);

  let clackSound = false;

  for(let i = 0; i < timeSteps; i++) {
    if (block1.collide(block2)) {
      const v1 = block1.bounce(block2);
      const v2 = block2.bounce(block1);
      block1.v = v1;
      block2.v = v2;
      clackSound = true;
      collisions++;
    }
    if (block1.hitWall()) {
      block1.reverse();
      clackSound = true;
      collisions++;
    }

    block1.update();
    block2.update();
  }
  if (clackSound) {
    clack.play();
  }
  block1.show();
  block2.show();

  fill(0);
  line(0, height, width, height); // FLOOR
  line(0, 0, 0, height); // WALL

  textSize(24);
  text('Collisions: '+ nf(collisions, digits), 10, 40);

}
