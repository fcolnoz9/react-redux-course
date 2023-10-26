import searchImages from './helpers/axios';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import {useState} from 'react';
import 'bulma/css/bulma.css';

function App() {

	const [images, setImages] = useState([]);
	const handleSubmit = async (term) => {
		const response = await searchImages(term);
		setImages(response);
	};
	return (
		<div>
			<section className="hero is-primary">
				<div className="hero-body">
					<p className="title">
						Search App Images
					</p>
					<SearchBar onSubmit={handleSubmit}/>
				</div>
			</section>

			<div className="container">
				<section className="section">
					<ImageList images={images}/>
				</section>

			</div>

		</div>
	);
}

export default App;
