import homePage from "./modules/homePage";
import './style.css';

const mainEl = document.querySelector('main');

function initialize()
{
	mainEl.append(...homePage());
}

initialize();
