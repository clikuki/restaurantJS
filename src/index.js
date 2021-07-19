import home from "./modules/home";
import menu from "./modules/menu";
import contact from "./modules/contact";
import about from "./modules/about";
import './style.css';

const mainEl = document.querySelector('main');
const pages = {
	home,
	menu,
	contact,
	about,
}

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

			let content = pages[tabName];
			if(content)
			{
				removeChildren(mainEl);
				mainEl.append(...content)
			}

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
