'use strict';

import { starTimer, pauseTimer, stopTimer } from './timerlogic.js'


export function loadTimer() {
    const time = document.getElementById("time");
    const output = document.getElementById("output");
    const text = document.getElementById('text');
    const start = document.getElementById("start");
    const pause = document.getElementById("pause");
    const stop = document.getElementById("stop");

    time.addEventListener("input", function () {
        output.innerText = `Отсчет начнется с: ${time.value}`;
    }, false);

    start.addEventListener("click", starTimer);
    pause.addEventListener("click", pauseTimer);
    stop.addEventListener("click", stopTimer);

}