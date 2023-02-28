image="";
stats = "";

function preload(){
    image = loadImage('dog_cat.jpg');
}
function setup(){
canvas = createCanvas(640, 420);
canvas.center()
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function draw(){
    image(image,0,0,640,420 );

fill("#A020F0");
text("Dog", 45, 75);
nofill();
stroke("#A020F0");
rect(40,60,450,350);

fill("#A020F0");
text("Cat ", 320, 120);
nofill();
stroke("#A020F0");
rect(300,90,270,320);
}
function modelLoaded(){
console.log("You win first round buddy not next");
stats = true;
objectDetector.detect(img, gotResult);
}
function gotResult(error,results){
if(error)
{
    console.log(error);
    console.log("i told you i would win :)");
}
console.log(results);
}