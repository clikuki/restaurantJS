import component from "./component";

export default (() =>
{
	const h1El = component('h1', {
		class: [
			'underline',
		]
	}, [
		'Contact',
	]);

	return [
		h1El,
	];
})()