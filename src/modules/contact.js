import component from "./component";
import bulletMaker from "./bulletMaker";
import switchTab from "./switchTab";

function phoneNumComponent()
{
	const mainComponent = component('section')

	const heading = component('h2', {
		class: [ 'heading' ]
	}, [ 'Contact information' ]);

	const contactList = component('ul', {}, bulletMaker([
		'Email: shadyGuy@darkAlley.net',
		'Phone num: +1-254-233-423',
	]));

	mainComponent.append( heading, contactList );
	return mainComponent;
}

function orderMethodListComponent()
{
	const mainComponent = component('section', {
		class: [
			'btnCenterBottom'
		],
	});

	const heading = component('h2', {
		class: [ 'heading' ]
	}, [ 'To order from us' ]);

	const orderMethodsList = component('ul', {}, [
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

	const switchToMenuTabBtn = switchToMenuBtnComponent();

	mainComponent.append( heading, orderMethodsList, switchToMenuTabBtn );
	return mainComponent;
}

function switchToMenuBtnComponent()
{
	const mainComponent = component('div', {
		class: [
			'divCenter'
		]
	});

	const switchToMenuBtn = component('button', {
		onclick: switchTab.bind(null, 'menu'),
		id: 'goToMenu',
	}, [
		'Order from Menu!'
	]);

	mainComponent.append( switchToMenuBtn );
	return mainComponent;
}

export default (() =>
{
	const tabTitle = component('h1', {
		class: [ 'tabTitle' ],
	}, [ 'Contact' ]);

	const phoneNumEl = phoneNumComponent();

	const orderListEl = orderMethodListComponent();

	return [
		tabTitle,
		phoneNumEl,
		orderListEl,
	];
})()
