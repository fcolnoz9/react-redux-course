import {useState} from 'react';

function SearchBar({onSubmit}) {

	const [term, setTerm] = useState('');
	const handleFormSubmit = (event) => {
		event.preventDefault();
		onSubmit(term);
	};

	const handleChange = (event) => {
		setTerm(event.target.value);
	};

	return (
		<div>
			<form onSubmit={handleFormSubmit}>
				<input className="input is-primary is-focused" type="text" value={term} onChange={handleChange}/>
			</form>
		</div>
	);
}

export default SearchBar;
