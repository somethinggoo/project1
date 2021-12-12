var prediction_one="";
var prediction_two="";

Webcam.set ({
width:350,
height:300,
image_format : 'png',
png_quality:90
});

camera= document.getElementById("Camera");

Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';

    });
}
classifier = ml5.imageClassifier('/model.json',modelLoaded);
function modelLoaded()
{
    console.log("Model Loaded");
}
function speak()
{
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " +prediction_one;
    speak_data_2= "And second prediction is " +prediction_two;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}