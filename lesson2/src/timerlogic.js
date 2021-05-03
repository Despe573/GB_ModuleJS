'use strict';

import { Howl, Howler } from 'howler';
import { formatError } from './common.js';
import './timer.js';
import timerBell from './audio/timerbell.mp3';

const sound = new Howl({
    src: [timerBell]
});

function timerLogic() {
    if (time.valueAsNumber > 0) {
        time.valueAsNumber = time.valueAsNumber - 1000;
    } else {
        clearInterval(timerId);
        sound.play();
        output.innerHTML = formatError('Время закончилось!');
        text.style.display = "block";
    }
}

let timerId;

export function starTimer() {
    output.innerText = `Отчет начался с: ${time.value}`;
    text.style.display = "none";
    timerId = setInterval(timerLogic, 1000);
}

export function pauseTimer() {
    clearInterval(timerId);
}

export function stopTimer() {
    clearInterval(timerId);
    time.valueAsNumber = 0;
    text.style.display = "block";
    output.innerText = `Отсчет начнется с: ${time.value}`;
}