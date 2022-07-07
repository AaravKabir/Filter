noseX= 0;
noseY= 0;
function preload(){
clownNose=loadImage("https://i.postimg.cc/tJs4rJvs/image.png");
}
function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

posenet = ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}
function draw(){
image(video,0,0,300,300);
//fill(255,0,0);
//stroke(255,0,0);
//circle(noseX,noseY,20);
image(clownNose,noseX-15,noseY+5,40,40);
}
function takeSnapshot(){
    save("clownNoseFilter.png");
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("noseX = " + noseX); 
        console.log("noseY = " + noseY); 
    }
}
