const bg = document.querySelector('.container');
const loadText = document.querySelector('.loading');

let load = 0;

let int = setInterval(blluryLoading, 20);

function blluryLoading() {
    load++;

    if(load>99) {
        clearInterval(int);
    }

    loadText.innerHTML = `${load}%`;
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
}

function scale(num, in_min, in_max, out_min, out_max) {
    return ((num-in_min)*(out_max-out_min))/(in_max-in_min) + out_min;
}