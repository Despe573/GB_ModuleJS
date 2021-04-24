'use strict';

import './howler.js';
import { formatError } from './common.js';

export function loadTimer() {
    const time = document.getElementById("time");
    const start = document.getElementById("start");
    const pause = document.getElementById("pause");
    const stop = document.getElementById("stop");
    const output = document.getElementById("output");
    let intervalID;

    time.addEventListener("input", function () {
        output.innerText = `Отсчет начнется с: ${time.value}`;
    }, false);

    function startTimer() {
        let intervalID = setInterval(function () {
            if (time.valueAsNumber > 0) {
                time.valueAsNumber = time.valueAsNumber - 1000;
            } else {
                clearInterval(intervalID);
                let sound = new Howl({
                    src: ['./audio/timerbell.mp3']
                });
                sound.play();
                output.innerHTML = formatError('Время закончилось!');
            }
        }, 1000)
    }

    function pauseTimer() {
        clearInterval(intervalID);
    }

    function stopTimer() {
        clearInterval(intervalID);
        time.valueAsNumber = 0;
        output.innerText = `Отсчет начнется с: ${time.value}`;
    }


    start.addEventListener("click", startTimer);
    pause.addEventListener("click", pauseTimer);
    stop.addEventListener("click", stopTimer);

}