import switchTab from "./modules/switchTab";
import './normalize.css';
import './style.css';

const defaultTab = 'home';

function setEventListeners()
{
	function callBackFn(e) 
	{
		const tabName = e.target.textContent.toLowerCase();
	
		switchTab(tabName)
	}

	const navBtns = document.querySelectorAll('#headerNav button');
	for(const navBtn of navBtns)
	{
		navBtn.addEventListener('click', callBackFn);
	}
}

function initialize()
{
	switchTab(defaultTab);
	setEventListeners();
}

initialize();
