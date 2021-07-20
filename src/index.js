import home from "./modules/home";
import menu from "./modules/menu";
import contact from "./modules/contact";
import about from "./modules/about";
import './style.css';

const mainEl = document.querySelector('main');
const tabs = {
	home,
	menu,
	contact,
	about,
}

let currTab = 'home';

function setToDefaultTab()
{
	mainEl.append(...home);
}

function setEventListeners()
{
	const navBtns = document.querySelectorAll('#headerNav button');

	function callback(e)
	{
		const tabName = e.target.textContent.toLowerCase();

		if(currTab !== tabName)
		{
			currTab = tabName;

			let content = tabs[tabName];
			if(content)
			{
				removeChildren(mainEl);
				mainEl.append(...content)
				mainEl.scrollTop = 0;
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
	setToDefaultTab();
	setEventListeners();
}

initialize();
