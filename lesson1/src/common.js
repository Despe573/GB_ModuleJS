'use strict';

/***
 * Функция преобразует переданный текст в HTML строку со стилями ошибки.
 * @param {string} text - Текст ошибки.
 * @returns {String} Возвращает строку HTML вида: `<span>Текст ошибки</span>`.
 */
export function formatError(text) {
    return `<span style="color:red; font-weight:bold;">${text}</span>`
}
