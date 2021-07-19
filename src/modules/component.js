export default function(tag, options = {}, ...children)
{
	const element = document.createElement(tag);

	for(const [key, value] of Object.entries(options))
	{
		switch(key)
		{
			case 'style':
				for(const [style, value] of Object.entries(options.style))
				{
					element.style[style] = value;
				}
				break;

			case 'class':
				element.classList.add(...value);
				break;

			default:
				element[key] = value;
				break;
		}
	}

	if(children.length > 0)
	{
		element.append(...children);
	}

	return element;
}