var canvas=document.getElementById("mycanvas");
var draw2d=canvas.getContext("2d");
var roverwidth=100;
var roverheight=90;
var roverXposition=50;
var roverYposition=60;

function  uploadimages(){
var backgroundimagecomponent=new Image();
backgroundimagecomponent.src="mars.jpg";
backgroundimagecomponent.onload=showbackground;


var roverimagecomponent=new Image();
roverimagecomponent.src="rover.png";
roverimagecomponent.onload=showrover;
}

function showbackground(){
    draw2d.drawImage(backgroundimagecomponent,0,0,800,600);
}

function  showrover(){
    draw2d.drawImage(roverimagecomponent,roverXposition,roverYposition,roverwidth,roverheight);
}

canvas.addEventListener("keydown",whenkeydown);

function whenkeydown(e){
 var keycodevariable=e.keyCode;
 console.log(keycodevariable);

 if (keycodevariable=="38"){
     up();
 }

 if (keycodevariable=="40"){
     down();
 }

 if (keycodevariable=="37"){
     left();
 }

 if (keycodevariable=="39"){
     right();
 }
}

function up(){
    if(roverYposition>0){
        roverYposition=roverYposition-10;
        showbackground();
            showrover();
    }
}

function down(){
    if(roverYposition<600){
        roverYposition=roverYposition+10;
     showbackground();
     showrover();
    }
}

function left(){
    if(roverXposition>0){
    roverXposition=roverXposition-10;
    showbackground();
        showrover();
    }
}

function right(){
    if(roverXposition<800){
        roverXposition=roverXposition+10;
        showbackground();
         showrover();
    }
}