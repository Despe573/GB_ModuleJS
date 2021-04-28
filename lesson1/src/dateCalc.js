'use strict';

import { formatError } from './common.js';
import { diffDates, diffToHTML } from './diffDates.js';

export function loadDateCalc() {
    const formDateCalc = document.getElementById("datecalc");
    const dateCalcResult = document.getElementById("datecalc_result");

    formDateCalc.addEventListener("submit", dateСalculation);

    function dateСalculation(event) {
        dateCalcResult.innerHTML = "";
        event.preventDefault();

        let { firstDate, secondDate } = event.target.elements;
        firstDate = firstDate.value;
        secondDate = secondDate.value;

        if (firstDate && secondDate) {
            let calcResult = diffToHTML(diffDates(firstDate, secondDate));
            dateCalcResult.innerHTML = calcResult;
        } else {
            dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
        }
    }
}

// setTimeout(loadScript, 0)