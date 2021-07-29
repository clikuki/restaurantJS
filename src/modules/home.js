import component from "./component";
import bulletMaker from "./bulletMaker";

function chooseRestaurantComponent()
{
	const testimonyMaker = (testimonies) =>
	{
		const testimonyContainer = component('div', { id: 'testimonyContainer' });

		for(const {quote, name} of testimonies)
		{
			const testimonyBox = component('div', {
				class: [ 'testimony' ]
			});

			const quoteEl = component('blockquote', {
				class: [ 'quote' ]
			}, quote);
			const customerEl = component('span', {
				class: [ 'name' ]
			}, name);

			testimonyBox.append(quoteEl, customerEl);
			testimonyContainer.append(testimonyBox);
		}

		return testimonyContainer;
	}

	const mainComponent = component('section')

	const heading = component('h2', {
		class: [ 'heading' ]
	}, 'Why choose Restaurant? Because...');
	const reasonsList = component('ul', {}, bulletMaker([
			'We have a wide selection of fooooooods!',
			[
				'Our staff is kind and ready to serve you ',
				component('b', {} ,'24/7'),
				' !',
			],
		])
	);

	const unconvincedSpan = component('span', {}, ['Not convinced? Hear from our other "customers"!']);
	const testimoniesDiv = testimonyMaker([
		{
			quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, voluptates.',
			name: 'Julius Caesar',
		},
		{
			quote: 'Very good food! 10/10, will eat at again!',
			name: 'Noone',
		},
		{
			quote: 'Do I get paid for this?',
			name: 'some guy we told we\'d pay',
		},
	]);

	mainComponent.append(
		heading, reasonsList, unconvincedSpan, testimoniesDiv
	);
	return mainComponent;
}

function locationComponent()
{
	const mainComponent = component('section');

	const heading = component('h2', {
		class: [ 'heading' ]
	}, [
		'Find us at' 
	]);

	const address = component('span', {}, [
		'You can find us at ', 
		component('b', {}, [ '456 Dark Alley, ShadyVille, Earth' ])
	]);

	mainComponent.append(heading, address);
	return mainComponent;
}

function scheduleComponent()
{
	const mainComponent = component('section')

	const heading = component('h2', {
		class: [ 'heading' ]
	}, [
		'Working Hours',
	]);

	const schedule = component('ul', {}, bulletMaker([
		'Monday, Wednesday, Friday: 6AM - 6PM',
		'Tuesday, Thursday: 7AM - 5PM',
		'Weekends: Sorry, no working hours!',
	]))

	mainComponent.append(heading, schedule);
	return mainComponent;
}

export default (() =>
{
	const greeting = component('h1', {
		class: [ 'tabTitle' ],
	}, [
		'Welcome to Restaurant!'
	]);

	const chooseRestaurantEl = chooseRestaurantComponent();
	const locationEl = locationComponent();
	const scheduleEl = scheduleComponent();

	return [
		greeting,
		chooseRestaurantEl,
		locationEl,
		scheduleEl,
	]
})()
