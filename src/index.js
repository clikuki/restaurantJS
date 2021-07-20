import switchTab from "./modules/switchTab";
import './style.css';

const mainEl = document.querySelector('main');

function setEventListeners()
{
	function callBackFn(e) 
	{
		const tabName = e.target.textContent.toLowerCase();
	
		switchTab(tabName, mainEl)
	}

	const navBtns = document.querySelectorAll('#headerNav button');
	for(const navBtn of navBtns)
	{
		navBtn.addEventListener('click', callBackFn);
	}
}

function initialize()
{
	switchTab('home', mainEl);
	setEventListeners();
}

initialize();
