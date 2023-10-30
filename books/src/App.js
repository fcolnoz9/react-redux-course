import {useState, useEffect} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import {getHttpServiceWithAxios, buildServiceAxiosConfig, getHttpServiceWithAxiosGetMethod} from './service/axios.service';
import './index.css';

function App() {

	const url = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/books`

	const [books, setBooks] = useState([]);

	const fetchBooks = async () => {
		const response = await getHttpServiceWithAxiosGetMethod(url);
		setBooks(response.data);
		console.log(' fetchBooks');
	}

	useEffect(() => {
		fetchBooks();
	},[]);

	const deleteBookById = async (id) => {
		const axiosConfig = buildServiceAxiosConfig({
			url: `${url}/${id}`,
			body: {},
			method: 'DELETE'
		});

		await getHttpServiceWithAxios(axiosConfig);
		const updatedBooks = books.filter((book)=> book.id !== id);
		setBooks(updatedBooks);
	}

	const editBookTitleById = async (id, newTitle) => {

		const axiosConfig = buildServiceAxiosConfig({
			url: `${url}/${id}`,
			body: {title: newTitle},
			method: 'PUT'
		});

		const response = await getHttpServiceWithAxios(axiosConfig);

		const updatedBooks = books.map((book) => {
			return (book.id === id) ? {...book, ...response.data} : book;
		});
		setBooks(updatedBooks);
	};

	const createBook = async (title) => {
		const newBook = {
			title,
			id: crypto.randomUUID()
		};

		const axiosConfig = buildServiceAxiosConfig({
			url,
			body: newBook,
			method: 'POST'
		});
		const response = await getHttpServiceWithAxios(axiosConfig);

		const updatedBooks = [
			...books,
			response.data
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
