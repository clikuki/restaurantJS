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
			['min-height']: '40vw',
		}
	}, [
		apologyBox,
	]);

	return menuEl;
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
