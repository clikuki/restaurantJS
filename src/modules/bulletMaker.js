import component from "./component";

export default function(bullets)
{
	return bullets.map((bullet) =>
	{
		const liEl = component('li');
		const liContent = Array.isArray(bullet) ? bullet : [bullet];

		liEl.append(...liContent);
		return liEl;
	});
}
