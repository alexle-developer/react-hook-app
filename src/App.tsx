import { useEffect } from 'react';
import './App.css';

// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=36f4c3cb
// append apiKey to all API request
// apikey=36f4c3cb

const API_BASE_URL = 'http://www.omdbapi.com?apikey=36f4c3cb';

const App = () => {
	const searchMovies = async (title: string) => {
		const response = await fetch(`${API_BASE_URL}&s=${title}`);
		const data = await response.json();
		console.log(data.Search);
	};
	useEffect(() => {
		searchMovies('Spiderman');
	}, []);
	return (
		<div className='app'>
			<h1>MovieLand</h1>
			<div className='search'>
				<input type='text' placeholder='Search for movies' value='Superman' onChange={() => {}} />
			</div>
		</div>
	);
};

export default App;
