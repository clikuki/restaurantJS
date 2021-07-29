import home from "./home";
import menu from "./menu";
import contact from "./contact";
import about from "./about";

const contentDiv = document.querySelector('#content');
const navBtns = document.querySelectorAll('#headerNav li');

let currTab = null;
const tabs = {
	home,
	menu,
	contact,
	about,
}

function removeChildren(node)
{
	while (node.firstChild) {
		node.removeChild(node.lastChild);
	}
}

function addCurTabClass(e, isTabName)
{
	if(isTabName)
	{
		for(const btn of navBtns)
		{
			if(btn.textContent.toLowerCase() === e)
			{
				btn.classList.add('curTab');
			}
			else
			{
				btn.classList.remove('curTab');
			}
		}
	}
	else
	{
		const children = e.target.parentElement.children;
		for(const child of children)
		{
			child.classList.remove('curTab');
		}
	
		e.target.classList.add('curTab');
	}
}

export default function(e)
{
	const eIsString = typeof e === 'string';
	const tabName = eIsString ? e : e.target.textContent.toLowerCase();

	if(currTab !== tabName)
	{
		currTab = tabName;

		let content = tabs[tabName];
		if(content)
		{
			addCurTabClass(e, eIsString);
			removeChildren(contentDiv);
			contentDiv.append(...content)
			contentDiv.scrollTop = 0;
		}

	}
}