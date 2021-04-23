'use strict';

import { loadDateCalc } from './dateCalc.js';
import { loadTimer } from './timer.js';

const dateCalcButton = document.getElementById('dateCalc');
const timerButton = document.getElementById('timer');
const wrapper = document.querySelector('.wrapper');

dateCalcButton.addEventListener('click', (event) => htmlRender(event.target.id));
timerButton.addEventListener('click', (event) => htmlRender(event.target.id));


/***
 * Функция отрисовывает Dom на основании получаемого названия скрипта.
 * @param {string} nameScript - Id скрипта получаемое с кнопки.
 * @returns {String} Возвращает HTML верстку на страницу и загружает соответсвующий скрипт.
 */
export function htmlRender(nameScript) {

    switch (nameScript) {
        case 'dateCalc':
            wrapper.innerHTML =
                `<form id="datecalc">
                <h3>Калькулятор дат</h3>
                <label>
                    <strong>Первая дата:</strong>
                    <input type="date" name="firstDate" />
                </label>
                <label>
                    <strong>Вторая дата:</strong>
                    <input type="date" name="secondDate" />
                </label>
                <button type="submit">Расчитать промежуток</button>
                <p id="datecalc_result"></p>
                </form >`;
            loadDateCalc();
            break;
        case 'timer':
            wrapper.innerHTML =
                `<h3>Таймер</h3>
                <label>
                    <strong>Задайте время:</strong>
                    <input id="time" type="time" step="1" value="00:00:00" />
                </label>
                <br>
                <div id="output">Задано время: 00:00:00</div>
                <br>
                <button id="start">Старт</button>
                <button id="pause">Пауза</button>
                <button id="stop">Стоп</button>`;
            loadTimer();
            break;
        default:
            wrapper.innerHTML =
                `<form id="datecalc">
                <h3>Калькулятор дат</h3>
                <label>
                    <strong>Первая дата:</strong>
                    <input type="date" name="firstDate" />
                </label>
                <label>
                    <strong>Вторая дата:</strong>
                    <input type="date" name="secondDate" />
                </label>
                <button type="submit">Расчитать промежуток</button>
                <p id="datecalc_result"></p>
                </form >`;
            loadDateCalc();
            break;
    }
}
