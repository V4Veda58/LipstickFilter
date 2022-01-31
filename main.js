function preload(){

}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video =  createCapture(VIDEO);
    video.size(300, 300);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){

}
function take_Snapshot(){
    save("LipstickFliter.png");
}
function modelLoaded(){
    console.log('PoseNet is Initialized');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}