export default function(tag, options = {}, children)
{
	const element = document.createElement(tag);

	for(const [key, value] of Object.entries(options))
	{
		if(key === 'style')
		{
			for(const [key, value] of Object.entries(options.style))
			{
				element.style[key] = value;
			}
		}
		else
		{
			element[key] = value;
		}
	}

	if(!Array.isArray(children))
	{
		if(children)
		{
			element.append(children);
		}
	}
	else if(children.length > 0)
	{
		element.append(...children);
	}

	return element;
}