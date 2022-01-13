function go(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    x=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/HuAJhVzO3/model.json',modelloaded);
}
function modelloaded(){
x.classify(gotresult);
}
function gotresult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML="I can hear: " +results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy: " +(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        x=document.getElementById("a3");
        y=document.getElementById("a6");
        z=document.getElementById("a1");
        a=document.getElementById("a2");
        if(results[0].label=="clap"){
            x.src="aliens-03.gif";
            y.src="aliens-04.png";
            z.src="aliens-01.png";
            a.src="aliens-02.png";
        }   
        else if(results[0].label=="snap"){
          x.src="aliens-03.png";
          y.src="aliens-04.gif";
          z.src="aliens-01.png";
          a.src="aliens-02.png";
        }
        else if(results[0].label=="blahblah"){
            x.src="aliens-03.png";
            y.src="aliens-04.png";
            z.src="aliens-01.gif";
            a.src="aliens-02.png";
        }
        else{
            x.src="aliens-03.png";
            y.src="aliens-04.png";
            z.src="aliens-01.png";
            a.src="aliens-02.gif";
        }
    }
}