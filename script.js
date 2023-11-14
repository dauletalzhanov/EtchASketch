console.log("SCRIPT IS HERE")

const pad = 		document.querySelector(".pad")
const slider = 		document.querySelector(".slider")
const sliderInput = document.querySelector(".inputSlider")


slider.addEventListener('input', function(e){
	let value = event.target.value
	sliderInput.textContent = value

	pad.textContent = ""
	createPad()

})

function createPad() {
	pad.style.cssText += "display: flex; flex-direction: column;"
	num = sliderInput.textContent
	//length = 800/num
	//length /= 2
	//length -= 2

	for (let i = 0; i < num; i++) {
		let padette = document.createElement('div')
		padette.style.cssText = "display:flex; flex-direction: row; margin: 0; padding: 0; flex: 1;"

		for (j = 0; j < num; j++) {
			let paddie = document.createElement('div')
			paddie.style.cssText = "margin:0; flex: 1"
			paddie.classList.add("fill")
			padette.appendChild(paddie)

		}
		pad.appendChild(padette)
	}
}

createPad()

const fill = document.querySelector(".fill")
fill.addEventListener('click', function(e){
	console.log("FILL ME")
	fill.style.cssText = "background-color: black;"
})