import { useEffect, useState } from "react";
import movieService from "../services/movieService";
import { useSearchParams } from "react-router-dom";
import Poster from "../components/Poster";

interface Movies{
	id: number,
	title: string,
	vote_average: number,
	poster_path: string
};

const Search = () => {
	const [movies, setMovies] = useState(Array<Movies>);
	const [searchParams] = useSearchParams();
	const query = searchParams.get("q");
	const { getMovieByName } = movieService;

	const getMovie = async() => {
		const formatedQuery = query!.replaceAll(" ", "-");
		const data = await getMovieByName((formatedQuery));
		setMovies(data);
	};

	useEffect(() => {
		getMovie();
	}, []);

	useEffect(() => {
		getMovie();
	}, [query])

		return (
				<div className="p-5">
					<h1 className="text-3xl font-bold text-center">Results for: <span className="text-violet-950">{query}</span></h1>
					{movies ? (
						<div className="flex flex-wrap justify-around">
							{movies.map((movie) => (
								<div key={movie.id} className="bg-violet-800 p-2 my-7">
									<Poster id={movie.id} title={movie.title} rate={movie.vote_average} poster={movie.poster_path}/>
								</div>
							))}
						</div>
					): (
						<>
							<p>Unfortunately none movies was found for <span>{query}</span></p>
						</>
					)}
				</div>
		)
}

export default Search