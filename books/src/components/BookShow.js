import {useState} from 'react';
import BookEdit from './BookEdit';
import useBookContext from '../hooks/use-book-context';

function BookShow({book}) {
	const {	deleteBookById } = useBookContext();

	const[showEdit, setShowEdit] = useState(false);
	const handleDeleteClick = () => {
		deleteBookById(book.id);
	}

	const handleEditClick = () => {
	  setShowEdit(!showEdit);
	}

	const handleSubmit = ()=>{
		setShowEdit(false);
	}

	let content = (showEdit)? <BookEdit onSubmit={handleSubmit} book={book}  />:<h3>{book.title}</h3>

	return (
		<div className="book-show" key={book.id}>


			<div>
				<figure>
					<img src="/book.png" alt={`book title ${book.title}`}/>
				</figure>
			</div>


			{content}
			<div>
				Id Book: {book.id}
			</div>
			<div className="actions">
				<button className="edit" onClick={handleEditClick}>Edit</button>
				<button className="delete" onClick={handleDeleteClick}>Delete</button>
			</div>
		</div>
	);
}

export default BookShow;
