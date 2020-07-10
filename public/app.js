var min = 0;
var sec =  0;
var msec = 0;

var leadMin = 0;
var leadSec = 0;

var minHead=document.getElementById("min");
var secHead=document.getElementById("sec");
var msecHead=document.getElementById("msec");
var interval;

function stopwatch(){
    msec++
    msecHead.innerHTML = msec;
    if (msec >= 100){
        sec++
        secHead.innerHTML = sec;
        msec = 0;
    }
    else if(sec >= 60){
        min++
        minHead.innerHTML = min;
        sec = 0;
    }

    if(sec<10){
        leadSec = "0" + sec.toString();
        secHead.innerHTML = leadSec;
    }else{
        leadSec = sec;
    }
    if(min<10){
        leadMin = "0" + min.toString();
        minHead.innerHTML = leadMin;
    }else{
        leadMin = min;
    }
}

function start(){
    interval = setInterval(stopwatch , 10)
}

function stop(){
    clearInterval(interval)
}

function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    minHead.innerHTML="00";
    secHead.innerHTML="00";
    msecHead.innerHTML="00";
    stop()
}

function visibleoff(){
   var a = document.getElementById("btn");
   a.setAttribute("disabled","disabled");
   a.className = "none"; 

}

function visibleon(){
   var b= document.getElementById("btn");
    b.removeAttribute("disabled", "disabled");
    b.className = "start";
}