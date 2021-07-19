import component from "./component";

function chooseRestaurantComponent()
{
	function testimoniesMaker(testimonies)
	{
		const testimonyContainer = component('div', {
			id: 'testimonies',
		});

		for(const {quote, customer} of testimonies)
		{
			const testimonyBox = component('div', {
				class: [
					'testimonial',
					'box',
				]
			});

			const quoteEl = component('blockquote', {}, quote);
			const customerEl = component('span', {
				class: [
					'name'
				]
			}, customer);

			testimonyBox.append(quoteEl, customerEl);
			testimonyContainer.append(testimonyBox);
		}

		return testimonyContainer;
	}

	const h5El = component('h5', {}, 'Why choose Restaurant? Because...');
	const listEl = component('ul', {}, bulletMaker([
			'We have a wide selection of fooooooods!',
			[
				'Our staff is kind and ready to serve you ',
				component('b', {} ,'24/7'),
				' !',
			],
		])
	);

	const spanEl = component('span', {}, ['Not convinced? Hear from our other "customers"!']);
	const testimoniesDiv = testimoniesMaker([
		{
			quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, voluptates.',
			customer: 'Julius Caesar',
		},
		{
			quote: 'Very good food! 10/10, will eat at again!',
			customer: 'Noone',
		},
		{
			quote: 'Do I get paid for this?',
			customer: 'some guy we told we\'d pay',
		},
	]);

	const chooseRestaurantEl = component('div', {
		class: [
			'box'
		],
		id: 'chooseRestaurant',
	}, [
		h5El, listEl, spanEl, testimoniesDiv
	])

	return chooseRestaurantEl;
}

function locationComponent()
{
	const h5El = component('h5', {}, [
		'Find us at:' 
	]);

	const spanEl = component('span', {}, [
		'456 Dark Alley, ShadyVille, Earth'
	]);

	const locationEl = component('div', {
		class: [
			'box',
		],
		id: 'location',
	}, [
		h5El,
		spanEl,
	]);

	return locationEl;
}

function scheduleComponent()
{
	const h5El = component('h5', {}, [
		'Working Hours',
	]);

	const listEl = component('ul', {}, bulletMaker([
		'Monday, Wednesday, Friday: 6AM - 6PM',
		'Tuesday, Thursday: 7AM - 5PM',
		'Weekends: Sorry, no working hours!',
	]))

	const scheduleEl = component('div', {
		class: [
			'box',
		],
		id: 'schedule',
	}, [
		h5El,
		listEl,
	])

	return scheduleEl;
}

function bulletMaker(bullets)
{
	return bullets.map((bullet) =>
	{
		const liEl = component('li');
		const liContent = Array.isArray(bullet) ? bullet : [bullet];

		liEl.append(...liContent);
		return liEl;
	});
}

export default (() =>
{
	const welcomeEl = component('h1', {
		class: [
			'welcome'
		],
	}, [
		'Welcome to Restaurant!'
	]);

	const chooseRestaurantEl = chooseRestaurantComponent();
	const locationEl = locationComponent();
	const scheduleEl = scheduleComponent();

	return () => {
		return [
			welcomeEl,
			chooseRestaurantEl,
			locationEl,
			scheduleEl,
		]
	}
})()