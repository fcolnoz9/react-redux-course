import {useState} from 'react';
import useBookContext from '../hooks/use-book-context';

function BookEdit({book, onSubmit}) {

	const { editBookTitleById } = useBookContext();

	const [title, setTitle] =  useState(book.title);

	const handleOnchange = (event) => {
		const newTitle = event.target.value;
		setTitle(newTitle);
	};
	const handleOnSubmit = (event) => {
	  event.preventDefault();
	  onSubmit();
	  editBookTitleById(book.id, title);
	}

	return (
		<form onSubmit={handleOnSubmit} className="book-edit">
			<label>Title</label>
			<input className="input" value={title} alt={'Title of book'} onChange={handleOnchange}/>
			<button className="button is-primary">Save</button>
		</form>
	);
}

export default BookEdit;
