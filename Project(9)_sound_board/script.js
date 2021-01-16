const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.addEventListener('click', () => {
        stopPlaying();
        document.getElementById(sound).play();
    })
    btn.innerText = sound;
    document.getElementById('buttons').appendChild(btn);
})

function stopPlaying() {
    sounds.forEach(sound => {
        document.getElementById(sound).pause();
        document.getElementById(sound).currentTime = 0;
    })
}