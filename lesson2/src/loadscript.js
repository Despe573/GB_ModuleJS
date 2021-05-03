'use strict';

function loadScript(url, callback) {
    const element = document.createElement("script");
    element.type = "text/javascript";
    element.src = url;
    element.onload = callback;

    document.body.appendChild(element);
}

