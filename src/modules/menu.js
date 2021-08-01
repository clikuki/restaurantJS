import component from './component';

import water from '../assets/glassOfWater.png';
import pizza from '../assets/pizzaSlice.png';

const categoryMaker = menuInfo =>
{
	const menuItemMaker = itemInfo =>
	{
		const cartItemMaker = itemInfo =>
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
	
			const numOfPrefix = '# of items: ';
			const totalPrefix = 'total: ';
			const numAndPrice = component('div', {}, [
				component('span', {}, [
					`${numOfPrefix}1`
				]),
				component('span', {}, [
					`${totalPrefix}${itemInfo.price}`
				]),
			]);
	
			let itemCounter = 1;
			const changeNumOfItems = num =>
			{
				const [ numOfItems, totalPrice ] = numAndPrice.children;
				const newNum = itemCounter + num;
				if(newNum < 1) return;
				itemCounter = newNum;
	
				numOfItems.textContent = numOfPrefix + itemCounter;
				totalPrice.textContent = `${totalPrefix}${(itemInfo.price * itemCounter).toFixed(2)}`;
			}
	
			const increaseBtn = component('button', {
				onclick: changeNumOfItems.bind(null, 1),
			}, [
				'Add'
			]);
	
			const decreaseBtn = component('button', {
				onclick: changeNumOfItems.bind(null, -1),
			}, [
				'Decrease'
			]);

			const removeBtn = component('button', {
				onclick: mainComponent.remove.bind( mainComponent ),
			}, [
				'Remove'
			])
	
			const buttonContainer = component('div', {
				id: 'buttonDiv'
			}, [
				increaseBtn, decreaseBtn, removeBtn
			])
		
			const infoBox = component('div', {
				class: [
					'infoBox'
				]
			}, [
				title,
				numAndPrice,
				buttonContainer,
			])
	
			const cart = document.querySelector('#cartContainer');
			mainComponent.append( itemImg, infoBox );
			cart.append( mainComponent );
		}

		const itemIsInCart = itemName =>
		{
			const cart = document.querySelector('#cartContainer');

			for(const elem of cart.children)
			{
				const [ elemName ] = elem.querySelector('div > h3').textContent.split('$');
				if(elemName.toLowerCase() === itemName.toLowerCase())
				{
					return true;
				}
			}

			return false
		}

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

		const addToCartCB = name =>
		{
			if(itemIsInCart(name)) return;
			cartItemMaker(itemInfo)
		}
		const purchaseBtn = component('button', {
			onclick: addToCartCB.bind(null, itemInfo.name),
		}, [
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

	const items = menuInfo.items.map(item => menuItemMaker(item));

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
