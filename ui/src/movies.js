import React, { useEffect, useState } from 'react';

export const DisplayMovies = () => {
	const [movieData, setMovieData] = useState([]);
	useEffect(() => {
		fetch('http://localhost:3001/movies')
			.then((res) => res.json())
			.then((data) => setMovieData(data));
	}, []);

	const display = movieData.map((movie) => (
		<ul>
			<li>{movie.title}</li>
		</ul>
	));
	console.log('movieData: ', movieData);

	return display;
};
