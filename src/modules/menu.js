import component from './component';

import water from '../assets/glassOfWater.png';
import pizza from '../assets/pizzaSlice.png';

const itemIsInCart = itemName =>
{
	const cart = document.querySelector('#cartContainer');

	for(const elem of cart.children)
	{
		if(!elemIsCartMsg(elem))
		{
			const [ elemName ] = elem.querySelector('div > h3').textContent.split('$');
			if(elemName.toLowerCase() === itemName.toLowerCase())
			{
				return true;
			}
		}
	}

	return false
}

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
			const totalPrefix = 'total: $';
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
	
			const btnCB = (num) =>
			{
				changeNumOfItems(num);
				updateCartTotal();
			}

			const increaseBtn = component('button', {
				onclick: btnCB.bind(null, 1),
			}, [
				'Add'
			]);
	
			const decreaseBtn = component('button', {
				onclick: btnCB.bind(null, -1),
			}, [
				'Decrease'
			]);

			const removeCB = () =>
			{
				const cartIsEmpty = () =>
				{
					const cart = document.querySelector('#cartContainer');
					return cart.children.length <= 1;
				}

				mainComponent.remove();
				updateCartTotal();
				if(cartIsEmpty())
				{
					emptyCartMsg.show();
				}
			}

			const removeBtn = component('button', {
				onclick: removeCB,
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
			updateCartTotal();
			emptyCartMsg.hide();
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

const computeCartTotal = () =>
{
	const cart = document.querySelector('#cartContainer');

	const pricesArray = [...cart.children].map(elem => {
		if(elemIsCartMsg(elem)) return 0;
		const [ ,price ] = elem.querySelector('div > span:last-child').textContent.split('$');
		return +price;
	})

	const total = pricesArray.reduce((acc, curVal) => acc + curVal, 0).toFixed(2);
	return total;
}

const elemIsCartMsg = elem =>
{
	return elem.id === 'emptyCartMsg';
}

const changeCartTotal = newTotal =>
{
	const cartTotalElem = document.querySelector('#cartTotal');
	const [ prefix ] = cartTotalElem.textContent.split('$');

	cartTotalElem.textContent = `${prefix}$${newTotal}`;
}

const updateCartTotal = () =>
{
	changeCartTotal(computeCartTotal());
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

	const totalPrice = component('p', {
		id: 'cartTotal',
	}, [
		'Total: $0'
	])

	const emptyCart = emptyCartMsg.get();

	const cartItemContainer = component('div', {
		id: 'cartContainer'
	}, [
		emptyCart
	]);

	mainComponent.append( heading, totalPrice, cartItemContainer );
	return mainComponent;
}

const emptyCartMsg = (() =>
{
	const mainComponent = component('div', {
		id: 'emptyCartMsg'
	}, [
		'Uh oh, looks like your cart is empty!',
		component('br'),
		' Fill your cart by buying some items!',
	]);

	const classSwitch = operation => mainComponent.classList[operation]('invis');

	return {
		get: () => mainComponent,
		hide: classSwitch.bind(null, 'add'),
		show: classSwitch.bind(null, 'remove'),
	}
})()

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
