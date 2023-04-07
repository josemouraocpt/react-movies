import { useState, useEffect } from "react"
import movieService from "../services/movieService";
import Poster from "../components/Poster";

interface Movies{
	id: number,
	title: string,
	vote_average: number,
	poster_path: string
};

const Home = () => {
	const [bestMovies, setBestMovies] = useState(Array<Movies>)
	const {getTopRatedMovies} = movieService;

	const getMovies = async() => {
		const data = await getTopRatedMovies();
		setBestMovies(data);
	}; 

	useEffect(() => {
		getMovies();
	}, []);

		return (
				<div className="p-5">
					<h1 className="text-3xl font-bold text-center">Best Movies</h1>
					<div className="flex flex-wrap justify-around">
						{bestMovies && bestMovies.map((movie: Movies) => (
							<div key={movie.id} className="bg-violet-800 p-2 my-7">
								<Poster id={movie.id} title={movie.title} rate={movie.vote_average} poster={movie.poster_path}/>
							</div>
						))}
					</div>
				</div>
		)
}

export default Home