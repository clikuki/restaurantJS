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
				const cartIsEmpty = () =>
				{
					const cart = document.querySelector('#cartContainer');
					return cart.children.length === 0;
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
			const itemIsInCart = menuItemName =>
			{
				menuItemName = menuItemName
									.toLowerCase()
									.trim()

				const cartSection = document.querySelector('#cartContainer');
				const result = [...cartSection.children].some(elem =>
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
		const cart = document.querySelector('#cartContainer');
	
		const pricesArray = [...cart.children].map(elem => {
			const [ ,price ] = elem.querySelector('div > span:last-child').textContent.split('$');
			return +price;
		})
	
		const total = pricesArray.reduce((acc, curVal) => acc + curVal, 0).toFixed(2);
		return total;
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

	const cartContainer = cartContainerComponent.get()

	mainComponent.append( heading, totalPrice, emptyCart, cartContainer );
	return mainComponent;
}

const cartContainerComponent = (() =>
{
	const mainComponent = component('div', {
		id: 'cartContainer'
	});

	return {
		get: () => mainComponent,
	}
})()

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

	const cart = cartSectionComponent();

	return [
		tabTitle,
		mainCourseMenu,
		appetizerMenu,
		beverageMenu,
		cart,
	]
})();
