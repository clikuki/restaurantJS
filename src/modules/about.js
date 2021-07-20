import component from "./component";

export default (() =>
{
	const h1El = component('h1', {
		class: [
			'underline',
		]
	}, [
		'About',
	]);

	return [
		h1El,
	];
})()
