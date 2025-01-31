function loadScript(url) {
    var script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);
}

loadScript("js/global.js");
loadScript("js/dvdlogo.js");
loadScript("js/rainbow.js");