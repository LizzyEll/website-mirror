function clamp(number, min, max) {
    return Math.min(Math.max(number, min), max);
}


let direction = [1, 1];

let mainStyle = getComputedStyle(main);

let padding = parseInt(mainStyle.padding);

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

let rawHeight = parseInt(mainStyle.height);
let rawWidth = parseInt(mainStyle.width);

let trueHeight = Math.floor(rawHeight + padding * 2);
let trueWidth = Math.floor(rawWidth + padding * 2);

function move() {
    mainStyle = getComputedStyle(main);
    
    let currentTop = parseInt(mainStyle.top);
    let currentLeft = parseInt(mainStyle.left);
    
    let topAmount = (direction[0]);
    let leftAmount = (direction[1]);

    currentTop = clamp(
        currentTop + topAmount,
        trueHeight / 2,
        windowHeight - trueHeight / 2
    );
    currentLeft = clamp(
        currentLeft + leftAmount,
        trueWidth / 2,
        windowWidth - trueWidth / 2
    );
    
    main.style.top = `${currentTop}px`;
    main.style.left = `${currentLeft}px`;
    
    if (currentTop <= trueHeight / 2 ||
        currentTop >= windowHeight - Math.round(trueHeight / 2)) {
        direction[0] = direction[0] * -1;
    }
    if (currentLeft <= trueWidth / 2 ||
        currentLeft >= windowWidth - Math.round(trueWidth / 2)) {
        direction[1] = direction[1] * -1;
    }
}

setInterval(move, 1000 / 60);

let tempdirection = [1, 1];

main.onmouseover = function() {
    tempdirection = direction;
    direction = [0, 0];
}

main.onmouseout = function() {
    direction = tempdirection;
}

function resetWindow() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    trueHeight = Math.floor(rawHeight + padding * 2);
    trueWidth = Math.floor(rawWidth + padding * 2);
}

window.onresize = resetWindow;