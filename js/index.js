let main = document.getElementById("main");

function clamp(number, min, max) {
    return Math.min(Math.max(number, min), max);
}


function loadScript(url) {
    var script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);
}

loadScript("js/dvdlogo.js");
loadScript("js/rainbow.js");

