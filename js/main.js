const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

let fahrenheit
let celsius

const swap = () => {
	
	if (one.textContent.includes('°F') && two.textContent.includes('°C')) {
		one.textContent = '°C'
		two.textContent = '°F'
		result.textContent = ''
	} else if (one.textContent.includes('°C') && two.textContent.includes('°F')) {
		one.textContent = '°F'
		two.textContent = '°C'
		result.textContent = ''
	}

}

const fahrToCel = () => {
	fahrenheit = converter.value * 1.8 + 32
	result.textContent = `${converter.value}°C to ${fahrenheit.toFixed(2)}°F`
	converter.value = ''
}

const celToFar = () => {
	celsius = (converter.value - 32) / 1.8
	result.textContent = `${converter.value}°F to ${celsius.toFixed(2)}°C`
	converter.value = ''
}

const conversion = () => {
	if (converter.value !== '') {
		if (one.textContent === '°C') {
			celToFar()
		} else {
			fahrToCel()
		}
	} 
	else {
		result.textContent = 'Musisz podać jakąś wartość'
	}
}

const reserFunct = () => {
	converter.value = ''
	result.textContent = ''
}


changeBtn.addEventListener('click', swap)
resBtn.addEventListener('click', reserFunct)
convBtn.addEventListener('click', conversion)


