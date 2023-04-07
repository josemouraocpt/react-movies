import { useParams } from "react-router-dom";
import movieService from "../services/movieService";
import { useEffect, useState } from "react";
import { BsWallet2, BsGraphUpArrow, BsHourglassSplit, BsFillFileEarmarkTextFill } from 'react-icons/bs';

interface Movie{
	title: string,
	vote_average: number,
	id: number,
	poster_path: string,
	tagline: string,
	budget: number,
	revenue: number,
	runtime: number,
	overview: string
};


const Movie = () => {
	const movieImage = import.meta.env.VITE_API_IMAGE;
	const [movie, setMovie] = useState<Movie>();
	const movieId = useParams();

	const { getMovieById } = movieService;

	const getMovie = async() => {
		const data = await getMovieById(Number(movieId.id));
		setMovie(data)
	};

	useEffect(() => {
		getMovie()
	}, []);

	setTimeout(() => {
		console.log(movie)
	}, 5000)

		return (
				<div>
					{movie && (
							<div>
								<img src={`${movieImage}${movie.poster_path}`} alt={movie.title} className="max-h-[38rem] max-w-fit mx-auto my-9"/>
								<div className="m-auto max-w-fit">
										<h2 className="text-center text-3xl font-bold my-2">{movie.title}</h2>
										<p className="text-center my-2">&#11088; {movie.vote_average.toPrecision(2)}</p>
										<h4 className="text-center my-2">{movie.tagline}</h4>
									<div >
										<h3 className="text-xl font-bold my-2"><BsWallet2 className="text-purple-950 inline"/> Orçamento:</h3>
										<p>${movie.budget}</p>
										<h3 className="text-xl font-bold my-2"><BsGraphUpArrow className="text-purple-950 inline"/> Receita:</h3>
										<p>${movie.revenue}</p>
										<h3 className="text-xl font-bold my-2"><BsHourglassSplit className="text-purple-950 inline"/>Duração:</h3>
										<p>{movie.runtime} minutes</p>
										<h3 className="text-xl font-bold my-2"><BsFillFileEarmarkTextFill className="text-purple-950 inline"/>Descrição:</h3>
										<p className="max-w-xl pb-5">{movie.overview}</p>
									</div>
								</div>
							</div>
					)}
				
				</div>
		)
}

export default Movie