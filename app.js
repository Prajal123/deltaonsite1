const buttons=document.querySelectorAll('button');
var big=['tab','q','w','e','r','t','y','u','i','o','p','[',']','a','s','d','f','g','h','j','k'];
var small=['z','x','c','v','b','n','m',',','.','/','control',' ','alt','shift'];
const whitekey=document.querySelectorAll('.big');
const blackkey=document.querySelectorAll('.small');
for(var i=0;i<buttons.length;i++){
   buttons[i].addEventListener("click",function(){
      var a=this;
    var notekey=document.getElementById(a.dataset.note);
    notekey.currentTime=0;
    notekey.play();  
    a.classList.add("active");
  notekey.addEventListener('ended',function(){
      a.classList.remove("active");
  })
   })
}

document.addEventListener("keydown",function(e){
    if(e.repeat)return;
  const key=e.key;
  const whitekeyindex=big.indexOf(key);
  const blackkeyindex=small.indexOf(key);
  if(whitekeyindex>-1){
      var a=whitekey[whitekeyindex];
    var notekey=document.getElementById(a.dataset.note);
    notekey.play();
    a.classList.add("active");
    notekey.addEventListener('ended',function(){
        a.classList.remove("active");
    })
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
})