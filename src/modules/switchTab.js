import home from "./home";
import menu from "./menu";
import contact from "./contact";
import about from "./about";

const mainEl = document.querySelector('main');

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

export default function(tabName)
{
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