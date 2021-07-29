import switchTab from "./modules/switchTab";
import './normalize.css';
import './style.css';

const defaultTab = 'home';

function setEventListeners()
{
	const mainCB = e =>
	{
		// const parent = e.target.parentElement;

		switchTab(e);

		// for(const child of parent.children)
		// {
		// 	child.classList.remove('curTab');
		// }

		// e.target.classList.add('curTab');
	}

	const keyCheck = e =>
	{
		if(e.code === 'Space' || e.code === 'Enter')
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
	switchTab(defaultTab);
	setEventListeners();
}

initialize();
