import component from "./component";

export default (() =>
{
	const tabTitle = component('h1', {
		class: [ 'tabTitle' ],
	}, [
		'About',
	]);

	return [
		tabTitle,
	];
})()
