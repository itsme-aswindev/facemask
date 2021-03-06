
let video;
let label = "Checking!!!";
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/6BCMTCxc1/';

// STEP 1: Load the model!
// https://teachablemachine.withgoogle.com/models/Vm9-wYx1O/
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
}

function setup() {
  createCanvas(500, 520);
  // Create the video
  video = createCapture(VIDEO);
  video.hide();

  // STEP 2: Start classifying
  classifyVideo();
}
// STEP 2 classify the videeo!
function classifyVideo() {
  classifier.classify(video, gotResults);
}

function draw() {
  background(0);

  
  image(video, 0, 0);

  
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height - 16);

  // Pick an emoji, the "default" is train
  let emoji = "๐คนโโ๏ธ";
  if (label == "with mask") 
  {
    emoji = "โ";
  } 
  else if (label == "with out mask") 
  {
    emoji = "โ";
  } 

  // Drawing the emoji
  textSize(50);
  text(emoji, width -30 , height - 50 );
}
// STEP 3: Get the classification!
function gotResults(error, results) {
  
  if (error) {
    console.error(error);
    return;
  }
  // Storing the label and classifying again!
  label = results[0].label;
  classifyVideo();
}
