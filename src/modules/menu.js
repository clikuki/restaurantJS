import component from "./component";

export default (() =>
{
	const tabTitle = component('h1', {
		class: [ 'tabTitle' ],
	}, [
		'Menu'
	]);

	const apology = component('h4', {
		id: 'apology',
	}, [
		'Sorry, but we are out of ingredients!',
		component('br'),
		'We apologize for the inconvenience!',
	])

	return [
		tabTitle,
		apology,
	]
})();
