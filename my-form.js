document.addEventListener("DOMContentLoaded", function(){
    var img =document.getElementById("character");
    function birdFly(){
        if (img.classList.contains("bird")){
            img.classList.toggle("bird");
            img.src="img/frame-2.png";
        }else{
            img.classList.toggle("bird");
            img.src="img/frame-1.png";
        }
    }
    setInterval(birdFly,100);
    var body= document.body;
    arrColor=["red","blue","yellow", "orange", "white"];
    setInterval(createStar,100);
    function createStar(){
        var top= Math.floor(Math.random()*screen.height);
        var color= arrColor[Math.floor(Math.random()*4)];
        var right= Math.floor(Math.random()*100);
        var star = document.createElement("div");
        star.style.background=color;
        star.style.top=top+"px";
        star.classList.add("star");
        body.appendChild(star);
        setInterval(runstar,10);
        function runstar(){
            if (right>screen.width){
                star.remove();
            }
            right+=2;
            star.style.right=right+"px";
        }
    }
})