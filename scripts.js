// variables

let workTitle = document.getElementById('work');
let breakTitle = document.getElementById('break');

let workTime = 1;
let breakTime = 5;

let seconds = "00"

//display
window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime
    document.getElementById('seconds').innerHTML = seconds

    workTitle.classList.add('active');
}

//start timer
function start() {
    //ring
    function startTimer() {
        console.log("hiiiii")
        var audio = new Audio('serene-ding-ding-36597.mp3');
            audio.play();
    }

    
    //reset button
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";


    //change the time
    seconds = 3;
    
    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    //countdown
    let timerFunction  = () => {
        //change the display
        document.getElementById('minutes').innerHTML = workMinutes
        document.getElementById('seconds').innerHTML = seconds

        //start
        seconds = seconds - 1

        if(seconds === 0) {
            workMinutes = workMinutes - 1;
            if(workMinutes === -1){
                if(breakCount % 2 ===0) {
                    //start break
                    workMinutes = breakMinutes;
                    breakCount++

                    //change the panel
                    workTitle.classList.remove('active');
                    breakTitle.classList.add('active');
                    startTimer();
                }else {
                    //continue work
                    workMinutes = workTime;
                    breakCount++

                    //change the panel
                    breakTitle.classList.remove('active');
                    workTitle.classList.add('active');
                    startTimer();
                }
            }
            seconds = 59;
        }
    }

    //start countdown
    setInterval(timerFunction, 1000); //1000-1s
}

// Get the button element by its ID
const button = document.getElementById('reset');

// Add an event listener for the 'click' event
button.addEventListener('click', function() {
    location.reload();
    alert('Timer Reset');
});
