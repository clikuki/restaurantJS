import home from "./modules/home";
import menu from "./modules/menu";
import contact from "./modules/contact";
import about from "./modules/about";
import './style.css';

const mainEl = document.querySelector('main');

let currPage = 'home';

function setDefaultPage()
{
	mainEl.append(...home);
}

function setEventListeners()
{
	const headerNav = document.querySelector('#headerNav');
	const navBtns = headerNav.querySelectorAll('button');

	function callback(e)
	{
		const tabName = e.target.textContent.toLowerCase();

		if(currPage !== tabName)
		{
			currPage = tabName;

			let newMainChildren;
			switch(tabName)
			{
				case 'home':
					newMainChildren = home;
				 	break;
					 
				case 'menu':
					newMainChildren = menu;
					break;
					 
				case 'contact':
					newMainChildren = contact;
					break;
					 
				case 'about':
					newMainChildren = about;
					break;

				default:
					return;
			}

			removeChildren(mainEl);
			mainEl.append(...newMainChildren)
		}
	}

	for(const navBtn of navBtns)
	{
		navBtn.addEventListener('click', callback);
	}
}

function removeChildren(node)
{
	while (node.firstChild) {
		node.removeChild(node.lastChild);
	}
}

function initialize()
{
	setDefaultPage();
	setEventListeners();
}

initialize();
