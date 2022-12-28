import { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
import './App.css';

// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=36f4c3cb
// append apiKey to all API request
// apikey=36f4c3cb

const API_BASE_URL = 'http://www.omdbapi.com?apikey=36f4c3cb';

const App = () => {
	// default to an empty array
	const [movies, setMovies] = useState([]);
	// default to empty string
	const [searchTerm, setSearchTerm] = useState('');

	const searchMovies = async (title: string) => {
		const response = await fetch(`${API_BASE_URL}&s=${title}`);
		const data = await response.json();
		// using console.log to view the response
		// Search is the array that contains the movies
		// totalResults is the total of the movies returned
		// populate movies with setMovies()
		setMovies(data.Search);
	};

	// useEffect run on each update
	// adding the dependency array [searchTerm]
	// to only re-run the effect is searchTerm changes
	useEffect(() => {
		searchMovies(searchTerm);
	}, [searchTerm]);

	return (
		<>
			<div className='app'>
				<h1>MovieLand</h1>
				<div className='search'>
					<input
						type='text'
						placeholder='Search for movies'
						value={searchTerm}
						onChange={e => setSearchTerm(e.target.value)}
					/>
					<img src={SearchIcon} alt='search' onClick={() => searchMovies(searchTerm)} />
				</div>
				{movies?.length > 0 ? (
					<div className='container'>
						{movies.map(movie => (
							<MovieCard movie={movie}></MovieCard>
						))}
					</div>
				) : (
					<div className='empty'>
						<h2>No Movies Found</h2>
					</div>
				)}
			</div>
		</>
	);
};

export default App;
