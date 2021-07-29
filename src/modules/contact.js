import component from "./component";
import bulletMaker from "./bulletMaker";
import switchTab from "./switchTab";

function phoneNumComponent()
{
	const h5El = component('h5', {}, [ 'Contact information:' ]);

	const contactListEl = component('ul', {}, bulletMaker([
		'Email: shadyGuy@darkAlley.net',
		'Phone num: +1-254-233-423',
	]));

	const phoneNumEl = component('div', {}, [
		h5El,
		contactListEl,
	])

	return phoneNumEl;
}

function orderListComponent()
{
	const h5El = component('h5', {}, [ 'To order from us:' ]);

	const listEl = component('ul', {}, [
		...bulletMaker([
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
		]),
	]);

	const switchBtnDiv = switchToMenuBtnComponent();

	const orderListEl = component('div', {}, [
		h5El,
		listEl,
		switchBtnDiv,
	]);

	return orderListEl;
}

function switchToMenuBtnComponent()
{
	const switchToMenuBtn = component('button', {
		onclick: switchTab.bind(null, 'menu'),
		id: 'switchTabBtn',
	}, [ 'Go to Menu!' ]);

	const divEl = component('div', {
		class: [
			'horizontalCenter',
		],
	}, [
		switchToMenuBtn,
	]); 

	return divEl;
}

export default (() =>
{
	const tabTitle = component('h1', {
		class: [ 'tabTitle' ],
	}, [ 'Contact' ]);

	const phoneNumEl = phoneNumComponent();

	const orderListEl = orderListComponent();

	return [
		tabTitle,
		phoneNumEl,
		orderListEl,
	];
})()
