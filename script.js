var timer = 60;
var score = 0;
var hitrn = 0;

// bubling => jispe click karoge wo element par event riase hoga, aur event listener naa milne par event element ke parent par listener dhundhega, waha bhi naa milne par event
//            parent ke parent par listener dhundega.

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function bubble(){
    var clutter = "";
    
    for(var i=1; i<=119; i++){
        var rn = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTime(){
    setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timer)
        }
    },1000)
}

document.querySelector("#pbtm")
.addEventListener("click", function(dets){
    var clickedNum = Number(dets.target.textContent);
})

runTime();
bubble();
getNewHit();
increaseScore();