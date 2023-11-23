import {useState} from 'react';
import Dropdown from '../components/Dropdown';

function DropdownPage() {


	const [selection, setSelection] = useState(null);
	const handleSelect = (option) => {
		setSelection(option);
	};

	const options = [
		{label: 'Color - Red', value: 'red'},
		{label: 'Color - Blue', value: 'blue'},
		{label: 'Color - White', value: 'white'},
	];

	return (
		<div className="flex">
			<Dropdown options={options} value={selection} onChange={handleSelect}/>
		</div>);
}

export default DropdownPage;
