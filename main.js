img="";
status = "";
function preload()
{
    img=loadImage('dog_cat.jpg');
}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
}

function draw()
{
    noFill();
    image(img,0,0,640,420);
    fill("#FF0000");
    text("dog",60,75);
    noFill();
    stroke("#006400");
    rect(50,60,300,360);

    fill("#FF0000");
    text("Cat", 410, 120 );
    noFill();
    stroke("#A020F0");
    rect(300, 90, 270, 320 );
}