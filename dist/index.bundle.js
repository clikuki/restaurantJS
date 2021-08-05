/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/normalize.css":
/*!***************************!*\
  !*** ./src/normalize.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/glassOfWater.png":
/*!*************************************!*\
  !*** ./src/assets/glassOfWater.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4775d34449f028e6eac.png";

/***/ }),

/***/ "./src/assets/pizzaSlice.png":
/*!***********************************!*\
  !*** ./src/assets/pizzaSlice.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "85de49b22463405fb321.png";

/***/ }),

/***/ "./src/modules/bulletMaker.js":
/*!************************************!*\
  !*** ./src/modules/bulletMaker.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/modules/component.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(bullets)
{
	return bullets.map((bullet) =>
	{
		const liEl = (0,_component__WEBPACK_IMPORTED_MODULE_0__.default)('li');
		const liContent = Array.isArray(bullet) ? bullet : [bullet];

		liEl.append(...liContent);
		return liEl;
	});
}


/***/ }),

/***/ "./src/modules/component.js":
/*!**********************************!*\
  !*** ./src/modules/component.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(tag, options = {}, children)
{
	const element = document.createElement(tag);

	for(const [key, value] of Object.entries(options))
	{
		switch(key)
		{
			case 'style':
				for(const [style, value] of Object.entries(options.style))
				{
					element.style[style] = value;
				}
				break;

			case 'class':
				element.classList.add(...value);
				break;

			default:
				if(key.match(/^data-/i)) element.setAttribute(key, value);
				else element[key] = value;
				break;
		}
	}

	if(children && children.length > 0)
	{
		element.append(...children);
	}

	return element;
}

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/modules/component.js");


const modal = (() =>
{
	const bodyElem = document.querySelector('body');
	const mainElem = document.querySelector('main');

	const modalState = operation =>
	{
		const classSwitch = (elem, operation, className) => 
		{
			elem.classList[operation](className);
		}

		classSwitch(modalBg, operation, 'invis');

		if(operation === 'add') operation = 'remove';
		else operation = 'add';

		classSwitch(mainElem, operation, 'stopScroll')
	}

	const fillModal = nodes =>
	{
		modalContent.textContent = '';
		modalContent.append(...nodes);
	}

	const modalContent = (0,_component__WEBPACK_IMPORTED_MODULE_0__.default)('div');

	const hide = () => modalState('add');
	const show = nodes =>
	{
		fillModal(nodes);
		modalState('remove');
	}

	const modalCloseBtn = (0,_component__WEBPACK_IMPORTED_MODULE_0__.default)('button', {
		id: 'modalCloseBtn',
		onclick: hide,
	})
	
	const modalBox = (0,_component__WEBPACK_IMPORTED_MODULE_0__.default)('div', {
		id: 'modal',
	}, [
		modalCloseBtn,
		modalContent,
	]);

	const modalBg = (0,_component__WEBPACK_IMPORTED_MODULE_0__.default)('div', {
		id: 'modalBg',
		class: [
			'invis'
		]
	}, [
		modalBox
	]);

	bodyElem.append(modalBg);

	return {
		show,
		hide,
	}
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);

/***/ }),

/***/ "./src/modules/switchTab.js":
/*!**********************************!*\
  !*** ./src/modules/switchTab.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tabs_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tabs/home */ "./src/tabs/home.js");
/* harmony import */ var _tabs_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tabs/menu */ "./src/tabs/menu.js");
/* harmony import */ var _tabs_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tabs/contact */ "./src/tabs/contact.js");
/* harmony import */ var _tabs_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tabs/about */ "./src/tabs/about.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component */ "./src/modules/component.js");






const mainElem = document.querySelector('main');
const navBtns = document.querySelectorAll('#headerNav li');
const curTabClass = 'curTab';

let currTab = null;
const tabs = {
	home: _tabs_home__WEBPACK_IMPORTED_MODULE_0__.default,
	menu: _tabs_menu__WEBPACK_IMPORTED_MODULE_1__.default,
	contact: _tabs_contact__WEBPACK_IMPORTED_MODULE_2__.default,
	about: _tabs_about__WEBPACK_IMPORTED_MODULE_3__.default,
}

// adds curTab class to the current tab and removes the previous tabs class
const switchCurTabClass = tabName =>
{
	// Get the tab btn with a class of .curTab and remove it
	const prevTabBtn = document.querySelector(`.${curTabClass}`);
	prevTabBtn.classList.remove(curTabClass);

	for(const btn of navBtns)
	{
		const btnName = btn.textContent.toLowerCase();
		if(btnName === tabName)
		{
			btn.classList.add(curTabClass);
			return;
		}
	}
}

// swaps last child/only child of main elem with the provided content
const mainElemSwapChild = content =>
{
	mainElem.replaceChild(content, mainElem.lastChild);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(tabName, moveTab = true)
{
	if(currTab !== tabName)
	{
		currTab = tabName;

		let children = tabs[tabName];
		if(children)
		{
			// create new content element and fill with children
			const content = (0,_component__WEBPACK_IMPORTED_MODULE_4__.default)('div', {
				id: 'content'
			}, children);

			if(moveTab)	switchCurTabClass(tabName);
			mainElemSwapChild(content);
			mainElem.scrollTop = 0; // scrolls to top in case the last tab was long
		}
	}
}

/***/ }),

/***/ "./src/tabs/about.js":
/*!***************************!*\
  !*** ./src/tabs/about.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/component */ "./src/modules/component.js");


const strikethrough = str => (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('del', {}, [ str ]);

const whoAreWeComponent = () =>
{
	const mainComponent = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('section');

	const heading = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('h2', {
		class: [
			'heading'
		]
	}, [
		'Who are we?'
	]);

	const explanation = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('p', {}, [
		'We are a friendly restaurant who want nothing but ',
		strikethrough( 'your wallet' ),
		' for you to be happy! We always make sure to give our customers the best food!',
		' We are known for serving the best special menu items.',
		' Our customers are always happy with our staff because of our ',
		strikethrough( 'bad' ),
		' great customer service. We have been open for a long time,',
		' and so we know the best ways to keep our customers happy!',
	])

	mainComponent.append( heading, explanation );
	return mainComponent;
}

/**
 * We are a friendly restaurant who want nothing but for you to be happy! We always make sure to give our customers the best food! We are known for serving the best special menu items. Our customers are always happy with our staff because of our great customer service. We have been open for a long time, and so we know the best ways to keep our customers happy!
 * 
 * 
 * 
 * 
 */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() =>
{
	const tabTitle = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('h1', {
		class: [ 'tabTitle' ],
	}, [
		'About',
	]);

	const whoAreWe = whoAreWeComponent();

	return [
		tabTitle,
		whoAreWe,
	];
})());


/***/ }),

/***/ "./src/tabs/contact.js":
/*!*****************************!*\
  !*** ./src/tabs/contact.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/component */ "./src/modules/component.js");
/* harmony import */ var _modules_bulletMaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/bulletMaker */ "./src/modules/bulletMaker.js");
/* harmony import */ var _modules_switchTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/switchTab */ "./src/modules/switchTab.js");




function phoneNumComponent()
{
	const mainComponent = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('section')

	const heading = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('h2', {
		class: [ 'heading' ]
	}, [ 'Contact information' ]);

	const contactList = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('ul', {}, (0,_modules_bulletMaker__WEBPACK_IMPORTED_MODULE_1__.default)([
		'Email: shadyGuy@darkAlley.net',
		'Phone num: +1-254-233-423',
	]));

	mainComponent.append( heading, contactList );
	return mainComponent;
}

function orderMethodListComponent()
{
	const mainComponent = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('section', {
		class: [
			'btnCenterBottom'
		],
	});

	const heading = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('h2', {
		class: [ 'heading' ]
	}, [ 'To order from us' ]);

	const orderMethodsList = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('ul', {}, [
		...(0,_modules_bulletMaker__WEBPACK_IMPORTED_MODULE_1__.default)([
			[
				'Go to our restaurant at ',
				(0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('b', {}, [
					'456 Dark Alley, ShadyVille, Earth',
				]),
			],
			'Use our contact info',
			[
				'Or give us your address, so that we can deliver it straight to your doorstep! It is',
				(0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('b', {}, [' 100% ']),
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
	const mainComponent = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('div', {
		class: [
			'divCenter'
		]
	});

	const switchToMenuBtn = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('button', {
		onclick: _modules_switchTab__WEBPACK_IMPORTED_MODULE_2__.default.bind(null, 'menu'),
		id: 'goToMenu',
	}, [
		'Go to Menu!'
	]);

	mainComponent.append( switchToMenuBtn );
	return mainComponent;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() =>
{
	const tabTitle = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('h1', {
		class: [ 'tabTitle' ],
	}, [ 'Contact' ]);

	const phoneNumEl = phoneNumComponent();

	const orderListEl = orderMethodListComponent();

	return [
		tabTitle,
		phoneNumEl,
		orderListEl,
	];
})());


/***/ }),

/***/ "./src/tabs/home.js":
/*!**************************!*\
  !*** ./src/tabs/home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/component */ "./src/modules/component.js");
/* harmony import */ var _modules_bulletMaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/bulletMaker */ "./src/modules/bulletMaker.js");



function chooseRestaurantComponent()
{
	const testimonyMaker = (testimonies) =>
	{
		const testimonyContainer = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('div', { id: 'testimonyContainer' });

		for(const {quote, name} of testimonies)
		{
			const testimonyBox = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('div', {
				class: [ 'testimony' ]
			});

			const quoteEl = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('blockquote', {
				class: [ 'quote' ]
			}, quote);
			const customerEl = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('span', {
				class: [ 'name' ]
			}, name);

			testimonyBox.append(quoteEl, customerEl);
			testimonyContainer.append(testimonyBox);
		}

		return testimonyContainer;
	}

	const mainComponent = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('section')

	const heading = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('h2', {
		class: [ 'heading' ]
	}, 'Why choose Shady Foods? Because...');
	const reasonsList = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('ul', {}, (0,_modules_bulletMaker__WEBPACK_IMPORTED_MODULE_1__.default)([
			'We have a wide selection of fooooooods!',
			[
				'Our staff is kind and ready to serve you ',
				(0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('b', {} ,'24/7'),
				' !',
			],
		])
	);

	const unconvincedSpan = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('span', {}, ['Not convinced? Hear from our other "customers"!']);
	const testimoniesDiv = testimonyMaker([
		{
			quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, voluptates.',
			name: 'Julius Caesar',
		},
		{
			quote: 'Very good food! 10/10, will eat at again!',
			name: 'Noone',
		},
		{
			quote: 'Do I get paid for this?',
			name: 'some guy we told we\'d pay',
		},
	]);

	mainComponent.append(
		heading, reasonsList, unconvincedSpan, testimoniesDiv
	);
	return mainComponent;
}

function locationComponent()
{
	const mainComponent = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('section');

	const heading = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('h2', {
		class: [ 'heading' ]
	}, [
		'Find us at' 
	]);

	const address = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('span', {}, [
		'You can find us at ', 
		(0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('b', {}, [ '456 Dark Alley, ShadyVille, Earth' ])
	]);

	mainComponent.append(heading, address);
	return mainComponent;
}

function scheduleComponent()
{
	const mainComponent = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('section')

	const heading = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('h2', {
		class: [ 'heading' ]
	}, [
		'Working Hours',
	]);

	const schedule = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('ul', {}, (0,_modules_bulletMaker__WEBPACK_IMPORTED_MODULE_1__.default)([
		'Monday, Wednesday, Friday: 6AM - 6PM',
		'Tuesday, Thursday: 7AM - 5PM',
		'Weekends: Sorry, no working hours!',
	]))

	mainComponent.append(heading, schedule);
	return mainComponent;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() =>
{
	const greeting = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('h1', {
		class: [ 'tabTitle' ],
	}, [
		'Welcome to Shady Foods!'
	]);

	const chooseRestaurantEl = chooseRestaurantComponent();
	const locationEl = locationComponent();
	const scheduleEl = scheduleComponent();

	return [
		greeting,
		chooseRestaurantEl,
		locationEl,
		scheduleEl,
	]
})());


/***/ }),

/***/ "./src/tabs/menu.js":
/*!**************************!*\
  !*** ./src/tabs/menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/component */ "./src/modules/component.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/modal */ "./src/modules/modal.js");
/* harmony import */ var _assets_glassOfWater_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/glassOfWater.png */ "./src/assets/glassOfWater.png");
/* harmony import */ var _assets_pizzaSlice_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/pizzaSlice.png */ "./src/assets/pizzaSlice.png");





const categoryMaker = menuInfo =>
{
	const menuItemMaker = itemInfo =>
	{
		const mainComponent = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('div', {
			class: ['menuItem']
		});

		const itemImg = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('img', {
			src: itemInfo.src,
		});

		const title = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('h3', {}, [
			itemInfo.name,
			(0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('span', {}, [
				`$${itemInfo.price}`
			])
		])

		const description = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('div', {}, [
			(0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('p', {}, itemInfo.desc),
		])

		const infoBox = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('div', {
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

				const cartItemsInfo = cart.items.get();
				const result = cartItemsInfo.some(info =>
				{
					const cartItemName = formatStr(info.name)
					return cartItemName === menuItemName;
				});

				return result;
			}

			if (itemIsInCart(name)) return;
			cart.items.add(itemInfo)
			cart.msg.hide();
		}

		const purchaseBtn = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('button', {
			onclick: addToCartCB.bind(null, itemInfo.name),
		}, [
			'Add to cart'
		]);

		mainComponent.append(itemImg, infoBox, purchaseBtn);
		return mainComponent;
	}

	const mainComponent = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('section', {
		class: [
			'menuCategory'
		]
	})

	const heading = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('h2', {}, [
		menuInfo.categoryName
	]);

	const items = menuInfo.items.map(item => menuItemMaker(item));

	mainComponent.append(heading, ...items);
	return mainComponent;
};

const mainCourseMaker = () =>
{
	const mainComponent = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('section', {
		class: [
			'menuCategory'
		]
	})

	const heading = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('h2', {}, [
		'Main course'
	])

	const apology = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('p', {
		id: 'apology'
	}, [
		'Sorry, but we have ran out of ingredients for the main course',
		(0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('br'),
		'We apologize for the incovenience!',
	])

	mainComponent.append(heading, apology);
	return mainComponent;
};

const cart = (() =>
{
	const cartCont = (() =>
	{
		const mainComponent = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('div', {
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
			cart.total.update();
		}

		const remove = key =>
		{
			const itemIndex = getIndexFromKey(key);

			if (itemIndex === -1) return;
			const itemElem = cartItems[itemIndex].reference;

			cartItems.splice(itemIndex, 1);
			itemElem.remove();
			cart.total.update();
		}

		const getIndexFromKey = key => cartItems.findIndex(elem => elem.key === key);

		const cartItemMaker = itemInfo =>
		{
			const key = getUniqueKey();
			const mainComponent = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('div', {
				class: [
					'cartItem'
				],
				'data-key': key,
			})

			const itemImg = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('img', {
				src: itemInfo.src,
			});

			const title = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('h3', {}, [
				itemInfo.name,
				(0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('span', {}, [
					`$${itemInfo.price}`
				])
			])

			const numOfPrefix = '# of items: ';
			const totalPrefix = 'total: $';
			const numAndPrice = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('div', {}, [
				(0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('span', {}, [
					`${numOfPrefix}1`
				]),
				(0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('span', {}, [
					`${totalPrefix}${itemInfo.price}`
				]),
			]);

			const changeItemNum = num =>
			{
				const obj = cart.items.get(key);
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
				cart.total.update();
			}

			const increaseBtn = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('button', {
				onclick: itemNumCB.bind(null, 1),
			}, [
				'Add'
			]);

			const decreaseBtn = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('button', {
				onclick: itemNumCB.bind(null, -1),
			}, [
				'Decrease'
			]);

			const removeCB = () =>
			{
				cart.items.remove(mainComponent.dataset.key);
				if (cart.items.get().length === 0)
				{
					cart.msg.show();
				}
			}

			const removeBtn = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('button', {
				onclick: removeCB,
			}, [
				'Remove'
			])

			const buttonContainer = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('div', {
				id: 'buttonDiv'
			}, [
				increaseBtn, decreaseBtn, removeBtn
			])

			const infoBox = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('div', {
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
			cart.total.update();
		}

		return {
			get: () => mainComponent,
			emptyCart,
			items,
			add,
			remove,
		}
	})();

	const cartMsg = (() =>
	{
		const mainComponent = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('div', {
			id: 'emptyCartMsg'
		}, [
			'Uh oh, looks like your cart is empty!',
			(0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('br'),
			'Fill your cart by buying some items!',
		]);

		const classSwitch = operation => mainComponent.classList[operation]('invis');

		return {
			get: () => mainComponent,
			hide: classSwitch.bind(null, 'add'),
			show: classSwitch.bind(null, 'remove'),
		}
	})();

	const mainComponent = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('section', {
		id: 'cart',
	});

	const heading = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('h2', {
		class: [
			'heading'
		],
	}, [
		'Cart'
	]);

	const pricePrefix = 'Total: $';
	const totalPrice = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('span', {
		id: 'cartTotal',
	}, [
		`${pricePrefix}0`,
	])

	const purchaseBtn = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('button', {
		id: 'purchaseBtn',
		onclick: () => _modules_modal__WEBPACK_IMPORTED_MODULE_1__.default.show(confirmOrderComponents()),
	}, [
		'Purchase'
	]);

	const priceAndBtnDiv = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('div', {
		class: [
			'divBetween'
		]
	}, [
		totalPrice,
		purchaseBtn,
	])

	const emptyCart = cartMsg.get();
	const cartContainer = cartCont.get();

	const confirmOrderComponents = () => 
	{
		const addressInput = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('input', {
			placeholder: 'Address'
		})

		const nodes = [
			(0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('h2', {
				class: [
					'heading',
				]
			}, ['Order Form']),
			(0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('p', {}, [
				'Please enter your address and click "Confirm" to confirm your order.'
			]),
			(0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('p', {}, [
				`By pressing "Confirm", you will purchase $${cart.total.get()} worth of good food!`
			]),
			(0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('div', {
				id: 'addressInputDiv',
			}, [
				addressInput,
				(0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('button', {
					onclick: () =>
					{
						const nodes = [
							(0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('h2', {
								class: [
									'heading',
								],
							}, [
								'Thank you!'
							]),
							(0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('p', {}, [
								'Thank you for ordering, we will deliver your foo- HAHA, JUST KIDDING! ',
								'YOU FOOL! THERE IS NO FOOD, AND THERE IS NO RESTAURANT! ',
								`WE KNOW WHERE YOU LIVE (Your address: ${addressInput.value || 'Somewhere'}), `,
								`AND WE WILL TAKE YOUR HOUSE AND YOUR $${cart.total.get()}! `,
								'YOU BETTER PREPARE FOR US! ',
							]),
							(0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('div', {
								class: [
									'divCenter',
								]
							}, [
								(0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('button', {
									onclick: _modules_modal__WEBPACK_IMPORTED_MODULE_1__.default.hide,
								}, [
									'Oh no!'
								])
							]),
						]

						_modules_modal__WEBPACK_IMPORTED_MODULE_1__.default.show(nodes);
					}
				}, [
					'Confirm'
				]),
			]),
		]

		return nodes;
	}

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

	mainComponent.append(heading, priceAndBtnDiv, emptyCart, cartContainer);
	return {
		get: () => mainComponent,
		total: {
			get: () => +totalPrice.textContent.replace(pricePrefix, ''),
			update: updateTotal,
		},
		items: {
			get: cartCont.items,
			empty: cartCont.emptyCart,
			remove: cartCont.remove,
			add: cartCont.add,
		},
		msg: {
			show: cartMsg.show,
			hide: cartMsg.hide,
		},
	};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() =>
{
	const tabTitle = (0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('h1', {
		class: ['tabTitle'],
	}, [
		'Menu'
	]);

	const appetizerMenu = categoryMaker({
		categoryName: 'Appetizer',
		items: [
			{
				src: _assets_pizzaSlice_png__WEBPACK_IMPORTED_MODULE_3__,
				name: 'Pizza slice',
				desc: [
					'A leftover pizza slice from ',
					(0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('del', {}, 'my fridge'),
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
				src: _assets_glassOfWater_png__WEBPACK_IMPORTED_MODULE_2__,
				name: 'Harmless glass of water',
				desc: [
					'Perfectly safe for drinking, ',
					(0,_modules_component__WEBPACK_IMPORTED_MODULE_0__.default)('b', {}, ['no chemicals']),
					' mixed in!',
				],
				price: 5.99,
			},
		]
	})

	const cartSection = cart.get();

	return [
		tabTitle,
		mainCourseMenu,
		appetizerMenu,
		beverageMenu,
		cartSection,
	]
})());


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_switchTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/switchTab */ "./src/modules/switchTab.js");
/* harmony import */ var _normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./normalize.css */ "./src/normalize.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




const defaultTab = 'home';

function setEventListeners()
{
	const mainCB = e =>
	{
		const tabName = e.target.textContent.toLowerCase();
		(0,_modules_switchTab__WEBPACK_IMPORTED_MODULE_0__.default)(tabName);
	}

	const keyCheck = e =>
	{
		const keysArray = ['Space', 'Enter'];
		if(keysArray.includes(e.code))
		{
			mainCB(e);
		}
	}

	const navBtns = document.querySelectorAll('#headerNav li');
	for(const navBtn of navBtns)
	{
		navBtn.addEventListener('click', mainCB);
		navBtn.addEventListener('keydown', keyCheck);
	}
}

function initialize()
{
	(0,_modules_switchTab__WEBPACK_IMPORTED_MODULE_0__.default)(defaultTab);
	setEventListeners();
}

initialize();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxxREFBSztBQUNkO0FBQ0E7QUFDQTtBQUNBLEtBQUssMkRBQVMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxHQUFHLEVBQUM7Ozs7Ozs7VUM1Zkw7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZjRDO0FBQ25CO0FBQ0o7O0FBRXJCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDJEQUFTO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQywyREFBUztBQUNWO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50anMvLi9zcmMvbm9ybWFsaXplLmNzcz9mYzU1Iiwid2VicGFjazovL3Jlc3RhdXJhbnRqcy8uL3NyYy9zdHlsZS5jc3M/ZTMyMCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50anMvLi9zcmMvbW9kdWxlcy9idWxsZXRNYWtlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50anMvLi9zcmMvbW9kdWxlcy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudGpzLy4vc3JjL21vZHVsZXMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudGpzLy4vc3JjL21vZHVsZXMvc3dpdGNoVGFiLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRqcy8uL3NyYy90YWJzL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRqcy8uL3NyYy90YWJzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudGpzLy4vc3JjL3RhYnMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50anMvLi9zcmMvdGFicy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRqcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50anMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRqcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnRqcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRqcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRqcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50anMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IGNvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYnVsbGV0cylcbntcblx0cmV0dXJuIGJ1bGxldHMubWFwKChidWxsZXQpID0+XG5cdHtcblx0XHRjb25zdCBsaUVsID0gY29tcG9uZW50KCdsaScpO1xuXHRcdGNvbnN0IGxpQ29udGVudCA9IEFycmF5LmlzQXJyYXkoYnVsbGV0KSA/IGJ1bGxldCA6IFtidWxsZXRdO1xuXG5cdFx0bGlFbC5hcHBlbmQoLi4ubGlDb250ZW50KTtcblx0XHRyZXR1cm4gbGlFbDtcblx0fSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih0YWcsIG9wdGlvbnMgPSB7fSwgY2hpbGRyZW4pXG57XG5cdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG5cblx0Zm9yKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvcHRpb25zKSlcblx0e1xuXHRcdHN3aXRjaChrZXkpXG5cdFx0e1xuXHRcdFx0Y2FzZSAnc3R5bGUnOlxuXHRcdFx0XHRmb3IoY29uc3QgW3N0eWxlLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob3B0aW9ucy5zdHlsZSkpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRlbGVtZW50LnN0eWxlW3N0eWxlXSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdjbGFzcyc6XG5cdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi52YWx1ZSk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRpZihrZXkubWF0Y2goL15kYXRhLS9pKSkgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG5cdFx0XHRcdGVsc2UgZWxlbWVudFtrZXldID0gdmFsdWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGlmKGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aCA+IDApXG5cdHtcblx0XHRlbGVtZW50LmFwcGVuZCguLi5jaGlsZHJlbik7XG5cdH1cblxuXHRyZXR1cm4gZWxlbWVudDtcbn0iLCJpbXBvcnQgY29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcblxuY29uc3QgbW9kYWwgPSAoKCkgPT5cbntcblx0Y29uc3QgYm9keUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cdGNvbnN0IG1haW5FbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG5cdGNvbnN0IG1vZGFsU3RhdGUgPSBvcGVyYXRpb24gPT5cblx0e1xuXHRcdGNvbnN0IGNsYXNzU3dpdGNoID0gKGVsZW0sIG9wZXJhdGlvbiwgY2xhc3NOYW1lKSA9PiBcblx0XHR7XG5cdFx0XHRlbGVtLmNsYXNzTGlzdFtvcGVyYXRpb25dKGNsYXNzTmFtZSk7XG5cdFx0fVxuXG5cdFx0Y2xhc3NTd2l0Y2gobW9kYWxCZywgb3BlcmF0aW9uLCAnaW52aXMnKTtcblxuXHRcdGlmKG9wZXJhdGlvbiA9PT0gJ2FkZCcpIG9wZXJhdGlvbiA9ICdyZW1vdmUnO1xuXHRcdGVsc2Ugb3BlcmF0aW9uID0gJ2FkZCc7XG5cblx0XHRjbGFzc1N3aXRjaChtYWluRWxlbSwgb3BlcmF0aW9uLCAnc3RvcFNjcm9sbCcpXG5cdH1cblxuXHRjb25zdCBmaWxsTW9kYWwgPSBub2RlcyA9PlxuXHR7XG5cdFx0bW9kYWxDb250ZW50LnRleHRDb250ZW50ID0gJyc7XG5cdFx0bW9kYWxDb250ZW50LmFwcGVuZCguLi5ub2Rlcyk7XG5cdH1cblxuXHRjb25zdCBtb2RhbENvbnRlbnQgPSBjb21wb25lbnQoJ2RpdicpO1xuXG5cdGNvbnN0IGhpZGUgPSAoKSA9PiBtb2RhbFN0YXRlKCdhZGQnKTtcblx0Y29uc3Qgc2hvdyA9IG5vZGVzID0+XG5cdHtcblx0XHRmaWxsTW9kYWwobm9kZXMpO1xuXHRcdG1vZGFsU3RhdGUoJ3JlbW92ZScpO1xuXHR9XG5cblx0Y29uc3QgbW9kYWxDbG9zZUJ0biA9IGNvbXBvbmVudCgnYnV0dG9uJywge1xuXHRcdGlkOiAnbW9kYWxDbG9zZUJ0bicsXG5cdFx0b25jbGljazogaGlkZSxcblx0fSlcblx0XG5cdGNvbnN0IG1vZGFsQm94ID0gY29tcG9uZW50KCdkaXYnLCB7XG5cdFx0aWQ6ICdtb2RhbCcsXG5cdH0sIFtcblx0XHRtb2RhbENsb3NlQnRuLFxuXHRcdG1vZGFsQ29udGVudCxcblx0XSk7XG5cblx0Y29uc3QgbW9kYWxCZyA9IGNvbXBvbmVudCgnZGl2Jywge1xuXHRcdGlkOiAnbW9kYWxCZycsXG5cdFx0Y2xhc3M6IFtcblx0XHRcdCdpbnZpcydcblx0XHRdXG5cdH0sIFtcblx0XHRtb2RhbEJveFxuXHRdKTtcblxuXHRib2R5RWxlbS5hcHBlbmQobW9kYWxCZyk7XG5cblx0cmV0dXJuIHtcblx0XHRzaG93LFxuXHRcdGhpZGUsXG5cdH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgbW9kYWw7IiwiaW1wb3J0IGhvbWUgZnJvbSBcIi4uL3RhYnMvaG9tZVwiO1xuaW1wb3J0IG1lbnUgZnJvbSBcIi4uL3RhYnMvbWVudVwiO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4uL3RhYnMvY29udGFjdFwiO1xuaW1wb3J0IGFib3V0IGZyb20gXCIuLi90YWJzL2Fib3V0XCI7XG5pbXBvcnQgY29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudFwiO1xuXG5jb25zdCBtYWluRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbmNvbnN0IG5hdkJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjaGVhZGVyTmF2IGxpJyk7XG5jb25zdCBjdXJUYWJDbGFzcyA9ICdjdXJUYWInO1xuXG5sZXQgY3VyclRhYiA9IG51bGw7XG5jb25zdCB0YWJzID0ge1xuXHRob21lLFxuXHRtZW51LFxuXHRjb250YWN0LFxuXHRhYm91dCxcbn1cblxuLy8gYWRkcyBjdXJUYWIgY2xhc3MgdG8gdGhlIGN1cnJlbnQgdGFiIGFuZCByZW1vdmVzIHRoZSBwcmV2aW91cyB0YWJzIGNsYXNzXG5jb25zdCBzd2l0Y2hDdXJUYWJDbGFzcyA9IHRhYk5hbWUgPT5cbntcblx0Ly8gR2V0IHRoZSB0YWIgYnRuIHdpdGggYSBjbGFzcyBvZiAuY3VyVGFiIGFuZCByZW1vdmUgaXRcblx0Y29uc3QgcHJldlRhYkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2N1clRhYkNsYXNzfWApO1xuXHRwcmV2VGFiQnRuLmNsYXNzTGlzdC5yZW1vdmUoY3VyVGFiQ2xhc3MpO1xuXG5cdGZvcihjb25zdCBidG4gb2YgbmF2QnRucylcblx0e1xuXHRcdGNvbnN0IGJ0bk5hbWUgPSBidG4udGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKTtcblx0XHRpZihidG5OYW1lID09PSB0YWJOYW1lKVxuXHRcdHtcblx0XHRcdGJ0bi5jbGFzc0xpc3QuYWRkKGN1clRhYkNsYXNzKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cbn1cblxuLy8gc3dhcHMgbGFzdCBjaGlsZC9vbmx5IGNoaWxkIG9mIG1haW4gZWxlbSB3aXRoIHRoZSBwcm92aWRlZCBjb250ZW50XG5jb25zdCBtYWluRWxlbVN3YXBDaGlsZCA9IGNvbnRlbnQgPT5cbntcblx0bWFpbkVsZW0ucmVwbGFjZUNoaWxkKGNvbnRlbnQsIG1haW5FbGVtLmxhc3RDaGlsZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHRhYk5hbWUsIG1vdmVUYWIgPSB0cnVlKVxue1xuXHRpZihjdXJyVGFiICE9PSB0YWJOYW1lKVxuXHR7XG5cdFx0Y3VyclRhYiA9IHRhYk5hbWU7XG5cblx0XHRsZXQgY2hpbGRyZW4gPSB0YWJzW3RhYk5hbWVdO1xuXHRcdGlmKGNoaWxkcmVuKVxuXHRcdHtcblx0XHRcdC8vIGNyZWF0ZSBuZXcgY29udGVudCBlbGVtZW50IGFuZCBmaWxsIHdpdGggY2hpbGRyZW5cblx0XHRcdGNvbnN0IGNvbnRlbnQgPSBjb21wb25lbnQoJ2RpdicsIHtcblx0XHRcdFx0aWQ6ICdjb250ZW50J1xuXHRcdFx0fSwgY2hpbGRyZW4pO1xuXG5cdFx0XHRpZihtb3ZlVGFiKVx0c3dpdGNoQ3VyVGFiQ2xhc3ModGFiTmFtZSk7XG5cdFx0XHRtYWluRWxlbVN3YXBDaGlsZChjb250ZW50KTtcblx0XHRcdG1haW5FbGVtLnNjcm9sbFRvcCA9IDA7IC8vIHNjcm9sbHMgdG8gdG9wIGluIGNhc2UgdGhlIGxhc3QgdGFiIHdhcyBsb25nXG5cdFx0fVxuXHR9XG59IiwiaW1wb3J0IGNvbXBvbmVudCBmcm9tICcuLi9tb2R1bGVzL2NvbXBvbmVudCc7XG5cbmNvbnN0IHN0cmlrZXRocm91Z2ggPSBzdHIgPT4gY29tcG9uZW50KCdkZWwnLCB7fSwgWyBzdHIgXSk7XG5cbmNvbnN0IHdob0FyZVdlQ29tcG9uZW50ID0gKCkgPT5cbntcblx0Y29uc3QgbWFpbkNvbXBvbmVudCA9IGNvbXBvbmVudCgnc2VjdGlvbicpO1xuXG5cdGNvbnN0IGhlYWRpbmcgPSBjb21wb25lbnQoJ2gyJywge1xuXHRcdGNsYXNzOiBbXG5cdFx0XHQnaGVhZGluZydcblx0XHRdXG5cdH0sIFtcblx0XHQnV2hvIGFyZSB3ZT8nXG5cdF0pO1xuXG5cdGNvbnN0IGV4cGxhbmF0aW9uID0gY29tcG9uZW50KCdwJywge30sIFtcblx0XHQnV2UgYXJlIGEgZnJpZW5kbHkgcmVzdGF1cmFudCB3aG8gd2FudCBub3RoaW5nIGJ1dCAnLFxuXHRcdHN0cmlrZXRocm91Z2goICd5b3VyIHdhbGxldCcgKSxcblx0XHQnIGZvciB5b3UgdG8gYmUgaGFwcHkhIFdlIGFsd2F5cyBtYWtlIHN1cmUgdG8gZ2l2ZSBvdXIgY3VzdG9tZXJzIHRoZSBiZXN0IGZvb2QhJyxcblx0XHQnIFdlIGFyZSBrbm93biBmb3Igc2VydmluZyB0aGUgYmVzdCBzcGVjaWFsIG1lbnUgaXRlbXMuJyxcblx0XHQnIE91ciBjdXN0b21lcnMgYXJlIGFsd2F5cyBoYXBweSB3aXRoIG91ciBzdGFmZiBiZWNhdXNlIG9mIG91ciAnLFxuXHRcdHN0cmlrZXRocm91Z2goICdiYWQnICksXG5cdFx0JyBncmVhdCBjdXN0b21lciBzZXJ2aWNlLiBXZSBoYXZlIGJlZW4gb3BlbiBmb3IgYSBsb25nIHRpbWUsJyxcblx0XHQnIGFuZCBzbyB3ZSBrbm93IHRoZSBiZXN0IHdheXMgdG8ga2VlcCBvdXIgY3VzdG9tZXJzIGhhcHB5IScsXG5cdF0pXG5cblx0bWFpbkNvbXBvbmVudC5hcHBlbmQoIGhlYWRpbmcsIGV4cGxhbmF0aW9uICk7XG5cdHJldHVybiBtYWluQ29tcG9uZW50O1xufVxuXG4vKipcbiAqIFdlIGFyZSBhIGZyaWVuZGx5IHJlc3RhdXJhbnQgd2hvIHdhbnQgbm90aGluZyBidXQgZm9yIHlvdSB0byBiZSBoYXBweSEgV2UgYWx3YXlzIG1ha2Ugc3VyZSB0byBnaXZlIG91ciBjdXN0b21lcnMgdGhlIGJlc3QgZm9vZCEgV2UgYXJlIGtub3duIGZvciBzZXJ2aW5nIHRoZSBiZXN0IHNwZWNpYWwgbWVudSBpdGVtcy4gT3VyIGN1c3RvbWVycyBhcmUgYWx3YXlzIGhhcHB5IHdpdGggb3VyIHN0YWZmIGJlY2F1c2Ugb2Ygb3VyIGdyZWF0IGN1c3RvbWVyIHNlcnZpY2UuIFdlIGhhdmUgYmVlbiBvcGVuIGZvciBhIGxvbmcgdGltZSwgYW5kIHNvIHdlIGtub3cgdGhlIGJlc3Qgd2F5cyB0byBrZWVwIG91ciBjdXN0b21lcnMgaGFwcHkhXG4gKiBcbiAqIFxuICogXG4gKiBcbiAqL1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+XG57XG5cdGNvbnN0IHRhYlRpdGxlID0gY29tcG9uZW50KCdoMScsIHtcblx0XHRjbGFzczogWyAndGFiVGl0bGUnIF0sXG5cdH0sIFtcblx0XHQnQWJvdXQnLFxuXHRdKTtcblxuXHRjb25zdCB3aG9BcmVXZSA9IHdob0FyZVdlQ29tcG9uZW50KCk7XG5cblx0cmV0dXJuIFtcblx0XHR0YWJUaXRsZSxcblx0XHR3aG9BcmVXZSxcblx0XTtcbn0pKClcbiIsImltcG9ydCBjb21wb25lbnQgZnJvbSAnLi4vbW9kdWxlcy9jb21wb25lbnQnO1xuaW1wb3J0IGJ1bGxldE1ha2VyIGZyb20gXCIuLi9tb2R1bGVzL2J1bGxldE1ha2VyXCI7XG5pbXBvcnQgc3dpdGNoVGFiIGZyb20gXCIuLi9tb2R1bGVzL3N3aXRjaFRhYlwiO1xuXG5mdW5jdGlvbiBwaG9uZU51bUNvbXBvbmVudCgpXG57XG5cdGNvbnN0IG1haW5Db21wb25lbnQgPSBjb21wb25lbnQoJ3NlY3Rpb24nKVxuXG5cdGNvbnN0IGhlYWRpbmcgPSBjb21wb25lbnQoJ2gyJywge1xuXHRcdGNsYXNzOiBbICdoZWFkaW5nJyBdXG5cdH0sIFsgJ0NvbnRhY3QgaW5mb3JtYXRpb24nIF0pO1xuXG5cdGNvbnN0IGNvbnRhY3RMaXN0ID0gY29tcG9uZW50KCd1bCcsIHt9LCBidWxsZXRNYWtlcihbXG5cdFx0J0VtYWlsOiBzaGFkeUd1eUBkYXJrQWxsZXkubmV0Jyxcblx0XHQnUGhvbmUgbnVtOiArMS0yNTQtMjMzLTQyMycsXG5cdF0pKTtcblxuXHRtYWluQ29tcG9uZW50LmFwcGVuZCggaGVhZGluZywgY29udGFjdExpc3QgKTtcblx0cmV0dXJuIG1haW5Db21wb25lbnQ7XG59XG5cbmZ1bmN0aW9uIG9yZGVyTWV0aG9kTGlzdENvbXBvbmVudCgpXG57XG5cdGNvbnN0IG1haW5Db21wb25lbnQgPSBjb21wb25lbnQoJ3NlY3Rpb24nLCB7XG5cdFx0Y2xhc3M6IFtcblx0XHRcdCdidG5DZW50ZXJCb3R0b20nXG5cdFx0XSxcblx0fSk7XG5cblx0Y29uc3QgaGVhZGluZyA9IGNvbXBvbmVudCgnaDInLCB7XG5cdFx0Y2xhc3M6IFsgJ2hlYWRpbmcnIF1cblx0fSwgWyAnVG8gb3JkZXIgZnJvbSB1cycgXSk7XG5cblx0Y29uc3Qgb3JkZXJNZXRob2RzTGlzdCA9IGNvbXBvbmVudCgndWwnLCB7fSwgW1xuXHRcdC4uLmJ1bGxldE1ha2VyKFtcblx0XHRcdFtcblx0XHRcdFx0J0dvIHRvIG91ciByZXN0YXVyYW50IGF0ICcsXG5cdFx0XHRcdGNvbXBvbmVudCgnYicsIHt9LCBbXG5cdFx0XHRcdFx0JzQ1NiBEYXJrIEFsbGV5LCBTaGFkeVZpbGxlLCBFYXJ0aCcsXG5cdFx0XHRcdF0pLFxuXHRcdFx0XSxcblx0XHRcdCdVc2Ugb3VyIGNvbnRhY3QgaW5mbycsXG5cdFx0XHRbXG5cdFx0XHRcdCdPciBnaXZlIHVzIHlvdXIgYWRkcmVzcywgc28gdGhhdCB3ZSBjYW4gZGVsaXZlciBpdCBzdHJhaWdodCB0byB5b3VyIGRvb3JzdGVwISBJdCBpcycsXG5cdFx0XHRcdGNvbXBvbmVudCgnYicsIHt9LCBbJyAxMDAlICddKSxcblx0XHRcdFx0J3NhZmUhJyxcblx0XHRcdF0sXG5cdFx0XSksXG5cdF0pO1xuXG5cdGNvbnN0IHN3aXRjaFRvTWVudVRhYkJ0biA9IHN3aXRjaFRvTWVudUJ0bkNvbXBvbmVudCgpO1xuXG5cdG1haW5Db21wb25lbnQuYXBwZW5kKCBoZWFkaW5nLCBvcmRlck1ldGhvZHNMaXN0LCBzd2l0Y2hUb01lbnVUYWJCdG4gKTtcblx0cmV0dXJuIG1haW5Db21wb25lbnQ7XG59XG5cbmZ1bmN0aW9uIHN3aXRjaFRvTWVudUJ0bkNvbXBvbmVudCgpXG57XG5cdGNvbnN0IG1haW5Db21wb25lbnQgPSBjb21wb25lbnQoJ2RpdicsIHtcblx0XHRjbGFzczogW1xuXHRcdFx0J2RpdkNlbnRlcidcblx0XHRdXG5cdH0pO1xuXG5cdGNvbnN0IHN3aXRjaFRvTWVudUJ0biA9IGNvbXBvbmVudCgnYnV0dG9uJywge1xuXHRcdG9uY2xpY2s6IHN3aXRjaFRhYi5iaW5kKG51bGwsICdtZW51JyksXG5cdFx0aWQ6ICdnb1RvTWVudScsXG5cdH0sIFtcblx0XHQnR28gdG8gTWVudSEnXG5cdF0pO1xuXG5cdG1haW5Db21wb25lbnQuYXBwZW5kKCBzd2l0Y2hUb01lbnVCdG4gKTtcblx0cmV0dXJuIG1haW5Db21wb25lbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9Plxue1xuXHRjb25zdCB0YWJUaXRsZSA9IGNvbXBvbmVudCgnaDEnLCB7XG5cdFx0Y2xhc3M6IFsgJ3RhYlRpdGxlJyBdLFxuXHR9LCBbICdDb250YWN0JyBdKTtcblxuXHRjb25zdCBwaG9uZU51bUVsID0gcGhvbmVOdW1Db21wb25lbnQoKTtcblxuXHRjb25zdCBvcmRlckxpc3RFbCA9IG9yZGVyTWV0aG9kTGlzdENvbXBvbmVudCgpO1xuXG5cdHJldHVybiBbXG5cdFx0dGFiVGl0bGUsXG5cdFx0cGhvbmVOdW1FbCxcblx0XHRvcmRlckxpc3RFbCxcblx0XTtcbn0pKClcbiIsImltcG9ydCBjb21wb25lbnQgZnJvbSAnLi4vbW9kdWxlcy9jb21wb25lbnQnO1xuaW1wb3J0IGJ1bGxldE1ha2VyIGZyb20gXCIuLi9tb2R1bGVzL2J1bGxldE1ha2VyXCI7XG5cbmZ1bmN0aW9uIGNob29zZVJlc3RhdXJhbnRDb21wb25lbnQoKVxue1xuXHRjb25zdCB0ZXN0aW1vbnlNYWtlciA9ICh0ZXN0aW1vbmllcykgPT5cblx0e1xuXHRcdGNvbnN0IHRlc3RpbW9ueUNvbnRhaW5lciA9IGNvbXBvbmVudCgnZGl2JywgeyBpZDogJ3Rlc3RpbW9ueUNvbnRhaW5lcicgfSk7XG5cblx0XHRmb3IoY29uc3Qge3F1b3RlLCBuYW1lfSBvZiB0ZXN0aW1vbmllcylcblx0XHR7XG5cdFx0XHRjb25zdCB0ZXN0aW1vbnlCb3ggPSBjb21wb25lbnQoJ2RpdicsIHtcblx0XHRcdFx0Y2xhc3M6IFsgJ3Rlc3RpbW9ueScgXVxuXHRcdFx0fSk7XG5cblx0XHRcdGNvbnN0IHF1b3RlRWwgPSBjb21wb25lbnQoJ2Jsb2NrcXVvdGUnLCB7XG5cdFx0XHRcdGNsYXNzOiBbICdxdW90ZScgXVxuXHRcdFx0fSwgcXVvdGUpO1xuXHRcdFx0Y29uc3QgY3VzdG9tZXJFbCA9IGNvbXBvbmVudCgnc3BhbicsIHtcblx0XHRcdFx0Y2xhc3M6IFsgJ25hbWUnIF1cblx0XHRcdH0sIG5hbWUpO1xuXG5cdFx0XHR0ZXN0aW1vbnlCb3guYXBwZW5kKHF1b3RlRWwsIGN1c3RvbWVyRWwpO1xuXHRcdFx0dGVzdGltb255Q29udGFpbmVyLmFwcGVuZCh0ZXN0aW1vbnlCb3gpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0ZXN0aW1vbnlDb250YWluZXI7XG5cdH1cblxuXHRjb25zdCBtYWluQ29tcG9uZW50ID0gY29tcG9uZW50KCdzZWN0aW9uJylcblxuXHRjb25zdCBoZWFkaW5nID0gY29tcG9uZW50KCdoMicsIHtcblx0XHRjbGFzczogWyAnaGVhZGluZycgXVxuXHR9LCAnV2h5IGNob29zZSBTaGFkeSBGb29kcz8gQmVjYXVzZS4uLicpO1xuXHRjb25zdCByZWFzb25zTGlzdCA9IGNvbXBvbmVudCgndWwnLCB7fSwgYnVsbGV0TWFrZXIoW1xuXHRcdFx0J1dlIGhhdmUgYSB3aWRlIHNlbGVjdGlvbiBvZiBmb29vb29vb2RzIScsXG5cdFx0XHRbXG5cdFx0XHRcdCdPdXIgc3RhZmYgaXMga2luZCBhbmQgcmVhZHkgdG8gc2VydmUgeW91ICcsXG5cdFx0XHRcdGNvbXBvbmVudCgnYicsIHt9ICwnMjQvNycpLFxuXHRcdFx0XHQnICEnLFxuXHRcdFx0XSxcblx0XHRdKVxuXHQpO1xuXG5cdGNvbnN0IHVuY29udmluY2VkU3BhbiA9IGNvbXBvbmVudCgnc3BhbicsIHt9LCBbJ05vdCBjb252aW5jZWQ/IEhlYXIgZnJvbSBvdXIgb3RoZXIgXCJjdXN0b21lcnNcIiEnXSk7XG5cdGNvbnN0IHRlc3RpbW9uaWVzRGl2ID0gdGVzdGltb255TWFrZXIoW1xuXHRcdHtcblx0XHRcdHF1b3RlOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTmVjZXNzaXRhdGlidXMsIHZvbHVwdGF0ZXMuJyxcblx0XHRcdG5hbWU6ICdKdWxpdXMgQ2Flc2FyJyxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHF1b3RlOiAnVmVyeSBnb29kIGZvb2QhIDEwLzEwLCB3aWxsIGVhdCBhdCBhZ2FpbiEnLFxuXHRcdFx0bmFtZTogJ05vb25lJyxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHF1b3RlOiAnRG8gSSBnZXQgcGFpZCBmb3IgdGhpcz8nLFxuXHRcdFx0bmFtZTogJ3NvbWUgZ3V5IHdlIHRvbGQgd2VcXCdkIHBheScsXG5cdFx0fSxcblx0XSk7XG5cblx0bWFpbkNvbXBvbmVudC5hcHBlbmQoXG5cdFx0aGVhZGluZywgcmVhc29uc0xpc3QsIHVuY29udmluY2VkU3BhbiwgdGVzdGltb25pZXNEaXZcblx0KTtcblx0cmV0dXJuIG1haW5Db21wb25lbnQ7XG59XG5cbmZ1bmN0aW9uIGxvY2F0aW9uQ29tcG9uZW50KClcbntcblx0Y29uc3QgbWFpbkNvbXBvbmVudCA9IGNvbXBvbmVudCgnc2VjdGlvbicpO1xuXG5cdGNvbnN0IGhlYWRpbmcgPSBjb21wb25lbnQoJ2gyJywge1xuXHRcdGNsYXNzOiBbICdoZWFkaW5nJyBdXG5cdH0sIFtcblx0XHQnRmluZCB1cyBhdCcgXG5cdF0pO1xuXG5cdGNvbnN0IGFkZHJlc3MgPSBjb21wb25lbnQoJ3NwYW4nLCB7fSwgW1xuXHRcdCdZb3UgY2FuIGZpbmQgdXMgYXQgJywgXG5cdFx0Y29tcG9uZW50KCdiJywge30sIFsgJzQ1NiBEYXJrIEFsbGV5LCBTaGFkeVZpbGxlLCBFYXJ0aCcgXSlcblx0XSk7XG5cblx0bWFpbkNvbXBvbmVudC5hcHBlbmQoaGVhZGluZywgYWRkcmVzcyk7XG5cdHJldHVybiBtYWluQ29tcG9uZW50O1xufVxuXG5mdW5jdGlvbiBzY2hlZHVsZUNvbXBvbmVudCgpXG57XG5cdGNvbnN0IG1haW5Db21wb25lbnQgPSBjb21wb25lbnQoJ3NlY3Rpb24nKVxuXG5cdGNvbnN0IGhlYWRpbmcgPSBjb21wb25lbnQoJ2gyJywge1xuXHRcdGNsYXNzOiBbICdoZWFkaW5nJyBdXG5cdH0sIFtcblx0XHQnV29ya2luZyBIb3VycycsXG5cdF0pO1xuXG5cdGNvbnN0IHNjaGVkdWxlID0gY29tcG9uZW50KCd1bCcsIHt9LCBidWxsZXRNYWtlcihbXG5cdFx0J01vbmRheSwgV2VkbmVzZGF5LCBGcmlkYXk6IDZBTSAtIDZQTScsXG5cdFx0J1R1ZXNkYXksIFRodXJzZGF5OiA3QU0gLSA1UE0nLFxuXHRcdCdXZWVrZW5kczogU29ycnksIG5vIHdvcmtpbmcgaG91cnMhJyxcblx0XSkpXG5cblx0bWFpbkNvbXBvbmVudC5hcHBlbmQoaGVhZGluZywgc2NoZWR1bGUpO1xuXHRyZXR1cm4gbWFpbkNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+XG57XG5cdGNvbnN0IGdyZWV0aW5nID0gY29tcG9uZW50KCdoMScsIHtcblx0XHRjbGFzczogWyAndGFiVGl0bGUnIF0sXG5cdH0sIFtcblx0XHQnV2VsY29tZSB0byBTaGFkeSBGb29kcyEnXG5cdF0pO1xuXG5cdGNvbnN0IGNob29zZVJlc3RhdXJhbnRFbCA9IGNob29zZVJlc3RhdXJhbnRDb21wb25lbnQoKTtcblx0Y29uc3QgbG9jYXRpb25FbCA9IGxvY2F0aW9uQ29tcG9uZW50KCk7XG5cdGNvbnN0IHNjaGVkdWxlRWwgPSBzY2hlZHVsZUNvbXBvbmVudCgpO1xuXG5cdHJldHVybiBbXG5cdFx0Z3JlZXRpbmcsXG5cdFx0Y2hvb3NlUmVzdGF1cmFudEVsLFxuXHRcdGxvY2F0aW9uRWwsXG5cdFx0c2NoZWR1bGVFbCxcblx0XVxufSkoKVxuIiwiaW1wb3J0IGNvbXBvbmVudCBmcm9tICcuLi9tb2R1bGVzL2NvbXBvbmVudCc7XG5pbXBvcnQgbW9kYWwgZnJvbSAnLi4vbW9kdWxlcy9tb2RhbCdcbmltcG9ydCB3YXRlciBmcm9tICcuLi9hc3NldHMvZ2xhc3NPZldhdGVyLnBuZyc7XG5pbXBvcnQgcGl6emEgZnJvbSAnLi4vYXNzZXRzL3BpenphU2xpY2UucG5nJztcblxuY29uc3QgY2F0ZWdvcnlNYWtlciA9IG1lbnVJbmZvID0+XG57XG5cdGNvbnN0IG1lbnVJdGVtTWFrZXIgPSBpdGVtSW5mbyA9PlxuXHR7XG5cdFx0Y29uc3QgbWFpbkNvbXBvbmVudCA9IGNvbXBvbmVudCgnZGl2Jywge1xuXHRcdFx0Y2xhc3M6IFsnbWVudUl0ZW0nXVxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgaXRlbUltZyA9IGNvbXBvbmVudCgnaW1nJywge1xuXHRcdFx0c3JjOiBpdGVtSW5mby5zcmMsXG5cdFx0fSk7XG5cblx0XHRjb25zdCB0aXRsZSA9IGNvbXBvbmVudCgnaDMnLCB7fSwgW1xuXHRcdFx0aXRlbUluZm8ubmFtZSxcblx0XHRcdGNvbXBvbmVudCgnc3BhbicsIHt9LCBbXG5cdFx0XHRcdGAkJHtpdGVtSW5mby5wcmljZX1gXG5cdFx0XHRdKVxuXHRcdF0pXG5cblx0XHRjb25zdCBkZXNjcmlwdGlvbiA9IGNvbXBvbmVudCgnZGl2Jywge30sIFtcblx0XHRcdGNvbXBvbmVudCgncCcsIHt9LCBpdGVtSW5mby5kZXNjKSxcblx0XHRdKVxuXG5cdFx0Y29uc3QgaW5mb0JveCA9IGNvbXBvbmVudCgnZGl2Jywge1xuXHRcdFx0Y2xhc3M6IFtcblx0XHRcdFx0J2luZm9Cb3gnXG5cdFx0XHRdXG5cdFx0fSwgW1xuXHRcdFx0dGl0bGUsXG5cdFx0XHRkZXNjcmlwdGlvblxuXHRcdF0pXG5cblx0XHRjb25zdCBhZGRUb0NhcnRDQiA9IG5hbWUgPT5cblx0XHR7XG5cdFx0XHRjb25zdCBpdGVtSXNJbkNhcnQgPSBtZW51SXRlbU5hbWUgPT5cblx0XHRcdHtcblx0XHRcdFx0Y29uc3QgZm9ybWF0U3RyID0gc3RyID0+IHN0ci50cmltKCkudG9Mb3dlckNhc2UoKTtcblxuXHRcdFx0XHRtZW51SXRlbU5hbWUgPSBmb3JtYXRTdHIobWVudUl0ZW1OYW1lKTtcblxuXHRcdFx0XHRjb25zdCBjYXJ0SXRlbXNJbmZvID0gY2FydC5pdGVtcy5nZXQoKTtcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gY2FydEl0ZW1zSW5mby5zb21lKGluZm8gPT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdGNvbnN0IGNhcnRJdGVtTmFtZSA9IGZvcm1hdFN0cihpbmZvLm5hbWUpXG5cdFx0XHRcdFx0cmV0dXJuIGNhcnRJdGVtTmFtZSA9PT0gbWVudUl0ZW1OYW1lO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaXRlbUlzSW5DYXJ0KG5hbWUpKSByZXR1cm47XG5cdFx0XHRjYXJ0Lml0ZW1zLmFkZChpdGVtSW5mbylcblx0XHRcdGNhcnQubXNnLmhpZGUoKTtcblx0XHR9XG5cblx0XHRjb25zdCBwdXJjaGFzZUJ0biA9IGNvbXBvbmVudCgnYnV0dG9uJywge1xuXHRcdFx0b25jbGljazogYWRkVG9DYXJ0Q0IuYmluZChudWxsLCBpdGVtSW5mby5uYW1lKSxcblx0XHR9LCBbXG5cdFx0XHQnQWRkIHRvIGNhcnQnXG5cdFx0XSk7XG5cblx0XHRtYWluQ29tcG9uZW50LmFwcGVuZChpdGVtSW1nLCBpbmZvQm94LCBwdXJjaGFzZUJ0bik7XG5cdFx0cmV0dXJuIG1haW5Db21wb25lbnQ7XG5cdH1cblxuXHRjb25zdCBtYWluQ29tcG9uZW50ID0gY29tcG9uZW50KCdzZWN0aW9uJywge1xuXHRcdGNsYXNzOiBbXG5cdFx0XHQnbWVudUNhdGVnb3J5J1xuXHRcdF1cblx0fSlcblxuXHRjb25zdCBoZWFkaW5nID0gY29tcG9uZW50KCdoMicsIHt9LCBbXG5cdFx0bWVudUluZm8uY2F0ZWdvcnlOYW1lXG5cdF0pO1xuXG5cdGNvbnN0IGl0ZW1zID0gbWVudUluZm8uaXRlbXMubWFwKGl0ZW0gPT4gbWVudUl0ZW1NYWtlcihpdGVtKSk7XG5cblx0bWFpbkNvbXBvbmVudC5hcHBlbmQoaGVhZGluZywgLi4uaXRlbXMpO1xuXHRyZXR1cm4gbWFpbkNvbXBvbmVudDtcbn07XG5cbmNvbnN0IG1haW5Db3Vyc2VNYWtlciA9ICgpID0+XG57XG5cdGNvbnN0IG1haW5Db21wb25lbnQgPSBjb21wb25lbnQoJ3NlY3Rpb24nLCB7XG5cdFx0Y2xhc3M6IFtcblx0XHRcdCdtZW51Q2F0ZWdvcnknXG5cdFx0XVxuXHR9KVxuXG5cdGNvbnN0IGhlYWRpbmcgPSBjb21wb25lbnQoJ2gyJywge30sIFtcblx0XHQnTWFpbiBjb3Vyc2UnXG5cdF0pXG5cblx0Y29uc3QgYXBvbG9neSA9IGNvbXBvbmVudCgncCcsIHtcblx0XHRpZDogJ2Fwb2xvZ3knXG5cdH0sIFtcblx0XHQnU29ycnksIGJ1dCB3ZSBoYXZlIHJhbiBvdXQgb2YgaW5ncmVkaWVudHMgZm9yIHRoZSBtYWluIGNvdXJzZScsXG5cdFx0Y29tcG9uZW50KCdicicpLFxuXHRcdCdXZSBhcG9sb2dpemUgZm9yIHRoZSBpbmNvdmVuaWVuY2UhJyxcblx0XSlcblxuXHRtYWluQ29tcG9uZW50LmFwcGVuZChoZWFkaW5nLCBhcG9sb2d5KTtcblx0cmV0dXJuIG1haW5Db21wb25lbnQ7XG59O1xuXG5jb25zdCBjYXJ0ID0gKCgpID0+XG57XG5cdGNvbnN0IGNhcnRDb250ID0gKCgpID0+XG5cdHtcblx0XHRjb25zdCBtYWluQ29tcG9uZW50ID0gY29tcG9uZW50KCdkaXYnLCB7XG5cdFx0XHRpZDogJ2NhcnRDb250YWluZXInXG5cdFx0fSk7XG5cblx0XHRjb25zdCBnZXRVbmlxdWVLZXkgPSAoKSA9PlxuXHRcdHtcblx0XHRcdGNvbnN0IGdldFJhbmRvbUludCA9IChtaW4sIG1heCkgPT5cblx0XHRcdHtcblx0XHRcdFx0bWluID0gTWF0aC5jZWlsKG1pbik7XG5cdFx0XHRcdG1heCA9IE1hdGguZmxvb3IobWF4KTtcblxuXHRcdFx0XHRjb25zdCByYW5kb21JbnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuXG5cdFx0XHRcdHJldHVybiByYW5kb21JbnQ7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGNoYXJhY3RlcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODknO1xuXHRcdFx0Y29uc3QgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoO1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gJyc7XG5cdFx0XHRmb3IgKGxldCBpID0gMCwgcmFuZEludCA9IGdldFJhbmRvbUludCgxMCwgMjApOyBpIDwgcmFuZEludDsgaSsrKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXN1bHQgKz0gY2hhcmFjdGVycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcmFjdGVyc0xlbmd0aCkpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblxuXHRcdGNvbnN0IGNhcnRJdGVtcyA9IFtdO1xuXHRcdGNvbnN0IGFkZCA9IGluZm8gPT5cblx0XHR7XG5cdFx0XHRjb25zdCBjYXJ0SXRlbUVsID0gY2FydEl0ZW1NYWtlcihpbmZvKTtcblx0XHRcdGNvbnN0IGl0ZW1JbmZvID0ge1xuXHRcdFx0XHRyZWZlcmVuY2U6IGNhcnRJdGVtRWwsXG5cdFx0XHRcdG5hbWU6IGluZm8ubmFtZSxcblx0XHRcdFx0cHJpY2U6IGluZm8ucHJpY2UsXG5cdFx0XHRcdG51bUluQ2FydDogMSxcblx0XHRcdFx0a2V5OiBjYXJ0SXRlbUVsLmRhdGFzZXQua2V5LFxuXHRcdFx0fVxuXG5cdFx0XHRtYWluQ29tcG9uZW50LnByZXBlbmQoY2FydEl0ZW1FbCk7XG5cdFx0XHRjYXJ0SXRlbXMucHVzaChpdGVtSW5mbyk7XG5cdFx0XHRjYXJ0LnRvdGFsLnVwZGF0ZSgpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJlbW92ZSA9IGtleSA9PlxuXHRcdHtcblx0XHRcdGNvbnN0IGl0ZW1JbmRleCA9IGdldEluZGV4RnJvbUtleShrZXkpO1xuXG5cdFx0XHRpZiAoaXRlbUluZGV4ID09PSAtMSkgcmV0dXJuO1xuXHRcdFx0Y29uc3QgaXRlbUVsZW0gPSBjYXJ0SXRlbXNbaXRlbUluZGV4XS5yZWZlcmVuY2U7XG5cblx0XHRcdGNhcnRJdGVtcy5zcGxpY2UoaXRlbUluZGV4LCAxKTtcblx0XHRcdGl0ZW1FbGVtLnJlbW92ZSgpO1xuXHRcdFx0Y2FydC50b3RhbC51cGRhdGUoKTtcblx0XHR9XG5cblx0XHRjb25zdCBnZXRJbmRleEZyb21LZXkgPSBrZXkgPT4gY2FydEl0ZW1zLmZpbmRJbmRleChlbGVtID0+IGVsZW0ua2V5ID09PSBrZXkpO1xuXG5cdFx0Y29uc3QgY2FydEl0ZW1NYWtlciA9IGl0ZW1JbmZvID0+XG5cdFx0e1xuXHRcdFx0Y29uc3Qga2V5ID0gZ2V0VW5pcXVlS2V5KCk7XG5cdFx0XHRjb25zdCBtYWluQ29tcG9uZW50ID0gY29tcG9uZW50KCdkaXYnLCB7XG5cdFx0XHRcdGNsYXNzOiBbXG5cdFx0XHRcdFx0J2NhcnRJdGVtJ1xuXHRcdFx0XHRdLFxuXHRcdFx0XHQnZGF0YS1rZXknOiBrZXksXG5cdFx0XHR9KVxuXG5cdFx0XHRjb25zdCBpdGVtSW1nID0gY29tcG9uZW50KCdpbWcnLCB7XG5cdFx0XHRcdHNyYzogaXRlbUluZm8uc3JjLFxuXHRcdFx0fSk7XG5cblx0XHRcdGNvbnN0IHRpdGxlID0gY29tcG9uZW50KCdoMycsIHt9LCBbXG5cdFx0XHRcdGl0ZW1JbmZvLm5hbWUsXG5cdFx0XHRcdGNvbXBvbmVudCgnc3BhbicsIHt9LCBbXG5cdFx0XHRcdFx0YCQke2l0ZW1JbmZvLnByaWNlfWBcblx0XHRcdFx0XSlcblx0XHRcdF0pXG5cblx0XHRcdGNvbnN0IG51bU9mUHJlZml4ID0gJyMgb2YgaXRlbXM6ICc7XG5cdFx0XHRjb25zdCB0b3RhbFByZWZpeCA9ICd0b3RhbDogJCc7XG5cdFx0XHRjb25zdCBudW1BbmRQcmljZSA9IGNvbXBvbmVudCgnZGl2Jywge30sIFtcblx0XHRcdFx0Y29tcG9uZW50KCdzcGFuJywge30sIFtcblx0XHRcdFx0XHRgJHtudW1PZlByZWZpeH0xYFxuXHRcdFx0XHRdKSxcblx0XHRcdFx0Y29tcG9uZW50KCdzcGFuJywge30sIFtcblx0XHRcdFx0XHRgJHt0b3RhbFByZWZpeH0ke2l0ZW1JbmZvLnByaWNlfWBcblx0XHRcdFx0XSksXG5cdFx0XHRdKTtcblxuXHRcdFx0Y29uc3QgY2hhbmdlSXRlbU51bSA9IG51bSA9PlxuXHRcdFx0e1xuXHRcdFx0XHRjb25zdCBvYmogPSBjYXJ0Lml0ZW1zLmdldChrZXkpO1xuXHRcdFx0XHRjb25zdCBuZXdOdW0gPSBvYmoubnVtSW5DYXJ0ICsgbnVtO1xuXHRcdFx0XHRpZiAobmV3TnVtID4gMCkgb2JqLm51bUluQ2FydCA9IG5ld051bTtcblx0XHRcdFx0cmV0dXJuIG9iai5udW1JbkNhcnQ7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHVwZGF0ZUl0ZW1OdW0gPSBuZXdOdW0gPT5cblx0XHRcdHtcblx0XHRcdFx0Y29uc3QgW251bU9mSXRlbXMsIHRvdGFsUHJpY2VdID0gbnVtQW5kUHJpY2UuY2hpbGRyZW47XG5cdFx0XHRcdG51bU9mSXRlbXMudGV4dENvbnRlbnQgPSBudW1PZlByZWZpeCArIG5ld051bTtcblx0XHRcdFx0dG90YWxQcmljZS50ZXh0Q29udGVudCA9IGAke3RvdGFsUHJlZml4fSR7KGl0ZW1JbmZvLnByaWNlICogbmV3TnVtKS50b0ZpeGVkKDIpfWA7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGl0ZW1OdW1DQiA9IChudW0pID0+XG5cdFx0XHR7XG5cdFx0XHRcdGNvbnN0IG5ld051bSA9IGNoYW5nZUl0ZW1OdW0obnVtKTtcblx0XHRcdFx0dXBkYXRlSXRlbU51bShuZXdOdW0pO1xuXHRcdFx0XHRjYXJ0LnRvdGFsLnVwZGF0ZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBpbmNyZWFzZUJ0biA9IGNvbXBvbmVudCgnYnV0dG9uJywge1xuXHRcdFx0XHRvbmNsaWNrOiBpdGVtTnVtQ0IuYmluZChudWxsLCAxKSxcblx0XHRcdH0sIFtcblx0XHRcdFx0J0FkZCdcblx0XHRcdF0pO1xuXG5cdFx0XHRjb25zdCBkZWNyZWFzZUJ0biA9IGNvbXBvbmVudCgnYnV0dG9uJywge1xuXHRcdFx0XHRvbmNsaWNrOiBpdGVtTnVtQ0IuYmluZChudWxsLCAtMSksXG5cdFx0XHR9LCBbXG5cdFx0XHRcdCdEZWNyZWFzZSdcblx0XHRcdF0pO1xuXG5cdFx0XHRjb25zdCByZW1vdmVDQiA9ICgpID0+XG5cdFx0XHR7XG5cdFx0XHRcdGNhcnQuaXRlbXMucmVtb3ZlKG1haW5Db21wb25lbnQuZGF0YXNldC5rZXkpO1xuXHRcdFx0XHRpZiAoY2FydC5pdGVtcy5nZXQoKS5sZW5ndGggPT09IDApXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRjYXJ0Lm1zZy5zaG93KCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcmVtb3ZlQnRuID0gY29tcG9uZW50KCdidXR0b24nLCB7XG5cdFx0XHRcdG9uY2xpY2s6IHJlbW92ZUNCLFxuXHRcdFx0fSwgW1xuXHRcdFx0XHQnUmVtb3ZlJ1xuXHRcdFx0XSlcblxuXHRcdFx0Y29uc3QgYnV0dG9uQ29udGFpbmVyID0gY29tcG9uZW50KCdkaXYnLCB7XG5cdFx0XHRcdGlkOiAnYnV0dG9uRGl2J1xuXHRcdFx0fSwgW1xuXHRcdFx0XHRpbmNyZWFzZUJ0biwgZGVjcmVhc2VCdG4sIHJlbW92ZUJ0blxuXHRcdFx0XSlcblxuXHRcdFx0Y29uc3QgaW5mb0JveCA9IGNvbXBvbmVudCgnZGl2Jywge1xuXHRcdFx0XHRjbGFzczogW1xuXHRcdFx0XHRcdCdpbmZvQm94J1xuXHRcdFx0XHRdXG5cdFx0XHR9LCBbXG5cdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRudW1BbmRQcmljZSxcblx0XHRcdFx0YnV0dG9uQ29udGFpbmVyLFxuXHRcdFx0XSlcblxuXHRcdFx0bWFpbkNvbXBvbmVudC5hcHBlbmQoaXRlbUltZywgaW5mb0JveCk7XG5cdFx0XHRyZXR1cm4gbWFpbkNvbXBvbmVudDtcblx0XHR9XG5cblx0XHRjb25zdCBpdGVtcyA9IChrZXkgPSBudWxsKSA9PlxuXHRcdHtcblx0XHRcdGlmIChrZXkgPT09IG51bGwpIHJldHVybiBbLi4uY2FydEl0ZW1zXTtcblx0XHRcdHJldHVybiBjYXJ0SXRlbXNbZ2V0SW5kZXhGcm9tS2V5KGtleSldO1xuXHRcdH1cblxuXHRcdGNvbnN0IGVtcHR5Q2FydCA9ICgpID0+XG5cdFx0e1xuXHRcdFx0Zm9yIChjb25zdCBjYXJ0SXRlbSBvZiBjYXJ0SXRlbXMpXG5cdFx0XHR7XG5cdFx0XHRcdGNhcnRJdGVtLnJlZmVyZW5jZS5yZW1vdmUoKTtcblx0XHRcdH1cblxuXHRcdFx0Y2FydEl0ZW1zLmxlbmd0aCA9IDA7XG5cdFx0XHRjYXJ0LnRvdGFsLnVwZGF0ZSgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRnZXQ6ICgpID0+IG1haW5Db21wb25lbnQsXG5cdFx0XHRlbXB0eUNhcnQsXG5cdFx0XHRpdGVtcyxcblx0XHRcdGFkZCxcblx0XHRcdHJlbW92ZSxcblx0XHR9XG5cdH0pKCk7XG5cblx0Y29uc3QgY2FydE1zZyA9ICgoKSA9PlxuXHR7XG5cdFx0Y29uc3QgbWFpbkNvbXBvbmVudCA9IGNvbXBvbmVudCgnZGl2Jywge1xuXHRcdFx0aWQ6ICdlbXB0eUNhcnRNc2cnXG5cdFx0fSwgW1xuXHRcdFx0J1VoIG9oLCBsb29rcyBsaWtlIHlvdXIgY2FydCBpcyBlbXB0eSEnLFxuXHRcdFx0Y29tcG9uZW50KCdicicpLFxuXHRcdFx0J0ZpbGwgeW91ciBjYXJ0IGJ5IGJ1eWluZyBzb21lIGl0ZW1zIScsXG5cdFx0XSk7XG5cblx0XHRjb25zdCBjbGFzc1N3aXRjaCA9IG9wZXJhdGlvbiA9PiBtYWluQ29tcG9uZW50LmNsYXNzTGlzdFtvcGVyYXRpb25dKCdpbnZpcycpO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGdldDogKCkgPT4gbWFpbkNvbXBvbmVudCxcblx0XHRcdGhpZGU6IGNsYXNzU3dpdGNoLmJpbmQobnVsbCwgJ2FkZCcpLFxuXHRcdFx0c2hvdzogY2xhc3NTd2l0Y2guYmluZChudWxsLCAncmVtb3ZlJyksXG5cdFx0fVxuXHR9KSgpO1xuXG5cdGNvbnN0IG1haW5Db21wb25lbnQgPSBjb21wb25lbnQoJ3NlY3Rpb24nLCB7XG5cdFx0aWQ6ICdjYXJ0Jyxcblx0fSk7XG5cblx0Y29uc3QgaGVhZGluZyA9IGNvbXBvbmVudCgnaDInLCB7XG5cdFx0Y2xhc3M6IFtcblx0XHRcdCdoZWFkaW5nJ1xuXHRcdF0sXG5cdH0sIFtcblx0XHQnQ2FydCdcblx0XSk7XG5cblx0Y29uc3QgcHJpY2VQcmVmaXggPSAnVG90YWw6ICQnO1xuXHRjb25zdCB0b3RhbFByaWNlID0gY29tcG9uZW50KCdzcGFuJywge1xuXHRcdGlkOiAnY2FydFRvdGFsJyxcblx0fSwgW1xuXHRcdGAke3ByaWNlUHJlZml4fTBgLFxuXHRdKVxuXG5cdGNvbnN0IHB1cmNoYXNlQnRuID0gY29tcG9uZW50KCdidXR0b24nLCB7XG5cdFx0aWQ6ICdwdXJjaGFzZUJ0bicsXG5cdFx0b25jbGljazogKCkgPT4gbW9kYWwuc2hvdyhjb25maXJtT3JkZXJDb21wb25lbnRzKCkpLFxuXHR9LCBbXG5cdFx0J1B1cmNoYXNlJ1xuXHRdKTtcblxuXHRjb25zdCBwcmljZUFuZEJ0bkRpdiA9IGNvbXBvbmVudCgnZGl2Jywge1xuXHRcdGNsYXNzOiBbXG5cdFx0XHQnZGl2QmV0d2Vlbidcblx0XHRdXG5cdH0sIFtcblx0XHR0b3RhbFByaWNlLFxuXHRcdHB1cmNoYXNlQnRuLFxuXHRdKVxuXG5cdGNvbnN0IGVtcHR5Q2FydCA9IGNhcnRNc2cuZ2V0KCk7XG5cdGNvbnN0IGNhcnRDb250YWluZXIgPSBjYXJ0Q29udC5nZXQoKTtcblxuXHRjb25zdCBjb25maXJtT3JkZXJDb21wb25lbnRzID0gKCkgPT4gXG5cdHtcblx0XHRjb25zdCBhZGRyZXNzSW5wdXQgPSBjb21wb25lbnQoJ2lucHV0Jywge1xuXHRcdFx0cGxhY2Vob2xkZXI6ICdBZGRyZXNzJ1xuXHRcdH0pXG5cblx0XHRjb25zdCBub2RlcyA9IFtcblx0XHRcdGNvbXBvbmVudCgnaDInLCB7XG5cdFx0XHRcdGNsYXNzOiBbXG5cdFx0XHRcdFx0J2hlYWRpbmcnLFxuXHRcdFx0XHRdXG5cdFx0XHR9LCBbJ09yZGVyIEZvcm0nXSksXG5cdFx0XHRjb21wb25lbnQoJ3AnLCB7fSwgW1xuXHRcdFx0XHQnUGxlYXNlIGVudGVyIHlvdXIgYWRkcmVzcyBhbmQgY2xpY2sgXCJDb25maXJtXCIgdG8gY29uZmlybSB5b3VyIG9yZGVyLidcblx0XHRcdF0pLFxuXHRcdFx0Y29tcG9uZW50KCdwJywge30sIFtcblx0XHRcdFx0YEJ5IHByZXNzaW5nIFwiQ29uZmlybVwiLCB5b3Ugd2lsbCBwdXJjaGFzZSAkJHtjYXJ0LnRvdGFsLmdldCgpfSB3b3J0aCBvZiBnb29kIGZvb2QhYFxuXHRcdFx0XSksXG5cdFx0XHRjb21wb25lbnQoJ2RpdicsIHtcblx0XHRcdFx0aWQ6ICdhZGRyZXNzSW5wdXREaXYnLFxuXHRcdFx0fSwgW1xuXHRcdFx0XHRhZGRyZXNzSW5wdXQsXG5cdFx0XHRcdGNvbXBvbmVudCgnYnV0dG9uJywge1xuXHRcdFx0XHRcdG9uY2xpY2s6ICgpID0+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0Y29uc3Qgbm9kZXMgPSBbXG5cdFx0XHRcdFx0XHRcdGNvbXBvbmVudCgnaDInLCB7XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M6IFtcblx0XHRcdFx0XHRcdFx0XHRcdCdoZWFkaW5nJyxcblx0XHRcdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0XHR9LCBbXG5cdFx0XHRcdFx0XHRcdFx0J1RoYW5rIHlvdSEnXG5cdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRjb21wb25lbnQoJ3AnLCB7fSwgW1xuXHRcdFx0XHRcdFx0XHRcdCdUaGFuayB5b3UgZm9yIG9yZGVyaW5nLCB3ZSB3aWxsIGRlbGl2ZXIgeW91ciBmb28tIEhBSEEsIEpVU1QgS0lERElORyEgJyxcblx0XHRcdFx0XHRcdFx0XHQnWU9VIEZPT0whIFRIRVJFIElTIE5PIEZPT0QsIEFORCBUSEVSRSBJUyBOTyBSRVNUQVVSQU5UISAnLFxuXHRcdFx0XHRcdFx0XHRcdGBXRSBLTk9XIFdIRVJFIFlPVSBMSVZFIChZb3VyIGFkZHJlc3M6ICR7YWRkcmVzc0lucHV0LnZhbHVlIHx8ICdTb21ld2hlcmUnfSksIGAsXG5cdFx0XHRcdFx0XHRcdFx0YEFORCBXRSBXSUxMIFRBS0UgWU9VUiBIT1VTRSBBTkQgWU9VUiAkJHtjYXJ0LnRvdGFsLmdldCgpfSEgYCxcblx0XHRcdFx0XHRcdFx0XHQnWU9VIEJFVFRFUiBQUkVQQVJFIEZPUiBVUyEgJyxcblx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdGNvbXBvbmVudCgnZGl2Jywge1xuXHRcdFx0XHRcdFx0XHRcdGNsYXNzOiBbXG5cdFx0XHRcdFx0XHRcdFx0XHQnZGl2Q2VudGVyJyxcblx0XHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHRcdH0sIFtcblx0XHRcdFx0XHRcdFx0XHRjb21wb25lbnQoJ2J1dHRvbicsIHtcblx0XHRcdFx0XHRcdFx0XHRcdG9uY2xpY2s6IG1vZGFsLmhpZGUsXG5cdFx0XHRcdFx0XHRcdFx0fSwgW1xuXHRcdFx0XHRcdFx0XHRcdFx0J09oIG5vISdcblx0XHRcdFx0XHRcdFx0XHRdKVxuXHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdF1cblxuXHRcdFx0XHRcdFx0bW9kYWwuc2hvdyhub2Rlcyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCBbXG5cdFx0XHRcdFx0J0NvbmZpcm0nXG5cdFx0XHRcdF0pLFxuXHRcdFx0XSksXG5cdFx0XVxuXG5cdFx0cmV0dXJuIG5vZGVzO1xuXHR9XG5cblx0Y29uc3QgdXBkYXRlVG90YWwgPSAoKSA9PlxuXHR7XG5cdFx0Y29uc3QgY2hhbmdlVG90YWwgPSBuZXdUb3RhbCA9PiB0b3RhbFByaWNlLnRleHRDb250ZW50ID0gYCR7cHJpY2VQcmVmaXh9JHtuZXdUb3RhbH1gO1xuXG5cdFx0Y29uc3QgY29tcHV0ZVRvdGFsID0gKCkgPT5cblx0XHR7XG5cdFx0XHRjb25zdCBwcmljZXNBcnJheSA9IGNhcnRDb250Lml0ZW1zKCkubWFwKGluZm8gPT4gaW5mby5wcmljZSAqIGluZm8ubnVtSW5DYXJ0KTtcblx0XHRcdGNvbnN0IHRvdGFsUHJpY2UgPSBwcmljZXNBcnJheS5yZWR1Y2UoKGFjYywgY3VyVmFsKSA9PiBhY2MgKyBjdXJWYWwsIDApLnRvRml4ZWQoMik7XG5cblx0XHRcdGlmICghK3RvdGFsUHJpY2UpIHJldHVybiAwO1xuXHRcdFx0cmV0dXJuIHRvdGFsUHJpY2U7XG5cdFx0fVxuXG5cdFx0Y2hhbmdlVG90YWwoY29tcHV0ZVRvdGFsKCkpO1xuXHR9XG5cblx0bWFpbkNvbXBvbmVudC5hcHBlbmQoaGVhZGluZywgcHJpY2VBbmRCdG5EaXYsIGVtcHR5Q2FydCwgY2FydENvbnRhaW5lcik7XG5cdHJldHVybiB7XG5cdFx0Z2V0OiAoKSA9PiBtYWluQ29tcG9uZW50LFxuXHRcdHRvdGFsOiB7XG5cdFx0XHRnZXQ6ICgpID0+ICt0b3RhbFByaWNlLnRleHRDb250ZW50LnJlcGxhY2UocHJpY2VQcmVmaXgsICcnKSxcblx0XHRcdHVwZGF0ZTogdXBkYXRlVG90YWwsXG5cdFx0fSxcblx0XHRpdGVtczoge1xuXHRcdFx0Z2V0OiBjYXJ0Q29udC5pdGVtcyxcblx0XHRcdGVtcHR5OiBjYXJ0Q29udC5lbXB0eUNhcnQsXG5cdFx0XHRyZW1vdmU6IGNhcnRDb250LnJlbW92ZSxcblx0XHRcdGFkZDogY2FydENvbnQuYWRkLFxuXHRcdH0sXG5cdFx0bXNnOiB7XG5cdFx0XHRzaG93OiBjYXJ0TXNnLnNob3csXG5cdFx0XHRoaWRlOiBjYXJ0TXNnLmhpZGUsXG5cdFx0fSxcblx0fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9Plxue1xuXHRjb25zdCB0YWJUaXRsZSA9IGNvbXBvbmVudCgnaDEnLCB7XG5cdFx0Y2xhc3M6IFsndGFiVGl0bGUnXSxcblx0fSwgW1xuXHRcdCdNZW51J1xuXHRdKTtcblxuXHRjb25zdCBhcHBldGl6ZXJNZW51ID0gY2F0ZWdvcnlNYWtlcih7XG5cdFx0Y2F0ZWdvcnlOYW1lOiAnQXBwZXRpemVyJyxcblx0XHRpdGVtczogW1xuXHRcdFx0e1xuXHRcdFx0XHRzcmM6IHBpenphLFxuXHRcdFx0XHRuYW1lOiAnUGl6emEgc2xpY2UnLFxuXHRcdFx0XHRkZXNjOiBbXG5cdFx0XHRcdFx0J0EgbGVmdG92ZXIgcGl6emEgc2xpY2UgZnJvbSAnLFxuXHRcdFx0XHRcdGNvbXBvbmVudCgnZGVsJywge30sICdteSBmcmlkZ2UnKSxcblx0XHRcdFx0XHQnIHdvcmxkLWNsYXNzIGNoZWZzIScsXG5cdFx0XHRcdF0sXG5cdFx0XHRcdHByaWNlOiA5Ljk5LFxuXHRcdFx0fVxuXHRcdF1cblx0fSlcblxuXHRjb25zdCBtYWluQ291cnNlTWVudSA9IG1haW5Db3Vyc2VNYWtlcigpO1xuXG5cdGNvbnN0IGJldmVyYWdlTWVudSA9IGNhdGVnb3J5TWFrZXIoe1xuXHRcdGNhdGVnb3J5TmFtZTogJ0JldmVyYWdlcycsXG5cdFx0aXRlbXM6IFtcblx0XHRcdHtcblx0XHRcdFx0c3JjOiB3YXRlcixcblx0XHRcdFx0bmFtZTogJ0hhcm1sZXNzIGdsYXNzIG9mIHdhdGVyJyxcblx0XHRcdFx0ZGVzYzogW1xuXHRcdFx0XHRcdCdQZXJmZWN0bHkgc2FmZSBmb3IgZHJpbmtpbmcsICcsXG5cdFx0XHRcdFx0Y29tcG9uZW50KCdiJywge30sIFsnbm8gY2hlbWljYWxzJ10pLFxuXHRcdFx0XHRcdCcgbWl4ZWQgaW4hJyxcblx0XHRcdFx0XSxcblx0XHRcdFx0cHJpY2U6IDUuOTksXG5cdFx0XHR9LFxuXHRcdF1cblx0fSlcblxuXHRjb25zdCBjYXJ0U2VjdGlvbiA9IGNhcnQuZ2V0KCk7XG5cblx0cmV0dXJuIFtcblx0XHR0YWJUaXRsZSxcblx0XHRtYWluQ291cnNlTWVudSxcblx0XHRhcHBldGl6ZXJNZW51LFxuXHRcdGJldmVyYWdlTWVudSxcblx0XHRjYXJ0U2VjdGlvbixcblx0XVxufSkoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBzd2l0Y2hUYWIgZnJvbSBcIi4vbW9kdWxlcy9zd2l0Y2hUYWJcIjtcbmltcG9ydCAnLi9ub3JtYWxpemUuY3NzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBkZWZhdWx0VGFiID0gJ2hvbWUnO1xuXG5mdW5jdGlvbiBzZXRFdmVudExpc3RlbmVycygpXG57XG5cdGNvbnN0IG1haW5DQiA9IGUgPT5cblx0e1xuXHRcdGNvbnN0IHRhYk5hbWUgPSBlLnRhcmdldC50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpO1xuXHRcdHN3aXRjaFRhYih0YWJOYW1lKTtcblx0fVxuXG5cdGNvbnN0IGtleUNoZWNrID0gZSA9PlxuXHR7XG5cdFx0Y29uc3Qga2V5c0FycmF5ID0gWydTcGFjZScsICdFbnRlciddO1xuXHRcdGlmKGtleXNBcnJheS5pbmNsdWRlcyhlLmNvZGUpKVxuXHRcdHtcblx0XHRcdG1haW5DQihlKTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBuYXZCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2hlYWRlck5hdiBsaScpO1xuXHRmb3IoY29uc3QgbmF2QnRuIG9mIG5hdkJ0bnMpXG5cdHtcblx0XHRuYXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWluQ0IpO1xuXHRcdG5hdkJ0bi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5Q2hlY2spO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemUoKVxue1xuXHRzd2l0Y2hUYWIoZGVmYXVsdFRhYik7XG5cdHNldEV2ZW50TGlzdGVuZXJzKCk7XG59XG5cbmluaXRpYWxpemUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==