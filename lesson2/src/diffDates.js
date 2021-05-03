'use strict';

import { DateTime } from 'luxon';
/***
 * Функция вычисляет разницу между двумя датами. Для вычисления используется функию DateTime библиотеки Luxon.
 * @param {String} firstDate - Первая дата.
 * @param {String} secondDate - Вторая дата.
 * @returns {object} Возвращает объект с разультатами вычисления вида: {'years', 'months', 'days'}.
 */
export function diffDates(firstDate, secondDate) {
    firstDate = DateTime.fromISO(firstDate);
    secondDate = DateTime.fromISO(secondDate);

    if (firstDate > secondDate) {
        [firstDate, secondDate] = [secondDate, firstDate];
    }
    return secondDate.diff(firstDate, ['years', 'months', 'days']).toObject()
}
/***
 * Функция преобразует переданный объект с результатами вычисления промежутка дат в HTML строку.
 * @param { object } diff - Объект c результатами вычисления разницы промежутка дат.
 * @returns { String } Возвращает строку HTML вида: `<span>Лет: N, Месяцев: N, Дней: N</span>`.
 */
export function diffToHTML(diff) {
    return `Лет: ${diff.years} Месяцев: ${diff.months} Дней: ${diff.days}`
}