const INTERVAL = 60
const COLOR = [255, 0, 0]

let isBlack = false

const setColor = (r, g, b) => 
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
const setBlack = () =>
    setColor(0, 0, 0)

setInterval(_ => {
    if (isBlack) {
	setColor(...COLOR)
	isBlack = false
    } else {
	setBlack()
	isBlack = true
    }
}, INTERVAL)
