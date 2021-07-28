import switchTab from "./modules/switchTab";
import './normalize.css';
import './style.css';

const defaultTab = 'home';

function setEventListeners()
{
	const callBackFn = (e) =>
	{
		const tabName = e.target.textContent.toLowerCase();
		const parent = e.target.parentElement;

		switchTab(tabName);

		for(const child of parent.children)
		{
			child.classList.remove('curTab');
		}

		e.target.classList.add('curTab');
	}

	const navBtns = document.querySelectorAll('#headerNav li');
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
