import component from './component';

const modal = (() =>
{
	const rootElem = document.querySelector(':root');
	const mainElem = document.querySelector('main');

	const modalFunc = operation =>
	{
		const classSwitch = (elem, operation, className) => 
		{
			elem.classList[operation](className);
		}

		classSwitch(modalBg, operation, 'invis');

		if(operation === 'add') operation = 'remove';
		else operation = 'add';

		classSwitch(mainElem, operation, 'stopScroll')
	}

	const modalContent = component('div', {}, [
		'Hi, Im a modal!'
	]);

	const modalCloseBtn = component('button', {
		id: 'modalCloseBtn',
		onclick: modalFunc.bind(null, 'add'),
	})
	
	const modalBox = component('div', {
		id: 'modal',
	}, [
		modalCloseBtn,
		modalContent,
	]);

	const modalBg = component('div', {
		id: 'modalBg',
		class: [
			'invis'
		]
	}, [
		modalBox
	]);

	rootElem.append(modalBg);

	return modalFunc.bind(null, 'remove');
})()

export default modal;