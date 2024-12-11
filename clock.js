let hr=document.getElementById("hour");
let min=document.getElementById("min");
let sec=document.getElementById("sec");

function displaytime(){
        let hh=Date.getHour();
        let mm=Date.getMinute();
        let ss=Date.getSecond();
    
        let hRotation=30*hh+mm/2;
        let mRotation=6*mm;
        let sRotation=6*ss;
        

        hr.style.transform =`rotate(${hRotation}deg`;
        mim.style.transform =`rotate(${mRotation}deg`;
        sec.style.transform =`rotate(${sRotation}deg`;




}
setInterval(displaytime,1000);