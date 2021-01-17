const jokeDiv = document.querySelector('.joke');
const btn = document.querySelector('.btn');

btn.addEventListener('click', newJoke);

newJoke();

function newJoke() {
    fetch('https://icanhazdadjoke.com', {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then((res) => res.json())
        .then((data) => jokeDiv.innerHTML = data.joke);
}