let main = document.querySelector('main');

let direction = [1, 1];

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

function clamp(number, min, max) {
    return Math.min(Math.max(number, min), max);
}

function move() {
    if (direction[0] == 0 && direction[1] == 0) {
        return;
    }
    let mainStyle = getComputedStyle(main);
    
    let rawHeight = parseInt(mainStyle.height);
    let rawWidth = parseInt(mainStyle.width);

    let padding = parseInt(mainStyle.padding);
    
    let trueHeight = Math.floor(rawHeight + padding * 2);
    let trueWidth = Math.floor(rawWidth + padding * 2);

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

setInterval(move, 1000 / 30);

let tempdirection;

main.onmouseover = function() {
    tempdirection = direction;
    direction = [0, 0];
}

main.onmouseout = function() {
    direction = tempdirection;
}   