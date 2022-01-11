Webcam.set({ 
    width:350, 
    height:300,
    image_format : 'png', 
    png_quality:90

 });

 camera = document.getElementById("camera");

Webcam.attach('#camera' );


function take_snapshot()
{ 
    Webcam.snap(function(data_uri) {
       document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>' ;
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/dD41yGecp/model.json',modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function speak(){    
    var synth = window.speechSynthesis;    
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "And the second prediction is " + prediction_2;
     var utterThis = new SpeechSynthesisUtterance (speak_data_1+ speak_data_2); 
     synth.speak(utterThis);
}

function check(){
  img=document.getElementById("captured_image");
  classifier.classify(img, gotresult);
}

function gotresult(error, result){
if(error){
    console.log(error);
}
else{
    console.log(result);
    document.getElementById("result_emotion_name").innerHTML=result[0].label;
    document.getElementById("result_emotion_name2").innerHTML=result[1].label
    prediction_1=result[0].label;
    prediction_2=result[1].label;
    speak();

    if(result[0].label == "victory"){
        document.getElementById("update_emoji").innerHTML="&#127995;";
    }
    if(result[0].label == "crossed fingers"){
        document.getElementById("update_emoji").innerHTML="&#127995;";
    }
    if(result[0].label == "sign of horns"){
        document.getElementById("update_emoji").innerHTML="&#127995;";
    }
    if(result[0].label == "Backhand Index Pointing Left"){
        document.getElementById("update_emoji").innerHTML="&#127995;";
    }
    if(result[0].label == "Backhand Index Pointing Right"){
        document.getElementById("update_emoji").innerHTML="&#127995;";
    }
    if(result[0].label == "Backhand Index Pointing Up"){
        document.getElementById("update_emoji").innerHTML="&#127995;";
    }
    if(result[0].label == "Backhand Index Pointing Down"){
        document.getElementById("update_emoji").innerHTML="&#127995;";
    }
    if(result[0].label == "Index Pointing Up"){
        document.getElementById("update_emoji").innerHTML="&#127995;";
    }
    if(result[0].label == "Thumbs Up"){
        document.getElementById("update_emoji").innerHTML="&#127995;";
    }
    if(result[0].label == "Thumbs Down"){
        document.getElementById("update_emoji").innerHTML="&#127995;";
    }
    if(result[0].label == "Raised Fist"){
        document.getElementById("update_emoji").innerHTML="&#127995;";
    }
    if(result[0].label == "Oncoming Fist"){
        document.getElementById("update_emoji").innerHTML="&#127995;";
    }
    if(result[0].label == "Left Facing Fist"){
        document.getElementById("update_emoji").innerHTML="&#127995;";
    }
    if(result[0].label == "Right Facing Fist"){
        document.getElementById("update_emoji").innerHTML="&#127995;";
    }
    if(result[0].label == "Palms Up Together"){
        document.getElementById("update_emoji").innerHTML="&#127995;";
    }
    if(result[0].label == "Folded Hands"){
        document.getElementById("update_emoji").innerHTML="&#127995;";
    }
    if(result[0].label == "Call Me Hand"){
        document.getElementById("update_emoji").innerHTML="&#127995;";
    }



    if(result[1].label == "victory"){
        document.getElementById("update_emoji").innerHTML="&#127995;";
    }
    if(result[1].label == "crossed fingers"){
        document.getElementById("update_emoji").innerHTML="&#127995;";
    }
    if(result[1].label == "sign of horns"){
        document.getElementById("update_emoji").innerHTML="&#127995;";
    }
    if(result[1].label == "Backhand Index Pointing Left"){
        document.getElementById("update_emoji").innerHTML="&#127995;";
    }
    if(result[1].label == "Backhand Index Pointing Right"){
        document.getElementById("update_emoji").innerHTML="&#127995;";
    }
    if(result[1].label == "Backhand Index Pointing Up"){
        document.getElementById("update_emoji").innerHTML="&#127995;";
    }
    if(result[1].label == "Backhand Index Pointing Down"){
        document.getElementById("update_emoji").innerHTML="&#127995;";
    }
    if(result[1].label == "Index Pointing Up"){
        document.getElementById("update_emoji").innerHTML="&#127995;";
    }
    if(result[1].label == "Thumbs Up"){
        document.getElementById("update_emoji").innerHTML="&#127995;";
    }
    if(result[1].label == "Thumbs Down"){
        document.getElementById("update_emoji").innerHTML="&#127995;";
    }
    if(result[1].label == "Raised Fist"){
        document.getElementById("update_emoji").innerHTML="&#127995;";
    }
    if(result[1].label == "Oncoming Fist"){
        document.getElementById("update_emoji").innerHTML="&#127995;";
    }
    if(result[1].label == "Left Facing Fist"){
        document.getElementById("update_emoji").innerHTML="&#127995;";
    }
    if(result[1].label == "Right Facing Fist"){
        document.getElementById("update_emoji").innerHTML="&#127995;";
    }
    if(result[1].label == "Palms Up Together"){
        document.getElementById("update_emoji").innerHTML="&#127995;";
    }
    if(result[1].label == "Folded Hands"){
        document.getElementById("update_emoji").innerHTML="&#127995;";
    }
    if(result[1].label == "Call Me Hand"){
        document.getElementById("update_emoji").innerHTML="&#127995;";
    }
    
    
}
}