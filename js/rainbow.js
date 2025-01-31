let text = " ";

let color = [255, 0, 0];
let stage = 0;
let increment = 1;

function rainbow() {
    switch (stage) {
        case 0:
            color[0] -= increment;
            color[1] += increment;
            break;
        case 1:
            color[1] -= increment;
            color[2] += increment;
            break;
        case 2:
            color[0] += increment;
            color[2] -= increment;
            break;
    }
    color.forEach((value, index) => {
        color[index] = clamp(value, 0, 255);
        if (value == 255) {
            stage = (stage + 1) % 3;
        }
    });
    document.body.style.background = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    setTimeout(rainbow, 1000/60);
    // console.log(color);
}

window.onkeydown = function(e) {
    if (!text) return;

    text += e.key;
    if (text.includes("rainbow")) {
        rainbow();
        main.style.boxShadow = "white 0px 0px 40px 12px";
        text = null;
    }
};