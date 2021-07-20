import component from "./component";

function menuComponent()
{
	const h4El = component('h4', {}, [
		'Sorry, but we are out of ingredients!',
		component('br'),
		'We apologize for the inconvenience!',
	])

	const apologyBox = component('div', {
		class: [
			'box',
		],
	}, [h4El])

	const menuEl = component('div', {
		class: [
			'verticalCenter'
		],
		style: {
			['min-height']: '40vh',
			['max-height']: '50vh',
			['text-align']: 'center',
		}
	}, [
		apologyBox,
	]);

	return menuEl;
}

function fakeFormComponent()
{
	const adressInputEl = component('input', {
		id: 'adressInput',
		placeholder: 'Enter your adress here!',
	});

	const submitBtnEl = component('button', {
		type: 'submit',
	}, ['Submit']);

	const fakeFormEl = component('form', {
		id: 'form',
		class: [
			'box',
		]
	}, [
		adressInputEl,
		submitBtnEl,
	]);

	return fakeFormEl;
}

export default (() =>
{
	const h1El = component('h1', {
		class: [
			'underline'
		]
	}, [
		'Menu'
	]);

	const menuEl = menuComponent();

	return [
		h1El,
		menuEl,
	]
})();
