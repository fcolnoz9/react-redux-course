import {useState} from 'react';
import useBookContext from '../hooks/use-book-context';

function BookCreate() {
	const {createBook} = useBookContext(); //call Context

	const [title, setTitle] = useState(''); //input value state
	const handleOnchange = (event) => {
		const titleBook = event.target.value;
		setTitle(titleBook);
	};

	const handleOnSubmit = (event) => {
		event.preventDefault();
		createBook(title);
		setTitle('');
	};


	return (
		<div className="book-create">
			<h3>Add a Book</h3>
			<form onSubmit={handleOnSubmit}>
				<label>Title</label>
				<input
					className="input"
					value={title}
					alt={'Title of book'}
					onChange={handleOnchange}
					placeholder="Type book title"
				/>
				<button className="button">Create</button>
			</form>
		</div>
	);

}

export default BookCreate;
