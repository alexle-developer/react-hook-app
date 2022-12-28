import React from 'react';

// using object destructuring instead of props
// so we will not have to type props.movie1.x
// Object Destructuring: {object}
const MovieCard = ({ movie }: any) => {
	return (
		<div className='movie'>
			<div>
				<p>{movie.Year}</p>
			</div>
			<div>
				<img
					src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}
					alt={movie.Title}
				/>
			</div>
			<div>
				<span>{movie.Type}</span>
				<h3>{movie.Title}</h3>
			</div>
		</div>
	);
};

export default MovieCard;
