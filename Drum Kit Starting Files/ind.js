var number=document.querySelectorAll(".drum").length;
for(var i=0;i<number;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        /*var audio=new Audio('sounds/tom-1.mp3');
        audio.play();*/
        var butinnerHtml=this.innerHTML;
        makesound(butinnerHtml);
        Animation(butinnerHtml);
    });
}
document.addEventListener("keydown",function(event){
    makesound(event.key);
    Animation(event.key);
})
function makesound(key){
    switch (key){
        case "w":
            var a=new Audio('sounds/crash.mp3');
            a.play();
            break;
        case "a":
            var b=new Audio('sounds/kick-bass.mp3');
            b.play();
            break; 
        case "s":
            var c=new Audio('sounds/tom-1.mp3');
            c.play();
            break;          
        case "d":
            var d=new Audio('sounds/tom-2.mp3');
            d.play();
            break; 
        case "j":
            var e=new Audio('sounds/tom-3.mp3');
            e.play();
            break;  
        case "k":
            var f=new Audio('sounds/tom-4.mp3');
            f.play();
            break; 
        case "l":
            var g=new Audio('sounds/snare.mp3');
            g.play();
            break; 
        default: console.log(butinnerHtml);       
    }
}
function Animation(i){
    var temp=document.querySelector("."+i);
    temp.classList.add("pressed");
    setTimeout(function(){
        temp.classList.remove("pressed");
    },100);
}