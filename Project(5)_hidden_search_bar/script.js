const container = document.querySelector('.container');
const input = document.querySelector('.search');
const button = document.querySelector('.btn');

button.addEventListener('click', () => {
    container.classList.toggle('show-bar');
    input.focus();
})