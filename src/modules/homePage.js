import component from "./component";
export default function()
{
	const mainEl = document.querySelector('main');
	const spanEl = component('span', {}, 'Hello World!');

	mainEl.append(spanEl);
}