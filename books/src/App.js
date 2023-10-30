import {useState} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import './index.css';

function App() {

	const [books, setBooks] = useState([]);

	const deleteBookById = (id) => {
		const updatedBooks = books.filter((book)=> book.id !== id);
		setBooks(updatedBooks);
	}

	const editBookTitleById = (id, newTitle) => {
		const updatedBooks = books.map((book) => {
			return (book.id === id) ? {...book, title: newTitle} : book;
		});
		setBooks(updatedBooks);
	};

	const createBook = (title) => {
		const newBook = {
			title,
			id: crypto.randomUUID()
		};

		const updatedBooks = [
			...books,
			newBook
		];
		setBooks(updatedBooks);
	};
	return (
		<div className="app">
			<h1>Reading List</h1>
			<BookList books={books} onDelete={deleteBookById} onEdit={editBookTitleById}/>
			<BookCreate onCreate={createBook}/>
		</div>
	);
}

export default App;
