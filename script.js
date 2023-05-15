
const sounds = ['air', 'asteroid', 'birds', 'clock', 'rain', 'horror'];

sounds.forEach((sound) => {
    const button = document.createElement('button')
    button.classList.add('button')

    button.innerText = sound

    button.addEventListener('click', () => {
        stopAudio()
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(button);
})

function stopAudio() {
    sounds.forEach((sound) => {
        const audio = document.getElementById(sound)
        audio.pause()
    })
}