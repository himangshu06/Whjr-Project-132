img ="";
    status = "";
    song = "ES_Taking Polaris - DEX 1200.mp3";
    function preload(){
        img = loadImage("pc.jpg");
        song.play();
    }
    function setup(){
        canvas = createCanvas(650,400);
        canvas.center();
        objectDetector = ml5.objectDetector('cocossd',modelLoaded);
        document.getElementById("status").innerHTML="status: detecting Objects";
    song.play();
    }
    function modelLoaded(){
        console.log("modelLoaded");
        status = true;
        objectDetector.detect(img,gotResult);
    }
    function gotResult(error,results){
        if (error){
        console.log(error);
        }
        console.log(results);
    }
    function draw(){
        image(img,0,0,650,400);
        fill("#006400");
        text("Car",45,70);
        noFill();
        stroke("#006400");
        rect(30,50,450,340);
    }

