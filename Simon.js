var gameOn=false;
var strictMode=false;
var sequence="";
var playedSequence="";


$("#strict").click(function(){
  if($(this).css("left")=="68px"){
  $("#strict").css("left","86px");
  $("#couloirstrict").css("background-color","yellow");
    strictMode=true;
  }
  else{
  $("#strict").css("left","68px");
  $("#couloirstrict").css("background-color","lightgrey");
    strictMode=false;
  }
});
$("#green").click(function(){
  if(!gameOn)
    alert("Press the start button to play !");
  else {
  playedSequence=playedSequence+'0';
  new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3").play();
  check();  
  }
  
});
$("#red").click(function(){
  if(!gameOn)
    alert("Press the start button to play !");
  else {
  playedSequence=playedSequence+'1';
  new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3").play();
  check();
  }
});

$("#yellow").click(function(){
  if(!gameOn)
    alert("Press the start button to play !");
  else {
  playedSequence=playedSequence+'2';
  new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3").play();
  check();
  }
});

$("#blue").click(function(){
  if(!gameOn)
    alert("Press the start button to play !");
  else {
  playedSequence=playedSequence+'3';
  new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3").play();
  check();
  }
});

$("#start").click(function(){
  gameOn=true;
  playedSequence="";
  sequence="";
  sequence=sequence.concat(Math.floor(Math.random()*4).toString());
  $("#count").html(sequence.length);
  playSequence();
});

function check(){
  
if(playedSequence!=sequence.substring(0,playedSequence.length)){
   $("#count").html("!!");
   new Audio("https://www.soundjay.com/misc/sounds/fail-buzzer-01.mp3").play();
   playedSequence="";
   if(!strictMode){
     setTimeout(function(){
       $("#count").html(sequence.length);
       playSequence();  
     },2500);
         }
   else{
     sequence=Math.floor(Math.random()*4).toString();
     setTimeout(function(){
       $("#count").html(sequence.length);
       playSequence();  
     },2500);
   }
 }
  else{
    if(playedSequence==sequence){
      if(sequence.length==20){
        alert("You win ! click the start button to play again!");
        gameOn=false;
      }
      else{
      setTimeout(function(){
      sequence=sequence.concat(Math.floor(Math.random()*4).toString());
      playedSequence="";
      $("#count").html(sequence.length);
      playSequence();
      },2000);  
      }
    }
  }
}

function playSequence(){
  for(var i=0;i<sequence.length;i++){
      switch(sequence.charAt(i)){
        case '0': 
          setTimeout(function(){$("#green").css("background-color","forestgreen");
                                new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3").play(); },(i)*1000);
          
          setTimeout(function(){
             $("#green").css("background-color","green")
             },(1+i)*1000);
          break;
        case '1': setTimeout(function(){$("#red").css("background-color","salmon");
                                        new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3").play();},(i)*1000); 
          setTimeout(function(){
            $("#red").css("background-color","red")},(1+i)*1000);
          break;
        case '2': setTimeout(function(){$("#yellow").css("background-color","cornsilk");
                                        new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3").play(); },(i)*1000);
                 setTimeout(function(){
               $("#yellow").css("background-color","yellow")},(1+i)*1000);
          break;
          
             case '3': setTimeout(function(){$("#blue").css("background-color","lightblue");
                                             new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3").play();},(i)*1000); 
          setTimeout(function(){
               $("#blue").css("background-color","blue")},(1+i)*1000);
          break;
             }
    }
}