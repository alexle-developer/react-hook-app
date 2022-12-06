import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=36f4c3cb
// append apiKey to all API request
// apikey=36f4c3cb

const API_BASE_URL = 'http://www.omdbapi.com?apikey=36f4c3cb';

// export interface Movie {
// 	Title: string;
// 	Year: string;
// 	imdbID: string;
// 	Type: string;
// 	Poster: string;
// }

const movie1 = {
	'Title': 'Spiderman unlimited the movie',
	'Year': '2023',
	'imdbID': 'tt18969216',
	'Type': 'movie',
	'Poster': 'N/A',
};

const App = () => {
	const [movies, setMovies] = useState([]);

	const searchMovies = async (title: string) => {
		const response = await fetch(`${API_BASE_URL}&s=${title}`);
		const data = await response.json();
		setMovies(data.Search);
	};
	useEffect(() => {
		searchMovies('Spiderman');
	}, []);
	return (
		<>
			<div className='app'>
				<h1>MovieLand</h1>
				<div className='search'>
					<input type='text' placeholder='Search for movies' value='Superman' onChange={() => {}} />
					<img src={SearchIcon} alt='search' onClick={() => {}} />
				</div>
				{movies?.length > 0 ? (
					<div className='container'>
						{movies.map(movie => (
							<MovieCard movie1={movie}></MovieCard>
						))}
					</div>
				) : (
					<div>
						<h2>No Movies Found</h2>
					</div>
				)}
			</div>
		</>
	);
};

export default App;
