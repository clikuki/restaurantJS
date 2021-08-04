import component from './component';

const modal = (() =>
{
	const rootElem = document.querySelector(':root');
	const mainElem = document.querySelector('main');
	
	const modalBox = component('div', {
		id: 'modal',
	}, [
		'Hi, Im a modal!'
	]);

	const modalBg = component('div', {
		id: 'modalBg',
		class: [
			'invis'
		]
	}, [
		modalBox
	]);

	const classSwitch = operation => modalBg.classList[operation]('invis');
	const scrollSwitch = operation => mainElem.classList[operation]('stopScroll');

	rootElem.append(modalBg);

	const modalFunc = operation =>
	{
		classSwitch(operation);
		if(operation === 'add') scrollSwitch('remove');
		else scrollSwitch('add')
	}

	return {
		hide: modalFunc.bind(null, 'add'),
		show: modalFunc.bind(null, 'remove'),
	}
})()

export default modal;