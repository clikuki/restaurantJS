import component from './component';

import water from '../assets/glassOfWater.png';
import pizza from '../assets/pizzaSlice.png';

const categoryMaker = menuInfo =>
{
	const itemMaker = itemInfo =>
	{
		const mainComponent = component('div', {
			class: [ 'menuItem' ]
		});
	
		const itemImg = component('img', {
			src: itemInfo.src,
		});
	
		const title = component('h3', {}, [
			itemInfo.name,
			component('span', {}, [
				`$${itemInfo.price}`
			])
		])
	
		const description = component('div', {}, [
			component('p', {}, itemInfo.desc ),
		])
	
		const infoBox = component('div', {
			class: [
				'infoBox'
			]
		}, [
			title,
			description
		])

		const purchaseBtn = component('button', {}, [
			'Add to cart'
		]);
	
		mainComponent.append(itemImg, infoBox, purchaseBtn);
		return mainComponent;
	}

	const mainComponent = component('section', {
		class: [
			'menuCategory'
		]
	})
	
	const heading = component('h2', {}, [
		menuInfo.categoryName
	]);

	const items = menuInfo.items.map(item => itemMaker(item));

	mainComponent.append( heading, ...items );
	return mainComponent;
}

const mainCourseMaker = () =>
{
	const mainComponent = component('section', {
		class: [
			'menuCategory'
		]
	})

	const heading = component('h2', {}, [
		'Main course'
	])

	const apology = component('p', {
		id: 'apology'
	}, [
		'Sorry, but we have ran out of ingredients for the main course',
		component('br'),
		'We apologize for the incovenience!',
	])

	mainComponent.append( heading, apology );
	return mainComponent;
}

const cartComponent = () =>
{
	const itemMaker = itemInfo =>
	{
		const mainComponent = component('div', {
			class: [
				'cartItem'
			]
		})
	
		const itemImg = component('img', {
			src: itemInfo.src,
		});
	
		const title = component('h3', {}, [
			itemInfo.name,
			component('span', {}, [
				`$${itemInfo.price}`
			])
		])

		const numOfItems = component('p', {}, [
			'# of items: 1'
		]);

		let itemCounter = 1;
		const changeNumOfItems = (num) =>
		{
			const newNum = itemCounter + num;
			if(newNum < 1) return;
			itemCounter = newNum;

			const [ prefix ] = numOfItems.textContent.split(': ');
			numOfItems.textContent = `${prefix}: ${itemCounter}`;
		}

		const increaseBtn = component('button', {
			id: 'increase',
			onclick: changeNumOfItems.bind(null, 1),
		}, [
			'add'
		]);

		const decreaseBtn = component('button', {
			id: 'decrease',
			onclick: changeNumOfItems.bind(null, -1),
		}, [
			'remove'
		]);

		const buttonContainer = component('div', {
			id: 'buttonDiv'
		}, [
			increaseBtn, decreaseBtn
		])
	
		const infoBox = component('div', {
			class: [
				'infoBox'
			]
		}, [
			title,
			numOfItems,
			buttonContainer,
		])

		mainComponent.append( itemImg, infoBox );
		return mainComponent;
	}

	const mainComponent = component('section', {
		id: 'cart',
	});

	const heading = component('h2', {
		class: [
			'heading'
		],
	}, [
		'Cart'
	]);

	const cartItemContainer = component('div', {
		id: 'cartContainer'
	});

	const testItem = itemMaker({
		src: water,
		name: 'Harmless glass of water',
		price: 9.99,
	});

	cartItemContainer.append( testItem );
	mainComponent.append( heading, cartItemContainer );
	return mainComponent;
}

export default (() =>
{
	const tabTitle = component('h1', {
		class: [ 'tabTitle' ],
	}, [
		'Menu'
	]);

	const appetizerMenu = categoryMaker({
		categoryName: 'Appetizer',
		items: [
			{
				src: pizza,
				name: 'Pizza slice',
				desc: [
					'A leftover pizza slice from ',
					component('del', {}, 'my fridge'),
					' world-class chefs!',
				],
				price: 9.99,
			}
		]
	})

	const mainCourseMenu = mainCourseMaker();

	const beverageMenu = categoryMaker({
		categoryName: 'Beverages',
		items: [
			{
				src: water,
				name: 'Harmless glass of water',
				desc: [
					'Perfectly safe for drinking, ',
					component('b', {}, [ 'no chemicals' ]),
					' mixed in!',
				],
				price: 5.99,
			}
		]
	})

	const cart = cartComponent();

	return [
		tabTitle,
		mainCourseMenu,
		appetizerMenu,
		beverageMenu,
		cart,
	]
})();
