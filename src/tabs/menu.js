import component from '../modules/component';
import modal from '../modules/modal'
import water from '../assets/glassOfWater.png';
import pizza from '../assets/pizzaSlice.png';

const categoryMaker = menuInfo =>
{
	const menuItemMaker = itemInfo =>
	{
		const mainComponent = component('div', {
			class: ['menuItem']
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
			component('p', {}, itemInfo.desc),
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
				const formatStr = str => str.trim().toLowerCase();

				menuItemName = formatStr(menuItemName);

				const cartItemsInfo = cartCont.items();
				const result = cartItemsInfo.some(info =>
				{
					const cartItemName = formatStr(info.name)
					return cartItemName === menuItemName;
				});

				return result;
			}

			if (itemIsInCart(name)) return;
			cartCont.add(itemInfo)
			cartMsg.hide();
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

	mainComponent.append(heading, ...items);
	return mainComponent;
};

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

	mainComponent.append(heading, apology);
	return mainComponent;
};

const cartMsg = (() =>
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
})();

const cartCont = (() =>
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
		const cartItemEl = cartItemMaker(info);
		const itemInfo = {
			reference: cartItemEl,
			name: info.name,
			price: info.price,
			numInCart: 1,
			key: cartItemEl.dataset.key,
		}

		mainComponent.prepend(cartItemEl);
		cartItems.push(itemInfo);
		cartSection.updateTotal();
	}

	const remove = key =>
	{
		const itemIndex = getIndexFromKey(key);

		if (itemIndex === -1) return;
		const itemElem = cartItems[itemIndex].reference;

		cartItems.splice(itemIndex, 1);
		itemElem.remove();
		cartSection.updateTotal();
	}

	const getIndexFromKey = key => cartItems.findIndex(elem => elem.key === key);

	const cartItemMaker = itemInfo =>
	{
		const key = getUniqueKey();
		const mainComponent = component('div', {
			class: [
				'cartItem'
			],
			'data-key': key,
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

		const changeItemNum = num =>
		{
			const obj = cartCont.items(key);
			const newNum = obj.numInCart + num;
			if (newNum > 0) obj.numInCart = newNum;
			return obj.numInCart;
		}

		const updateItemNum = newNum =>
		{
			const [numOfItems, totalPrice] = numAndPrice.children;
			numOfItems.textContent = numOfPrefix + newNum;
			totalPrice.textContent = `${totalPrefix}${(itemInfo.price * newNum).toFixed(2)}`;
		}

		const itemNumCB = (num) =>
		{
			const newNum = changeItemNum(num);
			updateItemNum(newNum);
			cartSection.updateTotal();
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
			cartCont.remove(mainComponent.dataset.key);
			if (cartCont.isEmpty())
			{
				cartMsg.show();
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

		mainComponent.append(itemImg, infoBox);
		return mainComponent;
	}

	const items = (key = null) =>
	{
		if (key === null) return [...cartItems];
		return cartItems[getIndexFromKey(key)];
	}

	const emptyCart = () =>
	{
		for (const cartItem of cartItems)
		{
			cartItem.reference.remove();
		}

		cartItems.length = 0;
		cartSection.updateTotal();
	}

	window.emptyCart = emptyCart;

	return {
		get: () => mainComponent,
		isEmpty: () => mainComponent.children.length === 0,
		emptyCart,
		items,
		add,
		remove,
	}
})();

const cartSection = (() =>
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

	const pricePrefix = 'Total: $';
	const totalPrice = component('p', {
		id: 'cartTotal',
	}, [
		`${pricePrefix}0`,
	])

	const emptyCart = cartMsg.get();
	const cartContainer = cartCont.get();

	const confirmOrderComponents = () => 
	{
		const addressInput = component('input', {
			placeholder: 'Address'
		})

		const nodes = [
			component('h2', {
				class: [
					'heading',
				]
			}, ['Order Form']),
			component('p', {}, [
				'Please enter your address and click "Confirm" to confirm your order.'
			]),
			component('p', {}, [
				`By pressing "Confirm", you will purchase $${cartSection.total()} worth of good food!`
			]),
			component('div', {
				id: 'addressInputDiv',
			}, [
				addressInput,
				component('button', {
					onclick: () =>
					{
						const nodes = [
							component('h2', {
								class: [
									'heading',
								],
							}, [
								'Thank you!'
							]),
							component('p', {}, [
								'Thank you for ordering, we will deliver your foo- HAHA, JUST KIDDING! ',
								'YOU FOOL! THERE IS NO FOOD, AND THERE IS NO RESTAURANT! ',
								`WE KNOW WHERE YOU LIVE (Your address: ${addressInput.value || 'Somewhere'}), `,
								`AND WE WILL TAKE YOUR HOUSE AND YOUR $${cartSection.total()}! `,
								'YOU BETTER PREPARE FOR US! ',
							]),
							component('div', {
								class: [
									'divCenter',
								]
							}, [
								component('button', {
									onclick: modal.hide,
								}, [
									'Oh no!'
								])
							]),
						]

						modal.show(nodes);
					}
				}, [
					'Confirm'
				]),
			]),
		]

		return nodes;
	}

	const purchaseBtn = component('button', {
		id: 'purchaseBtn',
		onclick: () => modal.show(confirmOrderComponents()),
	}, [
		'Purchase'
	]);

	const btnDiv = component('div', {
		class: [
			'divCenter',
		]
	}, [
		purchaseBtn
	])

	const updateTotal = () =>
	{
		const changeTotal = newTotal => totalPrice.textContent = `${pricePrefix}${newTotal}`;

		const computeTotal = () =>
		{
			const pricesArray = cartCont.items().map(info => info.price * info.numInCart);
			const totalPrice = pricesArray.reduce((acc, curVal) => acc + curVal, 0).toFixed(2);

			if (!+totalPrice) return 0;
			return totalPrice;
		}

		changeTotal(computeTotal());
	}

	mainComponent.append(heading, totalPrice, emptyCart, cartContainer, btnDiv);
	return {
		get: () => mainComponent,
		total: () => +totalPrice.textContent.replace(pricePrefix, ''),
		updateTotal,
	};
})();

export default (() =>
{
	const tabTitle = component('h1', {
		class: ['tabTitle'],
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
					component('b', {}, ['no chemicals']),
					' mixed in!',
				],
				price: 5.99,
			},
		]
	})

	const cart = cartSection.get();

	return [
		tabTitle,
		mainCourseMenu,
		appetizerMenu,
		beverageMenu,
		cart,
	]
})();
