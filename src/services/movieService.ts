const moviesURL = import.meta.env.VITE_API_MOVIES;
const movieURL = import.meta.env.VITE_API_MOVIE;
const movieQuery = import.meta.env.VITE_API_SEARCH;
const apiKEY = import.meta.env.VITE_API_KEY;

const getTopRatedMovies = async() => {
	const res = await fetch(`${moviesURL}${apiKEY}`);
	const data = await res.json();
	return data.results;
};

const getMovieById = async(id: number) => {
	const res = await fetch(`${movieURL}${id}?${apiKEY}`);
	const data = await res.json();
	return data;
};

const getMovieByName = async(query: string) => {
	const res = await fetch(`${movieQuery}?${apiKEY}&query=${query}`);
	const data = await res.json();
	return data.results;
};

const movieService = {
	getTopRatedMovies,
	getMovieById,
	getMovieByName
};

export default movieService;