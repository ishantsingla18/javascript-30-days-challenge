const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');
const leftContent = document.querySelector('.left h1');
const rightContent = document.querySelector('.right h1');

left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
    rightContent.style.fontSize = '50px';
})

left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
    rightContent.style.fontSize = '60px';
})

right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
    leftContent.style.fontSize = '50px';
})

right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
    leftContent.style.fontSize = '60px';
})