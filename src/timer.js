'use strict';

export function loadTimer() {
    const time = document.getElementById("time");
    const start = document.getElementById("start");
    const pause = document.getElementById("pause");
    const stop = document.getElementById("stop");
    const output = document.getElementById("output");
    let timerId;

    time.addEventListener("input", function () {
        output.innerText = `Задано время: ${time.value}`;
    }, false);

    function starTimer() {
        let timerId = setInterval(function () {
            if (time.valueAsNumber > 0) {
                time.valueAsNumber = time.valueAsNumber - 1000;
            } else {
                clearInterval(timerId);
                alert('Время закончилось!');
                output.innerText = `Время закончилось!`;
            }
        }, 1000)
    }

    function pauseTimer() {
        clearInterval(timerId);
    }

    function stopTimer() {
        clearInterval(timerId);
        time.valueAsNumber = 0;
        output.innerText = `Задано время: ${time.value}`;
    }


    start.addEventListener("click", starTimer);

    pause.addEventListener("click", pauseTimer);

    stop.addEventListener("click", stopTimer);

}