console.log("SCRIPT IS HERE")

const pad = 		document.querySelector(".pad")
const slider = 		document.querySelector(".slider")
const sliderInput = document.querySelector(".inputSlider")
const clear =		document.querySelector(".clear")
const colorSelect = document.getElementById("color-select")

const single = 		document.querySelector('.single')
const rainbow = 	document.querySelector('.rainbow')
const eraser = 		document.querySelector('.eraser')

let mode = 'single'
let color = colorSelect.value


slider.addEventListener('input', function(e){
	let value = event.target.value
	sliderInput.textContent = value

	pad.textContent = ""
	createPad()

})

colorSelect.addEventListener('input', function(e){
	color = colorSelect.value
})

clear.addEventListener('click', function(e){
	pad.textContent = ""
	createPad()
})


single.addEventListener('click', function(e){
	mode = 'single'
	single.style.cssText = "background-color: black; color: white;"
	rainbow.style.cssText = "background-color: grey; color: black;"
	eraser.style.cssText = "background-color: grey; color: black;"
})

rainbow.addEventListener('click', function(e){
	mode = 'rainbow'
	single.style.cssText = "background-color: grey; color: black;"
	rainbow.style.cssText = "background-color: black; color: white;"
	eraser.style.cssText = "background-color: grey; color: black;"
})

eraser.addEventListener('click', function(e){
	mode = 'eraser'
	single.style.cssText = "background-color: grey; color: black;"
	rainbow.style.cssText = "background-color: grey; color: black;"
	eraser.style.cssText = "background-color: black; color: white;"
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
			
			
			paddie.addEventListener('mouseover', function(e){
				if (mode == 'single') {
					paddie.style.cssText += "background-color: " + color + ";"
				} else if (mode == 'eraser') {
					paddie.style.cssText += "background-color: rgb(182, 182, 174, 1.0);"
				} else if (mode == 'rainbow') {
					paddie.style.cssText += "background-color: rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+", 1.0);"
				}
			})
			
			/*paddie.addEventListener('mouseover', hoover())*/

			paddie.classList.add("fill")
			padette.appendChild(paddie)

		}
		pad.appendChild(padette)
	}
}

createPad()

/*
const fill = document.querySelector(".fill")
fill.addEventListener('click', function(e){
	console.log("FILL ME")
	fill.style.cssText += "background-color: black;"
})
*/