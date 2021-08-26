const buttons=document.querySelectorAll('button');
var keypressed={};
var volume=1;
var big=['c','d','e','f','g','a','b'];
var small=['`', '1','2','3','4','5','6','7','8','9','0','-','=','[',']'];

const whitekey=document.querySelectorAll('.big');
const blackkey=document.querySelectorAll('.small');
for(var i=0;i<buttons.length-1;i++){
   buttons[i].addEventListener("click",function(){
      var a=this;
    var notekey=document.getElementById(a.dataset.note);
    notekey.volume=volume;
    notekey.currentTime=0;
    notekey.play();  
    a.classList.add("active");
   setTimeout(function(){
    a.classList.remove("active");
   
   }, 100);
   })
}

document.addEventListener("keydown",function(e){
    keypressed[e.key]=true;
    if(e.repeat)return;
  const key=e.key;
  const whitekeyindex=big.indexOf(key);
  const blackkeyindex=small.indexOf(key);
  if(keypressed['ArrowLeft']){
  if(whitekeyindex>-1){
      var a=whitekey[whitekeyindex];
    var notekey=document.getElementById(a.dataset.note);
    notekey.play();
    a.classList.add("active");
    notekey.addEventListener('ended',function(){
        a.classList.remove("active");
    })
  
  }
}else if(keypressed['ArrowRight']){
    if(whitekeyindex>-1){
        var a=whitekey[whitekeyindex+14];
      var notekey=document.getElementById(a.dataset.note);
      notekey.play();
      a.classList.add("active");
      notekey.addEventListener('ended',function(){
          a.classList.remove("active");
      })
     
      console.log(keypressed[e.key]);
    }
}else{
    if(whitekeyindex>-1){
        var a=whitekey[whitekeyindex+7];
      var notekey=document.getElementById(a.dataset.note);
      notekey.play();
      a.classList.add("active");
      notekey.addEventListener('ended',function(){
          a.classList.remove("active");
      })
    }
    
}
  if(blackkeyindex>-1){
      var a=blackkey[blackkeyindex];
    var notekey=document.getElementById(a.dataset.note);
    notekey.play();
    a.classList.add("active");
    notekey.addEventListener('ended',function(){
        a.classList.remove("active");
    })
  }

});

document.addEventListener("keyup",function(e){
    delete keypressed[e.key];
})

function volume1(){
  volume=prompt("Enter the volume in the range 0 to 1");
  
}
