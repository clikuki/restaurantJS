import component from './component';

const modal = (() =>
{
	const bodyElem = document.querySelector('body');
	const mainElem = document.querySelector('main');

	const modalState = operation =>
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

	const fillModal = nodes =>
	{
		modalContent.textContent = '';
		modalContent.append(...nodes);
	}

	const modalContent = component('div');

	const closeModal = () => modalState('add');
	const modalCloseBtn = component('button', {
		id: 'modalCloseBtn',
		onclick: closeModal,
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

	bodyElem.append(modalBg);

	return {
		show: nodes =>
			{
				fillModal(nodes);
				modalState('remove');
			},
		hide: closeModal,
	}
})()

export default modal;