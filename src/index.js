import homePage from "./modules/homePage";
import './style.css';

const mainEl = document.querySelector('main');

let currPage = 'home';

function setHomePage()
{
	mainEl.append(...homePage());
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
			removeChildren(mainEl);

			let newMainChildren;
			switch(tabName)
			{
				case 'home':
				default:
					newMainChildren = homePage();
				 	break;
			}

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
	setHomePage();
	setEventListeners();
}

initialize();
