document.addEventListener('DOMContentLoaded', (event) => {
	filterSelection('all');
});

function filterSelection(filteredName) {
	let columns = document.getElementsByClassName('columns');

	if (filteredName == 'all') filteredName = ' ';

	for (let i = 0; i < columns.length; i++) {
		activateRemoveClass(columns[i], 'show');
		if (columns[i].className.indexOf(filteredName) > -1) {
			activateAddClass(columns[i], 'show');
		}
	}
}

//show filtered elements
function activateAddClass(element, name) {
	let arr1 = element.className.split(' ');
	let arr2 = name.split(' ');

	for (let i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += ' ' + arr2[i];
		}
	}
}

//hide elements that are not selected
function activateRemoveClass(element, name) {
	let arr1 = element.className.split(' ');
	let arr2 = name.split(' ');

	for (let i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}

	element.className = arr1.join(' ');
}

//Add active class to the current button (highlight it)

let btnContainer = document.getElementById('btnContainer');
let btns = btnContainer.getElementsByClassName('btn');
for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', function () {
		let current = document.getElementsByClassName('active');
		current[0].className = current[0].className.replace('active', '');
		this.className += ' active';
	});
}

//run a query function when a button is clicked
const all = document.getElementById('all');
all.addEventListener('click', function () {
	filterSelection('all');
});

const websites = document.getElementById('websites');
websites.addEventListener('click', function () {
	filterSelection('websites');
});

const design = document.getElementById('design');
design.addEventListener('click', function () {
	filterSelection('design');
});

const mockup = document.getElementById('mockup');
mockup.addEventListener('click', function () {
	filterSelection('mockup');
});
