import {useState} from 'react';
import BookEdit from './BookEdit';

function BookShow({book,onDelete, onEdit}) {

	const[showEdit, setShowEdit] = useState(false);
	const handleDeleteClick = () => {
		onDelete(book.id);
	}

	const handleEditClick = () => {
	  setShowEdit(!showEdit);
	}

	const handleSubmit = (id, newTitle)=>{
		setShowEdit(false);
		onEdit(id, newTitle);
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
