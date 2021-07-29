import switchTab from "./modules/switchTab";
import './normalize.css';
import './style.css';

const defaultTab = 'home';

function setEventListeners()
{
	const mainCB = e =>
	{
		const tabName = e.target.textContent.toLowerCase();
		switchTab(tabName);
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
	switchTab(defaultTab);
	setEventListeners();
}

initialize();
