console.log("Set an alarm clock of your choice");
let alarm = document.getElementById("Alarm");
alarm.addEventListener("click",setAlarm);//adding eventlistener to alarm button
var audio = new Audio('sound.mp3');

// function to play the alarm ring tone
function ringBell() {
    audio.play();
}


// This function will run whenever alarm is set from the UI
function setAlarm(e) {
    e.preventDefault();
    // console.log("welcome");
    alarmDate = document.getElementById("alarmDate")
    alarmDate = new Date(alarmDate.value);
    console.log(alarmDate)
    console.log(`Setting Alarm for ${alarmDate}...`);
    now = new Date();

    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    if(timeToAlarm>=0){
        setTimeout(() => {
            console.log("Ringing now")
            ringBell();
        }, timeToAlarm);
    }
}

    
