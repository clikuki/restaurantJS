import component from "./component";
import bulletMaker from "./bulletMaker";

function phoneNumComponent()
{
	const h5El = component('h5', {}, [
		'Contact information:'
	])

	const contactListEl = component('ul', {}, bulletMaker([
		'Email: shadyGuy@darkAlley.net',
		'Phone num: +1-254-233-423',
	]));

	const phoneNumEl = component('div', {
		class: [
			'box',
		],
	}, [
		h5El,
		contactListEl,
	])

	return phoneNumEl;
}

function orderListComponent()
{
	const h5El = component('h5', {}, [
		'To order from us:'
	]);

	const listEl = component('ul', {}, bulletMaker([
		[
			'Go to our restaurant at ',
			component('b', {}, [
				'456 Dark Alley, ShadyVille, Earth',
			]),
		],
		'Use our contact info',
		[
			'Or give us your address, so that we can deliver it straight to your doorstep! It is',
			component('b', {}, [' 100% ']),
			'safe!',
		],
	]));

	const orderListEl = component('div', {
		class: [
			'box',
		]
	}, [
		h5El,
		listEl,
	]);

	return orderListEl;
}

export default (() =>
{
	const h1El = component('h1', {
		class: [
			'underline',
		]
	}, [
		'Contact',
	]);

	const phoneNumEl = phoneNumComponent();

	const orderListEl = orderListComponent();

	return [
		h1El,
		phoneNumEl,
		orderListEl,
	];
})()