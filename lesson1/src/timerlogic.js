'use strict';

import './howler.js';
import { formatError } from './common.js';
import './timer.js'

function timerLogic() {
    if (time.valueAsNumber > 0) {
        time.valueAsNumber = time.valueAsNumber - 1000;
    } else {
        clearInterval(timerId);
        let sound = new Howl({
            src: ['./src/audio/timerbell.mp3']
        });
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