// Cliccando su un pulsante, viene avviato un cronometro. Per fermare il cronometro, bisogna cliccare su un secondo pulsante

const startButtonEl = document.querySelector("button#start");
const stopButtonEl = document.querySelector("button#stop");
const secondsOutput = document.querySelector("#seconds");
const resetButtonEl = document.querySelector("button#reset");


let clock = false;

startButtonEl.addEventListener("click", function() {
    clock = setInterval(function() {
        if (clock !== false) {
            let seconds =  parseInt(secondsOutput.innerText, 10);
            seconds++
            secondsOutput.innerText = seconds;
        }
    }, 1000);
} );

stopButtonEl.addEventListener("click", function() {
    if (clock !== false) {
        clearInterval(clock);
        clock = false;
    }
});

resetButtonEl.addEventListener("click", function() {
    secondsOutput.innerText = 00;
})
