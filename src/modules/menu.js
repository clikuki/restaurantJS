import component from './component';

import water from '../assets/glassOfWater.png';
import pizza from '../assets/pizzaSlice.png';

const categoryMaker = menuInfo =>
{
	const menuItemMaker = itemInfo =>
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

		const addToCartCB = name =>
		{
			const itemIsInCart = menuItemName =>
			{
				menuItemName = menuItemName
									.toLowerCase()
									.trim()

				const cartChildren = cart.get().children;
				const result = [...cartChildren].some(elem =>
					{
						const cartItemHeading = elem.querySelector('div > h3');
						const cartItemPrice = cartItemHeading.querySelector('span').textContent;
						const cartItemName = cartItemHeading.textContent
															.replace(cartItemPrice, '')
															.toLowerCase()
															.trim();

						return cartItemName === menuItemName;
					});
			
				return result;
			}

			if(itemIsInCart(name)) return;
			cart.add(itemInfo)
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

const updateCartTotal = () =>
{
	const changeCartTotal = newTotal =>
	{
		const cartTotalElem = document.querySelector('#cartTotal');
		const [ prefix ] = cartTotalElem.textContent.split('$');
	
		cartTotalElem.textContent = `${prefix}$${newTotal}`;
	}

	const computeCartTotal = () =>
	{
		const pricesArray = [...cart.get().children].map(elem => {
			const text = elem.querySelector('div > span:last-child').textContent;
			const [ ,price ] = text.split('$');
			return +price;
		})
	
		const totalPrice = pricesArray.reduce((acc, curVal) => acc + curVal, 0).toFixed(2);

		if(!+totalPrice) return 0;
		return totalPrice;
	}

	changeCartTotal(computeCartTotal());
}

const cartSectionComponent = () =>
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

	const cartContainer = cart.get()

	mainComponent.append( heading, totalPrice, emptyCart, cartContainer );
	return mainComponent;
}

const cart = (() =>
{
	const mainComponent = component('div', {
		id: 'cartContainer'
	});

	const getUniqueKey = () =>
	{
		const getRandomInt = (min, max) =>
			{
				min = Math.ceil(min);
				max = Math.floor(max);
			
				const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
			
				return randomInt;
			}

		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		const charactersLength = characters.length;
	
		let result = '';
		for (let i = 0, randInt = getRandomInt(10, 20); i < randInt; i++)
		{
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
	
		return result;
	}

	const cartItems = [];
	const add = info =>
	{
		const cartItemEl = cartItemMaker( info );
		const itemInfo = {
			reference: cartItemEl,
			name: info.name,
			price: info.price,
			key: getUniqueKey(),
		}

		cartItemEl.setAttribute('data-key', itemInfo.key);
		mainComponent.append( cartItemEl );
		cartItems.push( itemInfo );
		updateCartTotal();
	}

	const remove = itemKey =>
	{
		const itemIndex = cartItems.findIndex(elem =>
			{
				const elemKey = elem.key;
				return elemKey === itemKey;
			})

		if( itemIndex === -1) return;
		const itemElem = cartItems[itemIndex].reference;

		cartItems.splice(itemIndex, 1);
		itemElem.remove();
		updateCartTotal();
	}

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
		const changeItemNum = num =>
		{
			const newNum = itemCounter + num;
			if(newNum < 1) return;
			itemCounter = newNum;
		}

		const updateItemNum = () =>
		{
			const [ numOfItems, totalPrice ] = numAndPrice.children;
			numOfItems.textContent = numOfPrefix + itemCounter;
			totalPrice.textContent = `${totalPrefix}${(itemInfo.price * itemCounter).toFixed(2)}`;
		}

		const itemNumCB = (num) =>
		{
			changeItemNum(num);
			updateItemNum();
			updateCartTotal();
		}

		const increaseBtn = component('button', {
			onclick: itemNumCB.bind(null, 1),
		}, [
			'Add'
		]);

		const decreaseBtn = component('button', {
			onclick: itemNumCB.bind(null, -1),
		}, [
			'Decrease'
		]);

		const removeCB = () =>
		{
			cart.remove(mainComponent.dataset.key);	
			if(cart.isEmpty())
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

		mainComponent.append( itemImg, infoBox );
		return mainComponent;
	}

	return {
		get: () => mainComponent,
		isEmpty: () => mainComponent.children.length === 0,
		items: () => [ ...cartItems ],
		add,
		remove,
	}
})();

window.cart = cart;

const emptyCartMsg = (() =>
{
	const mainComponent = component('div', {
		id: 'emptyCartMsg'
	}, [
		'Uh oh, looks like your cart is empty!',
		component('br'),
		'Fill your cart by buying some items!',
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

	const cartSection = cartSectionComponent();

	return [
		tabTitle,
		mainCourseMenu,
		appetizerMenu,
		beverageMenu,
		cartSection,
	]
})();
