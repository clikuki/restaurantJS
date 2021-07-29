import component from "./component";

export default (() =>
{
	const tabTitle = component('h1', {
		class: [ 'tabTitle' ],
	}, [
		'Menu'
	]);

	const apologyH4 = component('h4', {}, [
		'Sorry, but we are out of ingredients!',
		component('br'),
		'We apologize for the inconvenience!',
	])

	return [
		tabTitle,
		apologyH4,
	]
})();
