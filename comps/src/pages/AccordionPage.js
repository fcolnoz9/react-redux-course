import Accordion from '../components/Accordion';

function AccordionPage() {
	const items = [
		{
			id: 'asdasdasda',
			label: 'Can I use React on a project?',
			content:
				'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
		},
		{
			id: 'qweqweqwe',
			label: 'Can I use Javascript on a project?',
			content:
				'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
		},
		{
			id: 'qweqweqwe1231',
			label: 'Can I use CSS on a project?',
			content:
				'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
		},
	];

	return <Accordion items={items} />;
}

export default  AccordionPage
