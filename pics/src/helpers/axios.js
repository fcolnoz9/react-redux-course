import axios from 'axios';

const searchImages = async (term) => {
	const response = await axios.get(process.env.REACT_APP_URL_SEARCH_PHOTOS, {
		headers: {
			Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`,
		},
		params: {
			query: term,
		},
	});
	return response.data.results;
};

export default searchImages;
