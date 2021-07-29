import home from "./home";
import menu from "./menu";
import contact from "./contact";
import about from "./about";
import component from "./component";

const mainElem = document.querySelector('main');
const navBtns = document.querySelectorAll('#headerNav li');
const curTabClass = 'curTab';

let currTab = null;
const tabs = {
	home,
	menu,
	contact,
	about,
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

export default function(tabName)
{
	if(currTab !== tabName)
	{
		currTab = tabName;

		let children = tabs[tabName];
		if(children)
		{
			// create new content element and fill with children
			const content = component('div', {
				id: 'content'
			}, children);

			switchCurTabClass(tabName);
			mainElemSwapChild(content);
			mainElem.scrollTop = 0; // scrolls to top in case the last tab was long
		}
	}
}