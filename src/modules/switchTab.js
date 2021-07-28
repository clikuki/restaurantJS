import home from "./home";
import menu from "./menu";
import contact from "./contact";
import about from "./about";

const contentDiv = document.querySelector('#content');

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
			removeChildren(contentDiv);
			contentDiv.append(...content)
			contentDiv.scrollTop = 0;
		}

	}
}