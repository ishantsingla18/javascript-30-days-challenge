const container = document.querySelector('.container');

window.addEventListener('keydown', (e) => {
    container.innerHTML = `
        <div>
            ${e.key === ' ' ? 'Space' : e.key}
            <small>Key</small>
        </div>
        <div>
            ${e.keyCode}
            <small>Key Code</small>
        </div>
        <div>
            ${e.code}
            <small>Code</small>
        </div>
    `
})