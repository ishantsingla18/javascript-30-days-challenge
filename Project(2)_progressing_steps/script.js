const progress = document.querySelector('.progress');
const circles = document.querySelectorAll('.circle');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

let active = 1;

next.addEventListener('click', () => {
    active++;
    if(active>circles.length) {
        active = circles.length;
    }
    progressSteps();
});

prev.addEventListener('click', () => {
    active--;
    if(active<1) {
        active = 1;
    }
    progressSteps();
});

function progressSteps() {
    circles.forEach((circle, idx) => {
        if(idx<active) {
            circle.classList.add('active');
        }
        else {
            circle.classList.remove('active');
        }
    })
    progress.style.width = ((active-1)/(circles.length - 1))*100 + '%';
    if(active===1) {
        prev.disabled = true;
    }
    else if(active===circles.length) {
        next.disabled = true;
    }
    else {
        prev.disabled = false;
        next.disabled = false;
    }
}