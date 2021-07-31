import component from "./component";

const strikethrough = str => component('del', {}, [ str ]);

const whoAreWeComponent = () =>
{
	const mainComponent = component('section');

	const heading = component('h2', {
		class: [
			'heading'
		]
	}, [
		'Who are we?'
	]);

	const explanation = component('p', {}, [
		'We are a friendly restaurant who want nothing but ',
		strikethrough( 'your wallet' ),
		' for you to be happy! We always make sure to give our customers the best food!',
		' We are known for serving the best special menu items.',
		' Our customers are always happy with our staff because of our ',
		strikethrough( 'bad' ),
		' great customer service. We have been open for a long time,',
		' and so we know the best ways to keep our customers happy!',
	])

	mainComponent.append( heading, explanation );
	return mainComponent;
}

/**
 * We are a friendly restaurant who want nothing but for you to be happy! We always make sure to give our customers the best food! We are known for serving the best special menu items. Our customers are always happy with our staff because of our great customer service. We have been open for a long time, and so we know the best ways to keep our customers happy!
 * 
 * 
 * 
 * 
 */



export default (() =>
{
	const tabTitle = component('h1', {
		class: [ 'tabTitle' ],
	}, [
		'About',
	]);

	const whoAreWe = whoAreWeComponent();

	return [
		tabTitle,
		whoAreWe,
	];
})()
