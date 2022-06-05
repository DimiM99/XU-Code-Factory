var themeSwitch;
var dropdown;
var dropdown2;

window.addEventListener('DOMContentLoaded', () => {
	dropdown = document.querySelector('.dropdown');
	dropdown2 = document.getElementById('d2');
	themeSwitch = document.getElementById('theme');
	themeSwitch.addEventListener('change', () => {
		document.body.classList.toggle('dark');
	});
});

function save(Smth) {
	document.querySelector('.textBox').value = Smth;
}

function save2(Smth) {
	document.querySelector('.textBox2').value = Smth;
}

function show() {
	dropdown.classList.toggle("active");
}

function show2() {
	dropdown2.classList.toggle("active");
}

var service;
var onbording;
var duration;
var total_costs;

function CalculateTotalPrice() {
	service = document.querySelector('.textBox');
	onbording = document.querySelector('.textBox2');
	months = document.getElementById('duration');

	let s1;
	let s2;

	switch (service.value) {
		case "Mobile Application":
			s1 = 15000;
			break;
		case "Web Application":
			s1 = 15000;
			break;
		case "Technical Consultation":
			s1 = 20000;
			break;
		default:
			s1 = 150000;
			break;
	}

	switch (onbording.value) {
		case "Yes":
			s2 = 50000;
			break;
		case "No":
			s2 = 0;
			break;
		default :
			S2 = 0;
			break;
	}
	
	total_costs = 30000 + (s1 * months.value) + s2;
	document.getElementById('total_costs').innerHTML = String(total_costs) + " Euro";
}