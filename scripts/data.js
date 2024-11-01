document.addEventListener('DOMContentLoaded', () => {
	let textFamily = document.querySelector('#family-text');
	let textAdults = document.querySelector('#adults-text');
	let textChildrens = document.querySelector('#childrens-text');

	const urlParams = new URLSearchParams(window.location.search);
	let familyParams = urlParams.get('f');
	let adultsParams = urlParams.get('a');
	let childrensParams = urlParams.get('c');

	let family = /*localStorage.getItem('f') ??*/ familyParams;
	let adults = /*localStorage.getItem('a') ??*/ adultsParams;
	let childrens = /*(localStorage.getItem('c') ??*/ childrensParams;

	if (!localStorage.getItem('f')) localStorage.setItem('f', familyParams);
	if (!localStorage.getItem('a')) localStorage.setItem('a', adultsParams);
	if (!localStorage.getItem('c')) localStorage.setItem('c', childrensParams);

	textFamily.innerHTML = family.toUpperCase();
	textAdults.innerHTML = `Adultos ${adults}`;

	if (childrens) {
		textChildrens.innerHTML = `Niños ${childrens}`;
	}
});
