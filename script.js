const FREQUENCY = 35
const DURATION = 130
const INTERVAL = DURATION/2
const COLOR = [255, 0, 0]

let isBlack = false
const button = document.querySelector("button")

const setColor = (r, g, b) => { 
    button.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}
const setBlack = () => {
    setColor(0, 0, 0)
}

setInterval(_ => {
    if (isBlack) {
	setColor(...COLOR)
	isBlack = false
    } else {
	setBlack()
	isBlack = true
    }
}, INTERVAL)

const fullscreen = _ => {
    document.body.requestFullscreen()

    audioContext = new AudioContext()
    oscillator = audioContext.createOscillator()
    oscillator.type = "sine"
    oscillator.frequency.value = FREQUENCY
    oscillator.connect(audioContext.destination)
    oscillator.start(audioContext.currentTime)
}
